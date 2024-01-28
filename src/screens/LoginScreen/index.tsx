import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import {useNavigation} from '@react-navigation/native';

import EncryptedStorage from 'react-native-encrypted-storage';
import {NavigationContainer} from '@react-navigation/native';
import App, {MainTabs} from '../../../App';
import NewsScreen from '../HomeScreen';
import {storeUserSession, getUserSesssion} from '../../store/SessionStore';

// const nullifySession = (token: string | null) => {
//   const jSONToken: string = JSON.stringify(token);
//   return jSONToken.length <= 0 ? null : jSONToken;
// };

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession]: any = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/api/v1/login', {
        email,
        password,
      });

      // Handle successful login
      if (response.status === 200) {
        // Redirect to the login screen
        storeUserSession(response.data.token);
        console.log('nih sese nah', await getUserSesssion());
        console.log('Login successful');
        // console.log(response.status);
        // console.log(response.data);
        navigation.replace('MainTabs');
        return response.data.token;
      }

      return 0;
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      Alert.alert(
        'Login failed',
        'Invalid email or password. Please try again.',
      );
    }
  };

  const handleSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
