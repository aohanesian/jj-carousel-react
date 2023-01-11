import React, {useState} from 'react';
import Button from "../Button/Button";

function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(props.photos.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

        if (currentIndex === props.photos.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <React.Fragment>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {props.photos.map((photo, index) => (
                        <div key={photo.id} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                            <img src={photo.url}
                                 alt="image"
                                 className="d-block w-100"
                            ></img>
                        </div>))}

                    <Button func={handleClick} text={`Previous`} direction={`prev`}/>
                    <Button func={handleClick} text={`Next`} direction={`next`}/>

                </div>
            </div>
        </React.Fragment>
)
}

export default Carousel;
