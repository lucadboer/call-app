import { Avatar, Heading, Text } from '@ignite-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '../../../lib/prisma'
import { getWeekDays } from '../../../utils/get-day-week'
import { ScheduleForm } from './ScheduleForm'
import { Container, UserHeader } from './styles'

interface UserProps {
  user: {
    avatarUrl: string
    name: string
    bio: string
  }
}

export default function scheduleUser({ user }: UserProps) {
  return (
    <Container>
      <UserHeader>
        <Avatar src={user.avatarUrl} />
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>
      </UserHeader>

      <ScheduleForm />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        avatarUrl: user.avatar_url,
        name: user.name,
        bio: user.bio,
      },
    },
    revalidate: 60 * 30, // 30 minutos
  }
}
