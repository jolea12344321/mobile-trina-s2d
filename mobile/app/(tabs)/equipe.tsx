import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
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
              Com mais de 30 anos de mercado, a Trina's Studio é composto por uma
              equipe de 12 tatuadores e body piercer, especialistas em diferentes
              tipos de tatuagem e piercing.
            </Text>
          </View>
        </View>
      }
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontSize: 25, color: '#FF0090' }}>          𝑃𝑟𝑜𝑓𝑖𝑠𝑠𝑖𝑜𝑛𝑎𝑖𝑠</ThemedText>
      </ThemedView>

      <View style={styles.cardsContainer}>

        <View style={styles.card}>
          <Image source={require('@/assets/images/jolea.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Julia de Assis</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('@/assets/images/milena.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Milena dos Santos</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('@/assets/images/giovanna.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Giovanna Verissimo</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('@/assets/images/fernanda.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Patrícia Alves</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('@/assets/images/yumi.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Yumi Lira</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ver trabalho</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('@/assets/images/bianca.png')} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Bianca Almeida</Text>
            <TouchableOpacity style={styles.cardButton}>
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
    bottom: 20  ,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.10)',
    paddingVertical: 100,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'right',
    fontStyle: 'italic',
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
