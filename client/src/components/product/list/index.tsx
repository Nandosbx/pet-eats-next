

export default function Product() {
    return (
        <div className="col-12 product-list">
            <div className="row">
                <div className="col-3">
                    <img
                        src="https://staticpetz.stoom.com.br/fotos/1593195526081.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="col-6">
                    <h6>
                        <label htmlFor="" className="badge badge-primary">
                            R$30.00
                        </label>
                    </h6>
                    <small>
                        <b>
                            Ração Pedigree Carne Frango e Cereais Para Cães
                            Adultos Raças Médias e Grandes
                        </b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}
