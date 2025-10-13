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
        <Image           
          source={require('@/assets/images/equipe.png')}           
          style={styles.reactLogo}                    
        />       

      }>       
      <ThemedView style={styles.titleContainer}>  
        color: #FF0090,      
        <ThemedText type="title"style={{ fontSize: 35, color:'#FF0090', }}>𝙿𝚛𝚘𝚏𝚒𝚜𝚜𝚒𝚘𝚗𝚊𝚒𝚜</ThemedText>       
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
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
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
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
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
          <Button title="Ver trabalho" onPress={() => alert('Button Pressed')} />         
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
