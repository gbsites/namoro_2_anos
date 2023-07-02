'use client'

import { useState } from "react"

import styles from "@/components/Message/message.module.css"

export default function Message( props )
{
    const [ index, setIndex ] = useState( 0 )
    const [ continueDisplay, setContinueDisplay ] = useState( 'inline' )
    const texts = props.texts

    function nextText()
    {
        if ( index < texts.length - 1 )
        {
            setIndex( index + 1 )
        }

        if ( index == texts.length - 2 )
        {
            setContinueDisplay( "none" )
            props.handleFinish()
        }
    }

    return (
        <>
            <div key={ index } className={ styles.textDiv } onClick={ () => nextText() }>
                <h2 className={ styles.text }>{ texts[ index ] }</h2 >
                <p className={ styles.continue } style={ { display: continueDisplay } }>Clique aqui para continuar</p>
            </div>
        </>
    )
}