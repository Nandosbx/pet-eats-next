type headerProps = {
    whiteVersion: boolean
}

export default function Header({ whiteVersion }: headerProps) {
    return (
        <div className="col-12 bg-dark">
            <header className="py-4 px-4 text-center">
                <img
                    src={whiteVersion ? '' : ''}
                    className="img-fluid"
                    alt="Logo"
                />
            </header>
            <button className="btn btn-secondary cart-button">
                <span className="mdi mdi-cart"></span>
                Item
            </button>
        </div>
    )
}
