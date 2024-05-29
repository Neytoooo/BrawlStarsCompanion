// src/screens/MapScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapList from '../components/Maps/MapList';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maps</Text>
      <MapList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B3866',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default MapScreen;
