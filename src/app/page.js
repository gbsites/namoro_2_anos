'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [ message, setMessage ] = useState( <Message
    handleFinish={ handleFinish }
    texts={ [
      'Olá amorrr, tudo bem?',
      'Aqui estamos nós, mais um ano juntos, e eu não poderia estar mais feliz!',
      'Estes 2 anos passaram voando, nem acredito que já faz tanto tempo desde o dia na Central',
      'E talvez você esteja pensando: "Owwnt, ele fez um site pra mim com textinhos bonitinhos, que fofo!"',
      'Bom... Esse site tem algumas coisinhas fofas para você sim...',
      'MAAAASSSSS...',
      'Você vai ter que desbloquear elas KKKKKKKKKKK',
      'Para isso, preparei alguns desafios para você, e a cada desafio que você passar, uma coisinha fofa vai ser desbloqueada',
      'Então, boa sorte KKKKKKKKKK',
      'Clica no botão abaixo para começar!'
    ] }
  /> )
  const [ nextBtn, setNextBtn ] = useState( 'none' )

  function handleFinish() {
    setNextBtn( 'block' )
  }

  return (
    <main className='main'>
      { message }

      <Link href={ 'd1' }><button style={ { display: nextBtn } }>Próximo</button></Link>
    </main>
  )
}
