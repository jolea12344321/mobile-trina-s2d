import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const gap = 10;

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0090', dark: '#000000' }}
      headerImage={
        <View style={styles.headerContent}>
          <Image
            source={require('@/assets/images/equipe.png')}
            style={styles.reactLogo}
          />
          <ThemedText style={styles.headerText}>
            𝐶𝑜𝑚 𝑚𝑎𝑖𝑠 𝑑𝑒 𝟹𝟶 𝑎𝑛𝑜𝑠 𝑑𝑒 𝑚𝑒𝑟𝑐𝑎𝑑𝑜, 𝑎 𝑇𝑟𝑖𝑛𝑎’𝑠 𝑆𝑡𝑢𝑑𝑖𝑜 é 𝑐𝑜𝑚𝑝𝑜𝑠𝑡𝑜 𝑝𝑜𝑟 𝑢𝑚𝑎 𝑒𝑞𝑢𝑖𝑝𝑒 𝑑𝑒 𝟷𝟸 𝑡𝑎𝑡𝑢𝑎𝑑𝑜𝑟𝑒𝑠 𝑒 𝑏𝑜𝑑𝑦 𝑝𝑖𝑒𝑟𝑐𝑒𝑟, 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙𝑖𝑠𝑡𝑎𝑠 𝑒𝑚 𝑑𝑖𝑓𝑒𝑟𝑒𝑛𝑡𝑒𝑠 𝑡𝑖𝑝𝑜𝑠 𝑑𝑒 𝑡𝑎𝑡𝑢𝑎𝑔𝑒𝑚 𝑒 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔.
          </ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontSize: 25, color: '#FF0090' }}>𝑃𝑟𝑜𝑓𝑖𝑠𝑠𝑖𝑜𝑛𝑎𝑖𝑠</ThemedText>
      </ThemedView>

      <View style={styles.cardsContainer}>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/jolea.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Julia de Assis</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/milena.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Milena dos Santos</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/giovanna.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Giovanna Verissimo</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/fernanda.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Patrícia Alves</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/yumi.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Yumi Lira</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/bianca.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Bianca Almeida</Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Button Pressed')}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactLogo: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
  },
  headerContent: {
    position: 'relative',
    height: 300,
    paddingRight: 20,
    justifyContent: 'flex-end',
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    top: '50%',
    right: 0,
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    transform: [{ translateY: -90 }],
    maxWidth: '70%',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    height: 180,
    width: (screenWidth - gap * 3) / 2,
    marginBottom: gap,
    borderRadius: 10,
    backgroundColor: 'transparent',
    elevation: 3,
    shadowColor: '#000',
    gap:1
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
  },
  cardBody: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: '#FF0090',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
