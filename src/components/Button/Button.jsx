import React from 'react';

function Button(props) {
    return (
        <button onClick={props.func}
                className={`carousel-control-${props.direction}`}
                data-bs-target="#carousel"
                type="button"
                data-bs-slide={props.direction}>

            <span className={`carousel-control-${props.direction}-icon`} aria-hidden="true"></span>
            <span className="visually-hidden">{props.text}</span>

        </button>
    );
}

export default Button;