import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Menu() {
return(
    <View style={styles.menuContainer}>
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Samples</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={handlePriceListsPress}>
        <Text style={styles.menuButtonText}>Prices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={handleShowDirectionsPress}>
        <Text style={styles.menuButtonText}>Show directions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={handleBookAppointmentPress}>
        <Text style={styles.menuButtonText}>Book appointment</Text>
      </TouchableOpacity>
    </View>
  </View>
)
};

const styles = StyleSheet.create({
    menuContainer: {
      position: 'absolute',
      top: '23%',
      bottom:'10%',
      width: '100%',
      backgroundColor: '#696969',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 0,
      padding: 20,
      zIndex: 1, // to overlay the bottomContainer
    },
    bottomcontact:{
      fontSize:18,
      marginBottom:7,
    },
    bottomContainer:{
      position: 'absolute',
      bottom: 20,
      alignItems: 'center'
    },
    menu: {
      width: '100%',
      alignItems: 'center',
    },
    menuButton: {
      backgroundColor: 'pink',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      width: '80%',
      alignItems: 'center',
      height:'17%',
      justifyContent: 'center',
    },
    menuButtonText: {
      fontSize: 22,
      fontWeight: 'bold',
    }
  });
  