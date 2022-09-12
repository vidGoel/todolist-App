import React ,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/tasks';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    //Keyboard.dismiss();
    setTaskItems([...taskItems, task])
   setTask(null);

  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }



  return (
    <View style={styles.container}>
      <View style ={styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Tasks</Text>
        <View style = {styles.items}>

        {
          taskItems.map((item, index) => {
            return (
             <TouchableOpacity Key = { index} onPress={() =>completeTask(index)}>
              <Task  text ={item} />
             </TouchableOpacity>
            )
            
          }
          
        )}
         {/* <Task text={'task1'}/>
        <Task text={'task2'}/>  */}


        </View>
        
     

      </View>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? 'height' : "padding"}
      style = {styles.writeTask} >
        <TextInput style = {styles.input} placeholder = {'write a task'} value={task} onChangeText ={text => setTask(text)}/>

        <TouchableOpacity onPress={() =>handleAddTask()}>
          <View style ={styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
    
  },
  sectionTitle:{
    fontSize :25,
    fontWeight : 'bold',
    textAlign: 'center',

  },
  items:{
    marginTop : 30,


  },
  addText:{

  },
  addWrapper:{
    width: 60,
    height :60,
    backgroundColor : 'offwhite',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth : 1,


  },
  input:{
    paddingVertical: 15,
    paddingHorizontal : 15,
    backgroundColor : 'cream',
    borderRadius: 60,
    borderColor:'black',
    borderWidth : 1,
    width : 250,


  },
  writeTask:{
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',

  },
});
