// src/screens/EventScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      {/* Ajoutez le contenu des Events ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default EventScreen;
