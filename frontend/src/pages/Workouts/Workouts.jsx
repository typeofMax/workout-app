//@Libs
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
//@Components
import Layout from '../../components/common/Layout';
import { Loader, Alert } from '../../components/ui';
//@Helpers
import { $api } from '../../core/api/api';
//@Styles
import styles from './Workouts.module.scss';
//@Images
import bgImage from '../../assets/images/workout-bg.jpg';

const Workouts = () => {
  let navigate = useNavigate();

  const { data, isSuccess } = useQuery(
    'get workouts',
    () =>
      $api({
        url: `/workouts`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  	const {
      mutate: createWorkoutLog,
      isLoading,
      isSuccess: isSuccessMutate,
      error,
    } = useMutation(
      'Create new workout log',
      ({ workoutId }) =>
        $api({
          url: '/workouts/log',
          method: 'POST',
          body: { workoutId },
        }),
      {
        onSuccess(data) {
          navigate(`/workouts/${data._id}`);
        },
      }
    );

  return (
    <div className='container'>
      <Layout bgImage={bgImage} height='260px'>
        <h1>My workouts</h1>
      </Layout>

      <div className={styles.wrapper}>
        {error && <Alert type='error' text={error} />}
        {isSuccessMutate && <Alert text='Workout log created' />}
        {isLoading && <Loader />}
        {isSuccess && (
          <ul className={styles.list}>
            {data.map((workout, idx) => (
              <li
                className={styles['list__item']}
                key={`workout ${idx}`}
                onClick={() =>
                  createWorkoutLog({
                    workoutId: workout._id,
                  })
                }
              >
                {workout.name}
              </li>
            ))}
          </ul>
        )}
        {isSuccess && data?.length === 0 && (
          <Alert type='warning' text='Workouts not found' />
        )}
      </div>
    </div>
  );
};

export default Workouts;
