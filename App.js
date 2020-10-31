
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,

  Text,
  StatusBar, TouchableOpacity
} from 'react-native';

import { stylemaincontainer, maintextstyle } from './styles';



const App = () => {
  return (
    <View style={stylemaincontainer.maincontainer}>
      <Text style={maintextstyle.text}>LOGIN</Text>
      <View style={stylemaincontainer.innercontainer}>
        <TextInput placeholder="Enter Name" placeholderTextColor="blue" style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor="blue" secureTextEntry style={styles.input} />
        <TouchableOpacity style={maintextstyle.btn} >
          <Text style={maintextstyle.textbtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




export default App;
