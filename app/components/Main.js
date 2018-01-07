import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Note from './Note';

export default class Main extends React.Component {
  //constructor runs everytime the Component is instantiated in the App
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: ''
    }
  }

  render() {
    //pass down all props to Note component here:

    let notes = this.state.noteArray.map((val,key) => {
      return <Note 
      key={key} 
      keyval={key} 
      val={val}
      deleteMethod = {() => this.deleteNote(key)}/>
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}> TODO LIST </Text>
        </View>

        <ScrollView styles={styles.scrollContainer}>

        </ScrollView>

        <View style={styles.footer}>

          <TextInput
          style={styles.textInput}
          onChangeText={(noteText) => this.setState({noteText})}
          value={this.state.noteText}
          placeholder='note'
          placeholderTextColor='white'>
          </TextInput>

        </View>

        <TouchableOpacity 
        style={styles.addButton}
        onPress={this.addNote.bind(this)}
        >
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>

      </View>
    );
  }
  addNote(){
    alert('test');
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});