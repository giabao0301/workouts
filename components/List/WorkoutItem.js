import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import Button from './Button';

function WorkoutItem(props) {
  const saveStateHandler = selected => {
    props.onSaveWorkout(selected);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{props.type}</Text>
      <Button onSaveState={saveStateHandler} />
    </View>
  );
}

export default WorkoutItem;
