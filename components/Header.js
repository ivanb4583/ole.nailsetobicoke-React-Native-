import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Header() {
  return(
  <View style={styles.logoContainer}>
    <Image
          source={require('../assets/logo1.png')}
          style={styles.logoimage}
        />
      <Text style={styles.logoname}>ole.nailsetobicoke</Text>
      <Text style={styles.logotext}>IDEAL MANICURE</Text>
      <StatusBar style="auto" />
    </View>
)};
const styles = StyleSheet.create({
  logoname: {
    fontSize:30,
    fontFamily:'Trebuchet MS',
    fontWeight:'bold',
  },
  logotext: {
    fontSize:18,
  },
  logoimage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: -25,
  },
  logoContainer: {   //logo container - one picture + 2 text
    position: 'absolute',
    top: 40, 
    alignItems: 'center'
  },
});