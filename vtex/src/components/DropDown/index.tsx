import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  ListItem,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
} from './styles';
import { useOutsideClick } from '../../hooks';
import { subjects } from '../../settings';

interface ISelect {
  selectedValue: ISubject;
  onChange: (v: ISubject) => void;
}

const DropDown: React.FC<ISelect> = ({ selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = React.useRef(null);

  ////////////////////////////////////////////////////////
  //////////////// HELPER FUNCTIONS //////////////////////
  ////////////////////////////////////////////////////////

  useOutsideClick(selectRef, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: ISubject) => {
    onChange(value);
    setIsOpen(false);
  };

  ////////////////////////////////////////////////////////
  //////////////// RENDER FUNCTIONS //////////////////////
  ////////////////////////////////////////////////////////

  return (
    <DropDownContainer ref={selectRef}>
      <DropDownHeader onClick={toggling}>
        {selectedValue?.name || 'Selecione'}
        <FiChevronDown />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {subjects.map((option) => (
            <ListItem
              onClick={() => onOptionClicked(option)}
              key={Math.random()}
            >
              {option.name}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
