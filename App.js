import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Header from './components/Header';
import Prices from'./components/Prices';

export default function App() {

  const [showPriceList, setShowPriceList] = useState(false);

  const handlePricePress = () => {
    Linking.openURL('/Prices'); 
  };

  const handleWhatsAppPress = () => {
    Linking.openURL('whatsapp://send?phone=+16473361316'); 
  };

  const handleAddressPress = () => {
    Linking.openURL('https://maps.google.com/?q=4959+Dundas+street+west,+Toronto'); 
  };

  const handleTogglePriceList = () => {
    setShowPriceList(!showPriceList);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.menuContainer}>
        {showPriceList ? (
          <View style={styles.priceListContainer}>
            {/* Your price list content here */}
            <Prices/>
            <TouchableOpacity style={styles.menuButton} onPress={handleTogglePriceList}>
              <Text style={styles.menuButtonText}>Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Samples</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={handleTogglePriceList}>
              <Text style={styles.menuButtonText}>Prices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={handleAddressPress}>
              <Text style={styles.menuButtonText}>Show directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={handleWhatsAppPress}>
              <Text style={styles.menuButtonText}>Book appointment</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleAddressPress}>
          <Text style={styles.bottomcontact}>4959 Dundas street west, Toronto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWhatsAppPress}>
          <Text style={styles.bottomcontact}>+16473361316 WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    zIndex: 1,
  },
  priceListContainer: {
    alignItems: 'center',
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
