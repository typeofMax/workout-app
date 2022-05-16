//@Libs
import { useState } from 'react';
//@Components
import Layout from '../../common/Layout';
import Input from '../../ui/Input/Input';
//@Styles
import styles from './Auth.module.scss';
//@Images
import bgImage from '../../../images/auth-bg.jpg';
import Button from '../../ui/Button/Button';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Layout bgImage={bgImage} height='260px'>
        <h1 className={styles.heading}>Authorization</h1>
      </Layout>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles['btn-group']}>
            <Button text='Sign in' />
            <Button text='Sign up' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
