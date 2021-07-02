import Header from '../../components/header'
import Petshop from '../../components/petshop'
import Map from '../../components/map'

import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Home() {
    return (
        <div className="h-100">
            <Header greenVersion hideCart={false} />

            <div className="container-fluid petshop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de si ()</h5>
                </div>

                <ul className="col-12 petshop-list">
                    <PerfectScrollbar>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => {
                            return <Petshop key={i} />
                        })}
                    </PerfectScrollbar>
                    <Map />
                </ul>
            </div>
        </div>
    )
}
