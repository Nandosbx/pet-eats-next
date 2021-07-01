import Header from '../../components/header'
import Product from '../../components/product/card'

export default function Petshop() {
    return (
        <div className="h-100">
            <Header whiteVersion={true} />

            <div className="container">
                <aside className="col-3">
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
                </aside>

                <main className="col-10">
                    <h5>Produtos</h5>
                    <br />
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
                            <Product key={i} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
