import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Petshop from '../pages/petshop'
import Cadastro from './cadastro'

import dynamic from 'next/dynamic'

export default function App() {
    const SidebarWithNoSSR = dynamic(() => import('../components/sidebar'), {
        ssr: false,
    })

    return (
        <>
            <Cadastro />
            <SidebarWithNoSSR />
        </>
    )
}
