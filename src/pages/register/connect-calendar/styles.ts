import { styled, Text } from '@ignite-ui/react'

export const ConnectBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4 $6',

  border: '1px solid $gray600',
  borderRadius: '$md',
})

export const AuthError = styled(Text, {
  marginTop: -12,
  color: '#dc2626',
})
