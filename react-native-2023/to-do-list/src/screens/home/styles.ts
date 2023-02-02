import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  viewLogo: {
    height: 230,
    backgroundColor: '#0D0D0D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {},
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 4
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -30,
    marginBottom: 42,
    paddingHorizontal: 24
  },
  containerInfo: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 21
  },
  containerInfoDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfo: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  textCount: {
    fontSize: 14,
    backgroundColor: '#808080',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: '#D9D9D9'
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#808080'
  },
  containerEmpty: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoEmpty: {
    marginTop: 25,
    marginBottom: 16
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  }
});
