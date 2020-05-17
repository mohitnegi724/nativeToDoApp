import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({item, pressHandler}) {
  return (
    <TouchableOpacity>
      <View style={styles.toDoItem}>
        <Text style={styles.toDoItemText}>
          {item.text}
        </Text>
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
          <MaterialIcons style={styles.deleteIcon} name="delete" size={32} color="#333" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    marginBottom: 20,
    padding: 10,
    color: 'black'
  },
  toDoItemText: {
    flex: 1,
    color: 'black'
  },
  deleteIcon: {
    marginLeft: 'auto'
  }
});
