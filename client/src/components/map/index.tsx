import GoogleMapReact from 'google-map-react'

export default function Map() {
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                center={{
                    lat: 23.5874,
                    lng: 46.6576,
                }}
                defaultZoom={15}
            ></GoogleMapReact>
        </div>
    )
}
