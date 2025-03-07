import React from 'react';

const Cards = ({ cards }) => {
    console.log({cards})

    return (
        <div className="row">
       {cards.map((card) => (
            <span>
                { card.data.crosspost_parent == null && card.data.media == null ? 
                <div className="card mb-4">
                    <img src={ card.data.url } alt="" width="400px" height="300px"/>
                </div>
                : ""
                }
            </span>
       ))}
       </div>
    )
}

export default Cards
