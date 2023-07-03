'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useState } from "react"

export default function D1() {
    const [ inputs, setInputs ] = useState( "none" )
    const [ nextBtn, setNextBtn ] = useState( "none" )
    const [ nameInput, setNameInput ] = useState( '' )
    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setInputs( "block" ) }
            texts={ [
                'Vamos começar bem fácil, ta bom?',
                'Qual é o meu nome completo?'
            ] }
        />
    )

    function confirm() {
        if ( nameInput.toLowerCase() == 'edson gabriel moreira jacques' ) {
            setInputs( "none" )
            setMessage(
                <>
                    <Message
                        key={ 1 }
                        handleFinish={ () => setNextBtn( "block" ) }
                        texts={
                            [
                                'Se errasse essa eu ia ficar muito triste, viu?',
                                'Agora vamos continuar...',
                                'A partir daqui, as coisas vão ficar um pouco mais difíceis...'
                            ] } />
                </>
            )
        } else {
            setMessage()
            setMessage(
                <>
                    <Message
                        key={ 2 }
                        handleFinish={ () => null }
                        texts={
                            [
                                'a...',
                                '...',
                                '..',
                                'Agora você me deixou triste...'
                            ] } />
                </>
            )
        }
    }

    return (
        <main className='main'>
            { message }

            <div style={ { display: inputs } }>
                <input placeholder="Tem que ser o nome completo" onChange={ e => setNameInput( e.target.value ) } />
                <button onClick={ () => confirm() }>Confirmar</button>
            </div>

            <Link href={ 'd2' } style={ { display: nextBtn } }><button>Próximo</button></Link>
        </main>
    )
}