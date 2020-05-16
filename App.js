import React, {useState} from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 }
  ]);

  const pressHandler=key=>{
    setTodos(prevToDos=>{
      return prevToDos.filter(todo=>todo.key!== key)
    })
  }
  const handleNewToDo=val=>{
    if(val.length>2){
      setTodos(prevToDos=> [
        {
          text: val,
          key: Math.random().toString()
        },
          ...prevToDos
        ]
      )
    }else {
      Alert.alert(
        'Minimum 3 Characters required!',
        `${val} is less than 2`,
        [
          {
            text: 'Understood',
          }
        ]
      )
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>
        {/* To Do Form */}
        <ToDoForm addToDoHandler={val=>handleNewToDo(val)}/>
        {/* list */}
        <FlatList
          style={styles.toDoList}
          data={todos}
          renderItem={({item})=>
          <ToDoItem item={item} pressHandler={pressHandler}/>
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  toDoList: {
    padding: 20,
  }
});
