import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import sharedStyles from './styles';

const AddDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedText } = route.params;
    const [selectionConfirmed, setSelectionConfirmed] = useState(false);
    const [showApologies, setShowApologies] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  // TODO replace this with API call
  const coupeAndFluteJson = {
    name: "Coupe & Flute",
    category: "Bars",
    subcategory: "Champagne Bars",
    location: "3015 Beacon Ave S, Seattle, WA 98144"
  };
  const renzoGracieSeattleJson = {
    name: "Renzo Gracie Seattle",
    category: "Martial Arts Studio",
    subcategory: "Brazilian Jiu Jitsu",
    location: "101 Nickerson Street, Suite 150, Seattle, WA 98109"
  };
  const itemMap = {
    "Coupe & Flute": coupeAndFluteJson,
    "Renzo Gracie Seattle":  renzoGracieSeattleJson
  }
  // Creating map for now, this will be returned from DB
  const propertyMap = {
    Bars: {
      'Champagne Bars': ['Date Visited', 'People you visited with', 'Champagne you tried', 'Address', 'Website'],
      // Add more subcategories and their corresponding properties here
    },
    'Martial Arts Studio': {
      'Brazilian Jiu Jitsu': ['Date Visited', 'Training Partners', 'Head Coach', 'Address', 'Website'],
      // Add more subcategories and their corresponding properties here
    },
    // Add more categories and their corresponding subcategories and properties here
  };

  // TODO have this function prompt user for more inputs for properties to add
  const handleYesSelection = () => {
    console.log("Yes selected");
    setSelectionConfirmed(true);
  };

  const handleNoSelection = () => {
    console.log("No selected");
    setShowApologies(true);
    setTimeout(function() {
        handleBack();
      }, 5000);
  };

  const handleSave = () => {
    // TODO have this print out JSON to be sent to server
    console.log('Save pressed');
  };

  const setValue = (property, data) => {
    if (property === 'Date Visited') {
        return new Date().toISOString().slice(0, 10);
    } else if (property === 'Address') {
        return data.location;
    } else {
        return undefined;
    }
  }
  
  const RenderSelection = () => {
    const data = itemMap[selectedText];
    if (selectionConfirmed) {
      const category = data.category;
      const subcategory = data.subcategory;
      // Retrieve the properties based on the category and subcategory combination
      const properties = propertyMap[category]?.[subcategory] || [];
      return (
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionPrompt}>Properties</Text>
          {properties.map((property, index) => (
            <View key={index}>
              <Text>{property}:</Text>
              <TextInput
                style={styles.input}
                defaultValue={setValue(property, data)}
              />
            </View>
          ))}
          <TouchableOpacity onPress={handleSave} style={styles.buttonSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    return (
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionPrompt}>Did you mean?</Text>
        <Text>{data.name}</Text>
        <Text>{data.subcategory}</Text>
        <Text>{data.location}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleYesSelection} style={styles.buttonYes}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNoSelection} style={styles.buttonNo}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
        {showApologies && (
            <Text style={styles.apologiesText}>Apologies, navigating back to search</Text>
        )}
      </View>
    );
  };  

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity onPress={handleBack} style={sharedStyles.backButton}>
        <Text style={sharedStyles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text style={sharedStyles.subheaderText}>Add Item Details</Text>
      <RenderSelection />
    </View>
  );
};

const styles = StyleSheet.create({
    selectionContainer: {
      width: '60%',
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 3, // This property is used for Android elevation
    },
    selectionPrompt: {
        fontWeight: 'bold',
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      buttonYes: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
      },
      buttonNo: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
    
      buttonSave: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },

      apologiesText: {
        fontWeight: 'bold',
        padding: 5,
        marginTop: 10,
        color: 'red',
      },
  });

export default AddDetails;
