import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import ApplyLoan from '../ApplyLoan'; 

describe('ApplyLoan Screen', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('displays validation errors when fields are empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ApplyLoan />);

    fireEvent.changeText(getByPlaceholderText('Full Name'), '');
    fireEvent.changeText(getByPlaceholderText('yourname@example.com'), '');
    fireEvent.changeText(getByPlaceholderText('UGX'), '');
    fireEvent.changeText(getByPlaceholderText('Purpose of the loan'), '');

    fireEvent.press(getByText('SUBMIT'));

    await waitFor(() => {
      expect(getByText('Full Name is required')).toBeTruthy();
      expect(getByText('Email is required')).toBeTruthy();
      expect(getByText('Loan amount is required')).toBeTruthy();
      expect(getByText('Loan Purpose is required')).toBeTruthy();
    });
  });



});
