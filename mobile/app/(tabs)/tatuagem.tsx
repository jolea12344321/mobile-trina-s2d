import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [tattooData, setTattooData] = useState({
    colored: [],
    realistic: [],
    minimalist: []
  });

  // Função para buscar os dados da API
  useEffect(() => {
    async function fetchTattooData() {
      try {
        // Aqui você deve colocar a URL da sua API
        const response = await fetch('https://api.exemplo.com/tatuagens');
        const data = await response.json();

        // Supondo que a resposta tenha os dados para cada categoria de tatuagem
        setTattooData({
          colored: data.colored,
          realistic: data.realistic,
          minimalist: data.minimalist
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchTattooData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Trina's Studio</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.subtitle}>Tatuagens</ThemedText>
        <ThemedText style={styles.description}>
          Nossos profissionais são altamente qualificados, cuidam do seu bem-estar durante a sua seção, e cuidam para que você consiga ter o efeito desejado.
        </ThemedText>
      </ThemedView>

      {/* Seções de tatuagens */}
      <ThemedView style={styles.piercingsSection}>
        <ThemedText style={styles.sectionTitle}>Tatuagens Coloridas</ThemedText>
        <View style={styles.imageRow}>
          {tattooData.colored.map((imageUrl, index) => (
            <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.piercingsSection}>
        <ThemedText style={styles.sectionTitle}>Tatuagens Realistas</ThemedText>
        <View style={styles.imageRow}>
          {tattooData.realistic.map((imageUrl, index) => (
            <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.piercingsSection}>
        <ThemedText style={styles.sectionTitle}>Tatuagens Minimalistas</ThemedText>
        <View style={styles.imageRow}>
          {tattooData.minimalist.map((imageUrl, index) => (
            <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
          ))}
        </View>
      </ThemedView>

      {/* Link para outras seções */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText style={styles.linkText}>Explore Mais</ThemedText>
          </Link.Trigger>
        </Link>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#F5F5F5', 
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    color: '#FF3366', 
    fontWeight: 'bold',
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
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF3366', 
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF', 
    fontWeight: 'bold',
  },
});
