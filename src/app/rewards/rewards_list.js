export function getRewardsList() {
    return [
        {
            title: 'Vale Beijo',
            description: 'Um vale beijo ilimitado que você pode usar quando e quantas vezes quiser',
            rew_stage: 1,
            func: () => { alert( 'Dirija-se ao posto de troca (mozimo) para receber seu beijo' ) }
        },
        {
            title: 'Vale Massagem',
            description: 'Direito a uma massagem para relaxar e tirar o estresse',
            rew_stage: 3,
            func: () => { alert( 'Dirija-se ao posto de troca (mozimo) para receber sua massagem' ) }
        },
        {
            title: 'Carta: Por que eu te amo?',
            description: 'Você já deve ter se perguntado por que eu te amo, agora você vai saber...',
            rew_stage: 4,
        },
        {
            title: 'Passeio na praia',
            description: 'Vale um passeio na praia com direito a um Chinês de Queijo',
            rew_stage: 5,
        },
    ]
}