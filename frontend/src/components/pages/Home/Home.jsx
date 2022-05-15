//@Libs
import { useNavigate } from 'react-router-dom';
//@Components
import Counters from '../../common/Counters/Counters';
import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';
//@Styles
import styles from './Home.module.scss';
//@Images
import bgImage from '../../../images/home-bg.jpg';


const Home = () => {
  let navigate = useNavigate();
  
  return (
    <Layout bgImage={bgImage} height='100%'>
      <Button text='New' viewStyle='main' onClick={() => navigate('/new-workout')}/>
      <h1 className={styles.heading}>SHOULDERS EXERCISES</h1>
      <Counters />
    </Layout>
  );
};

export default Home;
