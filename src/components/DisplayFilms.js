import React from 'react'
export default function displayFilms({ films }) {
    console.log(films);
    return (
        <div className="films-container">
            {films.map((films) => (
                <div className="card">
                    <div className="thumbnail">
                        <img src={films.img} alt='a films thumbnail'></img>
                    </div>
                    <div className="content">
                        <h3>{films.title}</h3>
                        <p>{films.rate}</p>
                        <p><a href="#detail">Detail</a></p>
                    </div>
                </div>
            ))}</div>
    )
}