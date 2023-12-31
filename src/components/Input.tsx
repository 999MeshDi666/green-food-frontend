import { View, TextInput, StyleSheet, InputModeOptions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type InputProps = {
  icon: any;
  placeholder: string;
  inputMode?: InputModeOptions;
  styles?: { [key: string]: string | number };
  secureEntry?: boolean;
  value: string;
  onChange: (value: string) => void;
};
const Input = ({
  icon,
  placeholder,
  inputMode = 'text',
  secureEntry = false,
  styles,
  value,
  onChange,
}: InputProps) => {
  return (
    <View style={[style.container, styles]}>
      <FontAwesome5 name={icon} size={18} color="#fff" />
      <TextInput
        value={value}
        placeholder={placeholder}
        style={[style.input]}
        placeholderTextColor={style.input.color}
        inputMode={inputMode}
        secureTextEntry={secureEntry}
        onChangeText={onChange}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    backgroundColor: '#417043',
    padding: 16,
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 16,
    width: '100%',
  },
});
export default Input;
