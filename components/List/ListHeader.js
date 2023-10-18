// Trịnh Gia Bảo - 21521866
import React from 'react';
import {Text, StyleSheet} from 'react-native';

function ListHeader(props) {
  return <Text style={styles.header}>{props.children}</Text>;
}

export default ListHeader;
const styles = StyleSheet.create({
  header: {
    color: '#2312B6',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});
