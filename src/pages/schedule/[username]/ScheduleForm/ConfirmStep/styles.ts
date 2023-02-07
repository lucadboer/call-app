import { Box, styled, Text, TextArea } from '@ignite-ui/react'

export const FormConfirm = styled(Box, {
  maxWidth: 582,
  margin: '$6 auto 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  [` >  ${TextArea}`]: {
    width: '100%',
    height: 120,
    resize: 'none',
  },
})

export const FormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  borderBottom: '1px solid $gray600',
  paddingBottom: '$6',

  [` > ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    svg: {
      color: '$gray200',
    },
  },
})

export const FormError = styled(Text, {
  color: '#dc2626',
})

export const FormActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginLeft: 'auto',
})
