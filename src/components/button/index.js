import React from 'react'

//componentes feitos através de funções onde são passados"props" que são as propriedades, funcionam como parâmetros

export default function Button({title}) { 
  return (
    <button>{title}</button>
  )
}
