'use client'

import Message from "@/components/Message"
import { useEffect, useState } from "react"

import styles from "./d3.module.css"
import Link from "next/link"

export default function D2() {
    const [ nextBtn, setNextBtn ] = useState( "none" )
    const [ buttonsDisplay, setButtonsDisplay ] = useState( "none" )

    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setButtonsDisplay( "flex" ) }
            texts={ [
                'Olha só, já está no terceiro desafioooo moo',
                'Duas palavras para você...',
                'Para',
                'Béns',
                'Enfim...',
                'Nesse terceiro desafio, vou testar sua paciência (ou sorte)',
                'Como você gosta bastante de Naruto...',
                'VAI TER QUE ACHAR O VERDADEIRO NARUTO',
                'KAGE BUNSHIN NO JUTSU',
            ] }
        />
    )

    useEffect( () => {
        localStorage.setItem( "stage", "3" )
        sessionStorage.setItem( "randomNumber", Math.floor( Math.random() * 72 ) )
    }, [] )

    function testButton( target_btn, i ) {
        const randomNumber = sessionStorage.getItem( "randomNumber" )
        console.log( randomNumber )
        console.log( i )

        if ( i === Number( randomNumber ) ) {
            target_btn.style.backgroundColor = "#f2e9b4"

            setTimeout( () => {
                setMessage(
                    <Message
                        key={ 1 }
                        handleFinish={ () => {
                            setButtonsDisplay( "none" )
                            setNextBtn( "block" )
                        } }
                        texts={ [
                            'PARABÉNS, VOCÊ CONSEGUIIIIIIIUUUUU',
                            'Perdeu muito tempo aqui? KKKKKKK',
                            'Se achou fácil, calma que vai piorar, confia no pai',
                            'Pode ir para o quarto desafioooo',
                        ] }
                    />
                )

                setButtonsDisplay( "none" )
            }, 1000 )

        } else {
            target_btn.style.display = 'none'

            setMessage(
                <Message
                    key={ Math.random() }
                    handleFinish={ () => console.log( "finish" ) }
                    texts={ [
                        'Puff...',
                        'Naruto errado'
                    ] }
                />
            )
        }
    }

    return (
        <main className="main">
            { message }

            <div style={ { display: buttonsDisplay } } className={ styles.buttons }>
                {
                    Array( 72 ).fill( 'Naruto' ).map( ( text, index ) => (
                        <div
                            key={ "btn" + index }
                            className={ styles.button }>
                            <button
                                style={ { animationDelay: `${ index * 0.05 }s` } }
                                onClick={ e => testButton( e.target, index ) }>
                                { text }
                            </button>
                        </div>
                    ) )
                }
            </div>

            <Link href={ "/d4" }><button style={ { display: nextBtn } }>Próximo</button></Link>
        </main>
    )
}