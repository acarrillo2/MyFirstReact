import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppView = () => {
  const navigation = useNavigation();

  const handleGoToSecondView = () => {
    navigation.navigate('SecondView');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My App</Text>
      <Text>Welcom to My App!</Text>
      <TouchableOpacity onPress={handleGoToSecondView} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default AppView;
