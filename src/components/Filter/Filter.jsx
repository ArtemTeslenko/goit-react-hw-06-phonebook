import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useRef, useEffect } from 'react';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { Wrapper } from './Filter.styled';

function Filter({ value, changeFilter }) {
  const filterId = useRef();

  useEffect(() => {
    filterId.current = nanoid();
  }, []);

  return (
    <Wrapper>
      <FormLabel htmlFor={filterId.current}>Find contats by name</FormLabel>
      <FormInput
        id={filterId.current}
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </Wrapper>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func,
};
