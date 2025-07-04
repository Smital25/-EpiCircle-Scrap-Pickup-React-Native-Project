import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
    } else {
      setError('');
      navigation.navigate('OTP', { phone });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partner Login</Text>

      <Text style={styles.label}>Enter Phone Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={10}
        value={phone}
        onChangeText={(text) => {
          setPhone(text);
          setError('');
        }}
        placeholder="e.g. 9876543210"
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f7f9fc' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 8, color: '#444' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  error: { color: 'red', marginBottom: 12, fontSize: 14 },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
