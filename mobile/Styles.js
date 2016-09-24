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

const h1 = {
  ...Font.style('patua-one'),
  color: colors.dark,
  fontSize: 48,
  marginTop: 60
}

const h2 = {
  ...Font.style('patua-one'),
  color: colors.seafoam,
  fontSize: 24,
  marginBottom: 100
}

const body = {
  ...Font.style('open-sans'),
  color: colors.medium,
  fontSize: 18
}

const button = {
  ...Font.style('open-sans-bold'),
  alignSelf: 'center',
  borderColor: colors.seafoam,
  borderWidth: 3,
  justifyContent: 'center',
  marginTop: 20,
  paddingBottom: 5,
  paddingTop: 7,
  color: colors.seafoam,
  fontSize: 24,
  textAlign: 'center',
  width: 354
}

const actionButton = {
  ...button,
  backgroundColor: colors.rust,
  borderColor: colors.rust,
  borderWidth: 3,
  color: colors.light
}

const p = {
  ...Font.style('open-sans'),
  alignSelf: 'center',
  fontSize: 16,
  marginTop: 10
}

const container = {
  flex: 1,
  backgroundColor: colors.light,
  padding: 10,
  paddingTop: 40
}

const styles = StyleSheet.create({
  h1,
  h2,
  body,
  button,
  actionButton,
  container,
  p
});

module.exports = {
  colors,
  loadFonts,
  styles
}
