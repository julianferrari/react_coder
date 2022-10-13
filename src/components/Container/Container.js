import fakeApi from "../../fakeProducts/fakeApi"
import Card from "./Card"
import "./Container.css"

const Container = () => {
    return(
        <div className="principal_container">
            <div className="cards-container">
                {fakeApi.map((item, i) => (
                    <Card key={i}
                        nombre = {item.title}
                        precio = {item.price}
                        imagen = {item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Container;