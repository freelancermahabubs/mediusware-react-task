import React from "react";

const ModalC = ({showModalC, modalCData, setShowModalC}) => {
  return (
    <div>
      {" "}
      <div
        className={`modal ${showModalC ? "show" : ""}`}
        tabIndex="-1"
        style={{display: showModalC ? "block" : "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal C</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModalC(false)}></button>
            </div>
            <div className="modal-body">
              <p>Name: {modalCData?.country?.name}</p>
              <p>Phone: {modalCData.phone}</p>
              {/* Display other contact details here */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModalC(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalC;
