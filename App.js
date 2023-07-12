import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/apps/Caculadora/components/Button';
import Display from './src/apps/Caculadora/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={ this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/'  operation onClick={() => this.setOperation('/') } />
          <Button label='7'  onClick={() => this.addDigit(7) } />
          <Button label='8'  onClick={() => this.addDigit(8) } />
          <Button label='9'  onClick={() => this.addDigit(9) } />
          <Button label='*'  onClick={() => this.addDigit('*')} />
          <Button label='4'  onClick={() => this.addDigit('4')} />
          <Button label='5' />
          <Button label='6' />
          <Button label='-' />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' />
          <Button label='0' double onClick={() => this.addDigit('0') } />
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