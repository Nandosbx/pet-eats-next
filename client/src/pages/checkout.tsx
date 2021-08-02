import Header from '../../components/header'
import Product from '../../components/product/list'

export default function Checkout() {
    return (
        <div className="h-100">
            <Header greenVersion hideCart />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <span className="section-title">Dados de Entrega</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="CEP"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Cidade"
                                />
                            </div>
                            <div className="col-4 pl-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="UF"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Logradouro"
                                />
                            </div>
                            <div className="col-4 pl-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Número"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Bairro"
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Complemento"
                                />
                            </div>
                        </div>

                        <span className="section-title">
                            Dados de Pagamento
                        </span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Número Cartão"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Validade"
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="CVV"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Nome do titular"
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="CPF/CNPj do titular"
                                />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <b>Total</b>
                                <h3>R$30.00</h3>
                            </div>

                            <div className="col-12 ">
                                <button className="btn btn-block btn-lg btn-primary">
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box col mb-4 box-sidebar">
                            <h5>Minha Sacola (5)</h5>

                            <div className="row products">
                                {[1, 2, 3, 4, 5, 6].map((product) => (
                                    <Product />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
