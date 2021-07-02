import { HTMLAttributes } from 'react'
import Header from '../../components/header'
import Petshop from '../../components/petshop'

import PerfectScrollbar from 'react-perfect-scrollbar'

import dynamic from 'next/dynamic'

type ScrollBarProps = HTMLAttributes<HTMLElement> & {
    onScrollX: () => void
}

export default function Home({ onScrollX }: ScrollBarProps) {
    const MapWithNoSSR = dynamic(() => import('../../components/map'), {
        ssr: false,
    })
    return (
        <div className="h-100">
            <Header greenVersion hideCart={false} />

            <div className="container-fluid petshop-list-container" id="top">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de si (5)</h5>
                </div>

                <ul className="col-12 petshop-list">
                    <PerfectScrollbar
                        onScrollX={() => console.log('onScrollX')}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => {
                            return <Petshop key={i} />
                        })}
                    </PerfectScrollbar>
                </ul>
            </div>

            <MapWithNoSSR />
        </div>
    )
}
