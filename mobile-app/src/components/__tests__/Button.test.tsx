import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import '@testing-library/jest-native/extend-expect';

describe('Button Component', () => {

  it('Calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button
        label="Press Me"
        onPress={onPressMock}
        variant="contained"
      />
    );

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('Renders with an icon', () => {
    const { getByText, getByTestId } = render(
      <Button
        label="Button with Icon"
        onPress={() => {}}
        variant="outlined"
        icon={<Icon name="arrow-right" size={18} color={colors.primary} testID="icon" />}
      />
    );

    expect(getByText('Button with Icon')).toBeTruthy();
    expect(getByTestId('icon')).toBeTruthy();
  });

  it('Respects the disabled state when submitting', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button
        label="Disabled Button"
        onPress={onPressMock}
        variant="contained"
        disabled={true}
      />
    );

    const button = getByText('Disabled Button');
    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
