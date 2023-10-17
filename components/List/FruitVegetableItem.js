import React from 'react';
import {View, Text} from 'react-native';
import SelectButton from './SelectButton';
import styles from './Styles';

function FruitVegetableItem(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{props.data}</Text>
      {/* <SelectButton
        // onSelected={(id, selected) => selectedHandler(id, selected)}
        id={props.id}
      /> */}
    </View>
  );
}

export default FruitVegetableItem;
