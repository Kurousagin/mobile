import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput, ImageBackground } from 'react-native';
const image = { uri: "https://th.bing.com/th/id/OIP.GSmmzqETyw91BG-LvE7Y7AHaFj?pid=ImgDet&rs=1" };

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('Sua mãe acertou ontem, na cama!');
  }

  render() {
    return (
      <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonContainer}>
        
          <TextInput
            style={{
              height: 40,
              borderColor: 'white',
              borderWidth: 1, 
            }}
            placeholder="User/emai-l!"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'white',
              borderWidth: 1,
            }}
            placeholder="senha!"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="cadastrar!"
            color="#841584"
          />
          <Button onPress={this._onPressButton} title="entrar" />
        </View>
         </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    image: {
    flex: 1,
    justifyContent: "center"
  },
});
