import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { PickupContext } from '../context/PickupContext';

export default function OrderHistoryScreen() {
  const { pickups, updatePickupStatus } = useContext(PickupContext);

  const handleApprove = (id) => {
    updatePickupStatus(id, 'Completed');
    alert('Pickup approved!');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>📅 Date: <Text style={styles.value}>{item.date}</Text></Text>
      <Text style={styles.label}>⏰ Time Slot: <Text style={styles.value}>{item.timeSlot}</Text></Text>
      <Text style={styles.label}>📍 Address: <Text style={styles.value}>{item.address}</Text></Text>
      <Text style={styles.label}>📦 Status: <Text style={[styles.value, getStatusColor(item.status)]}>{item.status}</Text></Text>

      {item.status === 'Accepted' && (
        <Text style={styles.pickupCode}>🔐 Pickup Code: 987654</Text>
      )}

      {item.status === 'Pending for Approval' && (
        <TouchableOpacity style={styles.approveButton} onPress={() => handleApprove(item.id)}>
          <Text style={styles.approveButtonText}>✅ Approve Pickup</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return { color: '#ff9800' };
      case 'Accepted': return { color: '#007bff' };
      case 'In-Process': return { color: '#17a2b8' };
      case 'Pending for Approval': return { color: '#6f42c1' };
      case 'Completed': return { color: '#28a745' };
      default: return {};
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Your Pickup Orders</Text>
      {pickups.length === 0 ? (
        <Text style={styles.empty}>No pickups found.</Text>
      ) : (
        <FlatList
          data={pickups}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f9fc' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  empty: { fontSize: 16, textAlign: 'center', color: '#888' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  label: { fontSize: 16, fontWeight: '500', marginBottom: 4, color: '#555' },
  value: { fontWeight: 'normal', color: '#333' },
  pickupCode: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#007bff',
    fontSize: 16,
  },
  approveButton: {
    marginTop: 10,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  approveButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
