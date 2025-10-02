import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          VAMOS TIRAR A IDEIA DO PAPEL?
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.iconsRow}>
        <ThemedView style={styles.iconWrapper}>
          <ThemedView style={styles.iconCircle}>
            <Image source={require('@/assets/images/ideia.png')} style={styles.iconImg} />
          </ThemedView>
          <ThemedText style={styles.iconText}>Ideia</ThemedText>
        </ThemedView>

        
        <ThemedView style={styles.iconWrapper}>
          <ThemedView style={styles.iconCircle}>
            <Image source={require('@/assets/images/desenho.png')} style={styles.iconImg} />
          </ThemedView>
          <ThemedText style={styles.iconText}>Desenho</ThemedText>
        </ThemedView>

       
        <ThemedView style={styles.iconWrapper}>
          <ThemedView style={styles.iconCircle}>
            <Image source={require('@/assets/images/orçamento.png')} style={styles.iconImg} />
          </ThemedView>
          <ThemedText style={styles.iconText}>Orçamento</ThemedText>
        </ThemedView>


        <ThemedView style={styles.iconWrapper}>
          <ThemedView style={styles.iconCircle}>
            <Image source={require('@/assets/images/tatto.png')} style={styles.iconImg} />
          </ThemedView>
          <ThemedText style={styles.iconText}>Tattoo</ThemedText>
        </ThemedView>
      </ThemedView>
    

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  title: {
    color: '#FF0090',
    fontWeight: 'bold',
    fontSize: 20,
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
    tintColor: '#FF0090',
  },
  
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  iconWrapper: {
    alignItems: 'center', 
  },
  iconCircle: {
    backgroundColor: '#FF0090',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6, 
  },
  iconImg: {
    width: 40,
    height: 40,
    tintColor: '#FFF', 
  },
  iconText: {
    color: '#ffffffff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
