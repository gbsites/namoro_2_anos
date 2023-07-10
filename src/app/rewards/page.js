'use client'

import Message from "@/components/Message"
import styles from "./rewards.module.css"
import { useState } from "react"
import RewardCard from "@/components/rewardCard/rewardCard"
import { getRewardsList } from "./rewards_list"

export default function Rewards() {
    const [ message, setMessage ] = useState(
        <Message
            key={ 0 }
            handleFinish={ () => null }
            texts={ [
                'Bem vinda a página de recompensas...',
                'Aqui você pode ver os prêmios que você ganhou...',
                `Você está no nível ${ localStorage.getItem( 'stage' ) }`
            ] }
        />
    )

    const rewards_list = getRewardsList()

    return (
        <main className='main'>
            { message }

            <div className={ styles.rewards }>

                {
                    rewards_list.map( ( rew, i ) => {
                        console.log( i )

                        return (
                            <RewardCard
                                key={ i }
                                index={ i + 1 }
                                title={ rew.title }
                                description={ rew.description }
                                rew_stage={ rew.rew_stage }
                                func={ rew.func }
                            />
                        )
                    } )
                }

            </div>
        </main>
    )
}