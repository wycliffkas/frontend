import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import '@testing-library/jest-native/extend-expect';

import Card from '../Card';
import Button from '../Button';
import colors from '../../constants/colors';


describe('Card Component', () => {
  it('renders correctly with title and children', () => {
    const { getByText } = render(
      <Card title="Test Title" selected={false} onPress={() => {}}>
        <Text>Test Child</Text>
      </Card>
    );

    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test Child")).toBeTruthy();
  });

  it('applies the selected style when selected', () => {
    const { getByTestId } = render(
      <Card title="Selected Card" selected={true} onPress={() => {}}>
        <Text>Selected Child</Text>
      </Card>
    );

    const cardElement = getByTestId('card');
    expect(cardElement).toHaveStyle({ backgroundColor: colors.secondary });
  });

  it('renders the button with the correct label', () => {
    const { getByText } = render(
      <Card
        title="Card with Button"
        selected={false}
        onPress={() => {}}
        buttonLabel="Click Me"
      >
        <Text>Button Child</Text>
      </Card>
    );

    expect(getByText("Click Me")).toBeTruthy();
  });

  it('calls the onPress handler when the card is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Card title="Pressable Card" selected={false} onPress={onPressMock}>
        <Text>Press Child</Text>
      </Card>
    );

    fireEvent.press(getByTestId('card'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
