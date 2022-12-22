/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform, StyleProp, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounceValue} from '../hooks/useDebounceValue';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style: globalStyle}: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebounceValue(textValue);

  useEffect(() => {}, [debouncedValue]);

  return (
    <View style={{...styles.container, ...(globalStyle as any)}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search pokemon"
          style={{...styles.textInput, top: Platform.OS === 'android' ? 2 : 0}}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={20} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
