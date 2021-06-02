import Header from '../../components/header'

export default function Petshop() {
    return (
        <div className="h-100">
            <Header whiteVersion />
            <div className="container">
                <div className="col-2">
                    <img src="" alt="" />
                    <b>Petlove</b>

                    <div className="petshop-infos">
                        <span className="mdi mdi-star"></span>
                        <text>
                            <b>2,8</b>
                        </text>

                        <span className="mdi mdi-cash-usd-outline"></span>
                        <text>
                            <b>$</b>
                        </text>

                        <span className="mdi mdi-cash-usd-outline"></span>
                        <text>
                            <b>$</b>
                        </text>

                        <span className="mdi mdi-crosshair-gps"></span>
                        <text>
                            <b>2,9</b>
                        </text>
                    </div>
                </div>

                <div className="col-10"></div>
            </div>
        </div>
    )
}
