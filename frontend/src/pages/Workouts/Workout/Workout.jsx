//@Libs
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
//@Components
import Layout from '../../../components/common/Layout';
import Loader from '../../../components/ui/Loader/Loader';
//@Helpers
import { $api } from '../../../core/api/api';
//@Styles
import styles from './Workout.module.scss';
//@Images
import bgImage from '../../../assets/images/profile-bg.jpg';

const Workout = () => {
  const { id: workoutId } = useParams();

  const {
    data: workout,
    isSuccess,
    isLoading,
  } = useQuery(
    'Get workout',
    () =>
      $api({
        url: `workouts/${workoutId}`,
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className='container'>
      <Layout bgImage={bgImage} height='260px'>
        <div className={styles.head}>
          {isSuccess && workout && (
            <>
              <time className={styles.head__time}>{workout.minutes} min</time>
              <h1 className={styles.head__title}>{workout.name}</h1>
            </>
          )}
        </div>
      </Layout>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {isLoading && <Loader />}
          {isSuccess &&
            workout &&
            workout.exercises.map(({_id, name, imageName}) => (
              <li className={styles.list__item} key={_id}>
                <p>{name}</p>
                <img src={`/uploads/${imageName}.svg`} alt={imageName} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Workout;
