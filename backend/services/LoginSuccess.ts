import jwt from 'jsonwebtoken';

export let loginToken = '';

export const generateToken = (JWT_SECRET_KEY: string, payload: any) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: payload,
    },
    JWT_SECRET_KEY,
  );
  return (loginToken = token);
};

export const LoginSuccess = (JWT_SECRET_KEY: string, queryResult: any) => {
  console.log('Login success');

  // console.log(results[0].id_user)
  const payload = {
    // userID : results[0].id_user
    data: queryResult[0],
  };
  generateToken(JWT_SECRET_KEY, payload);
  return {
    message: 'Login is success',
    status: 200,
    token: loginToken,
  };
};
