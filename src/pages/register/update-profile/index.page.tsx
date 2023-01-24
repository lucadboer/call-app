import { Button, Heading, MultiStep, Text, TextArea } from '@ignite-ui/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowRight } from 'phosphor-react'

import {
  ImageContainer,
  ProfileBox,
  SetImageContainer,
  TextAreaContainer,
} from './styles'
import { Container, Header } from '../styles'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'
import { useSession } from 'next-auth/react'

const updateProfileFormSchemma = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileFormSchemma>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileFormSchemma),
  })

  const session = useSession()
  console.log(session)

  async function handleRegister(data: UpdateProfileData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>Por último, uma breve descrição e uma foto de perfil.</Text>
        <MultiStep size={4} currentStep={4} />
      </Header>
      <ProfileBox as={'form'} onSubmit={handleSubmit(handleRegister)}>
        <Text size={'sm'}>Foto de perfil</Text>
        <SetImageContainer>
          <ImageContainer>
            <Image
              src={'https://github.com/lucadboer.png'}
              width={70}
              height={70}
              alt=""
            />
          </ImageContainer>
        </SetImageContainer>
        <TextAreaContainer>
          <label>
            <Text size={'sm'}>Sobre você</Text>
          </label>
          <TextArea {...register('bio')} />
          <Text>
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </Text>
        </TextAreaContainer>
        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
