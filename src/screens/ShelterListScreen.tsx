import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { shelters } from '../services/mockData';
import { Ionicons } from '@expo/vector-icons';


export default function ShelterListScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBanner}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.topBannerText}>Abrigos Próximos</Text>
      </View>


      <FlatList
        contentContainerStyle={styles.listContent}
        data={shelters}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Localização: {item.location}</Text>
            <Text style={styles.detail}>Capacidade: {item.capacity}</Text>
            <Text style={styles.detail}>Ocupação atual: {item.currentOccupancy}</Text>
            <Text style={styles.detail}>Recursos: {item.resources.join(', ')}</Text>
          </View>
        )}
      />
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
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  detail: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
});



