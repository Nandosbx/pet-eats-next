type headerProps = {
    whiteVersion: boolean
}

export default function Header({ whiteVersion }: headerProps) {
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <img
                    src={whiteVersion ? '' : ''}
                    className="img-fluid"
                    alt="Logo"
                />
            </header>
        </div>
    )
}
