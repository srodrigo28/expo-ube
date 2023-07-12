import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import Button from './src/apps/Caculadora/components/Button';
import Display from './src/apps/Caculadora/components/Display';

export default class App extends Component {
  state = {
    displayValue: '10'
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={ this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' />
          <Button label='/' />
          <Button label='7' />
          <Button label='8' />
          <Button label='9' />
          <Button label='*' />
          <Button label='4' />
          <Button label='5' />
          <Button label='6' />
          <Button label='-' />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' />
          <Button label='0' />
          <Button label='.' />
          <Button label='=' />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})