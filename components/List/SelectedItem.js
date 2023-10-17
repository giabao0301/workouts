import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';

function SelectedItem() {
  // console.log(props.item);
  return (
    <View>
      <Text style={styles.header}>SELECTED EXERCISES:</Text>
      {/* <Text style={styles.itemName}>{props.passedItems}</Text> */}
    </View>
  );
}

export default SelectedItem;
