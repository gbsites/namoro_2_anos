'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [ message, setMessage ] = useState( <Message
    handleFinish={ handleFinish }
    texts={ [
      'Olá meu amor, tudo bem?',
      'Bom, eu estava muito em dúvida do que fazer para comemorar nosso aniversário de 2 anos de namoro, então resolvi fazer algo que eu sei que você vai gostar muito, um site para você, com muito amor e carinho, espero que goste :)',
      'Esse site, na verdade, tem o intuíto de te perturbar um pouquinho KKKKKKKKKKKK',
      'Preparei alguns desafios para você, e conforme você for passando, vai liberando algumas coisinhas para você, espero que goste S2',
    ] }
  /> )
  const [ nextBtn, setNextBtn ] = useState( 'none' )

  function handleFinish() {
    setNextBtn( 'block' )
  }

  function nextPage() {
    setNextBtn( 'block' )
  }

  return (
    <main className='main'>
      { message }

      <Link href={ 'd1' }><button style={ { display: nextBtn } }>Próximo</button></Link>
    </main>
  )
}
