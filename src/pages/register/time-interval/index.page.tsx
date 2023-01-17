import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDays,
  IntervalItem,
  IntervalTime,
} from './style'

export default function TimeInterval() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  function handleSetTimeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as={'form'} onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          <IntervalItem>
            <IntervalDays>
              <Checkbox />
              <Text>Segunda Feira</Text>
            </IntervalDays>
            <IntervalTime>
              <TextInput size={'sm'} type="time" step={60} />
              <TextInput size={'sm'} type="time" step={60} />
            </IntervalTime>
          </IntervalItem>
          <IntervalItem>
            <IntervalDays>
              <Checkbox />
              <Text>Terça Feira</Text>
            </IntervalDays>
            <IntervalTime>
              <TextInput size={'sm'} type="time" step={60} />
              <TextInput size={'sm'} type="time" step={60} />
            </IntervalTime>
          </IntervalItem>
        </IntervalContainer>
        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
