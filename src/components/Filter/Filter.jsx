// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import { useRef, useEffect } from 'react';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { Wrapper } from './Filter.styled';

function Filter() {
  return (
    <Wrapper>
      <FormLabel>Find contats by name</FormLabel>
      <FormInput name="filter" />
    </Wrapper>
  );
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func,
// };
