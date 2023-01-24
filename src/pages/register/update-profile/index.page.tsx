import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowRight } from 'phosphor-react'

import { ProfileBox } from './styles'
import { Container, Header } from '../styles'

const updateProfileFormSchemma = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 letras' })
    .regex(/^([a-z// ]+)$/i, {
      message: 'O nome pode ter apenas letras',
    })
    .transform((name) => name.toLowerCase()),
})

type UpdateProfileData = z.infer<typeof updateProfileFormSchemma>

export default function updateProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileFormSchemma),
  })

  async function handleRegister(data: UpdateProfileData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>Por último, uma breve descrição e uma foto de perfil.</Text>
        <MultiStep size={5} currentStep={5} />
      </Header>
      <ProfileBox as={'form'} onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size={'sm'}>Foto de perfil</Text>
          <TextInput
            prefix="call.me/"
            placeholder="seu usuário"
            {...register('username')}
          />

          {errors.username && (
            <FormError size={'sm'}>{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size={'sm'}>Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')} />
          {errors.name && (
            <FormError size={'sm'}>{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}
