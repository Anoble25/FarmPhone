import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Farm Phone</Text>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 3 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 6 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> 9 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap:'nowrap',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 70,
  },
  row1: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems:'flex-start',
  },
  row2: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
  },
  row3: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
  },
  // buttonRow: {
  //   flex:1,
  //   // flexDirection: 'row',
  //   //alignItems: 'flex-start',
  //   //borderColor: '#ffffff',
  //   borderBottomWidth: 1
  // },
  buttonStyles:{
    flexGrow: 1,
    backgroundColor: '#35605a',
    width: undefined,
    height: undefined,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 130
  }
});
