//@Libs
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
//@Components
import Layout from '../../components/common/Layout';
import { Loader } from '../../components/ui';
//@Helpers
import { $api } from '../../core/api/api';
//@Styles
import styles from './Workouts.module.scss';
//@Images
import bgImage from '../../assets/images/profile-bg.jpg';

const Workouts = () => {
  const {
    data: workouts,
    isLoading,
    isSuccess,
  } = useQuery(
    'Get workouts',
    () =>
      $api({
        url: '/workouts',
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className='container'>
      <Layout bgImage={bgImage} height='260px'>
        <h1>My workouts</h1>
      </Layout>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {isLoading && <Loader />}
          {isSuccess &&
            workouts &&
            workouts.map((workout) => (
              <li className={styles.list__item} key={workout._id}>
                <Link to={`${workout._id}`}>{workout.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Workouts;
