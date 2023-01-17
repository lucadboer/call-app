import { Box, styled } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',

  button: {
    '&:disabled': {
      backgroundColor: '$ignite700',
      cursor: 'not-allowed',
    },
  },
})

export const IntervalContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDays = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const IntervalTime = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(70%)',
  },
})
