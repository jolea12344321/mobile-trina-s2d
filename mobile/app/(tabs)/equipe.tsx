import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const router = useRouter();

  function handleNavigate(name: string) {
    const piercers = ["Patrícia Alves", "Yumi Lira", "Bianca Almeida"];
    const tattooArtists = ["Julia de Assis", "Milena dos Santos", "Giovanna Verissimo"];

    if (piercers.includes(name)) {
      router.push(`/piercing?artist=${encodeURIComponent(name)}`);
    } else if (tattooArtists.includes(name)) {
      router.push(`/tatuagem?artist=${encodeURIComponent(name)}`);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000', dark: '#000' }}
      headerImage={
        <View style={styles.headerWrapper}>
          <Image
            source={require('@/assets/images/equipe.png')}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.headerText}>
              Com mais de 30 anos de mercado, a Trina's Studio é composta por uma
              equipe de tatuadores e body piercers, especialistas em diferentes
              tipos de tatuagem e piercing.
            </Text>
          </View>
        </View>
      }
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>
          𝑃𝑟𝑜𝑓𝑖𝑠𝑠𝑖𝑜𝑛𝑎𝑖𝑠
        </ThemedText>
      </ThemedView>

      <View style={styles.cardsContainer}>
        {[
          { name: 'Milena dos Santos', img: require('@/assets/images/milena.png') },
          { name: 'Julia de Assis', img: require('@/assets/images/jolea.png') },
          { name: 'Giovanna Verissimo', img: require('@/assets/images/giovanna.png') },
          { name: 'Patrícia Alves', img: require('@/assets/images/fernanda.png') },
          { name: 'Yumi Lira', img: require('@/assets/images/yumi.png') },
          { name: 'Bianca Almeida', img: require('@/assets/images/bianca.png') },
        ].map((artist) => (
          <View key={artist.name} style={styles.card}>
            <Image source={artist.img} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{artist.name}</Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleNavigate(artist.name)}
              >
                <Text style={styles.cardButtonText}>Ver trabalho</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 25,
    color: '#FF0090',
  },
  headerWrapper: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'right',
    fontStyle: 'italic',
    lineHeight: 22,
    width: '80%',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  card: {
    height: 180,
    width: (screenWidth / 2) - 22,
    marginBottom: 15,
    marginHorizontal: 6,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardBody: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: '#FF0090',
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
