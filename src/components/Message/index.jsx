'use client'

import { useEffect, useState } from "react"

import styles from "@/components/Message/message.module.css"

export default function Message( props ) {
    const [ index, setIndex ] = useState( 0 )
    const [ continueDisplay, setContinueDisplay ] = useState( 'none' )
    const [ cursor, setCursor ] = useState( "default" )
    const texts = props.texts

    useEffect( () => {
        if ( texts.length != 1 ) {
            setContinueDisplay( "inline" )
            setCursor( "pointer" )
        } else {
            props.handleFinish()
        }
    }, [] )

    function nextText() {
        if ( index < texts.length - 1 ) {
            setIndex( index + 1 )
        }

        if ( index == texts.length - 2 ) {
            setContinueDisplay( "none" )
            setCursor( "default" )
            props.handleFinish()
        }
    }

    return (
        <div
            key={ index }
            style={ { cursor: cursor } }
            className={ styles.textDiv }
            onClick={ () => nextText() }>
            <h2 className={ styles.text }>{ texts[ index ] }</h2 >
            <p className={ styles.continue } style={ { display: continueDisplay } }>Clique aqui para continuar</p>
        </div>
    )
}