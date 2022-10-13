import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryButton = ({nombre}) => {
    return (
        <div className="nav-boton">
            <Button variant="primary">{nombre}</Button>{' '}
        </div>
    )
}

export default CategoryButton;