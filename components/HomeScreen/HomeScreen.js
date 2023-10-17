import React, {useState} from 'react';
import Workouts from '../List/Workouts';
import FruitsVegetables from '../List/FruitsVegetables';
import {StyleSheet, View} from 'react-native';
import SelectedItem from '../List/SelectedItem';

function HomeScreen() {
  const renderItemsHandler = items => {
    console.log(items);
  };

  return (
    <View style={styles.homeScreen}>
      <Workouts renderItems={items => renderItemsHandler(items)} />
      <FruitsVegetables />
      <SelectedItem />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
});
