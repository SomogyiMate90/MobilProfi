import { useContext } from "react";
import { ThemeContext } from "../../../mainTheme";
import { Link } from "react-router-dom";
import MyHelmetComp from "../../../../Shared/Components/MyHelmetComp";

const SelectedCollage = ({dataComponentArray}) => {
    const  theme = useContext(ThemeContext)
    console.log(dataComponentArray)

    const [selectedMunkatars,imgSrc,cardMetTags] =dataComponentArray

  return (
    <>
      <MyHelmetComp CaughtData={cardMetTags}/>
      <div className="hero-img mx-auto col-11 col-xl-4 align-self-center ">
        <img
          className="hero-pic"
          src={imgSrc}
          title={selectedMunkatars.name}
          alt={`Kép ${selectedMunkatars.name} munkatársról`}
        />
        <h3 className="d-xl-none">{selectedMunkatars.name}</h3>
      </div>
      <div className={`mx-auto col-11 col-xl-7 box-shadow ${theme}`}>
        <h3 className="d-none d-xl-block">{selectedMunkatars.name}</h3>
        <h5>{selectedMunkatars.position}</h5>
        <section className="d-flex flex-column">
          {selectedMunkatars.descriptionMore.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
          <Link className="btn btn-primary align-self-end" to="/Rólunk">
            Vissza
          </Link>
        </section>
      </div>
      </>
  );
};

export default SelectedCollage;
