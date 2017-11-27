import React from 'react'
import { TextInput, View, Text } from 'react-native'

class InputText extends React.Component {

  renderLabel() {
    const { label } = this.props;
    const { textStyle } = styles;

    if (label !== null) {
      return (
        <Text style={textStyle}>
          {label}
        </Text>
      );
    } else {
      return null;
    }
  }

  render() {
    const { containerStyle } = styles;
    let inputStyle = { ...styles.inputStyle, ...this.props.extraInputStyle};

    return(
      <View style={containerStyle}>
        {this.renderLabel()}
        <TextInput
          {...this.props}
          style={inputStyle}
          underlineColorAndroid="rgba(255,255,255,0)"
        />
      </View>
    );
  }
}

InputText.defaultProps = {
  placeholder: "placeholder",
  label: null,
  autoCorrect: false,
  secureTextEntry: false,
  extraInputStyle: {},
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
    paddingLeft: 10,
    fontSize: 16,
    flex: 2
  }
};

export { InputText };
