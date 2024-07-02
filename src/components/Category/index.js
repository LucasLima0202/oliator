import Cover from '../Cover'
import './Category.css'

const Category = (props) =>{
    
    
    return(

        (props.addingRKgames.length > 0) ? 
        <section className='category' style={{backgroundColor: props.primary_color}}>
            <div>
              <h3 style={{borderColor: props.secondery_color}}>{props.name_title}</h3>
                <span className='line'></span>  
            </div>
            <article>
                {props.addingRKgames.map(addingRKgames => <Cover 
                key={addingRKgames.name}
                name={addingRKgames.name}
                plataform={addingRKgames.plataform} 
                rank={addingRKgames.rating}
                image={addingRKgames.image}
                />)}
            </article>
            
        </section>
        : ''
    )
}

export default Category
