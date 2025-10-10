import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>

      <View style={styles.card}>
        <Image
          source={{ uri: '...' }} 
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card title</Text>
          <Text style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </Text>
          <Button title="Go somewhere" onPress={() => alert('Button Pressed')} />
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: '...' }} 
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card title</Text>
          <Text style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </Text>
          <Button title="Go somewhere" onPress={() => alert('Button Pressed')} />
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: '...' }} 
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card title</Text>
          <Text style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </Text>
          <Button title="Go somewhere" onPress={() => alert('Button Pressed')} />
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: '...' }} 
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card title</Text>
          <Text style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </Text>
          <Button title="Go somewhere" onPress={() => alert('Button Pressed')} />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  card: {
    width: '40%',
    marginVertical: 50,
    borderRadius: 30,
    backgroundColor: '#FF0090',
    elevation: 3,
    shadowColor: '#000',
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
});
