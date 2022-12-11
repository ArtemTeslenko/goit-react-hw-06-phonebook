import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <div className="mainContainer">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <h2 className="header">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
