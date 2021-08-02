import GoogleMapReact from 'google-map-react'
import Marker from '../Marker'

export default function Map() {
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                center={{ lat: -23.5861051, lng: -46.6599327 }}
                zoom={15}
            >
                <Marker lat={-23.5861051} lng={-46.6599327} />
            </GoogleMapReact>
        </div>
    )
}
