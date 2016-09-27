import { StyleSheet } from 'react-native'
import { Font } from 'exponent';

const loadFonts = () => {
  return Font.loadAsync({
    'body-regular':        require('./assets/fonts/PTSans-Web-Regular.ttf'),
    'body-bold':           require('./assets/fonts/PTSans-Web-Bold.ttf'),
    'body-italic':         require('./assets/fonts/PTSans-Web-Italic.ttf'),
    'body-bolditalic':     require('./assets/fonts/PTSans-Web-BoldItalic.ttf'),
    'heading-light':       require('./assets/fonts/Ubuntu-Light.ttf'),
    'heading-lightitalic': require('./assets/fonts/Ubuntu-LightItalic.ttf'),
    'heading-regular':     require('./assets/fonts/Ubuntu-Regular.ttf'),
    'heading-italic':      require('./assets/fonts/Ubuntu-Italic.ttf'),
    'heading-bold':        require('./assets/fonts/Ubuntu-Bold.ttf'),
    'heading-bolditalic':  require('./assets/fonts/Ubuntu-BoldItalic.ttf')
  })
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
