import React from 'react';
import styles from './Styles';
import {Text} from 'react-native';

function ListHeader(props) {
  return <Text style={styles.header}>{props.children}</Text>;
}

export default ListHeader;
