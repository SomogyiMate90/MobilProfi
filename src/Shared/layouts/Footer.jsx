import { useContext } from "react";
import { ThemeContext } from "../../Home/mainTheme.js";

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer
      className={`${theme} px-3 py-1 d-flex flex-column flex-md-row justify-content-evenly align-items-center`}
    >
      <div className="d-lg-flex flex-row gap-5 justify-content-evenly">
        <div className="text-center">
          <p className="mb-1">A weboldalt fejesztette: Somogyi Máté</p>
        </div>
        <div className="text-center">
          <p className="mb-1 mx-xl-5">Telefonszám: 06/30-123-4567</p>
        </div>
      </div>
      <div className="d-lg-flex felx-row gap-5 justify-content-evenly">
        <div className="text-center">
          <p className="mb-0">somogyimate713@gmail.com</p>
        </div>
        <div className="text-center">
          <div className="mb-1 mx-xl-5">
            {/* Egyéb text vagy ikon */}
            <a
              className="mx-1"
              href="https://www.facebook.com/soterlineoktatasikozpont/"
              target="target_blank"
            >
              <button className="btn btn-outline-primary border border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </button>
            </a>

            <a
              className="mx-1"
              href="https://www.soterline.hu/"
              target="target_blank"
            >
              <button className="btn btn-outline-primary border border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-browser-chrome"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
