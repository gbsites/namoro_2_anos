import { useEffect, useState } from 'react'
import styles from './rewardCard.module.css'

export default function RewardCard( props ) {
    const [ disableBtn, setDisableBtn ] = useState( true )

    useEffect( () => {
        const local_stage = localStorage.getItem( 'stage' )
        const rew_stage = props.rew_stage

        if ( local_stage >= rew_stage ) {
            setDisableBtn( false )
        }
    }, [] )

    return (
        <div className={ styles.rewardCard }>
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
            <p><small>Nível necessário: { props.rew_stage }</small></p>
            <button onClick={ () => props.func() } disabled={ disableBtn } >{ disableBtn ? 'Bloqueado' : 'Resgatar' }</button>
        </div>
    )
}