import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Título centralizado */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Arte na Pele, Estilo na Alma.</ThemedText>
      </ThemedView>

      {/* Caixas de texto separadas */}
      <ThemedView style={styles.boxContainer}>
        <ThemedView style={styles.box}>
          <ThemedText type="subtitle">+350 prêmios ao longo dos anos</ThemedText>
        </ThemedView>
        <ThemedView style={styles.box}>
          <ThemedText type="subtitle">+100 profissionais marcaram nossa história</ThemedText>
        </ThemedView>
        <ThemedView style={styles.box}>
          <ThemedText type="subtitle">+1000 Clientes satisfeitos</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Imagem no canto inferior direito */}
      <Image
        source={require('@/assets/images/pg1.png')} 
        style={styles.bottomRightImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centraliza verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
    backgroundColor: '#000',  // Fundo escuro para destacar o conteúdo
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,  // Espaço abaixo do título
    alignItems: 'center',  // Centraliza o título
  },
  boxContainer: {
    marginBottom: 20,  // Espaço entre as caixas de texto e a imagem
    gap: 10,  // Espaço entre as caixas
  },
  box: {
    backgroundColor: '#FF0090',  // Fundo semitransparente
    borderColor: '#FF0090',  // Borda rosa
    borderWidth: 2,  // Largura da borda
    borderRadius: 10,  // Bordas arredondadas
    padding: 15,
    marginBottom: 10,  // Espaço entre as caixas
    alignItems: 'center',  // Centraliza o texto dentro de cada caixa
  },
  bottomRightImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 300, 
    height: 350, 
    resizeMode: 'contain',
  },
});
