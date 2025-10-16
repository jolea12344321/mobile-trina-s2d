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
      headerBackgroundColor={{ light: '#FF0090', dark: '#000000' }}       
      headerImage={         
        <View style={styles.headerContent}>
          <Image           
            source={require('@/assets/images/equipe.png')} // Imagem local corrigida
            style={styles.reactLogo}                    
          />
          <ThemedText style={styles.headerText}>
          𝐶𝑜𝑚 𝑚𝑎𝑖𝑠 𝑑𝑒 𝟹𝟶 𝑎𝑛𝑜𝑠 𝑑𝑒 𝑚𝑒𝑟𝑐𝑎𝑑𝑜, 𝑎 𝑇𝑟𝑖𝑛𝑎’𝑠 𝑆𝑡𝑢𝑑𝑖𝑜 é 𝑐𝑜𝑚𝑝𝑜𝑠𝑡𝑜 𝑝𝑜𝑟 𝑢𝑚𝑎 𝑒𝑞𝑢𝑖𝑝𝑒 𝑑𝑒 𝟷𝟸 𝑡𝑎𝑡𝑢𝑎𝑑𝑜𝑟𝑒𝑠 𝑒 𝑏𝑜𝑑𝑦 𝑝𝑖𝑒𝑟𝑐𝑒𝑟, 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙𝑖𝑠𝑡𝑎𝑠 𝑒𝑚 𝑑𝑖𝑓𝑒𝑟𝑒𝑛𝑡𝑒𝑠 𝑡𝑖𝑝𝑜𝑠 𝑑𝑒 𝑡𝑎𝑡𝑢𝑎𝑔𝑒𝑚 𝑒 𝑝𝑖𝑒𝑟𝑐𝑖𝑛𝑔.
          </ThemedText>        
        </View>
      }>       
      <ThemedView style={styles.titleContainer}>  
        <ThemedText type="title" style={{ fontSize: 25, color: '#FF0090' }}>      𝙿𝚛𝚘𝚏𝚒𝚜𝚜𝚒𝚘𝚗𝚊𝚒𝚜</ThemedText>       
      </ThemedView>        

      <View style={styles.card}>         
        <Image           
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.cardImage}         
        />         
        <View style={styles.cardBody}>           
          <Text style={styles.cardTitle}>Julia de Assis</Text>           
          <Text style={styles.cardText}>             
          </Text>           
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
        </View>       
      </View>        

      <View style={styles.card}>         
        <Image           
          source={require('@/assets/images/milena.png')} 
          style={styles.cardImage}         
        />         
        <View style={styles.cardBody}>           
          <Text style={styles.cardTitle}>Milena dos Santos</Text>           
          <Text style={styles.cardText}>             
          </Text>           
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
        </View>       
      </View>        

      <View style={styles.card}>         
        <Image           
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.cardImage}         
        />         
        <View style={styles.cardBody}>           
          <Text style={styles.cardTitle}>Giovanna Verissimo</Text>           
          <Text style={styles.cardText}>                        
          </Text>           
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
        </View>       
      </View>        

      <View style={styles.card}>         
        <Image           
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.cardImage}         
        />         
        <View style={styles.cardBody}>           
          <Text style={styles.cardTitle}>Patrícia Alves</Text>           
          <Text style={styles.cardText}>             
          </Text>           
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
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
  card: {     
    width: '40%',     
    marginVertical: 40,     
    borderRadius: 50,     
    backgroundColor: 'transparent',     
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
    color: '#fff',  
    fontSize: 18,     
    fontWeight: 'bold',   
  },   
  cardText: {     
    fontSize: 14,     
    color: 'transparent',     
    marginVertical: 10,   
  }, 
});
