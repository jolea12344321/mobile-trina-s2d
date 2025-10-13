import { Image } from 'expo-image';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [autorizo, setAutorizo] = useState(false);
  const [descricao, setDescricao] = useState('');

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }} data-element="scroll-view">
      <View style={styles.titleContainer} data-element="title-container">
        <Text style={styles.title} data-element="title-text">
          VAMOS TIRAR A IDEIA DO PAPEL?
        </Text>
      </View>

      <View style={styles.iconsRow} data-element="icons-row">
        <View style={styles.iconWrapper} data-element="icon-ideia">
          <View style={styles.iconCircle} data-element="icon-circle-ideia">
            <Image source={require('@/assets/images/ideia.png')} style={styles.iconImg} data-element="icon-img-ideia" />
          </View>
          <Text style={styles.iconText} data-element="icon-text-ideia">Ideia</Text>
        </View>

        <View style={styles.iconWrapper} data-element="icon-desenho">
          <View style={styles.iconCircle} data-element="icon-circle-desenho">
            <Image source={require('@/assets/images/desenho.png')} style={styles.iconImg} data-element="icon-img-desenho" />
          </View>
          <Text style={styles.iconText} data-element="icon-text-desenho">Desenho</Text>
        </View>

        <View style={styles.iconWrapper} data-element="icon-orcamento">
          <View style={styles.iconCircle} data-element="icon-circle-orcamento">
            <Image source={require('@/assets/images/orçamento.png')} style={styles.iconImg} data-element="icon-img-orcamento" />
          </View>
          <Text style={styles.iconText} data-element="icon-text-orcamento">Orçamento</Text>
        </View>

        <View style={styles.iconWrapper} data-element="icon-tattoo">
          <View style={styles.iconCircle} data-element="icon-circle-tattoo">
            <Image source={require('@/assets/images/tatto.png')} style={styles.iconImg} data-element="icon-img-tattoo" />
          </View>
          <Text style={styles.iconText} data-element="icon-text-tattoo">Tattoo</Text>
        </View>
      </View>

      <View style={styles.formContainer} data-element="form-container">
        <Text style={styles.label} data-element="label-nome">Nome</Text>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#FF0090"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          data-element="input-nome"
        />

        <Text style={styles.label} data-element="label-telefone">Telefone</Text>
        <TextInput
          placeholder="Telefone"
          placeholderTextColor="#FF0090"
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          data-element="input-telefone"
        />

        <Text style={styles.label} data-element="label-email">Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FF0090"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          data-element="input-email"
        />

        <Text style={styles.label} data-element="label-politica">Política de Privacidade</Text>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAutorizo(!autorizo)}
          data-element="checkbox-autorizo"
        >
          <Text style={{ color: autorizo ? '#FFF' : '#FF0090' }} data-element="text-checkbox">
            {autorizo ? '✔ ' : ''}Autorizo o registro dos meus dados para contato
          </Text>
        </TouchableOpacity>

        <Text style={styles.label} data-element="label-descricao">Nos explique sua ideia</Text>
        <TextInput
          placeholder="Use esse campo para descrever sua ideia e abaixo nos enviar seus exemplos"
          placeholderTextColor="#FF0090"
          style={[styles.input, { height: 80 }]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          textAlignVertical="top"
          data-element="input-descricao"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => alert('Ideia enviada!')}
          data-element="button-submit"
        >
          <Text style={styles.submitButtonText} data-element="text-submit">ENVIAR SUA IDEIA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FF0090',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    width: 70,
  },
  iconCircle: {
    backgroundColor: '#FF0090',
    borderRadius: 40,
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
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  formContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#FF0090',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FF0090',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  checkbox: {
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#FF0090',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
