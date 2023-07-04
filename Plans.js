import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sharedStyles from './styles';

const Plans = () => {
  const navigation = useNavigation();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleBack = () => {
    navigation.goBack();
  };

  const getPlans = () => {
    return [
        'Plan 1', 'Plan 2', 'Plan 3', 'Plan 4', 'Plan 5', 'Plan 6', 'Plan 7', 'Plan 8', 'Plan 9', 'Plan 10', 'Plan 11', 
        'Plan 12', 'Plan 13', 'Plan 14', 'Plan 15', 'Plan 16', 'Plan 17', 'Plan 18', 'Plan 19' , 'Plan 20', 'Plan 21', 
        'Plan 22', 'Plan 23', 'Plan 24', 'Plan 25', 'Plan 26'
    ];
  };

  const RenderPlans = () => {
    const plans = getPlans();
    const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth * 0.8;
    const finalWidth = containerWidth > 400 ? 400 : containerWidth;

    const handleHighlightIn = (index) => {
      setHighlightedIndex(index);
    };

    const handleHighlightOut = () => {
        setTimeout(() => {
            setHighlightedIndex(-1);
        }, 100);
    };

    return (
      <View style={[styles.cardContainer, { width: finalWidth }]}>
        {plans.map((plan, index) => (
          <TouchableHighlight
            key={index}
            onPressIn={() => handleHighlightIn(index)}
            onPressOut={handleHighlightOut}
            underlayColor="#F2F2F2"
          >
            <Text style={[styles.planText, highlightedIndex === index && styles.highlightedText]}>
              {plan}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity onPress={handleBack} style={sharedStyles.backButton}>
        <Text style={sharedStyles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text style={sharedStyles.subheaderText}>Plans</Text>
      <RenderPlans />
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
      },
      planText: {
        fontSize: 16,
        padding: 8,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
      },
      highlightedText: {
        backgroundColor: '#F2F2F2',
      },
});

export default Plans;
