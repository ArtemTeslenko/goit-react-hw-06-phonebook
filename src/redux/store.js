import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContacts');
export const removeContact = createAction('contacts/removeContacts');
export const filterContacts = createAction('filter/filterContacts');

const contactsReducer = createReducer(
  [
    { name: 'Qwe Qwe', number: '123-23-34', id: 'abbmUlRYa-uhvUzMLd3-4' },
    {
      name: 'Vasisualiy Pupcin',
      number: '888-88-88',
      id: 'kOissmS40888WADkI2YUZ',
    },
    {
      name: 'Ann Coperfield',
      number: '777-77-77',
      id: '_dBqJjJyyqMCEdSpCVdkO',
    },
  ],
  {
    [addContact]: (state, action) => [...state, action.payload],
    [removeContact]: (state, action) =>
      state.filter(item => item.id !== action.payload),
  }
);

const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
