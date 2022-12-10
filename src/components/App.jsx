import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? null
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormData = (inpName, number) => {
    if (contacts.find(({ name }) => inpName === name)) {
      alert(`${inpName} is already in contacts.`);
      return;
    }

    const id = nanoid();
    const newContact = { name: inpName, number, id };
    setContacts(state => [...state, { ...newContact }]);
  };

  const deleteItem = itemId => {
    setContacts(state => state.filter(contact => contact.id !== itemId));
  };

  const filteredItem = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mainContainer">
      <h1 className="header">Phonebook</h1>
      <ContactForm getData={handleFormData} />
      <h2 className="header">Contacts</h2>
      <Filter
        value={filter}
        changeFilter={e => setFilter(e.currentTarget.value)}
      />
      <ContactList contacts={filteredItem} onDelete={deleteItem} />
    </div>
  );
}

export default App;
