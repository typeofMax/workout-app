//@Components
import Counters from '../../common/Counters/Counters';
import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';
//@Styles
import styles from './Home.module.scss';
//@Images
import bgImage from '../../../images/home-bg.jpg';

const Home = () => {
  return (
    <Layout bgImage={bgImage} height='100%'>
      <Button text='New' viewStyle='main' />
      <h1 className={styles.heading}>SHOULDERS EXERCISES</h1>
      <Counters />
    </Layout>
  );
};

export default Home;
