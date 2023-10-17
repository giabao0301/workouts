import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';

function SelectedItem(props) {
  const renderList = props.renderItems
    .map(renderItem => {
      return renderItem.type;
    })
    .join(', ');
  return (
    <View>
      <Text style={styles.header}>SELECTED EXERCISES:</Text>
      <Text style={styles.itemName}>{renderList}</Text>
    </View>
  );
}

export default SelectedItem;
