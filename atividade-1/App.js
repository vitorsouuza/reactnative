import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; //barra de notificação

function App() {
  return (
    <SafeAreaProvider style={estilos.container}>
      <View>
        <View >
          <Image style={estilos.kh} source={require('./assets/neymar.jpg')} />
        </View>
        <Text style={estilos.texto}> Deseja nome: neymar</Text>,
        <Text style={estilos.texto}> Deseja o que e: atleta </Text>,
        <Text style={estilos.texto}> Deseja fazer o que ?</Text>,
        <View>
          <Button title="Editar perfil" />,
        </View>
        <View>
          <Button title="Enviar mensaguem" />,
        </View>
        <View>
          <Button title="Seguir" />,
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kh : {
     flex:1,
     width: '300px',
     height: '300px',
     alignItems:'center',
    
    
  },


  texto: {
    color: 'red',
    fontSize: '24',
  },
});

export default App;
