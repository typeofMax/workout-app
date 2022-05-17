//@Libs
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
//@Components
import Counters from '../../common/Counters/Counters';
import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';
//@Helpers
import { $api } from '../../../api/api';
import useAuth from '../../../hooks/useAuth';
//@Styles
import styles from './Home.module.scss';
//@Images
import bgImage from '../../../images/home-bg.jpg';

const Home = () => {
  const { isAuth } = useAuth();
  let navigate = useNavigate();

  const { data, isSuccess } = useQuery(
    'home page counters',
    () =>
      $api({
        url: '/users/profile',
      }),
    {
      refetchOnWindowFocus: false,
      enabled: isAuth,
    }
  );

  return (
    <Layout bgImage={bgImage} height='100%'>
      <Button
        text='New'
        viewStyle='main'
        onClick={() => navigate('/new-workout')}
      />
      <h1 className={styles.heading}>SHOULDERS EXERCISES</h1>
      {isSuccess && isAuth && (
        <Counters
          minutes={data.minutes}
          workouts={data.workouts}
          kgs={data.kgs}
        />
      )}
    </Layout>
  );
};

export default Home;
