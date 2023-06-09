import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sharedStyles from './styles';

const Lists = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity onPress={handleBack} style={sharedStyles.backButton}>
        <Text style={sharedStyles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text style={sharedStyles.subheaderText}>Lists</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Lists;
