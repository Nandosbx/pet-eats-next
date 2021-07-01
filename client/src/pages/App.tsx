import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Petshop from '../pages/petshop'

class App extends Component {
    render() {
        return (
            <>
                <Sidebar />
            </>
        )
    }
}

export default App
