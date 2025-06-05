import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BannerButton } from '../components/BannerButton';


export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topBanner}>
        <Text style={styles.topBannerText}>
          Oi! Bem-vindo(a) ao <Text style={styles.bold}>Floodless</Text>
        </Text>
      </View>


      <View style={styles.subBanner}>
        <Text style={styles.subBannerText}>
          <Text style={styles.bold}>Mantenha-se seguro(a)</Text>. Dê suporte a outros cidadãos.
        </Text>
      </View>


      <View style={styles.helpWrapper}>
        <Text style={styles.helpDecor}>———</Text>
        <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('Ajuda')}>
          <Text style={styles.helpButtonText}>SOS</Text>
        </TouchableOpacity>
        <Text style={styles.helpDecor}>———</Text>
      </View>


      <BannerButton
        title="Alertas"
        image={require('../../assets/alertas-banner.jpg')}
        onPress={() => navigation.navigate('Alertas')}
      />
      <BannerButton
        title="Abrigos"
        image={require('../../assets/abrigos-banner.jpg')}
        onPress={() => navigation.navigate('Abrigos')}
      />
      <BannerButton
        title="Voluntários"
        image={require('../../assets/voluntarios-banner.jpg')}
        onPress={() => navigation.navigate('Voluntários')}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: '#E8EBEA',
    alignItems: 'center',
  },
  topBanner: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  topBannerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  subBanner: {
    width: '80%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: -20,
    alignItems: 'center',
    borderRadius: 20,
  },
  subBannerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  helpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  helpDecor: {
    fontSize: 24,
    color: '#000',
  },
  helpButton: {
    backgroundColor: '#C21807',
    borderRadius: 50,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});



