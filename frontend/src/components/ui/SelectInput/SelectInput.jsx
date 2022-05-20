//@Libs
import Select from 'react-select';
import PropTypes from 'prop-types';
//@Styles
import './SelectInput.scss';

const SelectInput = ({ data, ...props }) => {
  return (
    <Select
      className='react-select-container'
      classNamePrefix='react-select'
      options={
        data &&
        data.map((item) => ({
          value: item._id,
          label: item.name,
        }))
      }
      {...props}
      isMulti
    />
  );
};

export default SelectInput;

SelectInput.propTypes = {
  data: PropTypes.array,
  props: PropTypes.object,
}
