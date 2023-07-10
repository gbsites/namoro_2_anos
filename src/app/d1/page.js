'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function D1() {
    const [ inputs, setInputs ] = useState( "none" )
    const [ nextBtn, setNextBtn ] = useState( "none" )
    const [ nameInput, setNameInput ] = useState( '' )
    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setInputs( "block" ) }
            texts={ [
                'Esse é o primeiro desafio, então vou pegar leve com você...',
                'Apenas digite o meu nome completo no campo abaixo e clique em confirmar',
            ] }
        />
    )

    useEffect( () => {
        localStorage.setItem( "stage", "1" )
    } )

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
                                'ACHO BOM, SE ERRASSE MEU NOME COMPLETO, EU IA FICAR BRAVO! >:(',
                                'Enfim...',
                                'PARABÉNS AMORECO, VOCÊ PASSOU NO PRIMEIRO DESAFIO!',
                                'Só clicar no botão para seguir pro segundo desafio :)'
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
                                'a',
                                'Não acredito que errou meu nome :,(',
                                'Mas vai, tenta de novo, uma hora você acerta... :(',
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