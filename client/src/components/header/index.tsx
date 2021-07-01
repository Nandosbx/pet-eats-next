import LogoGreen from '../../assets/LogoGreen.svg'
import Logo from '../../assets/Logo.svg'

type headerProps = {
    whiteVersion: boolean
}

export default function Header({ whiteVersion }: headerProps) {
    const openDrawer = () => {
        const event = new CustomEvent('openCart')
        window.dispatchEvent(event)
    }

    return (
        <div className="col-12 header">
            <div></div>
            <header className="py-1 px-1 text-center">
                <img
                    src={whiteVersion ? Logo : LogoGreen}
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
