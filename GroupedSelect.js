import React, {Fragment} from 'react';

import Select, {components} from 'react-select';
import PropTypes from 'prop-types';

const Option = (props) => {
  return (
    <Fragment>
      <components.Option {...props}>
        <span className="pl-3">{props.children}</span>{' '}
      </components.Option>
    </Fragment>
  );
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'var(--neutral-gray-2)',
  }),
  groupHeading: (provided, state) => ({
    ...provided,
    color: 'black',
    fontWeight: 'bold',
  }),
};

const GroupSelect = (props) => (
  <Select
    styles={customStyles}
    options={props.groupedOptions}
    components={{Option}}
    placeholder={props.placeholder}
    onChange={props.onChange}
    defaultValue={props.defaultValue}
  />
);

GroupSelect.propTypes = {
  placeholder: PropTypes.string,
  groupedOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.any,
};

export default GroupSelect;
