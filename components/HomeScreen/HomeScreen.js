import React, {useState} from 'react';
import Workouts from '../List/Workouts';
import FruitsVegetables from '../List/FruitsVegetables';
import {StyleSheet, View} from 'react-native';
import SelectedItem from '../List/SelectedItem';

function HomeScreen() {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [selectedFruitVegetables, setSelectedFruitVegetables] = useState([]);
  const updateWorkoutHandler = (workout, selected) => {
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

  const updateFruitVegetableHandler = (fruit_vegetable, selected) => {
    if (fruit_vegetable && selected) {
      setSelectedFruitVegetables(prevFruitVegetables => {
        return [...prevFruitVegetables, fruit_vegetable];
      });
    } else {
      const filteredItems = selectedFruitVegetables.filter(
        selectedFruitVegetable => {
          return selectedFruitVegetable !== fruit_vegetable;
        },
      );
      setSelectedFruitVegetables(filteredItems);
    }
  };

  return (
    <View style={styles.homeScreen}>
      <Workouts onUpdateWorkout={updateWorkoutHandler} />
      <FruitsVegetables onUpdateFruitVegetable={updateFruitVegetableHandler} />
      <SelectedItem
        renderWorkout={selectedWorkouts}
        renderFruitVegetable={selectedFruitVegetables}
      />
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
