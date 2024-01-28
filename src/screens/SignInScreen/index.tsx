import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Your sign-in logic here
    console.log('Signing in with:', email, password);
    try {
      const response = await axios.post(
        'http://10.0.2.2:3000/api/v1/login/create',
        {
          email,
          password,
        },
      );
      console.log('akhirnya sukses', response.data);
      Alert.alert('Sign Success', 'Please Log In');
      navigation.navigate('LoginScreen');
    } catch (error) {}
    // You can make your API call here to authenticate the user
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SignInScreen;
