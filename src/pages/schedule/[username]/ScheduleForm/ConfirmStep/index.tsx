import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { Calendar, Timer } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormActions, FormConfirm, FormError, FormHeader } from './styles'

const confirmFormSchemma = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo três caracteres' }),
  email: z.string().email({ message: 'Digite um endereço de e-mail válido.' }),
  observations: z.string().nullable(),
})

type ConfirmSFormData = z.infer<typeof confirmFormSchemma>

export function ConfirmStep() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmSFormData>({
    resolver: zodResolver(confirmFormSchemma),
  })

  function handleConfirmStep(data: ConfirmSFormData) {
    console.log(data)
  }

  return (
    <FormConfirm as="form" onSubmit={handleSubmit(handleConfirmStep)}>
      <FormHeader>
        <Text>
          <Calendar />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Timer />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text>Seu nome</Text>
        <TextInput placeholder="lluca" {...register('name')} />
        {errors.name && (
          <FormError size={'sm'}>{errors.name?.message}</FormError>
        )}
      </label>

      <label>
        <Text>Endereço de e-mail</Text>
        <TextInput
          type={'email'}
          placeholder="luca.boer@outlook.com"
          {...register('email')}
        />
        {errors.name && (
          <FormError size={'sm'}>{errors.email?.message}</FormError>
        )}
      </label>

      <label>
        <Text>Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button variant={'tertiary'}>Cancelar</Button>
        <Button disabled={isSubmitting}>Confirmar</Button>
      </FormActions>
    </FormConfirm>
  )
}
