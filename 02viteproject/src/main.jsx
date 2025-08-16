import React from 'react'
import { createRoot } from 'react-dom/client'

const reactElement = React.createElement(
  'a',
  {href:"https://www.taylorswift.com/", target:'_blank'},
  'Click Here to Stream The Life of a Showgirl'
)

createRoot(document.getElementById('root')).render(reactElement)
