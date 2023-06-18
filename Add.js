import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Autocomplete from 'react-native-autocomplete-input';
import sharedStyles from './styles';

const Add = () => {
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
      'Canlis', 'Canon', 'Renzo Gracie Seattle', 'Romper (clothing)', 'React (programming languge)' 
    ];
    const filteredSuggestions = predefinedSuggestions.filter((item) =>
      item.toLowerCase().startsWith(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (text) => {
    console.log(text)
    setInputText(text);
    setSuggestions([]);
    navigation.navigate('AddDetails', { selectedText: text });
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity onPress={handleBack} style={sharedStyles.backButton}>
        <Text style={sharedStyles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text style={sharedStyles.subheaderText}>Add Item</Text>
      <Autocomplete
        inputContainerStyle={styles.textInput}
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="Enter some text..."
        data={suggestions}
        flatListProps={{
          renderItem: ({ item }) => (
              <TouchableOpacity onPress={() => handleSelectSuggestion(item)}>
                  <Text>{item}</Text>
              </TouchableOpacity>
          ),
        }}
        containerStyle={styles.suggestionContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Add;
