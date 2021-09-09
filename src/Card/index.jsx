import "./style.css"
const Card =({charStudent:{name, house, image}})=>{
    return(
        <div className={`container_card ${house.toLowerCase()}`}>
            <img className="image_char" src={image} alt={name}/>
            <h2 className="name_char">{name}</h2>
            <h3 className="house_char">{house}</h3>
        </div>
    )
}
export default Card