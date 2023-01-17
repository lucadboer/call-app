import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { ArrowRight, Check } from 'phosphor-react'

import { Container, Form, Header } from '../styles'
import { AuthError, ConnectBox } from './styles'

export default function ConnectCalendar() {
  // async function handleRegister(data: RegisterFormData) {}

  const router = useRouter()
  const session = useSession()

  const hasAuthError = !!router.query.error
  const isSignied = session.status === 'authenticated'

  async function handleConnectGoogleAcount() {
    await signIn('google', {
      callbackUrl: '/register/connect-calendar',
    })
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <Form>
        <ConnectBox>
          <Text>Google Calendar</Text>
          {isSignied ? (
            <Button disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button variant={'secondary'} onClick={handleConnectGoogleAcount}>
              Conectar <ArrowRight />
            </Button>
          )}
        </ConnectBox>

        {hasAuthError && (
          <AuthError>
            Falha ao se conectar com o Google. Por favor, verifique se habilitou
            as permissões do acesso ao Google Calendar.
          </AuthError>
        )}

        <Button disabled={!isSignied}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
