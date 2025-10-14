import { Image } from 'expo-image';
import { Platform, StyleSheet, View, FlatList, Text } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

const carouselData = [
  { id: '1', image: require('@/assets/images/piercing1.png'), title: 'Piercing 1' },
  { id: '2', image: require('@/assets/images/piercing.png'), title: 'Piercing 2' },
  { id: '3', image: require('@/assets/images/piercing.png'), title: 'Piercing 3' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/piercing.png')}
            style={styles.reactLogo}
            resizeMode="cover"
          />
          <View style={styles.headerTextContainer}>
            <ThemedText style={styles.piercingTitle}>piercings</ThemedText>
            <ThemedText style={styles.headerText}>
              Trabalhamos com a aplicação profissional de piercings, utilizando joias de alta qualidade para garantir a segurança e excelência no procedimento.
              ABAIXO, confira alguns dos piercings disponíveis em nosso catálogo.
            </ThemedText>
          </View>
        </View>
      }
    >
      {/* Carrossel simples */}
      <View style={styles.carouselContainer}>
        <FlatList
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
              <ThemedText style={styles.carouselTitle}>{item.title}</ThemedText>
            </View>
          )}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
  },
  reactLogo: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerTextContainer: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    maxWidth: '50%',
  },
  piercingTitle: {
    color: 'pink',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'right',
  },
  carouselContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  carouselImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  carouselTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});