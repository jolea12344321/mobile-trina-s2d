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
  },
});
