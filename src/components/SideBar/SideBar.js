import './SideBar.css'

import CategoryButton from "./CategoryButton/CategoryButton";


function SideBar() {
    return (
        <div className = "sidebar_container">
            
            <CategoryButton
                nombre = "Productos"
            />
            <CategoryButton
                nombre = "Servicios"
            />
            <CategoryButton
                nombre = "Componentes"
            />
            <CategoryButton
                nombre = "My Cart"
            />
        </div>
    )

}

export default SideBar;