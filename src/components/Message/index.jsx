import { useState } from "react"

import styles from "@/components/Message/message.module.css"

export default function Message( props ) {
    const [ index, setIndex ] = useState( 0 )
    const [ continueDisplay, setContinueDisplay ] = useState( 'inline' )

    const [ text, setText ] = useState(
        <div key={ index } className={ styles.textDiv } onClick={ () => nextText() }>
            <h2 className={ styles.text }>{ props.texts[ 0 ] }</h2 >
            <p className={ styles.continue } style={ { display: continueDisplay } }>Clique aqui para continuar</p>
        </div>
    )

    function nextText() {
        const texts = props.texts

        if ( index < texts.length ) {
            setIndex( index + 1 )
            setText(
                <div key={ index } className={ styles.textDiv } onClick={ () => nextText() }>
                    <h2 className={ styles.text }>{ texts[ index ] }</h2 >
                    <p className={ styles.continue } style={ { display: continueDisplay } }>Clique aqui para continuar</p>
                </div>
            )
        }

        if ( index === texts.length ) {
            setContinueDisplay( 'none' )
            props.handleFinish()
        }
    }

    return (
        <>
            { text }
        </>
    )
}