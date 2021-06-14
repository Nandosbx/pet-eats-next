import Header from '../../components/header'
import Product from '../../components/product/card'

import './styles.module.scss'

export default function Petshop() {
    return (
        <div className="h-100">
            <Header whiteVersion />
            <div className="container">
                <div className="col-2">
                    <img src="" alt="" className="petshop-image" />
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

                <div className="col-10">
                    <h5>Produtos</h5>

                    <div className="row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}
