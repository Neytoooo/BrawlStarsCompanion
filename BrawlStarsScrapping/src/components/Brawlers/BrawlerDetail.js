// BrawlerDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BrawlerDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brawler Detail</Text>
      {/* Ajoutez ici le contenu détaillé du brawler */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B3866',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFFFF',
  },
});

export default BrawlerDetail;
