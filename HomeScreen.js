// screens/HomeScreen.js
import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({route}) => {
  const {name, email} = route.params;

  const jobDetails = [
    {id: 1, title: 'Software Engineer', company: 'Company A', featured: true},
    {id: 2, title: 'Product Manager', company: 'Company B', featured: true},
    {id: 3, title: 'Data Scientist', company: 'Company C', featured: true},
    {id: 4, title: 'UX Designer', company: 'Company D', featured: true},
    {id: 5, title: 'DevOps Engineer', company: 'Company E', featured: false},
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Company F',
      featured: false,
    },
    {id: 7, title: 'Sales Manager', company: 'Company G', featured: false},
    {id: 8, title: 'HR Manager', company: 'Company H', featured: false},
    // Add more job details here
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome, {name}</Text>
      <Text style={styles.email}>{email}</Text>

      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal>
        {jobDetails
          .filter(job => job.featured)
          .map(job => (
            <JobCard key={job.id} job={job} />
          ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <ScrollView horizontal>
        {jobDetails
          .filter(job => !job.featured)
          .map(job => (
            <JobCard key={job.id} job={job} />
          ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default HomeScreen;
