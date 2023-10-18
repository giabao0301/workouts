// Trịnh Gia Bảo - 21521866
import React from 'react';
import {fruits_vegetables} from '../data';
import {ImageBackground, SectionList, Text, View} from 'react-native';
import FruitVegetableItem from './FruitVegetableItem';
import ListHeader from '../ListHeader/ListHeader';
import styles from './Styles';

const image = {
  uri: 'https://siegend.vn/wp-content/uploads/2023/02/cong-thuc-cho-mon-salad-an-toan-141221-03.jpg',
};
function FruitsVegetables(props) {
  const saveDataHandler = (item, selected) => {
    fruits_vegetables.forEach(fruit_vegetable => {
      fruit_vegetable.data.forEach(element => {
        if (element === item) {
          return props.onUpdateFruitVegetable(element, selected);
        }
      });
    });
  };
  // Trịnh Gia Bảo - 21521866
  return (
    <View>
      <ListHeader>SectionList - Fruits & Vegetables</ListHeader>
      <ImageBackground style={styles.background} source={image}>
        <SectionList
          style={styles.list}
          sections={fruits_vegetables}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <FruitVegetableItem
              onSaveData={selected => saveDataHandler(item, selected)}
              data={item}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default FruitsVegetables;
