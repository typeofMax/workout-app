//@Helpers
//@Components
import Layout from '../../components/common/Layout'
//@Styles
import styles from './Exercise.module.scss';
//Images
import bgImage from '../../assets/images/exercise-bg.jpg';
import checkImg from '../../assets/images/exercise/exercise-check.svg';
import progressImg from '../../assets/images/exercise/exercise-progress.svg';

const Exercise = () => {
  return (
    <div className='container'>
      <Layout height='260px' bgImage={bgImage}>
        <div className={styles.head}>
          <img src='/uploads/biceps.svg' alt='' />
          <h1>Push ups</h1>
        </div>
      </Layout>
      <div className={styles.wrapper}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Previous</th>
                <th>Repeat & weight</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0kg/0</td>
                <td>0kg/0</td>
                <td>
                  <img src={progressImg} alt='' />
                </td>
              </tr>
              <tr>
                <td>0kg/0</td>
                <td>0kg/0</td>
                <td>
                  <img src={progressImg} alt='' />
                </td>
              </tr>
              <tr>
                <td>0kg/0</td>
                <td>0kg/0</td>
                <td>
                  <img src={checkImg} alt='' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Exercise