import React from "react";

const ModalA = ({
  showAllContactsModal,
  setShowAllContactsModal,
  onlyEvenIds,
  toggleCheckbox,
  searchQuery,
  setSearchQuery,
  contacts,
  openModalC,
  setShowUSContactsModal,
}) => {
  const handleUSContactsModalB = () => {
    setShowAllContactsModal(false);
    setShowUSContactsModal(true);
  };

  return (
    <div>
      <div
        className={`modal ${showAllContactsModal ? "show" : ""}`}
        tabIndex="-1"
        style={{display: showAllContactsModal ? "block" : "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <h4 className="px-2 py-2">Modal A</h4>
            <div className="modal-header">
              <div className="d-flex justify-content-center gap-3">
                <button
                  style={{backgroundColor: "#46139f", color: "#fff"}}
                  type="button">
                  All Contacts
                </button>
                <button
                  style={{backgroundColor: "#ff7f50", color: "#fff"}}
                  type="button"
                  onClick={handleUSContactsModalB}>
                  US Contacts
                </button>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAllContactsModal(false)}></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Country</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts?.map((contact) => (
                    <tr
                      style={{cursor: "pointer"}}
                      key={contact?.id}
                      onClick={() => openModalC(contact)}>
                      <td>{contact.id}</td>
                      <td>{contact?.country.name}</td>
                      <td>{contact?.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="onlyEven"
                  checked={onlyEvenIds}
                  onChange={toggleCheckbox}
                />
                <label className="form-check-label " htmlFor="onlyEven">
                  Only even
                </label>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAllContactsModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalA;
