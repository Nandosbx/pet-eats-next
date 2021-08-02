type MarkerProps = {
    image?: HTMLImageElement
    lat: number
    lng: number
}

const Marker: React.FC<MarkerProps> = ({ lat, lng }) => {
    return (
        <div>
            <img src="/Marker.svg" alt="MarkerIcon" className="marker-icon" />
            <img src="/petlovelogo.png" alt="" className="img-marker" />
        </div>
    )
}

export default Marker
