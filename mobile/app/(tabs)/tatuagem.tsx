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
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#F5F5F5', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FF3366', 
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#333333', 
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666666', 
  },
  piercingsSection: {
    marginBottom: 24,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF', 
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FF6600', 
    fontWeight: 'bold',
    marginBottom: 10,
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
    borderWidth: 2,
    borderColor: '#FF3366', 
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF', 
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
