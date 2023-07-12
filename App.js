import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Login Page
const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      navigation.navigate('HomePage');
    } else {
      alert('Enter Valid Data');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordPage');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Copyright message</Text>
    </View>
  );
};

// Home Page
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Page</Text>

      <Text style={styles.menuItem}>List Page</Text>

      <Text style={styles.menuItem}>About</Text>
    </View>
  );
};

// List Page
const ListPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>List Page</Text>
    </View>
  );
};

// View Page
const ViewPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Page</Text>
    </View>
  );
};

// Forgot Password Page
const ForgotPasswordPage = () => {
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordOld, setPasswordOld] = useState('');

  const updatePassword = () => {
    if (passwordOld !== '' && passwordOld == passwordNew) {
      navigation.navigate('Login');
    } else {
      alert('Enter Valid Password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={passwordNew}
        onChangeText={setPasswordNew}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={passwordOld}
        onChangeText={setPasswordOld}
      />

      <TouchableOpacity style={styles.button} onPress={updatePassword}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App
const App = () => {
  return <Navigator />;
};

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="ViewPage" component={ViewPage} />
        <Stack.Screen
          name="ForgotPasswordPage"
          component={ForgotPasswordPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#009688',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    color: '#ccc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;

