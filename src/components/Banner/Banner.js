import './Banner.css'

function Banner() {
    return (
        <article className="banner">
        <div className="heading-text">
            <h1>Rating GM</h1>
            <p className='text'>A personal rating of the game</p>
            <a href='#form' className='button-0'>Go to Form</a>
        </div>
        <div className="heading-text">
            <div className="square">
                <img src="../images/mii.png" width={'250px'} alt='avatar' />
                <a className='button-list' href='#cover'><div >My List<span className='next'> &#8250;</span></div></a>
            </div>
        </div>
        </article>
    )
}

export default Banner