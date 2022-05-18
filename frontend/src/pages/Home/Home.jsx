//@Libs
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
//@Components
import Counters from '../../components/common/Counters/Counters';
import Layout from '../../components/common/Layout';
import Button from '../../components/ui/Button/Button';
//@Helpers
import { $api } from '../../core/api/api';
import useAuth from '../../core/hooks/useAuth';
//@Styles
import styles from './Home.module.scss';
//@Images
import bgImage from '../../assets/images/home-bg.jpg';

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
