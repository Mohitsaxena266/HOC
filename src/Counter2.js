import React, {Component} from 'react';
import {View, Button} from 'react-native';
import HOC from '../src/HOC';
export class Counter2 extends Component {
  render() {
    const {count, incrementCount} = this.props;
    return (
      <View>
        <Button
          title={` Counter 2 Clicked ${count} Times`}
          onPress={incrementCount}
        />
      </View>
    );
  }
}
export default HOC(Counter2);
