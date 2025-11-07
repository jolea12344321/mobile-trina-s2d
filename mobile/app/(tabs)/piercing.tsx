import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';

const fixedCarouselData1 = [
  { id: '1', image: require('@/assets/images/piercing1.png') },
  { id: '2', image: require('@/assets/images/microdermal.jpg') },
  { id: '3', image: require('@/assets/images/costas.jpg') },
  { id: '4', image: require('@/assets/images/colar.jpg') },
];

const fixedCarouselData2 = [
  { id: '1', image: require('@/assets/images/septo.jpg') },
  { id: '2', image: require('@/assets/images/boca.jpg') },
  { id: '3', image: require('@/assets/images/orelha.png') },
  { id: '4', image: require('@/assets/images/nariz.png') },
];

const fixedCarouselData3 = [
  { id: '1', image: require('@/assets/images/orelha.jpeg') },
  { id: '2', image: require('@/assets/images/umbigo.jpeg') },
  { id: '3', image: require('@/assets/images/septo2.jpeg') },
  { id: '4', image: require('@/assets/images/naosei.jpeg') },
  { id: '5', image: require('@/assets/images/bola.jpeg') },
  { id: '6', image: require('@/assets/images/triangulo.jpeg') },
];

const fixedCarouselData4 = [
  { id: '1', image: require('@/assets/images/gato.jpeg') },
  { id: '2', image: require('@/assets/images/flores.jpeg') },
  { id: '3', image: require('@/assets/images/anel.jpeg') },
  { id: '4', image: require('@/assets/images/flor.jpeg') },
  { id: '5', image: require('@/assets/images/mosquito.jpeg') },
  { id: '6', image: require('@/assets/images/sla.jpeg') },
];

function Carousel1() {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={fixedCarouselData1}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

function Carousel2() {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={fixedCarouselData2}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

function Carousel3() {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={fixedCarouselData3}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

// 🔹 Novo carrossel (sem título)
function Carousel4() {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={fixedCarouselData4}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/piercing.png')}
            style={styles.reactLogo}
            resizeMode="cover"
          />
          <View style={styles.headerTextContainer}>
            <ThemedText style={styles.piercingTitle}>𝐏𝐢𝐞𝐫𝐜𝐢𝐧𝐠𝐬</ThemedText>
            <ThemedText style={styles.headerText}>
              𝒯𝑟𝑎𝑏𝑎𝑙ℎ𝑎𝑚𝑜𝑠 𝑐𝑜𝑚 𝑎 𝑎𝑝𝑙𝑖𝑐𝑎ç𝑎𝑜 𝑝𝑟𝑜𝑓𝑖𝑠𝑠𝑖𝑜𝑛𝑎𝑙 𝑑𝑒 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔𝑠,
              𝑢𝑡𝑖𝑙𝑖𝑧𝑎𝑛𝑑𝑜 𝑗𝑜𝑖𝑎𝑠 𝑑𝑒 𝑎𝑙𝑡𝑎 𝑞𝑢𝑎𝑙𝑖𝑑𝑎𝑑𝑒 𝑝𝑎𝑟𝑎 𝑔𝑎𝑟𝑎𝑛𝑡𝑖𝑟 𝑎 𝑠𝑒𝑔𝑢𝑟𝑎𝑛ç𝑎 𝑒
              𝑒𝑥𝑒𝑙𝑒𝑛𝑐𝑖𝑎 𝑛𝑜 𝑝𝑟𝑜𝑐𝑒𝑑𝑖𝑚𝑒𝑛𝑡𝑜.
              <ThemedText style={styles.highlightText}> 𝐀𝐁𝐀𝐈𝐗𝐎, </ThemedText>
              𝑐𝑜𝑛𝑓𝑖𝑟𝑎 𝑎𝑙𝑔𝑢𝑛𝑠 𝑑𝑜𝑠 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔𝑠 𝑑𝑖𝑠𝑝𝑜𝑛𝑖𝑣𝑒𝑖𝑠 𝑒𝑚 𝑛𝑜𝑠𝑠𝑜 𝑐𝑎𝑡𝑎𝑙𝑜𝑔𝑜.
            </ThemedText>
          </View>
        </View>
      }
    >
      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>Piercings microdermals</ThemedText>
        <ThemedText style={styles.carouselSubtitle}>Feitas por Bianca Almeida e Yumi Lira </ThemedText>
      </View>
      <Carousel1 />

      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>Piercings Faciais</ThemedText>
        <ThemedText style={styles.carouselSubtitle}>Feitas por Patricia </ThemedText>
      </View>
      <Carousel2 />

      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>Joias disponiveis</ThemedText>
        <ThemedText style={styles.carouselSubtitle}></ThemedText>
      </View>
      <Carousel3 />

      {/* 🔹 Novo carrossel sem título */}
      <Carousel4 />
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
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  piercingTitle: {
    color: '#FF0090',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'left',
    lineHeight: 22,
  },
  highlightText: {
    color: 'pink',
    fontWeight: 'bold',
  },
  carouselTitleContainer: {
    width: '100%',
    marginBottom: 10,
    paddingRight: 90,
  },
  carouselHeaderTitle: {
    fontSize: 25,
    fontFamily: 'italiana',
    color: '#FF0090',
    textAlign: 'left',
  },
  carouselSubtitle: {
    fontSize: 15,
    fontFamily: 'italiana',
    color: '#CCC',
    textAlign: 'left',
    marginBottom: 10,
  },
  carouselContainer: {
    width: '100%',
    paddingLeft: 10,
    marginBottom: 20,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  carouselImage: {
    width: 180,
    height: 150,
    borderRadius: 10,
  },
});