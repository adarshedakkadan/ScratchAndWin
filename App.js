import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { FontAwsome } from '@expo/vector-icons'

var itemsArray = new Array().fill('empty');

export default class App extends React.Component {
  render () {
    return(
    <View style={styles.container}>
      <Text>Call</Text>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
