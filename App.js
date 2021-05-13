/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

import Counter1 from './src/Counter1';
import Counter2 from './src/Counter2';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>This is a Example OF HIGH ORDER COMPONENT</Text>
        <Counter1 />
        <Counter2 />
        {/* <Counter2 /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
