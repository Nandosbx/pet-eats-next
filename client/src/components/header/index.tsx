//import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import LogoGreen from '../../assets/LogoGreen.svg'
import LogoWhite from '../../assets/LogoWhite.svg'

type headerProps = {
    greenVersion: boolean
    hideCart: boolean
}

export default function Header({ greenVersion, hideCart }: headerProps) {
    const openDrawer = () => {
        const event = new CustomEvent('openCart')
        window.dispatchEvent(event)
    }

    return (
        <div className="col-12">
            <div></div>
            <header className="py-4 px-4 text-center">
                <img
                    src={greenVersion ? LogoGreen : LogoWhite}
                    className="img-fluid"
                    alt="Logo"
                />
            </header>
            {!hideCart && (
                <button
                    onClick={() => openDrawer()}
                    className="btn btn-secondary cart-button"
                >
                    <span className="mdi mdi-cart"></span>Item
                </button>
            )}
        </div>
    )
}
