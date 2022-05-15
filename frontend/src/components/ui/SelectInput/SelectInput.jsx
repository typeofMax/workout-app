//@Libs
import Select from 'react-select';
//@Styles
import './SelectInput.scss';

const SelectInput = () => {

  return (
    <Select
      className='react-select-container'
      classNamePrefix='react-select'
      options={[
        {
          value: 'asdw2',
          label: 'PushUps',
        },
        {
          value: 'dsk2',
          label: 'PullUps',
        },
      ]}
      isMulti
    />
  );
}

export default SelectInput;