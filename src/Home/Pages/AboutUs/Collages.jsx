import { useImmer } from "use-immer";
import getFetch from "../../../Functions/getFetch";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../mainTheme";
import SelectedCollage from "./elements/SelectedCollage";
import hunTextToEngText from "../../../Functions/hunTextToEngText";
import LoadingComp from "../../../Shared/Components/LoadingComp";

const Collages = () => {
  const [munkatarsakArray, setMunkatarsArray] = useImmer([]);
  const [selectedCaracter, setSelectedMunkatars] = useImmer([]);
  const theme = useContext(ThemeContext);
  const everyData = async () => {
    try {
      const getEmloyeDescription = await getFetch(
        "/assets/colleagues/emploeyesMoreDescription.json"
      );
      setMunkatarsArray(getEmloyeDescription);

      const badArray = getEmloyeDescription.some((item) => item === undefined);
      if (badArray) {
        throw new Error("Rosz adat lekérés");
      }
    } catch {
      setMunkatarsArray([]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      everyData();
    }, 1000);
  }, []);

  useEffect(() => {
    if (munkatarsakArray.length !== 0) {
      toSetCaracter();
    }
  }, [munkatarsakArray.length !== 0]);


  const toSetCaracter = () => {
    const path = window.location.pathname;
    const pathString = String(path);
    const findindexOfLastPerCaracter = pathString.lastIndexOf("/");
    const uri = pathString.slice(findindexOfLastPerCaracter + 1);
    console.log(uri);

    // ALKALMAZOTT BEÁLLÍTÁSA A URIBEN KAPOTT ADATOK ALAPJÁN

    const selectedMunkatars = munkatarsakArray.find((item) => {
      const engText = hunTextToEngText(item.name).toLowerCase();
      return uri === engText;
    });

    // PROFILKÉP VÁLASZTÁSA, MERT KÜLÖN LETT KEZELVEKORÁBBAN

    let imgSrc;

    switch (selectedMunkatars.position) {
      case "Alkalmazott":
        imgSrc = "/assets/img/Masked_circle.jpg";
        break;
      case "Csoportvezető":
        imgSrc = "/assets/img/Masked_triangle.jpg";
        break;
      case "Ügyvezető":
        imgSrc = "/assets/img/Masked_squared.jpg";
        break;
      default:
        imgSrc = "Nincs kép feltöltve;";
    }

    //META ADATOK BEÁLLÍTÁSA

    const cardUrl = `https://mobilprofi-6e8cc.web.app/Rólunk/`;
    const cardMetaImg = cardUrl + imgSrc;

    const cardMetTags = {
      metaNameObj: {
        title: `MobilProfi - ${selectedMunkatars.name}`,
        description: selectedMunkatars.descriptionMore[0],
        keywords: `${selectedMunkatars.name}, ${selectedMunkatars.position}`,
        robots: "index,follow",
      },
      metaPropertyArray: [
        ["og:tilte", selectedMunkatars.name],
        ["og:type", "website"],
        ["og:image", cardMetaImg],
        ["og:image:secure_url", cardMetaImg],
        ["og:image:type", "image/jpg"],
        ["og:description", selectedMunkatars.descriptionMore[0]],
        ["og:url", cardUrl],
      ],
    };

    setSelectedMunkatars([selectedMunkatars, imgSrc, cardMetTags]);
  };

  return (
  
    <main className={`colleague-page ${theme} container my-lg-auto`}>
      <div className="row gap-xl-5">
        {selectedCaracter.length === 0 ? (
          <LoadingComp displayText="Töltés..." />
        ) : (
          <SelectedCollage dataComponentArray={selectedCaracter} />
        )}
      </div>
    </main>

  );
};
export default Collages;
