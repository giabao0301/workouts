import React, {useState} from 'react';
import {workouts} from '../data';
import {FlatList, ImageBackground, View} from 'react-native';
import WorkoutItem from './WorkoutItem';
import ListHeader from '../ListHeader/ListHeader';
import styles from './Styles';

function Workouts(props) {
  const image = {
    uri: 'https://st2.depositphotos.com/9527076/12335/i/950/depositphotos_123359068-stock-photo-fitness-workout-background-dumbbells-on.jpg',
  };

  const [selectedItems, setSelectedItem] = useState([]);
  const selectedHandler = info => {
    workouts.forEach(workout => {
      if (workout.id === info.id && info.selected) {
        setSelectedItem(prevItem => {
          return [...prevItem, workout.type];
        });
      }
    });
    props.renderItems(selectedItems);
  };

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
              renderItems={info => selectedHandler(info)}
              type={item.type}
              id={item.id}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default Workouts;
