import MessageCanvasPartBody from "./MessageCanvasPartBody";

const MessageCanvas = ({ messagearray, RefreshDatas }) => {
  
  <button type="button" className="btn btn-primary position-relative">
    Mails{" "}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
      +99 <span className="visually-hidden">unread messages</span>
    </span>
  </button>;

  return (
    <>
      <button
        className="btn btn-primary position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        Üzenetek
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
          {messagearray.length}
        </span>
      </button>

    
       
      
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            ><div className="offcanvas-content">
              
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  Ügyfél üzenetek a Kapcsolati űrlapból
                </h5>
                <button
                  type="button"
                  className="btn-close border border-4 border-danger"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <MessageCanvasPartBody
                  messagearray={messagearray}
                  RefreshDatas={RefreshDatas}
                />
              </div>
            </div>
                    </div>
        
        
  
    </>
  );
};
export default MessageCanvas;
