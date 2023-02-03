import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
})

export const CalendarHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    color: '$gray200',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 0',
    },
  },
})

export const CalendarTitle = styled(Text, {})

export const CalendarActions = styled('div', {})

export const CalendarBody = styled('table', {})

export const CalendarDay = styled('button', {})
