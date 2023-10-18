import React from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import styles from './Styles';

function FruitVegetableItem(props) {
  const saveStateHandler = selected => {
    props.onSaveData(selected);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{props.data}</Text>
      <Button onSaveState={saveStateHandler} />
    </View>
  );
}

export default FruitVegetableItem;
