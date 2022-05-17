//@Libs
import { useState } from 'react';
import { useMutation } from 'react-query';
//@Components
import Layout from '../../common/Layout';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Alert from '../../ui/Alert/Alert';
import Loader from '../../ui/Loader/Loader';
//@Helpers
import { $api } from '../../../api/api';
//@Styles
import styles from './Auth.module.scss';
//@Images
import bgImage from '../../../images/auth-bg.jpg';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const {
    mutate: registration,
    isLoading,
    error,
  } = useMutation(
    'Registration',
    () =>
      $api({
        url: '/users',
        method: 'POST',
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        localStorage.setItem('token', data.token);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === 'Auth') {
      console.log('Auth');
    } else {
      registration();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} height='260px' heading='Authorization' />
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <Button text='Sign in' onClick={() => setType('Auth')} />
            <Button text='Sign up' onClick={() => setType('Reg')} />
          </div>
        </form>
        {isLoading && <Loader />}
        {error && <Alert type='error' text={error} />}
      </div>
    </>
  );
};

export default Auth;
