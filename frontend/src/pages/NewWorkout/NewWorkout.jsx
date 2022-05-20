///@Libs
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
//@Components
import { Alert, Button, Input, Loader, SelectInput } from '../../components/ui';
import Layout from '../../components/common/Layout';
//@Helpers
import { $api } from '../../core/api/api';
//@Styles
import styles from './NewWorkout.module.scss';
//@Images
import bgImage from '../../assets/images/new-workout-bg.jpg';

const NewWorkout = () => {
  const [name, setName] = useState('');
  const [currentExercises, setCurrentExercises] = useState([]);

  const { data } = useQuery(
    'Get exercises',
    () =>
      $api({
        url: '/exercises',
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    mutate: addWorkout,
    isSuccess,
    error,
    isLoading,
  } = useMutation(
    'Add workout',
    (idS) =>
      $api({
        url: '/workouts',
        method: 'POST',
        body: { name, exercisesIds: idS },
      }),
    {
      onSuccess() {
        setName('');
        setCurrentExercises([]);
      },
    }
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const idS = currentExercises.map((exercise) => exercise.value);
    addWorkout(idS);
  };

  return (
    <>
      <Layout bgImage={bgImage} height='260px' heading='Create new workout' />
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Link className={styles['new-exercise']} to='/new-exercise'>
            Add new exercise
          </Link>
          <SelectInput
            data={data}
            value={currentExercises}
            onChange={setCurrentExercises}
            required
          />
          <Button text='Create' />
        </form>
        {isLoading && <Loader />}
        {isSuccess && <Alert text='Successfully created' />}
        {error && <Alert type='error' text={error} />}
      </div>
    </>
  );
};

export default NewWorkout;
