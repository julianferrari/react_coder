import './Card.css'

export const Card = ({name, image, quote}) => {
    return (
      <div className="card">
        <img alt={`personaje ${name}`} src={image}/>
        <div className='descripcion-container'>
            <h3>{name}</h3>
            <p>{quote}</p>
        </div>
      </div>
    );  
  };
  
export default Card;