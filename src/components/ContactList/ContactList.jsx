import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/store';
import React from 'react';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filteredValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts
        .filter(item => item.name.toLowerCase().includes(filteredValue))
        .map(item => {
          const { id, name, number } = item;
          return (
            <ContactItem key={id}>
              <ContactItemWrapper>
                {name}: {number}
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(removeContact(id))}
                >
                  Delete
                </DeleteBtn>
              </ContactItemWrapper>
            </ContactItem>
          );
        })}
    </List>
  );
}
