import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  task: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 5,
    // backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
