import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0090', dark: '#FF0090' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
            fontSize: 24,
            color: '#FF0090', // Cor rosa para o título
            textAlign: 'center',
          }}>
          Cuidados com suas tatoos e piercings
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.subtitle}>Tatoos</ThemedText>

      <Collapsible title="Mantenha sua tatoo limpa">
        <ThemedText style={styles.collapsibleText}>
          Deve manter a tatoo limpa lavando pelo menos 3 vezes ao dia nos 5 primeiros dias, com água morna e sabão neutro.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Não tire as casquinhas">
        <ThemedText style={styles.collapsibleText}>
          É normal que as novas tatoos descasquem, não as retire, sua pele está cicatrizando, se tirar é possível que a tinta saia junto e fique falhas.
        </ThemedText>
      </Collapsible>

      <ThemedText style={styles.subtitle}>Piercing</ThemedText>

      <Collapsible title="Mantenha seu piercing limpo">
        <ThemedText style={styles.collapsibleText}>
          Duas vezes ao dia com soro fisiológico e sabonete neutro ou antibacteriano, lave sempre as mãos antes de tocar no local.
        </ThemedText>
      </Collapsible>

      <Collapsible title="O que não posso fazer?">
        <ThemedText style={styles.collapsibleText}>
          Evite piscinas, mar, álcool, iodo e cosméticos, e tenha uma dieta equilibrada, rica em frutas e vegetais, evitando gorduras e ultraprocessados.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  subtitle: {
    color: '#FF0090', // Cor rosa
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  collapsibleText: {
    backgroundColor: '#000', // Fundo preto para as respostas
    color: '#FFF', // Texto branco
    fontSize: 16,
    padding: 12, // Espaçamento interno
    marginBottom: 10, // Espaço entre os itens
    borderRadius: 8, // Borda arredondada
  },
});
