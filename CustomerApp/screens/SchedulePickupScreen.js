import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { PickupContext } from '../context/PickupContext';

export default function SchedulePickupScreen({ navigation }) {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [address, setAddress] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [error, setError] = useState('');

  const { addPickup } = useContext(PickupContext);

  const handleSubmit = () => {
    if (!timeSlot.trim() || !address.trim()) {
      setError('Time slot and address are required.');
      return;
    }

    const request = {
      id: Date.now(),
      date: pickupDate.toDateString(),
      timeSlot,
      address,
      mapLink,
      status: 'Pending',
    };

    addPickup(request);
    Alert.alert('✅ Success', 'Pickup Scheduled!');
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Scrap Pickup</Text>

      <Text style={styles.label}>Pickup Date</Text>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateButtonText}>{pickupDate.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={pickupDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setPickupDate(date);
          }}
        />
      )}

      <Text style={styles.label}>Time Slot *</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 10–11 AM"
        value={timeSlot}
        onChangeText={(text) => {
          setTimeSlot(text);
          setError('');
        }}
      />

      <Text style={styles.label}>Address *</Text>
      <TextInput
        style={styles.input}
        placeholder="Pickup address"
        value={address}
        onChangeText={(text) => {
          setAddress(text);
          setError('');
        }}
      />

      <Text style={styles.label}>Google Maps Link (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Paste map link"
        value={mapLink}
        onChangeText={setMapLink}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>📦 Schedule Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f7f9fc' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginTop: 15, color: '#444' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  dateButton: {
    marginTop: 5,
    backgroundColor: '#e1ecf4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#333',
    fontSize: 16,
  },
  error: { color: 'red', fontSize: 14, marginTop: 10 },
  button: {
    marginTop: 25,
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
