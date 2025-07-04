import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DashboardScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userPhone').then(setPhone);
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userPhone');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>👋 Welcome, {phone}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SchedulePickup')}>
        <Text style={styles.buttonText}>📦 Schedule Pickup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.buttonText}>📄 Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f7f9fc',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logout: {
    backgroundColor: '#dc3545',
  },
});
