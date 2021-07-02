import MarkerIcon from '../../assets/Marker.svg'
import MarkerIconSelected from '../../assets/MarkerSelected.svg'
import PetLoveIcon from '../../assets/petlovelogo.png'

type MarkerProps = {
    lat: number
    lng: number
}

const Marker: React.FC<MarkerProps> = ({ lat, lng }) => {
    return (
        <div>
            <img src={MarkerIcon} alt="MarkerIcon" className="marker-icon" />
            <img src={PetLoveIcon} alt="" className="img-marker" />
        </div>
    )
}

export default Marker
