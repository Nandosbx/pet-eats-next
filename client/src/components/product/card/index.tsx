import 'styles.module.scss'

export default function Product() {
    return (
        <div className="product col-3">
            <img src="" alt="" />

            <button className="btn btn-primary rounded-circle">+</button>

            <h4>
                <label htmlFor="" className="badge badge-primary">
                    R$ 90
                </label>
            </h4>
            <small>
                <b>Nome do produto</b>
            </small>
        </div>
    )
}
