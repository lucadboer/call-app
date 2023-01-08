import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      background: '#121214',
      borderRadius: 10,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#202024',
      borderRadius: '10px',
      border: '1px solid #505050',
    },
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
  },
})
