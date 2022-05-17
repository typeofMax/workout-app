//@Libs
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
//@Components
import Layout from '../../common/Layout';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import Alert from '../../ui/Alert/Alert';
import Loader from '../../ui/Loader/Loader';
//@Helpers
import { $api } from '../../../api/api';
import useAuth from '../../../hooks/useAuth';
//@Styles
import styles from './Auth.module.scss';
//@Images
import bgImage from '../../../images/auth-bg.jpg';

const Auth = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  //eslint-disable-next-line
  }, []);

  const onSuccessEnter = (token) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
    setUserData({ email: '', password: '' });
    navigate('/');
  };

  const {
    mutate: registration,
    isLoading: isLoadingReg,
    error: errorReg,
  } = useMutation(
    'Registration',
    () =>
      $api({
        url: '/users',
        method: 'POST',
        body: { email: userData.email, password: userData.password },
        auth: false,
      }),
    {
      onSuccess(data) {
        onSuccessEnter(data.token);
      },
    }
  );

  const {
    mutate: authentication,
    isLoading: isLoadingAuth,
    error: errorAuth,
  } = useMutation(
    'Authentication',
    () =>
      $api({
        url: '/users/login',
        method: 'POST',
        body: { email: userData.email, password: userData.password },
        auth: false,
      }),
    {
      onSuccess(data) {
        onSuccessEnter(data.token);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === 'Auth') {
      authentication();
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
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
          <Input
            type='password'
            placeholder='Password'
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
          <div className={styles['btn-group']}>
            <Button text='Sign in' onClick={() => setType('Auth')} />
            <Button text='Sign up' onClick={() => setType('Reg')} />
          </div>
        </form>
        {(isLoadingAuth || isLoadingReg) && <Loader />}
        {errorReg && <Alert type='error' text={errorReg} />}
        {errorAuth && <Alert type='error' text={errorAuth} />}
      </div>
    </>
  );
};

export default Auth;
