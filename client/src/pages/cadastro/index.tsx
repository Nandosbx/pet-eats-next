import Header from '../../components/header'
import Product from '../../components/product/list'

import './styles.scss'

export default function Cadastro() {
    return (
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion />
            <div className="row">
                <div className="col-6 my-auto text-right">
                    <img src="" alt="Logo" className="img-fluid" />
                </div>

                <div className="col-6">
                    <div className="box col-8">
                        <h2 className="text-center">
                            Falta pouco para seu pet ser feliz.
                        </h2>
                        <br />
                        <br />

                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Nome Completo"
                        />
                        <input
                            type="email"
                            className="form-control form-control-lg mb-3"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Telefone"
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="CPF"
                        />
                        <input
                            type="date"
                            className="form-control form-control-lg mb-3"
                            placeholder="Data de Nascimento"
                        />

                        <button className="btn btn-lg btn-block btn-secondary">
                            Finalizar Pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
