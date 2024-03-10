import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';//barra de notificação



function App() {
  return (
    <SafeAreaProvider style={estilos.container}>
      <View>
        <View style = {estilos.top}>
          <Text>Galeria de Fotos</Text>
        </View>
        <View style={estilos.sepa}>
         <Image style={estilos.img1} source={require('./assets/pitmonster.jpg')} />
         <View style={estilos.botoes}>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Curtir</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Comentar</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Compartilhar</Text>
          </TouchableOpacity>
         </View>
        </View>
         <View style={estilos.sepa}>
         <Image style={estilos.img1} source={require('./assets/gatinhofofo.jpg')} />
         <View style={estilos.botoes}>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Curtir</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Comentar</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {estilos.curtir}>
            <Text>Compartilhar</Text>
          </TouchableOpacity>
         </View>
        </View>
      </View>

    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77867F',
    alignItems: 'center',
    
  },
  img1:{
    height:'180px',
    width: '180px',
    justifyContent:'center',
    borderRadius: 10,

  },
  top:{
     alignItems:'center',
     marginBottom:40,

     
    
    

  },
  curtir:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width:90,
    paddingHorizontal: 10, // Adicionando padding horizontal separadamente
    shadowColor: '#4B296B', // Definindo a cor da sombra
    shadowOffset: { width: 1, height: 5 }, // Offset da sombra
    shadowRadius: 50, // Raio da sombra
    shadowOpacity: 200, // Opacidade da sombra
    backgroundColor: '#e8e8e8',
    borderColor: '#ffe2e2',
    borderWidth: 9,
    borderRadius: 35,
  

  },
  sepa:{
    alignItems:'center',
    alignContent:'center',
    

  },
  botoes:{
    
    flexDirection: 'row',
    margin:20,
    gap:20,
    
  


  }

});

export default App;
