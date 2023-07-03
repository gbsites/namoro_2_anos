'use client'

import Message from "@/components/Message"
import Link from "next/link"
import { useState } from "react"

export default function D2() {
    const [ inputs, setInputs ] = useState( "none" )
    const [ nextBtn, setNextBtn ] = useState( "none" )
    const [ linkInput, setLinkInput ] = useState( "" )

    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setInputs( "block" ) }
            texts={ [
                'Bem vindo ao segundo desafio amoreco!',
                'Esse desafio vai ser bem tranquilo, eu acho...',
                '(rufem de tambores...)',
                'Você deverá pegar o link do vídeo da primeira música coreana que eu aprendi a reconhecer rapidamente'
            ] }
        />
    )

    function confirm() {
        if ( linkInput == 'https://www.youtube.com/watch?v=XA2YEHn-A8Q&pp=ygUMYWxjb2hvbCBmcmVl' || linkInput == 'https://www.youtube.com/watch?v=XA2YEHn-A8Q&ab_channel=JYPEntertainment' ) {
            setInputs( "none" )

            setMessage(
                <Message
                    key={ 1 }
                    handleFinish={ () => setNextBtn( 'block' ) }
                    texts={ [
                        'Margauritah, pinacoradah',
                        'Te pertubei muito com essa música KKKKKKKKKK'
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