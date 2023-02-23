import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { Calendar, Timer } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../../../../lib/axios'
import { FormActions, FormConfirm, FormError, FormHeader } from './styles'

const confirmFormSchemma = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo três caracteres' }),
  email: z.string().email({ message: 'Digite um endereço de e-mail válido.' }),
  observations: z.string().nullable(),
})

type ConfirmSFormData = z.infer<typeof confirmFormSchemma>

interface ConfirmStepProps {
  schedulingDate: Date
  goBackCalendar: () => void
}

export function ConfirmStep({
  schedulingDate,
  goBackCalendar,
}: ConfirmStepProps) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmSFormData>({
    resolver: zodResolver(confirmFormSchemma),
  })

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')

  const { query } = useRouter()
  const username = query.username

  async function handleConfirmScheduling(data: ConfirmSFormData) {
    const { name, email, observations } = data

    try {
      await api.post(`/users/${username}/schedule`, {
        name,
        email,
        observations,
        date: schedulingDate,
      })

      goBackCalendar()
    } catch (error) {
      console.log(error)
    }
  }

  function handleCancelScheduling() {
    goBackCalendar()
  }

  return (
    <FormConfirm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <Calendar />
          {describedDate}
        </Text>
        <Text>
          <Timer />
          {describedTime}
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
        <Button onClick={handleCancelScheduling} variant={'tertiary'}>
          Cancelar
        </Button>
        <Button disabled={isSubmitting}>Confirmar</Button>
      </FormActions>
    </FormConfirm>
  )
}
