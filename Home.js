import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sharedStyles from './styles';

const Home = () => {
  const navigation = useNavigation();

  const handleGoToAddView = () => {
    navigation.navigate('Add');
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={styles.headerText}>My App</Text>
      <Text>Welcome to My App!</Text>
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
});

export default Home;
