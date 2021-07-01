import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Petshop from '../pages/petshop'
import App from './App'



export default function Home() {
    
    return (
        <>            
            <App />
        </>
    )
}
