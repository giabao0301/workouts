import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import styles from './Styles';

function SelectButton(props) {
  const [selected, setSelected] = useState(false);
  const selectHandler = () => {
    setSelected(selected => !selected);
  };
  useEffect(() => {
    props.onSaveInfo(props.id, selected);
  }, [selected]);

  return (
    <View style={styles.selectButton}>
      <Button
        title={selected ? 'DESELECT' : 'SELECT'}
        onPress={() => selectHandler()}
      />
    </View>
  );
}

export default SelectButton;
