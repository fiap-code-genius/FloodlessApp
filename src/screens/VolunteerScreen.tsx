import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users } from '../services/mockData';


export default function VolunteerScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });


  useEffect(() => {
    const loadVolunteers = async () => {
      try {
        const storedVolunteers = await AsyncStorage.getItem('volunteers');
        if (storedVolunteers) {
          setVolunteers(JSON.parse(storedVolunteers));
        } else {
          const initialVolunteers = users.filter(u => u.isVolunteer);
          setVolunteers(initialVolunteers);
          await AsyncStorage.setItem('volunteers', JSON.stringify(initialVolunteers));
        }
      } catch (error) {
        console.error('Erro ao carregar voluntários salvos:', error);
      }
    };


    loadVolunteers();
  }, []);


  const handleSignUp = async () => {
    if (!name.trim() || !email.trim()) {
      setFeedback({ message: 'Por favor preencha os dados corretamente.', type: 'error' });
      return;
    }


    const newVolunteer = {
      id: (volunteers.length + 1).toString(),
      name,
      isVolunteer: true,
      email,
      verified: false,
    };


    const updatedVolunteers = [...volunteers, newVolunteer];
    setVolunteers(updatedVolunteers);
    setName('');
    setEmail('');


    try {
      await AsyncStorage.setItem('volunteers', JSON.stringify(updatedVolunteers));
      setFeedback({ message: 'Você foi registrado como voluntário! Acesse seu email para completar a verificação.', type: 'success' });
    } catch (error) {
      console.error(error);
      setFeedback({ message: 'Não foi possível salvar os dados localmente.', type: 'error' });
    }


    setTimeout(() => {
      setFeedback({ message: '', type: '' });
    }, 3000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.topBanner}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.topBannerText}>Voluntários</Text>
        </View>


        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={volunteers}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Text style={styles.title}>Lista Geral</Text>}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detail}>Verificado: {item.verified ? 'Sim' : 'Não'}</Text>
              </View>
            )}
            ListFooterComponent={<View style={{ height: 160 }} />}
          />
        </View>


        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Inscreva-se</Text>


          {feedback.message !== '' && (
            <Text
              style={[
                styles.feedback,
                feedback.type === 'success' ? styles.success : styles.error,
              ]}
            >
              {feedback.message}
            </Text>
          )}


          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Seu email"
            value={email}
            onChangeText={setEmail}
          />


          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EBEA',
  },
  topBanner: {
    backgroundColor: '#FFD700',
    height: 80,
    paddingTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  topBannerText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  detail: {
    fontSize: 14,
    color: '#444',
  },
  formContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedback: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  success: {
    color: 'green',
  },
  error: {
    color: 'red',
  },
});



