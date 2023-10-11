import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, ImageBackground } from 'react-native';

const brasil = {uri: 'https://revistatrip.uol.com.br/upload/2019/09/5d8549aaae81a/2373x1334x1900x680x232x328/foto-site.jpg'}

const perfilPhoto = {uri: 'https://i.pinimg.com/564x/50/14/3d/50143d7405c2ae31df0d2c2655059f98.jpg'}

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground 
        source={brasil}
        style={styles.imagebkg}
        resizeMode='cover'
      >
      <Text style={styles.titleText}>Cartera de Motorista</Text>
      </ImageBackground>

      <Text style={styles.infoText}>NOME: LULU GAMEPLAYS</Text>
      <Text style={styles.infoText}>CAT HAB: PQP</Text>
      <Text style={styles.infoText}>NACIONALIDADE: BAIANO</Text>
      <Text style={styles.infoText}>
        VALIDADE:
        <Text style={{ fontWeight: "bold", color: "red" }}> sim</Text>
      </Text>

      <Image
        style={styles.photo}
        source={perfilPhoto}
      />
      <Pressable style={styles.buttonContainer}>
        <Button 
          title="Exportar"
          onPress={() => alert('Exportando... confia')}
        />
      </Pressable>

      <Pressable style={styles.buttonContainer}>
        <Button 
          title="Remover"
          onPress={() => alert('É brinks')}
        />
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15800c',
    alignItems: 'center',
  },
  imagebkg: {
    width: 400,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    opacity: 0.9,
  },
  titleText: {
    fontFamily: "sans-serif",
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  
  infoText: {
    backgroundColor: 'white',
    fontFamily: "sans-serif",
    alignSelf: "flex-start",
    marginLeft: 50,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 1,
    width: 300,
  },
  photo: {
    width: 310,
    height: 280,
    marginTop: 30,
    borderColor: "lightblue",
    borderWidth: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: 300,
  },
});
