import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


const avaliacoes = [
  {
    titulo: "Milho da Larrisa Manoela",
    descricao: "Meu pai conseguiu me enviar o pix e comprei um milhinho, muito bom! Recomendo a todes.",
    img: "https://i.pinimg.com/564x/8d/fa/a5/8dfaa55e8d4ea1c05707f0e12d6ce848.jpg",
    nota: 10
  },
  {
    titulo: "Coca-cola normal",
    descricao: "É realmente uma coca-cola normal, não tem muito o que falar.",
    img: "https://i.pinimg.com/564x/be/dd/ea/beddeaadf496a3b78eeabe3089a35002.jpg",
    nota: 7
  },
  {
    titulo: "Assalto",
    descricao: "É um carro-chefe da praia do RJ, mas não gostei muito. Achei meio salgado.",
    img: "https://i.pinimg.com/564x/6d/2f/53/6d2f53b24c9c021ac7bd38ce873adc4e.jpg",
    nota: 4
  }
];

function Avaliacao(props) {
  return(
    <View style={avalStyle.container}>
      <Image style={avalStyle.img} source={{uri: props.img}}/>
      <View style={avalStyle.textContainer}>
        <Text style={avalStyle.title} >{props.title}</Text>
        <Text style={avalStyle.descricao} >{props.descricao}</Text>
        <Text style={avalStyle.nota} >{`Nota: ${props.nota}/10`}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Avaliações de comidas da praia do RJ</Text>

      {
        avaliacoes.map((avaliacao) =>
          <Avaliacao 
            title={avaliacao.titulo}
            img={avaliacao.img}
            descricao={avaliacao.descricao}
            nota={avaliacao.nota}
          />
        )
                
      }

      <StatusBar style="auto" />
    </View>
  );
}

const avalStyle = StyleSheet.create({
  container: {
    marginHorizontal: 60,
    flexDirection: 'row',

    
    borderColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  img: {
    width: '40%',
    height: '100%'
  },
  textContainer: {
    width: '100%',
    padding: 10,
    gap: 5
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  descricao: {
    fontSize: 12,
    textAlign: 'justify',
  },
  nota: {
    textAlign: 'center',
  }
})

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    color: 'purple',
  }
});
