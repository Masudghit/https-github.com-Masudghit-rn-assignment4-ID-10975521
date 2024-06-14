import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {styles} from './LoginScreen';
export const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    navigation.navigate('Home', {name, email});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
