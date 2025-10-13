import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Importar o JSON local
import tattoosData from './.vscode/tattoos.json';  // Ajuste o caminho conforme necessário

export default function HomeScreen() {
  const [tattooData, setTattooData] = useState<{ [key: string]: string[] }>({});
  const [loading, setLoading] = useState(false);  // Para mostrar o status de carregamento

  useEffect(() => {
    // Simula o carregamento dos dados
    setLoading(true);
    setTattooData(tattoosData);  // Carrega os dados do arquivo local
    setLoading(false);  // Dados carregados
  }, []);

  // Se os dados estiverem carregando, mostra uma mensagem de carregamento
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titleLogo}>Trina’s{'\n'}Studio</Text>
      </View>

      {/* Renderização das categorias de tatuagens */}
      {Object.keys(tattooData).map((category) => (
        <View style={styles.section} key={category}>
          <Text style={styles.sectionTitle}>Tatuagens {category}</Text>
          <Text style={styles.sectionSubtitle}>Feitas por artistas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tattooData[category].map((url, index) => (
              <Image key={index} source={{ uri: url }} style={styles.image} />
            ))}
          </ScrollView>
        </View>
      ))}

      {/* Link "Explore Mais" */}
      <View style={styles.stepContainer}>
        <Link href="/modal">
          <Text style={styles.linkText}>Explore Mais</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingBottom: 40,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleLogo: {
    color: '#ff0080',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#000',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'serif',
    textTransform: 'lowercase',
    marginBottom: 5,
  },
  sectionSubtitle: {
    color: '#999',
    fontSize: 13,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#222',
  },
  stepContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  linkText: {
    fontSize: 16,
    color: '#ff0080',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: '#ff0080',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});
