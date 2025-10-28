import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Cuidados() {
  const [aberta, setAberta] = useState<string | null>(null);

  function abrir(qual: string) {
    setAberta(aberta === qual ? null : qual);
  }

  return (
    <ScrollView style={estilos.tela}>
      <Text style={{ fontFamily: '̶L̶𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽', color: '#FF0090', fontSize: 30, textAlign: 'center' }}>
  𝙲𝚞𝚒𝚍𝚊𝚍𝚘𝚜 𝚌𝚘𝚖 𝚜𝚞𝚊𝚜     {'\n'}  𝓉𝒶𝓉𝓉ℴℴ𝓈 𝚎 𝓅𝒾ℯ𝓇𝒸𝒾𝓃ℊ𝓈
</Text>


      {/* ----- TATUAGENS ----- */}
      <Text style={estilos.subtitulo}>𝖙𝖆𝖙𝖙𝖔𝖔𝖘</Text>
      

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

      <Item
        titulo="Qual pomada usar?"
        texto="Use apenas pomadas recomendadas pelo seu tatuador, como Bepantol ou Nebacetin. Não use pomadas antibióticas sem indicação."
        aberta={aberta === 't5'}
        aoClicar={() => abrir('t5')}
      />

      <Item
        titulo="Posso ir à academia?"
        texto="Evite exercícios pesados e suor excessivo nos primeiros 10 dias, para não irritar ou infeccionar a tatuagem."
        aberta={aberta === 't6'}
        aoClicar={() => abrir('t6')}
      />

      <Item
        titulo="Como dormir após tatuar?"
        texto="Evite deitar sobre o local tatuado. Use lençóis limpos e roupas largas para evitar atrito."
        aberta={aberta === 't7'}
        aoClicar={() => abrir('t7')}
      />

      <Item
        titulo="Quando posso molhar?"
        texto="Evite banhos longos e nada de piscina, mar ou banheira por pelo menos 15 dias."
        aberta={aberta === 't8'}
        aoClicar={() => abrir('t8')}
      />

      {/* ----- PIERCINGS ----- */}
      <Text style={estilos.subtitulo}>𝖕𝖎𝖊𝖗𝖈𝖎𝖓𝖌𝖘</Text>

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
        texto="Um leve inchaço é normal nos primeiros dias. Se tiver pus, febre ou dor forte, procure um profissional."
        aberta={aberta === 'p4'}
        aoClicar={() => abrir('p4')}
      />

      <Item
        titulo="Posso usar álcool para limpar?"
        texto="Não. O álcool resseca e irrita a pele, atrasando a cicatrização. Prefira soro fisiológico ou spray antisséptico próprio."
        aberta={aberta === 'p5'}
        aoClicar={() => abrir('p5')}
      />

      <Item
        titulo="Meu piercing sangrou, o que fazer?"
        texto="Lave com soro fisiológico, mantenha limpo e evite mexer. Se continuar sangrando ou doer, procure um body piercer profissional."
        aberta={aberta === 'p6'}
        aoClicar={() => abrir('p6')}
      />

      <Item
        titulo="Como sei se está infeccionado?"
        texto="Vermelhidão forte, secreção amarelada e dor constante são sinais de infecção. Vá a um médico ou piercer de confiança."
        aberta={aberta === 'p7'}
        aoClicar={() => abrir('p7')}
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
    textAlign: 'center',
    fontFamily: "̶L̶i̶n̶e̶ ̶T̶h̶r̶o̶u̶g̶h̶"
  },
  subtitulo: {
    color: '#FF0090',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "𝒮𝒸𝓇𝒾𝓅𝓉"
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
