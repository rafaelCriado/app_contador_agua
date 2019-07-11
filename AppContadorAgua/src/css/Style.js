import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body:{
      flex:1,
      paddingTop:20
    },
    bgimage:{
      flex:1,
      width:null
    },
    infoArea:{
      flex:1,
      flexDirection:'row',
      marginTop:70
    },
    area:{
      flex:1,
      alignItems:'center'
    },
    areaTitulo:{
      color: '#45b2fc',
      fontSize:20
    },
    areaDado:{
      color: '#2b4247',
      fontSize: 25,
      fontWeight: 'bold'
    },
    pctArea:{
      marginTop:200,
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    pctTexto:{
      fontSize: 80,
      color:'#fff'
    },
    btnArea:{
      marginTop:40,
      alignItems: 'center'
    },
    btnAdicionar:{
      borderRadius:15,
      backgroundColor: '#fff',
      color: '#45b2fc'
    }
});

export default styles;