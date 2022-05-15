///@Libs
import { useState } from 'react';
//@Components
import Layout from '../../common/Layout';
//@Styles
import styles from './NewWorkout.module.scss';
//@Images
import bgImage from '../../../images/new-workout-bg.jpg';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const NewWorkout = () => {
  const [name, setName] = useState('');

  return (
    <>
      <Layout bgImage={bgImage} height='260px'>
        <h1 className={styles.heading}>Create new workout</h1>
      </Layout>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* React select */}
          <Button text='Create' />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
