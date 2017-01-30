import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Board from './Board';
import LetterKeyBoard from './LetterKeyBoard';

class AppBase extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Board/>
        <LetterKeyBoard/>
      </View>
    );
  }
}

AppBase.propTypes = {

}

export default AppBase;