import { useEffect, useState } from 'react'
import Logo from '../../assets/Logo.svg'
import LogoWhite from '../../assets/LogoWhite.svg'


import './styles.module.scss'

type headerProps = {
    whiteVersion: boolean
}

export default function Header({ whiteVersion }: headerProps) {
    const openDrawer = () => {
        const event = new CustomEvent('openCart')
        window.dispatchEvent(event)
    }

    return (
        <div className="col-12 bg-dark header">
            <header className="py-1 px-1 text-center">
                <img
                    src={whiteVersion ? LogoWhite : Logo}
                    className="img-fluid"
                    alt="Logo"
                />
            </header>

            <button
                onClick={() => openDrawer()}
                className="btn btn-secondary cart-button"
            >
                <span className="mdi mdi-cart"></span>Item
            </button>
        </div>
    )
}
