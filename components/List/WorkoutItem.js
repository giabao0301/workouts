import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import SelectButton from './SelectButton';

function WorkoutItem(props) {
  const saveStateHandler = selected => {
    props.onSaveData(selected);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{props.type}</Text>
      <SelectButton onSaveState={saveStateHandler} />
    </View>
  );
}

export default WorkoutItem;
