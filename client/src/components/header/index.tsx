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
                {/* <img
                    src={greenVersion ? LogoGreen : LogoWhite}
                    className="img-fluid"
                    alt="Logo"
                /> */}

                {greenVersion ? (
                    <img
                        src="/LogoGreen.svg"
                        className="img-fluid"
                        alt="Logo"
                    />
                ) : (
                    <img
                        src="/LogoWhite.svg"
                        className="img-fluid"
                        alt="Logo"
                    />
                )}
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
