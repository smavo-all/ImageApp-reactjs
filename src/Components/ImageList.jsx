import React from 'react'
import Images from './Images';

function ImageList({ imagenesList }) {
    return (
        <div className="col-12 p-5 row">
            {imagenesList.map(imagen => (
                <Images
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}

export default ImageList;
