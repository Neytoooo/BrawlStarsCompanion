// src/screens/BrawlerScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BrawlerList from '../components/Brawlers/BrawlerList';

const BrawlerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brawlers</Text>
      <BrawlerList />
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

export default BrawlerScreen;
