import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput, Text, Switch} from 'react-native';
import styles from './styles';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      idade: '',
      limite: 250,
      estudante: false,
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
      ],
    };

    this.Abrir = this.Abrir.bind(this);
  }

  Abrir() {
    if (this.state.name === '' || this.state.idade === '') {
      alert('Preencha todos os campos corretamente');
      return;
    }
    alert(
      'Conta aberta com sucesso!! \n\n' +
        'Nome: ' +
        this.state.name +
        '\n' +
        'Idade: ' +
        this.state.idade +
        '\n' +
        'Limite: R$ ' +
        this.state.limite.toFixed(2) +
        '\n' +
        'Estudante: ' +
        (this.state.estudante ? 'Ativo' : 'Inativo') +
        '\n' +
        'Sexo: ' +
        this.state.sexos[this.state.sexo].sexoNome,
    );
  }

  render() {
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} />;
    });

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.bank}>Banco Mateus</Text>
          <Text style={styles.titles}>Nome</Text>

          <View style={styles.viewContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu nome"
              onChangeText={texto => this.setState({name: texto})}
            />
          </View>

          <Text style={styles.titles}>Idade</Text>
          <View style={styles.viewContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite sua idade"
              keyboardType="numeric"
              onChangeText={valor => this.setState({idade: valor})}
            />
          </View>

          <View style={styles.limiteArea}>
            <Text style={styles.titles}>Seu Limite:</Text>
            <Text style={styles.limiteTexto}>
              R$ {this.state.limite.toFixed(2)}
            </Text>
          </View>

          <View style={styles.areaSlider}>
            <Slider
              minimumTrackTintColor="#CF0000"
              minimumValue={250}
              maximumValue={4000}
              value={this.state.limite}
              onValueChange={valor => this.setState({limite: valor})}
            />
          </View>

          <View>
            <Text style={styles.titles}>Sexo:</Text>
            <Picker
              style={styles.pickerSexo}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sexo: itemValue})
              }>
              {sexoItems}
            </Picker>
          </View>

          <View style={styles.areaEstudante}>
            <Text style={styles.estudante}>Estudante:</Text>
            <Switch
              style={{paddingTop: 10}}
              trackColor="#00c300"
              value={this.state.estudante}
              onValueChange={valorEstudante =>
                this.setState({estudante: valorEstudante})
              }
            />
          </View>

          <TouchableOpacity
            style={styles.botao}
            underlayColor="#000000"
            onPress={this.Abrir}>
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default App;
