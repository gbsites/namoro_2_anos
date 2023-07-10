'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function D2() {
    const [ inputs, setInputs ] = useState( "none" )
    const [ nextBtn, setNextBtn ] = useState( "none" )
    const [ linkInput, setLinkInput ] = useState( "" )

    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setInputs( "block" ) }
            texts={ [
                'Bem vindo ao segundo desafio!',
                'Esse desafio é para ver se você lembra de como iniciei no mundo do kapopi',
                'Você deverá pegar o LINK do MV da primeira música coreana que eu aprendi a reconhecer rapidamente'
            ] }
        />
    )

    useEffect( () => {
        localStorage.setItem( "stage", "2" )
    } )

    function confirm() {
        if ( linkInput == 'https://www.youtube.com/watch?v=XA2YEHn-A8Q&pp=ygUMYWxjb2hvbCBmcmVl' || linkInput == 'https://www.youtube.com/watch?v=XA2YEHn-A8Q&ab_channel=JYPEntertainment' ) {
            setInputs( "none" )

            setMessage(
                <Message
                    key={ 1 }
                    handleFinish={ () => setNextBtn( 'block' ) }
                    texts={ [
                        'Margauritah, pinacoradah',
                        'Essa música fixou na minha cabeça de uma jeito',
                        'Só não fixou mais que voxeee (owwwnntttt)',
                        'ENFIM...',
                        'Bora para o próximo desafio?'
                    ] }
                />
            )
        } else {
            setMessage(
                <Message
                    key={ 2 }
                    handleFinish={ () => null }
                    texts={ [
                        'Pensa mozi, essa música não saiu da minha cabeça por um bom tempo'
                    ] }
                />
            )
        }
    }

    return (
        <main className="main">
            { message }

            <div style={ { display: inputs, width: '60%' } }>
                <input placeholder="Link do vídeo" onChange={ e => setLinkInput( e.target.value ) } />
                <button onClick={ () => confirm() }>Confirmar</button>
            </div>

            <Link href={ 'd3' } style={ { display: nextBtn } }><button>Próximo</button></Link>
        </main>
    )
}