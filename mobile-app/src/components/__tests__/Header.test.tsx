import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../Header';
import '@testing-library/jest-native/extend-expect';


describe('Header Component', () => {
  it('renders correctly with the given title', () => {
    const { getByText } = render(<Header title="Test Title" />);
    const textElement = getByText("Test Title");
    expect(textElement).toBeTruthy();
  });

  it('displays the correct title text', () => {
    const { getByText } = render(<Header title="Test Title" />);
    expect(getByText("Test Title")).toHaveTextContent("Test Title");
  });

  it('applies the correct styles to the header', () => {
    const { getByText } = render(<Header title="Styled Title" />);
    expect(getByText("Styled Title")).toHaveStyle({
      fontSize: 29,
      fontWeight: "bold",
      marginBottom: 40,
    });
  });
});
