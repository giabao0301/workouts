import React from 'react';
import {fruits_vegetables} from '../data';
import {ImageBackground, SectionList, Text, View} from 'react-native';
import FruitVegetableItem from './FruitVegetableItem';
import ListHeader from '../ListHeader/ListHeader';
import styles from './Styles';

const image = {
  uri: 'https://siegend.vn/wp-content/uploads/2023/02/cong-thuc-cho-mon-salad-an-toan-141221-03.jpg',
};
function FruitsAndVegetables() {
  return (
    <View>
      <ListHeader>SectionList - Fruits & Vegetables</ListHeader>
      <ImageBackground style={styles.background} source={image}>
        <SectionList
          style={styles.list}
          sections={fruits_vegetables}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <FruitVegetableItem id={item + index} data={item} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default FruitsAndVegetables;
