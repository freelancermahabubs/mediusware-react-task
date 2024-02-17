import React, {useState, useEffect} from "react";
import ModalA from "./modal/ModalA";
import ModalC from "./modal/ModalC";
import ModalB from "./modal/ModalB";

const Problem2 = () => {
  const [showAllContactsModal, setShowAllContactsModal] = useState(false);
  const [showUSContactsModal, setShowUSContactsModal] = useState(false);
  const [onlyEvenIds, setOnlyEvenIds] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalCData, setModalCData] = useState({});
  const [showModalC, setShowModalC] = useState(false);

  useEffect(() => {
    if (showAllContactsModal) {
      fetchContacts();
    }
    if (showUSContactsModal) {
      fetchUSContacts();
    }
  }, [showAllContactsModal, showUSContactsModal, searchQuery, pageNumber]);

  const fetchContacts = async () => {
    const apiUrl = `https://contact.mediusware.com/api/contacts/?search=${searchQuery}&page=${pageNumber}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data?.results);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  };

  const fetchUSContacts = async () => {
    try {
      const response = await fetch(
        `https://contact.mediusware.com/api/country-contacts/United%20States/?search=${searchQuery}&page=${pageNumber}`
      );
      const data = await response?.json();
      setContacts(data?.results);
    } catch (error) {
      console.error("Error fetching US contacts: ", error);
    }
  };

  const toggleCheckbox = () => {
    setOnlyEvenIds(!onlyEvenIds);
  };

  const openModalC = (contact) => {
    setModalCData(contact);
    setShowModalC(true);
  };


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => setShowAllContactsModal(true)}>
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => setShowUSContactsModal(true)}>
            US Contacts
          </button>
        </div>
      </div>

      {/* Modal A - All Contacts */}
      <ModalA
        showAllContactsModal={showAllContactsModal}
        setShowAllContactsModal={setShowAllContactsModal}
        onlyEvenIds={onlyEvenIds}
        toggleCheckbox={toggleCheckbox}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        contacts={contacts}
     
        openModalC={openModalC}
        setShowUSContactsModal={setShowUSContactsModal}
      />

      {/* Modal B - US Contacts */}
      <ModalB
        showUSContactsModal={showUSContactsModal}
        setShowUSContactsModal={setShowUSContactsModal}
        setShowAllContactsModal={setShowAllContactsModal}
        onlyEvenIds={onlyEvenIds}
        toggleCheckbox={toggleCheckbox}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        contacts={contacts}
        openModalC={openModalC}
      />

      {/* Modal C - Contact Details */}
      <ModalC
        showModalC={showModalC}
        modalCData={modalCData}
        setShowModalC={setShowModalC}
      />
    </div>
  );
};

export default Problem2;
