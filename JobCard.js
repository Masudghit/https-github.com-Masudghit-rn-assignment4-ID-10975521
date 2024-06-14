// components/JobCard.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const JobCard = ({job}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JobCard;
