

import { Helmet, HelmetProvider } from "react-helmet-async";
import metaAndOpengraphTag from "../../Functions/metaAndOpengraphTag";


/**
 *
 * @param {Object} caughtData
 * @returns
 */

const MyHelmetComp = ({ CaughtData }) => {

  const constantTitle = "MobilProfi";

  const {metaNameObj, metaPropertyArray} = CaughtData || metaAndOpengraphTag.welcomeComp;

  
  


  /**
   * @param {[]} metaPropertyArray
   */

  return (

    <HelmetProvider>
      <Helmet>

        <title>{metaNameObj?.title || constantTitle}</title>
        <meta name="description" content={metaNameObj?.description || ""}/>
        <meta nama="keywords" content={metaNameObj?.keywords || ""} />
        <meta name="robots" content={metaNameObj?.robots || "index,follow"}/>
        {/* <link rel="canonical" href="https://mobilprofi-6e8cc.web.app/" /> */}
        {
            metaPropertyArray?.map( (item,index)=>{
                return(
                    <meta key={index} name={item[0]} content={item[1]} />
                )
            }  )

        }
        


      </Helmet>
    </HelmetProvider>
  );
};

export default MyHelmetComp;
