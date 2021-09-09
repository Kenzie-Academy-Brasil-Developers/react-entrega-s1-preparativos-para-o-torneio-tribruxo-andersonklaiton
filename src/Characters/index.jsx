import "./style.css"
const Characters =({charStudent:{name, house, image}})=>{
    return(
        <div className={`container_card_char ${house.toLowerCase()}_char`}>
            <img className="image_char_char" src={image} alt={name}/>
            <h2 className="name_char_char">{name}</h2>
            <h3 className="house_char_char">{house}</h3>
        </div>
    )
}
export default Characters