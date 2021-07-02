export default function Product() {
    return (
        <div className="col-3 product">
            <img
                src="https://staticpetz.stoom.com.br/fotos/1593195526081.jpg"
                alt="Logo"
                className="img-fluid"
            />

            <button className="btn btn-primary rounded-circle">+</button>

            <h4>
                <label htmlFor="" className="badge badge-primary">
                    R$ 90
                </label>
            </h4>
            <small>
                <b>Ração Pedigree</b>
            </small>
        </div>
    )
}
