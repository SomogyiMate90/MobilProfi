import { useEffect, useState } from "react";
import Table from "./elements/Table";
import { getAppdb } from "../../../Firebase/indexFirbease";
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useImmer } from "use-immer";
import RecordPanel from "./elements/RecodPanel";
import getDataForm from "../../../Functions/Utils/getDataForm";
import { useNavigate, useNavigation } from "react-router";

const SpreadSheet = ({ isLog }) => {
  const [messagesAndTaskes, setmsAndts] = useImmer();
  const [refresh, SetEvent] = useState(false);
  const [clickedItem, setClickedItem] = useImmer([]);
  const navigate = useNavigate();
    // Komponens betöltése a Bejelentkezéstől függően
  let selectedComp = <span></span>;

    // FÜGGVÉNYEK

  useEffect(() => {
    setTimeout(() => {
      const retunredData = eventTasks();
    }, 300);
  }, [refresh]);

  const eventTasks = async () => {
    const dataBase = getAppdb();
    const spreadShettCollcetion = collection(dataBase, "spreadSheet");
    const docRef = doc(spreadShettCollcetion, "eventSh");
    const eventSheet = (await getDoc(docRef)).data();
    // eddig tartott a kezelt adatbázis
    const messagesCol = collection(dataBase, "CustomersMessages");
    const messeageDocs = await getDocs(messagesCol);

    const messageDatas = messeageDocs.docs.reduce((acc, doc) => {
      const key = doc.id;
      const content = doc.data();
      const message = { [key]: content };
      acc.push(message);
      return acc;
    }, []);

    if (messageDatas.length === 0) {
      setmsAndts([messageDatas, eventSheet]);
    } else {
      setmsAndts([]);
      setmsAndts([messageDatas, eventSheet]);
    }
  };

  /**
   *
   * @param {Event} event
   */
  const handleRecordDatas = async (event) => {
    const Obj = getDataForm(event, "keyMergedArrayinObj");
    // console.log(Obj);
    const dataBase = getAppdb();
    const eventSh = doc(dataBase, "spreadSheet/eventSh");
    await updateDoc(eventSh, Obj);
    SetEvent(!refresh);
    setClickedItem([])
  };

  const handleDeleteItem = async (event) => {
    // console.log(event.target);
    /**
     * @type {HTMLButtonElement}
     */
    const deleteBtnEl = event.target;
    const btnElDataKey = deleteBtnEl.dataset.key;
    const dataBase = getAppdb();
    const eventSh = doc(dataBase, "spreadSheet", "eventSh");
    await updateDoc(eventSh, {
      [btnElDataKey]: deleteField(),
    });
    SetEvent(!refresh);
    setClickedItem([])
  };




  // ha nincs bejelentkezés, csak URL-be van írva az alérési út
  if (!isLog) {
    selectedComp = <span></span>;

    setTimeout(()=>{
        navigate("/404");
    },300)
  } 
  else if(isLog) {


    selectedComp = (
      <main className="spreadSheet-component">
        <h1>Munkafüzet</h1>
        <div className="in-out-panels">
          <Table
            FiraBaseData={messagesAndTaskes}
            RefreshDatas={{ event: refresh, SetEvent, setClickedItem }}
          />
          <RecordPanel
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
            handleDeleteItem={handleDeleteItem}
            handleRecordDatasFun={handleRecordDatas}
          />
        </div>
      </main>
    );
  }

  return(
    <>
        {selectedComp}
    </>
  )


};

export default SpreadSheet;
