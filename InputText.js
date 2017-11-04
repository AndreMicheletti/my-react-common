import React from 'react'
import { TextInput, View, Text } from 'react-native'

class InputText extends React.Component {
  render() {
    const { textStyle, inputStyle, containerStyle } = styles;
    return(
      <View style={containerStyle}>
        <Text style={textStyle}>{this.props.label}</Text>
        <TextInput
          value={this.props.value}
          style={inputStyle}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          autoCorrect={this.props.autoCorrect}
          secureTextEntry={this.props.secureTextEntry}
          underlineColorAndroid="rgba(255,255,255,0)"
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    paddingLeft: 5,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    flex: 2
  }
};

InputText.defaultProps = {
  placeholder: "placeholder",
  label: "Input",
  autoCorrect: false,
  secureTextEntry: false
}

export { InputText }
