import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';
import { Wrapper } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <FormLabel>Find contats by name</FormLabel>
      <FormInput
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
    </Wrapper>
  );
}

export default Filter;
