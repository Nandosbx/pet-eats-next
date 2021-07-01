import React, { Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Petshop from '../pages/petshop'

import dynamic from 'next/dynamic'

export default function App() {
    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/sidebar'),
        {
            ssr: false,
        }
    )
    return (
        <>
            <Petshop />
            <DynamicComponentWithNoSSR />
        </>
    )
}
