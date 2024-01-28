import axios, {AxiosResponse} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeUserSession(token: AxiosResponse<string>) {
  try {
    const response = await axios.get('http://10.0.2.2:3000/api/v1/news');
    const data = response.data;
    console.log('data di sesion', data);

    const session: any = EncryptedStorage.setItem(
      'user_session',
      JSON.stringify(token),
    );

    // setSession(nullifySession(sessionItem));
    // console.log('this is ur sesion', session);
    // Congrats! You've just stored your first value!
    // return session;
  } catch (error) {
    // There was an error on the native side
    console.log(error);
  }
}

export const getUserSesssion = async () => {
  try {
    const session = await EncryptedStorage.getItem('user_session');
    console.log('Dihalaman sesionstore', session);
    return session;
  } catch (error) {
    console.log(error.response);
  }
};
