import React, {Component} from 'react';
import HOC from '../src/HOC';
import {View, Button} from 'react-native';
export class Counter1 extends Component {
  render() {
    const {count, incrementCount} = this.props;
    console.log('Counter1 call');
    return (
      <View>
        <Button
          title={` Counter 1 Clicked ${count} Times`}
          onPress={incrementCount}
        />
      </View>
    );
  }
}
export default HOC(Counter1);
