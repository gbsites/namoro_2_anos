'use client'

import { useState } from 'react'
import styles from './navbar.module.css'

import Link from "next/link"

export default function Navbar() {

    function getStage() {
        const local_stage = localStorage.getItem( 'stage' )

        if ( local_stage ) {
            window.location.href = `/d${ local_stage }`
        } else {
            window.location.href = '/'
        }
    }

    return (
        <nav className={ styles.navbar }>
            <ul>
                <li><button onClick={ () => window.location.href = '/' }>Início</button></li>
                <li><button onClick={ () => getStage() }>Continuar</button></li>
                <li><button onClick={ () => window.location.href = '/rewards' }>Recompensas</button></li>
            </ul>
        </nav>
    )
}