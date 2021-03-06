import 'react-perfect-scrollbar/dist/css/styles.css'
import '../styles/global.scss'
import '../styles/cadastro.scss'
import '../styles/header.scss'
import '../styles/petshop.scss'
import '../styles/checkout.scss'
import '../styles/sidebar.scss'
import '../styles/list.scss'
import '../styles/card.scss'
import '../styles/home.scss'
import '../styles/map.scss'
import '../styles/marker.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            {typeof window === 'undefined' ? null : (
                <Component {...pageProps} />
            )}
        </>
    )
}

export default MyApp
