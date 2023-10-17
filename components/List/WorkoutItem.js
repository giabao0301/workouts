import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import SelectButton from './SelectButton';

function WorkoutItem(props) {
  const saveInfoHandler = (id, selected) => {
    const info = {
      id,
      selected,
    };
    props.renderItems(info);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{props.type}</Text>
      <SelectButton
        onSaveInfo={(id, selected) => saveInfoHandler(id, selected)}
        id={props.id}
      />
    </View>
  );
}

export default WorkoutItem;
