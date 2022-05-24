import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./Pages/AddContact";
import Contacts from "./Pages/Contacts";
import ViewContact from "./Pages/ViewContact";
import NotFound from "./Pages/NotFound";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const submitHandler = (values) => {
    setContacts([...contacts, { id: Date.now(), ...values }]);
  };

  useEffect(() => {
    let saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (saveContacts.length) {
      setContacts(saveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const DeleteHandler = (id) => {
    const DleteContact = contacts.filter((c) => c.id != id);
    setContacts(DleteContact);
  };

  const onupdateContactsHandler = (contact, id) => {
    const index = contacts.findIndex((c) => c.id === id);
    const selectContacts = { ...contacts[index] };
    const returnedTarget = Object.assign(selectContacts, contact);
    const updatecontacts = [...contacts];
    updatecontacts[index] = returnedTarget;
    setContacts(updatecontacts);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Contacts
                contacts={contacts}
                onDelete={DeleteHandler}
                onupdateContacts={onupdateContactsHandler}
              />
            }
          ></Route>
          <Route
            path="/add"
            element={<AddContact AddContacts={submitHandler} />}
          ></Route>
          <Route
            path="/contactview/:id"
            element={<ViewContact contacts={contacts} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
