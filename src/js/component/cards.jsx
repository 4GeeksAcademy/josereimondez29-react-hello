import React from 'react'
import card from './card'

const cards = () => {
    let cardsInfo = [
        {title: "Titulo1", text: "texto1texto1texto1texto1"},
        {title: "Titulo2", text: "texto1texto2texto2texto2"},
        {title: "Titulo3", text: "texto3texto3texto3texto3"},
        {title: "Titulo4", text: "texto4texto4texto4texto4"},
    ]
  return (
    <>
      {cardsInfo.map((card) => {
        return <card title={card.title} text={card.text} />
      })}
    </>
  )
}

export default cards