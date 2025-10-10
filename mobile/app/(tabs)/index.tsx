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
            <ThemedText type="subtitle" style={{ fontSize: 18 }}>+350 prêmios ao longo dos anos</ThemedText>
          </ThemedView>
          <ThemedView style={styles.box}>
            <ThemedText type="subtitle" style={{ fontSize: 18 }}>+100 profissionais marcaram nossa história</ThemedText>
          </ThemedView>
          <ThemedView style={styles.box}>
            <ThemedText type="subtitle" style={{ fontSize: 18 }}>+1000 Clientes satisfeitos</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedText type="title" style={{ fontSize: 36 }}>Arte na Pele,</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontSize: 36 }}>Estilo na Alma.</ThemedText>
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
    marginBottom: 10,
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
    width: 170,
    borderRadius: 40,
    padding: 5,
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
