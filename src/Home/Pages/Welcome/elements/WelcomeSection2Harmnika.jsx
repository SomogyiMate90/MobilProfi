import { useContext } from "react";
import { ThemeContext } from "../../../mainTheme";
import { Link } from "react-router-dom";

const WelcomeSection2Harmnika = ()=>{

    const theme = useContext(ThemeContext);

    return(
        <section className="mx-auto col-12 col-lg-10 col-xl-9">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className={`accordion-item ${theme}`}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${theme} collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <h2>Miért válassza a MobilProfi Szolgáltatásokat?</h2>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse collapse"
            >
              <div className="accordion-body">
                <p>
                  <strong>1. Helyszíni kiszolgálás</strong>: Sokan küzdenek
                  időhiánnyal, ami miatt nehezen tudnak eljutni egy
                  autószervizbe, megszervezni egy alapos takarítást vagy
                  gondoskodni a klímaberendezés karbantartásáról. Mi levesszük
                  ezt a terhet az Ön válláról. Szakembereink teljesen
                  felszerelt járművekkel érkeznek, és minden szükséges
                  eszközzel és anyaggal felkészültek, hogy a lehető legjobb
                  szolgáltatást nyújtsák a helyszínen.
                </p>
                <p>
                  <strong>2. Széleskörű szakértelem</strong>: Három fő
                  területen állunk ügyfeleink rendelkezésére:
                </p>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className={`accordion-item ${theme}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${theme} collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <h3>
                          <strong>Autójavítás:</strong>
                        </h3>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <figure>
                          <img
                            src="/assets/img/autojavitas.jpg"
                            alt="Kép autó motorterének szereléséről"
                          />
                          <figcaption>
                            
                              <p>
                                Legyen szó kisebb hibák elhárításáról,
                                karosszéria javításról, gumicseréről vagy
                                akkumulátorproblémák megoldásáról, tapasztalt
                                szerelőink gyorsan és precízen dolgoznak.
                              </p>
                              <p>
                                A helyszíni javítások során ügyfeleink gyakran
                                elkerülhetik a szervizbe való utazás
                                kellemetlenségeit.
                              
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className={`accordion-item ${theme}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${theme} collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <h3>
                          <strong>Takarítás:</strong>
                        </h3>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <figure>
                          <img
                            src="/assets/img/Otthoni_Iroda_takaritas.jpg"
                            alt="Kép lakás takarításról"
                          />
                          <figcaption>
                            <p>
                              Otthonok, irodák vagy ipari létesítmények
                              tisztán tartásához modern technológiát és
                              környezetbarát tisztítószereket használunk.
                            </p>
                            <p>
                              Alkalmi nagytakarítás, rendszeres karbantartó
                              takarítás vagy speciális takarítási munkák is
                              elérhetőek kínálatunkban.
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className={`accordion-item ${theme}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${theme} collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <h3>
                          <strong>Klímakarbantartás:</strong>
                        </h3>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <figure>
                          <img
                            src="/assets/img/kilma_karbantartas.jpg"
                            alt="Kép beltéri klímaberendeszés tisztításáról"
                          />
                          <figcaption>
                            <p>
                              A klímaberendezések rendszeres tisztítása és
                              karbantartása nemcsak a készülék hosszú
                              élettartamát biztosítja, hanem az Ön egészségét
                              is védi.
                            </p>
                            <p>
                              Szakembereink szakszerűen tisztítják meg a
                              légkondicionáló rendszert, ellenőrzik a
                              működését, és szükség esetén javításokat is
                              végeznek.
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`accordion-item ${theme}`}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${theme} collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <h2>Küldetésünk</h2>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>
                  A MobilProfi Szolgáltatások küldetése az, hogy gyors,
                  megbízható és minőségi szolgáltatást nyújtsunk
                  ügyfeleinknek, miközben minimalizáljuk a kellemetlenségeket.
                  Hiszünk abban, hogy munkánkkal nemcsak időt takarítunk meg
                  ügyfeleink számára, hanem hozzájárulunk a mindennapi életük
                  kényelméhez és hatékonyságához is.
                </p>
              </div>
            </div>
          </div>
          <div className={`accordion-item ${theme}`}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${theme} collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <h2>Értékeink</h2>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>
                  <strong>Ügyfélközpontúság</strong>: Ön az első számunkra.
                  Személyre szabott megoldásokat kínálunk, amelyek valóban az
                  Ön igényeire vannak szabva.
                </p>
                <p>
                  <strong> Minőség</strong>: Csak olyan szakemberekkel
                  dolgozunk, akik alapos képzéssel és tapasztalattal
                  rendelkeznek a saját szakterületükön. Fenntarthatóság:
                  Környezetbarát megközelítést alkalmazunk, különösen a
                  takarítási munkák során. A lehető legkevesebb hulladékot
                  termeljük, és olyan anyagokat használunk, amelyek nem
                  károsítják a környezetet.
                </p>
                <p>
                  <strong>Megbízhatóság:</strong> Pontosságunk és
                  átláthatóságunk révén biztos lehet benne, hogy amit
                  megígérünk, azt teljesítjük is. Hívjon minket bizalommal!
                  Büszkék vagyunk arra, hogy ügyfeleink minket választanak, és
                  célunk az, hogy minden alkalommal túlszárnyaljuk az
                  elvárásaikat. Ha megbízható és kényelmes helyszíni
                  szolgáltatásokra van szüksége, ne habozzon kapcsolatba lépni
                  velünk! A MobilProfi Szolgáltatások a mindennapi problémák
                  gyors és egyszerű megoldása. Válasszon minket, és
                  tapasztalja meg a professzionalizmus és a kényelem tökéletes
                  kombinációját!
                </p>
                <p>
                  <button className="btn btn-primary">
                    <Link to={"/Rólunk"}>Szeretne többet tudni?</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )


}

export default WelcomeSection2Harmnika;
