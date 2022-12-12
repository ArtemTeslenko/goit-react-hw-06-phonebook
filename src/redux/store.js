// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const initContactsState = [
//   { name: 'Qwe Qwe', number: '123-23-34', id: 'abbmUlRYa-uhvUzMLd3-4' },
//   {
//     name: 'Vasisualiy Pupcin',
//     number: '888-88-88',
//     id: 'kOissmS40888WADkI2YUZ',
//   },
//   {
//     name: 'Ann Coperfield',
//     number: '777-77-77',
//     id: '_dBqJjJyyqMCEdSpCVdkO',
//   },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    removeContact: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});
export const { addContact, removeContact } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => (state = action.payload),
  },
});
export const { filterContacts } = filterSlice.actions;

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

// export const addContact = createAction('contacts/addContacts');
// export const removeContact = createAction('contacts/removeContacts');
// export const filterContacts = createAction('filter/filterContacts');

// const contactsReducer = createReducer(
//   [
//     { name: 'Qwe Qwe', number: '123-23-34', id: 'abbmUlRYa-uhvUzMLd3-4' },
//     {
//       name: 'Vasisualiy Pupcin',
//       number: '888-88-88',
//       id: 'kOissmS40888WADkI2YUZ',
//     },
//     {
//       name: 'Ann Coperfield',
//       number: '777-77-77',
//       id: '_dBqJjJyyqMCEdSpCVdkO',
//     },
//   ],
//   {
//     [addContact]: (state, action) => [...state, action.payload],
//     [removeContact]: (state, action) =>
//       state.filter(item => item.id !== action.payload),
//   }
// );

// const filterReducer = createReducer('', {
//   [filterContacts]: (state, action) => (state = action.payload),
// });
