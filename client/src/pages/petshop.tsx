import Header from '../components/Header'
import Product from '../components/Product/Card'

export default function Petshop() {
    return (
        <div className="h-100">
            <Header greenVersion hideCart={false} />

            <div className="container">
                <div className="col-2">
                    <img
                        src="https://avatars.githubusercontent.com/u/4692034?s=200&v=4https://avatars.githubusercontent.com/u/4692034?s=200&v=4"
                        alt=""
                        className="petshop-image"
                    />
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
                    <br />
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
                            <Product key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
