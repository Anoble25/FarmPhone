import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { Constants, Audio} from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Farm Phone</Text>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.buttonStyles} 
            onPress={async() => {
            
              
              try {
                await Audio.setIsEnabledAsync(true);
                const sound = new Audio.Sound();
                await sound.loadAsync(require('./assets/moo.wav'));
                await sound.playAsync();
              } catch(error){
                console.error(error);
              }
            }}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/cat.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 1 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/pig.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 2 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/cow.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 3 </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/horse.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 4 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/goat.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 5 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/dog.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 6 </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/rooster.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 7 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/sheep.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 8 </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <ImageBackground style={styles.catImage} source={require("./assets/img/cat.png")} resizeMode="stretch">
              <Text style={styles.buttonText}> 9 </Text>
            </ImageBackground>
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
    backgroundColor: '#35605a',
    alignItems: 'center',
    //justifyContent: 'center',
  },
 
  catImage:{
    flex:1, 
    alignSelf:'stretch',
    height: 100, 
    width: 110,
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
