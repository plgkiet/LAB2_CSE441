// style.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 40,
  },
  display: {
    fontSize: 48,
    color: '#000',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  operator: {
    backgroundColor: '#f0f0f0',
  },
  equal: {
    backgroundColor: '#ffa500',
  },
});
