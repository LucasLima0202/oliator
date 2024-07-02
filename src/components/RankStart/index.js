import './RankStart.css';
import React, { useState } from 'react';

const RankStart = (props) => {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingChange = (event) => {
        const ratingValue = event.target.value;
        setSelectedRating(ratingValue);
        props.onChanging(ratingValue);
    };

    return (
        <section className='box'>
            <label>Ranking</label>
            <div className="rating">
                <input type="radio" name="rating" id="r1" value="★★★★★" onChange={handleRatingChange} />
                <label htmlFor="r1"></label>

                <input type="radio" name="rating" id="r2" value="★★★★☆" onChange={handleRatingChange} />
                <label htmlFor="r2"></label>

                <input type="radio" name="rating" id="r3" value="★★★☆☆" onChange={handleRatingChange} />
                <label htmlFor="r3"></label>

                <input type="radio" name="rating" id="r4" value="★★☆☆☆" onChange={handleRatingChange} />
                <label htmlFor="r4"></label>

                <input type="radio" name="rating" id="r5" value="★☆☆☆☆" onChange={handleRatingChange} />
                <label htmlFor="r5"></label>
            </div>
        </section>
    );
}

export default RankStart;