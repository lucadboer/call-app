import { Button, Text, TextInput } from '@ignite-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'

import { Form, FormAnnotation } from './styles'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)

    await router.push(`/register?username=${data.username}`)
  }

  return (
    <>
      <Form as={'form'} onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size={'sm'}
          prefix="call.me/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size={'sm'} type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation color={'error'}>
        <Text size={'sm'}>
          {errors.username ? (
            <Text css={{ color: '#dc2626' }}>{errors.username.message}</Text>
          ) : (
            'Digite o nome de usuário desejado'
          )}
        </Text>
      </FormAnnotation>
    </>
  )
}
