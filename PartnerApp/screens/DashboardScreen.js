import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { PartnerPickupContext } from '../context/PartnerPickupContext';

export default function DashboardScreen({ navigation }) {
  const { pickups, updateStatus } = useContext(PartnerPickupContext);

  const handleAccept = (id) => {
    updateStatus(id, 'Accepted');
    alert('Pickup accepted!');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.customer}>👤 {item.customer}</Text>
      <Text style={styles.label}>📅 {item.date}</Text>
      <Text style={styles.label}>⏰ {item.timeSlot}</Text>
      <Text style={styles.label}>📍 {item.address}</Text>
      <Text style={[styles.status, getStatusStyle(item.status)]}>Status: {item.status}</Text>

      {item.status === 'Pending' && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAccept(item.id)}
        >
          <Text style={styles.buttonText}>Accept Pickup</Text>
        </TouchableOpacity>
      )}

      {item.status !== 'Pending' && (
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('PickupDetail', { pickup: item })}
        >
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { color: '#ff9800' };
      case 'Accepted':
        return { color: '#007bff' };
      case 'Completed':
        return { color: '#28a745' };
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Pickup Requests</Text>

      <FlatList
        data={pickups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No pickups available</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f9fc' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  empty: { textAlign: 'center', color: '#777', marginTop: 40 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  customer: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#333' },
  label: { fontSize: 15, marginBottom: 4, color: '#444' },
  status: { fontSize: 15, marginTop: 6, fontWeight: 'bold' },
  button: {
    backgroundColor: '#007bff',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  viewButton: {
    backgroundColor: '#28a745',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});
