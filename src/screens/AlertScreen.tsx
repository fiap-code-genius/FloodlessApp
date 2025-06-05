import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { alerts } from '../services/mockData';
import { Ionicons } from '@expo/vector-icons';


export default function AlertScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBanner}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.topBannerText}>Alertas Ativos</Text>
      </View>


      <FlatList
        contentContainerStyle={styles.listContent}
        data={alerts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.location}>{item.location}</Text>
            <View style={styles.riskRow}>
              <Text style={styles.risk}>Risco: </Text>
              <Text style={[styles.risk, getRiskStyle(item.riskLevel)]}>{item.riskLevel}</Text>
            </View>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}


function getRiskStyle(riskLevel: string) {
  switch (riskLevel) {
    case 'Alto':
      return { color: '#C62828', fontWeight: 'bold' as const };
    case 'Médio':
      return { color: '#F9A825', fontWeight: 'bold' as const };
    case 'Baixo':
      return { color: '#2E7D32', fontWeight: 'bold' as const };
    default:
      return {};
  }
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
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  risk: {
    fontSize: 16,
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
    color: '#444',
  },
  riskRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
});



