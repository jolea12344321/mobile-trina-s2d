import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

type TattooItem = {
  id: string;
  url: string;
};

type TattooData = {
  [category: string]: TattooItem[];
};

const categories = [
  'colored',
  'realistic',
  'minimalist',
  'tribal',
  'geometric',
  'watercolor',
  'oldschool',
  'fineline',
  'blackwork',
  'japanese',
];

const apiBase = 'http://localhost:3000';

export default function HomeScreen() {
  const [tattooData, setTattooData] = useState<TattooData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    Promise.all(
      categories.map(async (category) => {
        const res = await fetch(`${apiBase}/${category}`);
        if (!res.ok) {
          throw new Error(`Erro ao carregar a categoria ${category}`);
        }
        const data: TattooItem[] = await res.json();
        return { category, data };
      })
    )
      .then((results) => {
        const combinedData: TattooData = {};
        results.forEach(({ category, data }) => {
          combinedData[category] = data;
        });
        setTattooData(combinedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trina’s{'\n'}Studio</Text>
      </View>

      {Object.keys(tattooData).map((category) => (
        <View style={styles.categoryContainer} key={category}>
          <Text style={styles.sectionTitle}>Tatuagens {category}</Text>
          <Text style={styles.sectionSubtitle}>Feitas por artistas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tattooData[category].map(({ id, url }) => (
              <Image
                key={id}
                source={{ uri: url }}
                style={styles.image}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
        </View>
      ))}

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
  categoryContainer: {
    marginBottom: 24,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
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
  image: {
    width: 150,
    height: 180,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF3366',
    marginRight: 10, // espaçamento entre as imagens
  },
});
