import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Prices() {
  return(
  <View>
    <Text style={styles.PriceTitle}>Manicure</Text>
            <Text>Shellac manicure<Text>50 CAD</Text></Text>
            <Text>Shellac manicure with leveling base<Text>55 CAD</Text></Text>
            <Text>Shellac manicure with strong gel<Text>60 CAD</Text></Text>
            <Text>Cuticle cleaning without coating<Text>40 CAD</Text></Text>
            <Text>Removing the material of another master<Text>5-10 CAD</Text></Text>
            <Text>French|Ambre<Text>10 CAD</Text></Text>
    </View>
);}

const styles = StyleSheet.create({
  PriceTitle: {
    fontSize:30,
    margin: 5,
    
  },
})