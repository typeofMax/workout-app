//@Libs
import { useQuery } from 'react-query';
//@Components
import Layout from '../../components/common/Layout';
import Counters from '../../components/common/Counters/Counters';
//@Helpers
import { $api } from '../../core/api/api';
//@Styles
import styles from './Profile.module.scss';
//@Images
import bgImage from '../../assets/images/profile-bg.jpg';
import avatar from '../../assets/images/header/user.svg';
import beforeImg from '../../assets/images/profile/before.jpg';
import afterImg from '../../assets/images/profile/after.jpg';

const Profile = () => {
  const { data, isSuccess } = useQuery(
    'profile counters',
    () =>
      $api({
        url: '/users/profile',
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className='container'>
      <Layout bgImage={bgImage}>
        <div className={styles.user}>
          <img src={avatar} alt='User avatar' height='50px' width='50px' />
          <h1 className={styles['user__name']}>Max Bogdanov</h1>
        </div>
        {isSuccess && data && <Counters minutes={data.minutes} workouts={data.workouts} kgs={data.kgs}/>}
      </Layout>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3 className={styles['item__title']}>Before</h3>
          <img
            src={beforeImg}
            alt='Muscles before training start'
            className={styles['item__img']}
          />
        </div>
        <div className={styles.item}>
          <h3 className={styles['item__title']}>After</h3>
          <img
            src={afterImg}
            alt='Muscles after trainings'
            className={styles['item__img']}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
