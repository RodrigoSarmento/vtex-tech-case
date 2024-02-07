import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  ListItem,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
} from './styles';
import { useOutsideClick } from '../../hooks';

interface ISelect {
  selectedValue: IDropDownItem;
  list: IDropDownItem[];
  onChange: (v: IDropDownItem) => void;
}

const DropDownField: React.FC<ISelect> = ({
  selectedValue,
  onChange,
  list,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = React.useRef(null);

  ////////////////////////////////////////////////////////
  //////////////// HELPER FUNCTIONS //////////////////////
  ////////////////////////////////////////////////////////

  useOutsideClick(selectRef, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: IDropDownItem) => {
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
          {list.map((option) => (
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

export default DropDownField;
