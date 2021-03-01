import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
  },
  containerImage: { width: 100, height: 150 },
  image: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  contentJob: {
    fontSize: 15,
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    marginBottom: 10,
  },
  time: {
    fontSize: 10,
    marginBottom: 10,
  },
  last: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight:'bold'
  },
});
export default styles;