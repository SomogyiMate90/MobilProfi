import { useContext, useEffect } from "react";
import { night, sun, ThemeContext } from "../../Home/mainTheme";
import { NavLink } from "react-router-dom";
import { getApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ setTheme, Logfun }) => {
  const theme = useContext(ThemeContext);
  const themeInLocalStorage = localStorage.getItem("actualThemeInLocal");
  const {isLog, setLog} = Logfun

  useEffect(() => {
    if (themeInLocalStorage !== null) {
      setTheme(themeInLocalStorage);
    }
  }, []);

  const handleLogOut = async () =>{

    try{
      const fireApp = getApp();
      const auth = getAuth(fireApp);
      const resp = await signOut(auth)
      console.log(resp);
      setLog(false); // a loging állapotot falsra állítom
    }
    catch(e){
      console.log(e)
    }
    finally{
      window.location="/"
    }

  }


  /**
   *
   * @param {Event} event
   */

  const stopBubles = (event) => {
    // console.log(event.target)

    if(!(event.target instanceof HTMLAnchorElement)){  // ha nem <a> tól érkezik a buborék
      event.stopPropagation();
    }
    // A Navbar Becsukása miatt, egy másik fügvény indul, amnit amit a mainpagben helyeztem el.
  };

  return (
    <header onClick={stopBubles} className="web-page-header">
      <nav
        id="nav-bar"
        className="navbar navbar-expand-lg bg-body-tertiary rounded-2"
      >
        <div id="nav-2-id" className="container-fluid">
          <button className="btn btn-primary-outline border border-1"
            onClick={() =>
              theme === "light"
                ? (() => {
                    setTheme("dark");
                    localStorage.setItem("actualThemeInLocal", "dark");
                  })()
                : (() => {
                    setTheme("light");
                    localStorage.setItem("actualThemeInLocal", "light");
                  })()
            }
          >
            {theme !== "light" ? sun : night}
          </button>
          {/* <a className="navbar-brand" href="#">
            Menü
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Főoldal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Rólunk">
                  Rólunk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Kapcsolat">
                  Kapcsolat
                </NavLink>
              </li>
            
              {isLog === true
                ? (() => {
                    return (
                      <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/Munkafüzet">
                          Munkafüzet
                        </NavLink>
                      </li>
                      <li>
                        <button className="btn btn-warning sing-out-btn" onClick={handleLogOut} type="button">Kijelentkezés</button>
                      </li>
                      
                    </>
                    );
                  })()
                : (() => {
                    return (
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Bejelentkezés">
                      Bejelentkezés
                    </NavLink>
                  </li>)
                    
                    
                  })()}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
