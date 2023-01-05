import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bank: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  titles: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    width: '98%',
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
    padding: 10,
    fontSize: 15,
  },
  viewContainer: {
    alignItems: 'center',
  },
  limiteArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  limiteTexto: {
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: 10,
  },
  areaEstudante: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estudante: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 5,
  },
  botao: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  pickerSexo: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
export default styles;
