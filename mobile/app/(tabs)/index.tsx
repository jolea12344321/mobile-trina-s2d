import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.boxContainer}>
          <ThemedView style={styles.box}>
            <ThemedText type="subtitle" style={{ fontSize: 16}}>+350 prêmios ao longo dos anos</ThemedText>
          </ThemedView>
          <ThemedView style={styles.box}>
            <ThemedText type="subtitle" style={{ fontSize: 13 }}>+100 profissionais marcaram nossa história</ThemedText>
          </ThemedView>
          <ThemedView style={styles.box}>
            <ThemedText type="subtitle" style={{ fontSize: 16}}>+1000 Clientes satisfeitos</ThemedText>
          </ThemedView>
        </ThemedView>
        
        <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontSize: 20, color:'#FF0090',}}>★   ★   ★   ★   ★   ★   ★   ★   ★</ThemedText>
      </ThemedView>

        <ThemedText type="title" style={{ fontSize: 40}}>𝒜𝓇𝓉𝑒 𝓃𝒶 𝓅𝑒𝓁𝑒,</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontSize: 35, color:'#FF0090', }}>       𝑒𝓈𝓉𝒾𝓁𝑜 𝓃𝒶 𝒶𝓁𝓂𝒶.</ThemedText>
      </ThemedView>

      <Image
        source={require('@/assets/images/pg1.png')}
        style={styles.bottomRightImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingTop: 40,
  },
  titleContainer: {
    marginBottom: 50,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  boxContainer: {
    alignItems: 'stretch',
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'transparent',
  },
  box: {
    backgroundColor: '#FF0090',
    borderColor: '#FF0090',
    borderWidth: 5,
    width: 120,
    borderRadius: 20,
    padding: 1,
    marginBottom: 10,
  },
  bottomRightImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 300,
    height: 350,
  },
});
