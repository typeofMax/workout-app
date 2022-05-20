//@Components
import Layout from '../../components/common/Layout';
//@Images
import bgImage from '../../assets/images/auth-bg.jpg';

const Page404 = () => {
  return (
    <div className='container'>
      <Layout bgImage={bgImage} height='260px'>
        <h1>Page not found</h1>
      </Layout>
    </div>
  );
};

export default Page404;
