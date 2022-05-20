//@Libs
import { useState } from 'react';
import cn from 'classnames';
import { useMutation } from 'react-query';
//@Components
import Layout from '../../components/common/Layout';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import Loader from '../../components/ui/Loader/Loader';
import Alert from '../../components/ui/Alert/Alert';
//@Helpers
import { $api } from '../../core/api/api';
//@Styles
import styles from './NewExercise.module.scss';
//@Images
import bgImage from '../../assets/images/new-exercise-bg.jpg';

const exerciseTypes = ['chest', 'shoulders', 'biceps', 'legs', 'cardio'];

const NewExercise = () => {
  const [exerciseData, setExerciseData] = useState({ name: '', times: '' });
  const [imageName, setImageName] = useState('chest');

  const {
    mutate: exerciseCreate,
    isLoading,
    error,
    isSuccess,
  } = useMutation(
    'Create new exercise',
    () =>
      $api({
        url: '/exercises',
        method: 'POST',
        body: {
          name: exerciseData.name,
          times: exerciseData.times,
          imageName,
        },
      }),
    {
      onSuccess() {
        setExerciseData({ name: '', times: '' });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, times } = exerciseData;
    if (name && times) {
      exerciseCreate();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} height='260px' heading='Create new exercise' />
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            placeholder='Name'
            value={exerciseData.name}
            onChange={(e) =>
              setExerciseData({ ...exerciseData, name: e.target.value })
            }
            required
          />
          <Input
            type='number'
            placeholder='Times'
            value={exerciseData.times}
            onChange={(e) =>
              setExerciseData({ ...exerciseData, times: e.target.value })
            }
            required
          />
          <div className={styles.images}>
            {exerciseTypes.map((item) => (
              <div
                className={cn(styles.images__item, {
                  [styles.active]: imageName === item,
                })}
                key={`_id ${item}`}
                onClick={() => setImageName(item)}
              >
                <img src={`/uploads/${item}.svg`} alt={`${item} exercise`} />
              </div>
            ))}
          </div>
          <Button text='Create' />
        </form>
        {isLoading && <Loader />}
        {isSuccess && <Alert text='Successfully added'/>}
        {error && <Alert type='error' text={error}/>}
      </div>
    </>
  );
};

export default NewExercise;
