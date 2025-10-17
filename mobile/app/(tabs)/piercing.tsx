import { Image } from 'expo-image';
import { StyleSheet, View, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';

const carouselData = [
  { id: '1', image: require('@/assets/images/piercing1.png'), title: 'Piercing 1' },
  { id: '2', image: require('@/assets/images/piercing.png'), title: 'Piercing 2' },
  { id: '3', image: require('@/assets/images/piercing.png'), title: 'Piercing 3' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#000000' }}
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
              𝒯𝑟𝑎𝑏𝑎𝑙ℎ𝑎𝑚𝑜𝑠 𝑐𝑜𝑚 𝑎  𝑎𝑝𝑙𝑖𝑐𝑎ç𝑎𝑜 𝑝𝑟𝑜𝑓𝑖𝑠𝑠𝑖𝑜𝑛𝑎𝑙 𝑑𝑒 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔𝑠, 𝑢𝑡𝑖𝑙𝑖𝑧𝑎𝑛𝑑𝑜 𝑗𝑜𝑖𝑎𝑠 𝑑𝑒 𝑎𝑙𝑡𝑎 𝑞𝑢𝑎𝑙𝑖𝑑𝑎𝑑𝑒 𝑝𝑎𝑟𝑎 𝑔𝑎𝑟𝑎𝑛𝑡𝑖𝑟 𝑎 𝑠𝑒𝑔𝑢𝑟𝑎𝑛ç𝑎 𝑒 𝑒𝑥𝑒𝑙𝑒𝑛𝑐𝑖𝑎 𝑛𝑜 𝑝𝑟𝑜𝑐𝑒𝑑𝑖𝑚𝑒𝑛𝑡𝑜.
              <ThemedText style={styles.highlightText}> 𝐀𝐁𝐀𝐈𝐗𝐎, </ThemedText>
              𝑐𝑜𝑛𝑓𝑖𝑟𝑎 𝑎𝑙𝑔𝑢𝑛𝑠 𝑑𝑜𝑠 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔𝑠 𝑑𝑖𝑠𝑝𝑜𝑛𝑖𝑣𝑒𝑖𝑠 𝑒𝑚 𝑛𝑜𝑠𝑠𝑜 𝑐𝑎𝑡𝑎𝑙𝑜𝑔𝑜.
            </ThemedText>
          </View>
        </View>
      }
    >
      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>
          piercings microdermals
        </ThemedText>

        <ThemedText
  style={{
    fontSize: 15,
    fontFamily: 'italiana',
    color: '#FF0090',
    textAlign: 'left',
  }}
>
  feitas por jubiraca
</ThemedText>
      </View>

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

      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>
          piercings microdermals
        </ThemedText>

        <ThemedText
  style={{
    fontSize: 15,
    fontFamily: 'italiana',
    color: '#FF0090',
    textAlign: 'left',
  }}
>
  feitas por jubiraca
</ThemedText>
      </View>

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

      <View style={styles.carouselTitleContainer}>
        <ThemedText style={styles.carouselHeaderTitle}>
          piercings microdermals
        </ThemedText>

        <ThemedText
  style={{
    fontSize: 15,
    fontFamily: 'italiana',
    color: '#FF0090',
    textAlign: 'left',
  }}
>
  feitas por jubiraca
</ThemedText>
      </View>

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
    width: 125,
    height: 125,
    borderRadius: 10 ,
  },

  carouselTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});