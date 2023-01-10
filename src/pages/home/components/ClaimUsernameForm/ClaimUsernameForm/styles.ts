import { Box, styled, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  padding: '$4',
  marginTop: '$4',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
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

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [` > ${Text}`]: {
    color: '$gray400',
  },
})
