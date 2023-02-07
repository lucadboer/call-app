import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { Calendar, Timer } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormActions, FormConfirm, FormHeader } from './styles'

const confirmStepFormSchemma = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string(),
})

type ConfirmStepForm = z.infer<typeof confirmStepFormSchemma>

export function ConfirmStep() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ConfirmStepForm>()

  function handleConfirmStep(data: ConfirmStepForm) {
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
      </label>

      <label>
        <Text>Endereço de e-mail</Text>
        <TextInput
          type={'email'}
          placeholder="luca.boer@outlook.com"
          {...register('email')}
        />
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
