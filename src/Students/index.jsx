import Card from "../Card"
import "./style.css"

const Students=({thehouse,charList})=>{
    const filterCharacters = (listChar)=>{
        const chars = []
        while(chars.length<3){
            const newRandom = Math.floor(Math.random()*(listChar.length-1))
            const selectChar = listChar[newRandom]
            if(!chars.some((elm)=> elm.house===selectChar.house)){
                chars.push(selectChar)
            }
        }
        return chars
    }

    return(
        <>
        <div className="container_all_char">
            {filterCharacters(charList).map((elm, index)=>{
                return <Card key={index} charStudent={elm}/>
            })}
        </div>
        <button className="btnAgain" onClick={()=>thehouse(true)}>Escolher novamente</button>
        </>
    )
}
export default Students