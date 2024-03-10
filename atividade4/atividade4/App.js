import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';//barra de notificação



function App() {
  return (
    <SafeAreaProvider style={estilos.container}>
      <View style = {estilos.divmae}>
        <View style = {estilos.top}>
          <Image style = {estilos.tamanho} source = {require('./assets/iconeimg.webp')}/>
        </View>
        <View style={estilos.sepa}>
         <Image style={estilos.img1} source={require('./assets/pitmonster.jpg')} />
         <Image style={estilos.img1} source={require('./assets/pitmonster.jpg')} />
        </View>
        <View style={estilos.cepa2}>
           <Image style={estilos.img1} source={require('./assets/gatinhofofo.jpg')} />
           <Image style={estilos.img1} source={require('./assets/gatinhofofo.jpg')} />
           <Image style={estilos.img1} source={require('./assets/gatinhofofo.jpg')} />
        </View>
        <View style={estilos.sepa}>
          <TouchableOpacity style={estilos.curtir}>
            <Text>Selecionar</Text>
          </TouchableOpacity>    
          <TouchableOpacity style={estilos.curtir}>
            <Text>Cancelar</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={estilos.curtir}>
            <Text>Enviar</Text>
          </TouchableOpacity>   
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
    width:100,
    height:100,
    

  },
  top:{
     alignItems:'center',
     marginBottom:40,
     

     
    
    

  },
  divmae:{
    gap:10,
    alignItems:'center'
  },
  tamanho:{
    width:40,
    height:40,
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
    flexDirection: 'row',
    gap:20,
    
    

  },
  cepa2:{
    flexDirection: 'row',
    gap:20,alignItems:'center',
    alignContent:'center',
    

  },
});

export default App;
