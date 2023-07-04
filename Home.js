import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sharedStyles from './styles';

const Home = () => {
  const navigation = useNavigation();

  const handleGoToAddView = () => {
    navigation.navigate('Add');
  };

  const handleGoToPlanView = () => {
    navigation.navigate('Plans');
  };

  const handleGoToListView = () => {
    navigation.navigate('Lists');
  };

  const handleGoToItemView = () => {
    navigation.navigate('Items');
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={styles.headerText}>My App</Text>
      <View>
        <View style={styles.summaryStatRow}>
          <Text style={styles.summaryStatHeader}>Total Plans</Text>
          <Text style={styles.summaryStatHeader}>Total Lists</Text>
          <Text style={styles.summaryStatHeader}>Total Items</Text>
        </View>
        <View style={styles.summaryStatRow}>
          <TouchableOpacity onPress={handleGoToPlanView}>
            <Text style={styles.summaryStatValue}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoToListView}>
            <Text style={styles.summaryStatValue}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoToItemView}>
            <Text style={styles.summaryStatValue}>100</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleGoToAddView} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerText: {
    color: '#2196F3',
    fontSize: 36,
    position: 'absolute',
    top: 20,
    left: 20,
    fontWeight: 'bold',
  },
  summaryStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryStatHeader: {
    fontWeight: 'bold',
    width: 100,
  },
  summaryStatValue: {
    fontSize: 40,
    width: 100,
  },
});

export default Home;
