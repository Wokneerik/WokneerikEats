import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: 600,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3
  },
  subtitle: {
    color: 'grey',
    fontSize: 15
  },
  container: {
    margin: 10
  },
  iconContainer: {
    position: 'absolute',
    top: 45,
    left: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.5
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    margin: 10,
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontWeight: '600',
    fontSize: 18,
    alignSelf: "center"
  },
  buttonTotal: {
    color: "white",
    fontWeight: '300',
    fontSize: 18,
    position: 'absolute',
    right: 15,
  } 
})