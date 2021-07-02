import GoogleMapReact from 'google-map-react'
import Marker from '../marker'

export default function Map() {
    return (
        <div
            className="container-map"
            style={{
                marginTop: '6px',
                height: '100vh',
                width: '100wv',
                overflow: 'hidden',
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                center={{ lat: -23.5874, lng: -46.6576 }}
                defaultZoom={15}
            >
                <Marker lat={-23.5874} lng={-46.6576} />
            </GoogleMapReact>
        </div>
    )
}
