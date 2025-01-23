import { useContext } from "react";
import { ThemeContext } from "../../../mainTheme";


const RecordPanel = ({clickedItem,setClickedItem,handleRecordDatasFun,handleDeleteItem})=>{
    const theme = useContext(ThemeContext);

    const handleEmptyInputs = ()=>{
        setClickedItem([])
    }
    
  

    return(
        <div id="record-panel" className={`record-panel ${theme}`}>
        <form onSubmit={handleRecordDatasFun}>
          <fieldset>
            <legend>Esemény kezelés</legend>
            <div className="mb-3 d-flex gap-5 justify-content-center">
              <div>
                <label htmlFor="new-item">Új cím rögzítés</label>
                <input
                  id="new-item"
                  className="mx-2"
                  type="radio"
                  name="selecet-old-per-new-event"
                  value='new-value'
                  defaultChecked="true"
                  onClick={handleEmptyInputs}
                />
              </div>

              {clickedItem.length !== 0
                ? (() => {
                    return (
                      <div>
                        <label htmlFor="old-item">
                          Korábbi cím módosítás: <b>{clickedItem[2]}</b>
                        </label>
                        <input
                          id="old-item"
                          className="mx-2"
                          type="radio"
                          name="selecet-old-per-new-event"
                          defaultValue={clickedItem[0] || ''}
                          defaultChecked={clickedItem[0]}
                        />
                      </div>
                    );
                  })()
                : (() => {
                    return <span></span>;
                  })()}
            </div>
  
            <div className="mb-3 my-inlines-block">
              <div className="my-inline-block-child">
                <label htmlFor="zipCode" className="form-label ">
                  Irányítószám:
                </label>
                <input
                  style={{ width: "100px" }}
                  type="number"
                  id="zipCode"
                  name="zipCode"
                  className="form-control"
                  min={1000}
                  max={9999}
                  required
                  defaultValue={clickedItem[1]||''}
                 
                />
              </div>
  
              <div className="my-inline-block-child w-75">
                <label htmlFor="address" className="form-label">
                  Cím:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  required
                  defaultValue={clickedItem[2]||''}
                />
              </div>
            </div>
            <div className="mb-3 my-inlines-block">
              <div className="my-inline-block-child">
                <label htmlFor="customreName" className="form-label">Ügyfél név:</label>
                <input
                  className="form-control"
                  style={{ minWidth: "200px" }}
                  type="text"
                  id="customreName"
                  name="customreName"
                  defaultValue={clickedItem[3]}
                  required
                />
              </div>
  
              <div className="my-inline-block-child">
                <label htmlFor="expiration-date" className="form-label">Lejárai idő:</label>
                <input
                  className="form-control"
                  type="date"
                  name="expiration-date"
                  id="expiration-date"
                  required
                  defaultValue={clickedItem[4]||''}
                />
              </div>
  
  
       
            </div>
  
            <div>
              <label htmlFor="description">Feladat leírás</label>
              <textarea
                className="form-control "
                name="description"
                id="description"
                placeholder="Esemény leírása"
                rows={5}
                cols={10}
                defaultValue={clickedItem[5]||''}
                required
              ></textarea>
            </div>
  
            <div className="mb-3 my-inline-block-child">
              <label htmlFor="isFinished" className="form-label">
                Cím állapot:
              </label>
              <select id="isFinished" name="isFinished" className="form-select" required>
                <option value={clickedItem[6] || "Folyamatban"}>{clickedItem[6] || "Elkészült/ Folyamatban"}</option>
                <option value="Kész">Elkészült</option>
                <option value="Folyamatban">Folyamatban</option>
              </select>
            </div>
  
  
      
  
            <div className="my-3 my-btn-group">
              <button type="submit" className="btn btn-primary">
                Feltöltés/Módosítás
              </button>
  
              <button data-key={clickedItem[0]} className="btn btn-danger" type="button" onClick={(event)=>handleDeleteItem(event)}>
                Esemény törlése
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    )

}
export default RecordPanel