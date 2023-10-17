import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100% - 5',
    height: 60,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  itemName: {
    color: '#000',
    fontSize: 16,
    textAlignVertical: 'center',
    padding: 10,
  },
  selectButton: {
    padding: 10,
    width: 130,
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    marginHorizontal: 80,
  },
  background: {
    width: '100%',
    paddingBottom: 10,
  },
  list: {
    height: 290,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#CD2A2E',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default styles;
