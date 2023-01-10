import { Box, Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [` > ${Heading}`]: {
    lineHeight: '$base',
    fontSize: '$2xl',
  },

  [` > ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  button: {
    display: 'flex',
    alignItems: 'center',

    '&:disabled': {
      backgroundColor: '$ignite700',
      cursor: 'not-allowed',
    },
  },
})

export const FormError = styled(Text, {
  color: '#dc2626',
})
