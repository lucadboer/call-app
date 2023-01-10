import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  width: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,

  // O sinal ">" foi usado para aplicar essa configuração do Heading && Text apenas nesse componente da Home

  [` > ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [` > ${Text}`]: {
    color: '$gray200',
    marginTop: '$6',
  },
})

export const ImageContainer = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
