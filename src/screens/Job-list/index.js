import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import dataJob from "../../data/Jobs";
import Header from "../../components/Header/header";

import styles from '../Job-list/styles'

function ItemList({ dataJob }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          
		  <Text style={styles.contentJob}>{dataJob.content}</Text>
		  <Text style={styles.date}>Date: {dataJob.date}</Text>
		  <Text style={styles.time}>Time: {dataJob.time}</Text>
		  <Text style={styles.last}>Last: {dataJob.last}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
function JobList({ navigation }) {
  return (
    <View style={styles.waper}>
      <Header title="Job to do"></Header>
      <FlatList
        data={dataJob}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item}></ItemList>}
      ></FlatList>
    </View>
  );
}
export default JobList;
