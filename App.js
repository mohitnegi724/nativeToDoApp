import React, {useState} from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';
import NoToDo from './components/NoToDo'
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn DS and Algo', key: '1' },
    { text: 'Learn New Skills', key: '2' },
    { text: 'Learn Photography', key: '3' },

    { text: 'Learn DS and Algo', key: '1scae' },
    { text: 'Learn New Skills', key: '245' },
    { text: 'Learn Photography', key: 'sc' },
    { text: 'Learn DS and Algo', key: 'scscsc' },
    { text: 'Learn New Skills', key: 'scsc' },
    { text: 'Learn Photography', key: 'crd' },
    { text: 'Learn DS and Algo', key: 'dwerx' },
    { text: 'Learn New Skills', key: 'wfetf' },
    { text: 'Learn Photography', key: 'segrfs' }
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
        <View style={styles.subContainer}>
          {/* To Do Form */}
          <ToDoForm addToDoHandler={val=>handleNewToDo(val)}/>
          {/* list */}
          {todos.length?<FlatList
            style={styles.toDoList}
            data={todos}
            renderItem={({item})=>
            <ToDoItem item={item} pressHandler={pressHandler}/>
            }
          />: <NoToDo/>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  toDoList: {
    flex: 1,
    padding: 20
  }
});
