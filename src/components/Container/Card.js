import './Card.css'

export const Card = ({nombre, precio, imagen}) => {
    return (
      <div className="card">
        <img alt="" src={imagen}/>
        <div className='descripcion-container'>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button>Añadir al Carrito</button>
        </div>
      </div>
    );  
  };
  
export default Card;