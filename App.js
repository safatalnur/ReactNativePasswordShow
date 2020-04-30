import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import { hide } from 'expo/build/launch/SplashScreen';

export default function App() {

  const [hidePassword, setHidePassword] = useState(true)
  const [iconName, setIconName] = useState('eye')

  const showPassword = () => {
    setIconName(iconName === 'eye' ? 'eye-off' : 'eye')

    setHidePassword(hidePassword === true ? false : true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.password}>
          <TextInput 
            style={styles.textInput}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={showPassword}>
            <Icon name={iconName} size={30} />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  password: {
    borderBottomWidth: 1, 
    flexDirection: 'row',
    width: '90%',
  },
  textInput: {
    flex:1,
  },
});
