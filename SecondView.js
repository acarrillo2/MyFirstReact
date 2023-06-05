import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Autocomplete from 'react-native-autocomplete-input';

const SecondView = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
    // TODO: implement an API call that will fetch suggestions
    const predefinedSuggestions = [
      'Coupe & Flute', 'Coup Style Chicken', 'Coup d\'état', 'Coup the loop',
      'Canlis', 'Canon', 'Checkmat Jiu Jitsu' 
    ];
    const filteredSuggestions = predefinedSuggestions.filter((item) =>
      item.toLowerCase().startsWith(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (text) => {
    setInputText(text);
    setSuggestions([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text>Add Item</Text>
      <Autocomplete
        inputContainerStyle={styles.textInput}
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="Enter some text..."
        data={suggestions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectSuggestion(item)}>
            <Text style={styles.suggestionItem}>{item}</Text>
          </TouchableOpacity>
        )}
        containerStyle={styles.suggestionContainer}
      />
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 44,
    color: '#2196F3',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  suggestionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  suggestionItem: {
    padding: 10,
  },
});

export default SecondView;
