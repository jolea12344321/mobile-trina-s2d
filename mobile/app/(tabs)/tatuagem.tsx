import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'; // ✅ só o Text

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
  'blackwork',
  'Bordada',
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
    

      
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/tattoo.png')}
          style={styles.reactLogo}
          resizeMode="cover"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.piercingTitle}>𝑻𝒂𝒕𝒕𝒐𝒐</Text>
          <Text style={styles.headerText}>
          𝖭𝗈𝗌𝗌𝗈𝗌 𝗉𝗋𝗈𝖿𝗂𝗌𝗌𝗂𝗈𝗇𝖺𝗂𝗌 𝗌𝖺̃𝗈 𝖺𝗅𝗍𝖺𝗆𝖾𝗇𝗍𝖾 𝗊𝗎𝖺𝗅𝗂𝖿𝗂𝖼𝖺𝖽𝗈𝗌, 𝖼𝗎𝗂𝖽𝖺𝗆 𝖽𝗈 𝗌𝖾𝗎 𝖻𝖾𝗆 𝖾𝗌𝗍𝖺𝗋 𝖽𝗎𝗋𝖺𝗇𝗍𝖾 𝖺 𝗌𝗎𝖺 𝗌𝖾𝖼̧𝖺̃𝗈, 𝖾 𝖼𝗎𝗂𝖽𝖺𝗆 𝗉𝖺𝗋𝖺 𝗊𝗎𝖾 𝗏𝗈𝖼𝖾̂ 𝖼𝗈𝗇𝗌𝗂𝗀𝖺 𝗍𝖾𝗋 𝗎𝗆 𝖾𝖿𝖾𝗂𝗍𝗈 𝖽𝖾𝗌𝖾𝗃𝖺𝖽𝗈.
          </Text>
        </View>
      </View>

      {Object.keys(tattooData).map((category) => (
        <View style={styles.categoryContainer} key={category}>
          <Text style={styles.sectionTitle}>Tatuagens {category}</Text>
          <Text style={styles.sectionSubtitle}>Feitas por Milena</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tattooData[category].map(({ id, url }) => (
              <View key={id} style={styles.imageContainer}>
                <Image
                  source={{ uri: url }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#000',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FF0090',
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 16,
  },
  reactLogo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  headerTextContainer: {
    marginTop: 12,
  },
  piercingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0090',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 20,
  },
  highlightText: {
    color: '#FF3366',
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginBottom: 24,
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FF0090',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF3366',
    marginRight: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
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
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
});
