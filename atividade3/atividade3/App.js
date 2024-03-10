import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('Tema Claro');

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <View style={[styles.container, selectedTheme === 'Tema Escuro' && styles.darkTheme]}>
      <Text style={styles.title}>Configurações de Tema</Text>

      <TouchableOpacity
        style={[
          styles.themeOption,
          selectedTheme === 'Tema Claro' && styles.selectedOption,
        ]}
        onPress={() => handleThemeSelection('Tema Claro')}
      >
        <Image
          source={require('./assets/snack-icon.png')}
          style={styles.themeImage}
        />
        <Text style={styles.themeText}>Tema Claro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.themeOption,
          selectedTheme === 'Tema Escuro' && styles.selectedOption,
          selectedTheme === 'Tema Escuro' && styles.darkOption,
        ]}
        onPress={() => handleThemeSelection('Tema Escuro')}
      >
        <Image
          source={require('./assets/snack-icon.png')}
          style={styles.themeImage}
        />
        <Text style={styles.themeText}>Tema Escuro</Text>
      </TouchableOpacity>
      <Image  style={styles.gatinho} source={require('./assets/gatinhofofo.jpg')} />
      <View style ={styles.alinhar}>
        <TouchableOpacity
          style={[styles.themeOption,]}
          
        >
          <Image
            source={require('./assets/gatinhofofo.jpg')}
            style={styles.themeImage}
          />
          <Text style={styles.themeText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[styles.themeOption,]}
        >
        
          <Image
            source={require('./assets/gatinhofofo.jpg')}
            style={styles.themeImage}
          />
          <Text style={styles.themeText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  darkTheme: {
    backgroundColor: '#000', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red', 
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff', 
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  darkOption: {
    backgroundColor: '#555', 
  },
  themeImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  themeText: {
    fontSize: 16,
    color: '#000', 
  },
  gatinho:{
    width:150,
    height:150,
    borderRadius:20,
    margin:50,
    backgroundColor: '#e8e8e8',
    borderColor: '#ffe2e2',
    borderWidth: 9,
  },
  alinhar:{
    flexDirection: 'row',
    margin:20,
    gap:20,

  }
});

export default App;