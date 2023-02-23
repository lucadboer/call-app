/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma'

const createSchedulingBody = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string(),
  date: z.string().datetime(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }

  const { name, email, observations, date } = createSchedulingBody.parse(
    req.body,
  )

  const schedulingDate = dayjs(date).startOf('hour')

  const isDatePast = schedulingDate.isBefore(new Date())

  if (isDatePast) {
    return res.status(400).json({
      message: 'Date is in the past',
    })
  }

  const scheduleAlreadyExist = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate(),
    },
  })

  if (scheduleAlreadyExist) {
    res.status(400).json({
      message: 'Another scheduling already exists in the same time',
    })
  }

  await prisma.scheduling.create({
    data: {
      name,
      email,
      observations,
      date,
      user_id: user.id,
    },
  })

  return res.status(201).end()
}
