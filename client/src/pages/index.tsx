import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Header from '../components/header'
import Petshop from '../pages/petshop'

export default function Home() {
    return <Petshop />
}
