// BrawlerDetailScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BrawlerDetail from '../components/Brawlers/BrawlerDetail';

const BrawlerDetailScreen = () => {
  return (
    <View style={styles.container}>
      <BrawlerDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B3866',
    paddingTop: 20,
  },
});

export default BrawlerDetailScreen;
