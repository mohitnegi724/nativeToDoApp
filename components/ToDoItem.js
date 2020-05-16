import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <Text style={styles.toDoItem}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    marginBottom: 20,
    padding: 10,
    color: 'black'
  }
});
