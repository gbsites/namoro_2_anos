'use client'

import Message from "@/components/Message"
import { useState } from "react"

export default function D1() {
    const [ inputs, setInputs ] = useState( "none" )
    const [ nameInput, setNameInput ] = useState( '' )
    const [ message, setMessage ] = useState( <Message
        key={ 0 }
        handleFinish={ handleFinish }
        texts={ [
            'Vamos começar bem fácil, ta bom?',
            'Qual é o meu nome completo?'
        ] }
    /> )

    function handleFinish() {
        setInputs( "block" )
    }

    function confirm() {
        if ( nameInput.toLowerCase() == 'edson gabriel moreira jacques' ) {
            setInputs( "none" )
            setMessage(
                <>
                    <Message
                        key={ 1 }
                        handleFinish={ () => null }
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
                <input onChange={ e => setNameInput( e.target.value ) }></input>
                <button onClick={ () => confirm() }>Confirmar</button>
            </div>
        </main>
    )
}