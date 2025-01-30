import { useContext } from "react";
import metaAndOpengraphTag from "../../../Functions/metaAndOpengraphTag";
import MyHelmetComp from "../../../Shared/Components/MyHelmetComp";
import { ThemeContext } from "../../mainTheme";
import { Link, useNavigate } from "react-router-dom";
import getDataForm from "../../../Functions/Utils/getDataForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import getFireBaseApp from "../../../Firebase/firebaseApp/getFireBaseApp";



const Login = ({useStatLog}) =>{
    const [log, setLog] = useStatLog;
    const theme = useContext(ThemeContext);
    const metaTags = metaAndOpengraphTag.loginComp;
    const navigate = useNavigate()

    /**
     * 
     * @param {Event} event 
     */
    const handleLogin = async (event)=>{
        event.preventDefault();
        try{
            const logDatas = getDataForm(event,'oneGreatObj');
            const firebaseApp = getFireBaseApp();
            const fireAuth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(fireAuth,logDatas.email,logDatas.password);
            // console.log( resp.user)
            // console.log('sikeres bejelentkezés');           
            setLog(!log)
            navigate('/Munkafüzet');
        }
        catch(e){
     
            alert("Helytelen bejelentkezési adatok")
        }
    }


    return(
    
    <>
    <MyHelmetComp CaughtData={metaTags}/>

    <main className={`login-page ${theme}`}>
      <h1>Bejelentkezés</h1>
      <form onSubmit={(event)=>handleLogin(event)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email cím
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            disabled={false}
            // defaultValue="user1@admin.com"
          />
          <div id="emailHelp" className="my-form-text">
            Soha ne adja ki bejelentkezési adatait
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Jelszó
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            disabled={false}
            // defaultValue="Jelszo01"
          />
        </div>
        <button disabled={false} type="submit" className="btn btn-primary d-block mx-auto">
          Bejelentkezés
        </button>
      </form>

      <section className="d-flex flex-column align-items-center mx-1 ">
          <p className="text-center">A bejelentkezés csak regisztrált munkatársainknak lehetséges</p>
          <button className="btn btn-primary" type="button"><Link to='/Kapcsolat'> Szeretne többet tudni?</Link></button>

      </section>
    </main>
    </>
  );

}

export default Login;