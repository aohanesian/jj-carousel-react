import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./components/Carousel/Carousel";

function App() {

    const photos = [
        {url: 'https://images.unsplash.com/photo-1517101724602-c257fe568157', id: 1},
        {url: 'https://images.unsplash.com/photo-1615827453817-128e639ba2cf', id: 2},
        {url: 'https://images.unsplash.com/photo-1591534446608-95420ad57d8b', id: 3},
        {url: 'https://images.unsplash.com/photo-1579256353657-12115ca794b7', id: 4},
        {url: 'https://images.unsplash.com/photo-1644319037301-26243bed1485', id: 5},
    ];

    return (
        <React.Fragment>
            <Carousel photos={photos}/>
        </React.Fragment>);
}

export default App;
