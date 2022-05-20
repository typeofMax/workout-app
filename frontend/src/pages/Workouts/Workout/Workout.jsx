//@Libs
import { useQuery, useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import cn from 'classnames';
//@Components
import Layout from '../../../components/common/Layout';
import { Loader, Alert } from '../../../components/ui';
//@Helpers
import { $api } from '../../../core/api/api';
//@Styles
import styles from './Workout.module.scss';
//@Images
import bgImage from '../../../assets/images/profile-bg.jpg';

const SingleWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useQuery('get workout', () =>
    $api({
      url: `/workouts/log/${id}`,
    })
  );

  const { mutate: setWorkoutCompleted, error: errorCompleted } = useMutation(
    'Change log state',
    () =>
      $api({
        url: '/workouts/log/completed',
        method: 'PUT',
        body: { logId: id },
      }),
    {
      onSuccess() {
        navigate(`/workouts`);
      },
    }
  );

  useEffect(() => {
    if (
      isSuccess &&
      data?.exerciseLogs &&
      data.exerciseLogs.length ===
        data.exerciseLogs.filter((log) => log.completed).length &&
      data._id === id
    ) {
      setWorkoutCompleted();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.exerciseLogs]);

  return (
    <div className='container'>
      <Layout bgImage={bgImage} height='260px'>
        {isSuccess && (
          <div className={styles.head}>
            <time className={styles.head__time}>{data.minutes + ' min.'}</time>
            <h1 className={styles.head__title}>{data.workout.name}</h1>
          </div>
        )}
      </Layout>

      <div className={styles.wrapper}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          {errorCompleted && <Alert type='error' text={errorCompleted} />}
        </div>
        {isLoading || (isSuccess && data._id !== id) ? (
          <Loader />
        ) : (
          <ul className={styles.list}>
            {data.exerciseLogs.map((exLog, idx) => {
              return (
                <li
                  className={cn(styles['list__item'], {
                    [styles.completed]: exLog.completed,
                  })}
                  onClick={() => navigate(`/exercise/${exLog._id}`)}
                  key={`${data._id}${idx}`}
                >
                  <span>{exLog.exercise.name}</span>
                  <img
                    src={`/uploads/${exLog.exercise.imageName}.svg`}
                    height='34'
                    alt=''
                    draggable={false}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {isSuccess && data?.length === 0 && (
          <Alert type='warning' text='Exercises not found' />
        )}
      </div>
    </div>
  );
};

export default SingleWorkout;
