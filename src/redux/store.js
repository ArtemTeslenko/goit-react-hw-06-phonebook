import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
};

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
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    // the first option ⬇️⬇️⬇️
    // removeContact: (state, action) => {
    //   let idx = 0;
    //   for (const item of state.items) {
    //     if (item.id === action.payload) {
    //       idx = state.items.indexOf(item);
    //     }
    //   }
    //   state.items.splice(idx, 1);
    // },
    // the second option ⬇️⬇️⬇️
    removeContact: (state, action) => {
      state.items.splice(action.payload, 1);
    },
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

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

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
