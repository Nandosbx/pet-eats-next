import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Petshop from '../pages/petshop'
import App from './App'

import dynamic from 'next/dynamic'

export default function Home() {
    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/sidebar'),
        {
            ssr: false,
        }
    )
    return (
        <>
            <DynamicComponentWithNoSSR />
            <App />
        </>
    )
}
