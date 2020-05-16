import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.Header}>
      <Text style={styles.appTitle}>
        To Do App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 20,
    height: 80
  },
  appTitle: {
    fontWeight: 'bold',
    color: 'white'
  }
});
