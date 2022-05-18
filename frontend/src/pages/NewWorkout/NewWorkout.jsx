///@Libs
import { useState } from 'react';
//@Components
import Layout from '../../components/common/Layout';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import SelectInput from '../../components/ui/SelectInput/SelectInput';
//@Styles
import styles from './NewWorkout.module.scss';
//@Images
import bgImage from '../../assets/images/new-workout-bg.jpg';

const NewWorkout = () => {
  const [name, setName] = useState('');

  return (
    <>
      <Layout bgImage={bgImage} height='260px' heading='Create new workout' />
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SelectInput />
          <Button text='Create' />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
