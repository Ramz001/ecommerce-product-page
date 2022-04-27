import previousLogo from '../../images/icon-previous.svg'
import '../../index.css'

export default function PreviousBtn({ imgCarouselPrevious, PreviousBtnStyles }) {
    return(
        <div 
            className={`zoom-btn ${PreviousBtnStyles}`}
            onClick={imgCarouselPrevious}
        >
            <img
                src={previousLogo}
                alt="previous logo"
            />
        </div>
    )
}