import { StyleSheet } from 'react-native';

const width = {
  single: 30,
  double: 62
}

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  tile: {
    borderWidth: 1,
    margin: 1,
    padding: 5,
    width: width.single,
    textAlign: 'center'
  },
  doubleTile: {
    width: width.double
  }
});