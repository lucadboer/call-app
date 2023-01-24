import { Box, styled, Text, TextArea } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$4',

  button: {
    marginTop: '$4',
  },
})

export const SetImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginTop: '$2',
})

export const ImageContainer = styled('div', {
  width: 64,
  height: 64,

  img: {
    width: '100%',
    height: '100%',
    borderRadius: '$full',
    objectFit: 'cover',
  },
})

export const TextAreaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  marginTop: '$4',

  [` >  ${Text}`]: {
    fontSize: 14,
    color: '$gray200',
  },

  [` >  ${TextArea}`]: {
    width: '100%',
    height: 120,
    resize: 'none',
  },
})
