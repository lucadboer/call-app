import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const timeIntervalsFormSchemma = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeMinutes: z.number(),
      endTimeMinutes: z.number(),
    }),
  ),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const { intervals } = timeIntervalsFormSchemma.parse(req.body)

  Promise.all(
    intervals.map((interval) => {
      return prisma.userTimeInterval.create({
        data: {
          user_id: session.user?.id,
          week_day: interval.weekDay,
          start_time_interval: interval.startTimeMinutes,
          end_time_interval: interval.endTimeMinutes,
        },
      })
    }),
  )

  res.status(201).end()
}
