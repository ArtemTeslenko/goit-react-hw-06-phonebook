import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  FormInput,
  Form,
  FormLabel,
  AddContactBtn,
} from './ContactForm.styled';

function ContactForm({ getData }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameId = useRef('');
  const numberId = useRef('');

  useEffect(() => {
    nameId.current = nanoid();
    numberId.current = nanoid();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    getData(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameId.current}>Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        id={nameId.current}
      />
      <FormLabel htmlFor={numberId.current}>Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
        id={numberId.current}
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  getData: PropTypes.func,
};
