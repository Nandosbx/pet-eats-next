import React from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/header'
//import Sidebar from '../components/sidebar'
//import Map from '../components/map'
import Petshop from '../pages/petshop'
import Cadastro from './cadastro'
import Home from './home'

import dynamic from 'next/dynamic'

export default function App() {
    const SidebarWithNoSSR = dynamic(() => import('../components/sidebar'), {
        ssr: false,
    })

    

    return (
        <>
            {/* <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cadastro" exact component={Cadastro} />
                </Switch>
            </BrowserRouter> */}

            <Home />
            
            <SidebarWithNoSSR />
        </>
    )
}
