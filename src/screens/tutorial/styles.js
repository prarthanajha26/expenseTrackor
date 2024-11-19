import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimesion';

const styles = StyleSheet.create({
  bgcImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  tutorialContainer: {
    paddingHorizontal: vw(20),
  },
  button: {
    marginTop: 30,
  },
  welcomeText: {color: 'white', fontSize: 40},
  subText: {color: 'white', fontSize: 16, marginTop: vh(10)},
});

export default styles;
