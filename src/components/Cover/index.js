import './Cover.css'

const Cover = (props) => {
    return (
        <div className='Box' id='cover'>
            <div className='box-img'> 
                <img src={props.image} alt={props.name} />
            </div>
            <div className='box-info'>
                <h4>{props.name}</h4>
                <h6>{props.plataform}</h6>
                <span>{props.rank}</span>
            </div>
        </div>
    )
}

export default Cover

