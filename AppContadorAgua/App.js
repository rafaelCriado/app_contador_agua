import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, Alert } from 'react-native';
import styles from './src/css/Style';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = { meta: 3000, consumido: 0, status: 'Ruim', pct: 0};
  }

  pctConsumido = (valorConsumido)=>{
      return Math.floor((valorConsumido*100)/this.state.meta);
  }

  defineStatus = (pctConsumido)=>{
      if(pctConsumido<70) return 'Ruim';
      if(pctConsumido >=70 && pctConsumido <=100) return 'Bom';
      if(pctConsumido > 100) return 'Ótimo';
  }

  addCopo = () => {
    let s = this.state;
    
    s.consumido += 200;
    s.pct = this.pctConsumido(s.consumido);
    s.status = this.defineStatus(s.pct);

    this.setState({
      'consumido' : s.consumido,
      'pct': s.pct,
      'status': s.status
    });
  }

  render(){
    return(
      <View style={styles.body}>
        <ImageBackground source={require('./src/images/waterbg.png')} style={styles.bgimage}>
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaDado}>{this.state.meta}ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctTexto}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" style={styles.btnAdicionar} onPress={this.addCopo} color="#841584"></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

