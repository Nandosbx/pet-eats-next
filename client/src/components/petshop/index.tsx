export default function Petshop() {
    return (
        <li className="petshop d-inline-block">
            <div className="d-inline-block">
                <img
                    src="https://avatars.githubusercontent.com/u/4692034?s=200&v=4https://avatars.githubusercontent.com/u/4692034?s=200&v=4"
                    alt=""
                    className="img-fluid"
                />
            </div>

            <div className="d-inline-block pl-3 align-bottom">
                <b>Petlove</b>

                <div className="petshop-infos">
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>2.8</b>
                    </text>

                    <span className="mdi mdi-cash-usd-outline"></span>
                    <text>
                        <b>$</b>
                    </text>

                    <span className="mdi mdi-crosshair-gps"></span>
                    <text>
                        <b>2,9Km</b>
                    </text>
                </div>
                <label className="badge badge-primary">Frete grátis</label>
            </div>
        </li>
    )
}
