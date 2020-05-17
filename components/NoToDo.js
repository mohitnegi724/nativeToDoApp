import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function NoToDo() {
  return(
    <View style={styles.noTask}>
      <Text style={styles.noTaskTitle}>
        No Tasks Available!
      </Text>
      <Image
        style={styles.noTaskImage}
        source={require('../assets/task.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  noTask: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noTaskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})