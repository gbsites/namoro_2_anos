'use client'

import Message from "@/components/Message"
import { useEffect, useState } from "react"

import styles from './d4.module.css'
import Link from "next/link"

export default function D4() {
    const [ randomLocation, setRandomLocation ] = useState( { x: 0, y: 0 } )
    const [ hideBtnDisplay, setHideBtnDisplay ] = useState( 'none' )
    const [ nextBtn, setNextBtn ] = useState( 'none' )

    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => setHideBtnDisplay( 'block' ) }
            texts={ [
                'Bem vinda ao quarto desafioooo',
                'Lembrando, que você libera presentinhos conforme vai passando os desafios, então da uma olhada na página de recompensas :)',
                'Bom, nesse desafio, você vai ter que encontrar um botãozinho que está escondido nesta página...',
                'O botão pode estar em qualquer lugar abaixo deste texto...',
                'Acho que nesse você vai ficar um tempinho KKKKKKKKK (te amo :3)'
            ] }
        />
    )

    function hideBtnFunc() {
        setHideBtnDisplay( 'none' )

        setMessage(
            <Message
                key={ 1 }
                handleFinish={ () => setNextBtn( 'block' ) }
                texts={
                    [
                        'Rapaz...',
                        'Num é que você achou o botão mesmo?',
                        'Você não sabe o quanto que eu tive que procurar esse botão na hora que estou fazendo esse site KKKKKKK',
                        'Enfim, bora para o próximoooooo!!!'
                    ] }
            />
        )
    }

    useEffect( () => {
        localStorage.setItem( 'stage', 4 )
        setRandomLocation( {
            x: Math.floor( Math.random() * 90 ),
            y: Math.floor( Math.random() * 90 )
        } )
    }, [] )

    return (
        <main className='main' onClick={ () => {
            console.log( randomLocation.x )
            console.log( randomLocation.y )
        } }>
            { message }

            <div className={ styles.buttonSpace }>
                <button onClick={ () => hideBtnFunc() } id={ styles.hideBtn } style={ { left: `${ randomLocation.x }%`, top: `${ randomLocation.y }%`, display: hideBtnDisplay } }>|||</button>
            </div>

            <Link href={ 'd5' }><button style={ { display: nextBtn } }>Próximo</button></Link>
        </main>
    )
}