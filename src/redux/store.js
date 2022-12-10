import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

const addContact = createAction('contacts/addContacts');
// const removeContact= createAction('contacts/removeContacts')

const contactsReducer = createReducer([1, 2, 3], {
  [addContact]: (state, action) => [...state, ...action.payload],
  // [removeContact]:(state, action)=>state.filter()
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
