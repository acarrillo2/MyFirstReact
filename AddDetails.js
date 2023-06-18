import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import sharedStyles from './styles';

const AddDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedText } = route.params;

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

  // TODO have this function prompt user for more inputs for properties to add
  const handleYesSelection = () => {
    console.log("Yes selected");
  };
  // TODO have this function prompt user with three alternate suggestions  
  const handleNoSelection = () => {
    console.log("No selected");
  };

  const RenderSelection = () => {
    const data = itemMap[selectedText];
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
        </View>
      );
  }

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
  });

export default AddDetails;
