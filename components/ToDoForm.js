import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ToDoForm({addToDoHandler}) {
  const [newToDo, setNewToDo] = useState('')
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="New To Do.."
        style={styles.toDoInput}
        onChangeText={val=>setNewToDo(val)}
      />
      <Button
        style={styles.submitButtom}
        title="Create To Do" 
        onPress={()=>addToDoHandler(newToDo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    marginTop: 20,
  },
  toDoInput: {
    marginBottom: 30,
    paddingHorizontal: 0,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  submitButtom: {
    width: 200,
    height: 60,
  }
});
