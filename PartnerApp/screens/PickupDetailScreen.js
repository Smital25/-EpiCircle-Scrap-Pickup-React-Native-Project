import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { PartnerPickupContext } from '../context/PartnerPickupContext';

export default function PickupDetailScreen({ route, navigation }) {
  const { pickup } = route.params;
  const { addItemToPickup, updateStatus } = useContext(PartnerPickupContext);

  const [itemType, setItemType] = useState('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddItem = () => {
    if (!itemType.trim() || !weight.trim()) {
      Alert.alert('Error', 'Please enter both item type and weight.');
      return;
    }

    const item = {
      id: Date.now(),
      type: itemType,
      weight,
      notes,
    };

    addItemToPickup(pickup.id, item);
    setItemType('');
    setWeight('');
    setNotes('');
  };

  const handleComplete = () => {
    updateStatus(pickup.id, 'Pending for Approval');
    Alert.alert('Submitted', 'Pickup marked as Pending for Approval');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pickup Details</Text>

      <Text style={styles.label}>Customer: {pickup.customer}</Text>
      <Text style={styles.label}>Phone: {pickup.phone}</Text>
      <Text style={styles.label}>Date: {pickup.date}</Text>
      <Text style={styles.label}>Time Slot: {pickup.timeSlot}</Text>
      <Text style={styles.label}>Address: {pickup.address}</Text>
      <Text style={styles.label}>Status: {pickup.status}</Text>

      <View style={styles.divider} />

      <Text style={styles.section}>Add Scrap Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Type"
        value={itemType}
        onChangeText={setItemType}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Additional Notes (optional)"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.buttonText}>➕ Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={pickup.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text>📦 {item.type} - {item.weight}kg</Text>
            {item.notes !== '' && <Text style={{ color: '#555' }}>📝 {item.notes}</Text>}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No items added yet.</Text>}
      />

      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.buttonText}>✅ Submit & Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f9fc' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 15, marginBottom: 4 },
  section: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  completeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  itemCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  empty: { textAlign: 'center', marginVertical: 10, color: '#666' },
});
