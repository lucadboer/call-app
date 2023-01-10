import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowRight } from 'phosphor-react'

import { Container, Form, FormError, Header } from './styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const regiserFormSchema = z.object({
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

type RegisterFormData = z.infer<typeof regiserFormSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(regiserFormSchema),
  })

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as={'form'} onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size={'sm'}>Nome de usuário</Text>
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
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
