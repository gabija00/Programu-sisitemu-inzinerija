import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export const questions = ['2*2?', '5+5?', '9-7?', '22+27?', 'sqrt9?', 'sqrt36?', 'sqrt25?'];

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const DATA = [
  {
    question: '6*6 ?',
    aswer: '36',
  },
  {
    question: '25+66 ?',
        aswer: '91',
  },
  {
    question: '15/3 ?',
        aswer: '5',
  },
];