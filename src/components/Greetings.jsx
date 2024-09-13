import React from 'react'

function Greetings({lang, children}) {

  const saudacoes = {
    de: "Hallo",
    en: "Hello",
    es: "Buenos dias",
    fr: "Bonjour"
  }

  const nomes = {
    de: "Ludwig",
    en: "François",
    es: "Gabriel",
    fr: "Bruno"
  }

  const linguagem = saudacoes[lang]


  return (
    <div className='greeting'>
      {linguagem} {children}

    </div>
  )
}

export default Greetings