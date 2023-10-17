import React, {useState} from 'react';
import Workouts from '../List/Workouts';
import FruitsVegetables from '../List/FruitsVegetables';
import {StyleSheet, View} from 'react-native';
import SelectedItem from '../List/SelectedItem';

function HomeScreen() {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const updateDataHandler = (workout, selected) => {
    if (workout && selected) {
      setSelectedWorkouts(prevSelectedWorkouts => {
        return [...prevSelectedWorkouts, workout];
      });
    } else {
      const selectedItems = [...selectedWorkouts];
      selectedWorkouts.forEach((selectedWorkout, index) => {
        if (selectedWorkout.id === workout.id) {
          selectedItems.splice(index, 1);
        }
      });
      setSelectedWorkouts(selectedItems);
    }
  };

  return (
    <View style={styles.homeScreen}>
      <Workouts onUpdateData={updateDataHandler} />
      <FruitsVegetables />
      <SelectedItem renderItems={selectedWorkouts} />
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
