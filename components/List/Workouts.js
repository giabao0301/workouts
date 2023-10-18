// Trịnh Gia Bảo - 21521866
import React from 'react';
import {workouts} from '../data';
import {FlatList, ImageBackground, View} from 'react-native';
import WorkoutItem from './WorkoutItem';
import ListHeader from './ListHeader';
import styles from './Styles';

function Workouts(props) {
  const image = {
    uri: 'https://st2.depositphotos.com/9527076/12335/i/950/depositphotos_123359068-stock-photo-fitness-workout-background-dumbbells-on.jpg',
  };

  const saveWorkoutHandler = (itemId, selected) => {
    workouts.forEach(workout => {
      if (workout.id === itemId) {
        return props.onUpdateWorkout(workout, selected);
      }
    });
  };
  // Trịnh Gia Bảo - 21521866
  return (
    <View>
      <ListHeader>FlatList - Workouts</ListHeader>
      <ImageBackground style={styles.background} source={image}>
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          data={workouts}
          renderItem={({item}) => (
            <WorkoutItem
              onSaveWorkout={selected => saveWorkoutHandler(item.id, selected)}
              type={item.type}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default Workouts;
