import { useContext } from "react";
import { ThemeContext } from "../../../mainTheme";
import CardComp from "./CardComp";

const PortfoliComp = ({ dataArray }) => {
  const theme = useContext(ThemeContext);
//   console.log(dataArray)
  const createComponent = dataArray[0].map((item, index) => {
 
    const dataArray2 = dataArray[1].find(dataArray2Item=> item.id === dataArray2Item.id);
    // console.log(dataArray2)
    let imgSrc = "";
    let imgAlt = item?.name;
    let order = "order-0";

    switch (item.position) {
      case "Alkalmazott":
        imgSrc = "/assets/img/Masked_circle.jpg";
        order = "order-3";
        break;
      case "Csoportvezető":
        imgSrc = "/assets/img/Masked_triangle.jpg";
        order = "order-2";
        break;
      case "Ügyvezető":
        imgSrc = "/assets/img/Masked_squared.jpg";
        order = "order-1";
        break;
      default:
        imgSrc = "Nincs kép feltöltve;";
    }
    if (imgAlt === null) {
      imgAlt = "nincs kép felöltve";
    }

    return <CardComp key={index} dataOfCards={{theme,imgSrc,order,item,descriptionMore: dataArray2}}/>

  });

 

  return <section className={`portfolio-comp ${theme} py-1 mt-3`}>
    {createComponent}
  </section>;
};
export default PortfoliComp;
