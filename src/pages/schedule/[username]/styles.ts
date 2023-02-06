import { Heading, Text } from '@ignite-ui/react'
import { styled } from '../../../styles'

export const Container = styled('div', {
  maxWidth: 852,
  padding: '0 $4',
  margin: '$20 auto $4',
})

export const UserHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [` > ${Heading}`]: {
    marginTop: '$2',
    lineHeight: '$base',
    fontSize: '$2xl',
  },

  [` > ${Text}`]: {
    color: '$gray200',
  },
})
