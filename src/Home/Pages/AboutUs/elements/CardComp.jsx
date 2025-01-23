import { Link } from "react-router-dom";
import hunTextToEngText from "../../../../Functions/hunTextToEngText";

const CardComp = ({dataOfCards,setLocationFun}) =>{

    const {theme,imgSrc,order,item} = dataOfCards;

    return(
  
    <div className={`card ${order} ${theme}`}>
        <img src={imgSrc} className="card-img-top" alt={item.name}/>

        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-title">{item.position}</h6>
            <p className="card-text">{item.description}</p>
            <button className="btn btn-primary p-0 mb-0 mt-auto">
                <Link className="btn btn-primary" to={`/Rólunk/${(hunTextToEngText(item.name).toLowerCase())}`}>Szeretne többet tudni?</Link>
            </button>
        </div>
    </div>
    



    )
}

export default CardComp;