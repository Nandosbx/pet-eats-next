import { useState } from 'react'

import './styles.module.scss'
import Dock from 'react-dock'

import Product from '../../components/product/list'

export default function Sideber() {
    const [opened, setOpened] = useState(false)

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
                    {[1, 2, 3, 4, 5, 6].map((product) => (
                        <Product />
                    ))}
                </div>
            </div>
        </Dock>
    )
}
