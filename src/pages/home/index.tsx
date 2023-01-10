import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { Container, Hero, ImageContainer } from './styles'

import appPreview from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size={'4xl'}>Agendamento descomplicado</Heading>
        <Text size={'xl'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <ImageContainer>
        <Image
          src={appPreview}
          alt="Imagem de uma pré visualização do app"
          height={402}
          quality={100}
          priority
        />
      </ImageContainer>
    </Container>
  )
}
