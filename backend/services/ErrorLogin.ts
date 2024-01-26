import {MysqlError} from 'mysql';

const ErrorLogin = (e: MysqlError) => {
  console.log('err' + e);
  return {
    message: 'Gagal Login',
    status: 500,
    Error: 'error : ' + e,
  };
};

export default ErrorLogin;
