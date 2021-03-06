import { useEffect, useState } from 'react'

import Dock from 'react-dock'
import Product from '../../components/Product/List'

export default function Sidebar() {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        window.addEventListener('openCart', () => {
            setOpened(true)
        })
    }, [])

    return (
        <Dock
            isVisible={opened}
            onVisibleChange={(visible) => {
                setOpened(visible)
            }}
            position="right"
        >
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Minha Sacola (5)</h5>

                <div className="row products">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                        (product, i) => (
                            <Product key={i} />
                        )
                    )}
                </div>

                <div className="row footer align-items-end">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <b className="d-inline-block">Total</b>
                        <h3 className="d-inline-block">R$90,00</h3>
                    </div>
                    <button className="btn btn-block btn-lg btn-primary rounded-0">
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </Dock>
    )
}
