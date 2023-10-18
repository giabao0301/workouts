import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';

function SelectedItem(props) {
  const Workouts = props.renderWorkout.map(renderItem => {
    return renderItem.type;
  });

  const FruitVegetables = [...props.renderFruitVegetable];
  const Merged = [...Workouts, ...FruitVegetables];
  return (
    <View>
      <Text style={styles.header}>SELECTED EXERCISES:</Text>
      <Text style={styles.itemName}>{Merged.join(', ')}</Text>
    </View>
  );
}

export default SelectedItem;
