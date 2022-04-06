import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {setIsLoading, register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={setIsLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          placeholderTextColor="#808080"
          onChangeText={text => setName(text)}
          theme={{
            colors: {
              placeholder: 'black',
              primary: 'black',
              text: 'black',
            },
          }}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          placeholderTextColor="#808080"
          onChangeText={text => setEmail(text)}
          theme={{
            colors: {
              placeholder: 'black',
              primary: 'black',
              text: 'black',
            },
          }}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          placeholderTextColor="#808080"
          onChangeText={text => setPassword(text)}
          secureTextEntry
          theme={{
            colors: {
              placeholder: 'black',
              primary: 'black',
              text: 'black',
            },
          }}
        />

        <Button
          title="Register"
          onPress={() => {
            if (
              email === '' ||
              password === '' ||
              email === null ||
              password === null ||
              name === '' ||
              name === null
            ) {
              Alert.alert('Error', 'Missing Required Field!');
            } else {
              register(name, email, password);
            }
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={styles.textView}>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    color: '#000',
  },
  textView: {
    color: '#000',
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;
