<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Cuidados() {
  const [aberta, setAberta] = useState<string | null>(null);

  function abrir(qual: string) {
    if (aberta === qual) {
      setAberta(null);
    } else {
      setAberta(qual);
    }
  }

  return (
    <ScrollView style={estilos.tela}>
      <Text style={estilos.titulo}>Cuidados com suas{'\n'}tatoos e piercings</Text>

      {/* ----- TATUAGENS ----- */}
      <Text style={estilos.subtitulo}>Tatoos</Text>

      <Item
        titulo="Mantenha sua tatoo limpa"
        texto="Lave com sabão neutro e água morna, 2 a 3 vezes por dia. Seque com papel toalha sem esfregar."
        aberta={aberta === 't1'}
        aoClicar={() => abrir('t1')}
      />

      <Item
        titulo="Não tire as casquinhas"
        texto="Deixe as casquinhas caírem sozinhas. Isso ajuda a evitar falhas na tatuagem."
        aberta={aberta === 't2'}
        aoClicar={() => abrir('t2')}
      />

      <Item
        titulo="Posso tomar sol?"
        texto="Evite o sol por pelo menos 1 mês. Depois, sempre use protetor solar."
        aberta={aberta === 't3'}
        aoClicar={() => abrir('t3')}
      />

      <Item
        titulo="E se coçar?"
        texto="É normal coçar, mas não coce! Dê batidinhas de leve ou passe hidratante neutro."
        aberta={aberta === 't4'}
        aoClicar={() => abrir('t4')}
      />

      {/* ----- PIERCINGS ----- */}
      <Text style={estilos.subtitulo}>Piercings</Text>

      <Item
        titulo="Como limpar o piercing?"
        texto="Use soro fisiológico ou sabonete neutro 2x por dia. Sempre lave as mãos antes de tocar."
        aberta={aberta === 'p1'}
        aoClicar={() => abrir('p1')}
      />

      <Item
        titulo="O que não posso fazer?"
        texto="Evite piscina, mar, álcool, cosméticos e dormir pressionando o local."
        aberta={aberta === 'p2'}
        aoClicar={() => abrir('p2')}
      />

      <Item
        titulo="Posso trocar a joia?"
        texto="Espere cicatrizar bem — no mínimo de 6 a 8 semanas antes de trocar a peça."
        aberta={aberta === 'p3'}
        aoClicar={() => abrir('p3')}
      />

      <Item
        titulo="Tá inchado, é normal?"
        texto="Um leve inchaço é normal nos primeiros dias. Se tiver pus ou dor forte, procure ajuda."
        aberta={aberta === 'p4'}
        aoClicar={() => abrir('p4')}
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function Item({ titulo, texto, aberta, aoClicar }: any) {
  return (
    <View style={estilos.caixinha}>
      <TouchableOpacity onPress={aoClicar}>
        <Text style={estilos.pergunta}>{titulo} {aberta ? '˅' : '^'}</Text>
      </TouchableOpacity>
      {aberta && <Text style={estilos.resposta}>{texto}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  titulo: {
    color: '#ff00aa',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitulo: {
    color: '#ff00aa',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  caixinha: {
    marginBottom: 15,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  pergunta: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resposta: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
=======
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
>>>>>>> 6032bd1a19ae059dba21a0b8b9eb3535483741d5
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
