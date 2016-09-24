import { StyleSheet } from 'react-native'
import { Font } from 'exponent';

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans':      require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'patua-one':      require('./assets/fonts/PatuaOne-Regular.ttf')
  });
}

// http://www.colourlovers.com/palette/625987/dont_you_go_down
const colors = {
  light:   '#EDEBE6',
  medium:  '#807665',
  dark:    '#403B33',
  mint:    '#D6E1C7',
  seafoam: '#94C7B6',
  rust:    '#D3643B',
  white:   '#FFFFFF'
}

const container = {
  flex: 1,
  backgroundColor: colors.light,
  padding: 10,
  paddingTop: 40
}

const styles = StyleSheet.create({
  container
});

module.exports = {
  colors,
  loadFonts,
  styles
}
