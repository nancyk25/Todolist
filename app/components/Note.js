import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity 
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      //Use a key to keep track of each note
      <View key={this.props.keyval} style={styles.note}>

      <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>

      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>D</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});