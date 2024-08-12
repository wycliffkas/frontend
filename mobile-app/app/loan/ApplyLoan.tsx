import React from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "@/src/components/Button";
import colors from "../../src/constants/colors";
import Header from "@/src/components/Header";
import { formatAmount, parseAmount } from "@/src/utils/formatAmount";
import { BASE_URL } from "../../src/constants";
import { Loan } from "../../src/constants/types";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  loanAmount: Yup.string().required("Loan amount is required"),
  loanPurpose: Yup.string().trim().required("Loan Purpose is required")
});

const ApplyLoan: React.FC = () => {
  const handleSubmit = async (
    values: Loan,
    { resetForm }: { resetForm: () => void }
  ) => {
    const payload = {
      full_name: values.fullName,
      email: values.email,
      loan_amount: parseAmount(values.loanAmount),
      loan_purpose: values.loanPurpose
    };

    try {
      const response = await fetch(`${BASE_URL}/apply-loan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.status === 201) {
        Alert.alert(
          "Success",
          result.message ||
            "Your loan application has been submitted successfully."
        );
        resetForm();
      } else if (response.status === 400) {
        Alert.alert("Error", result.message || "All fields are required.");
      } else {
        Alert.alert(
          "Error",
          "An unexpected error occurred. Please try again later."
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Unable to submit the loan application. Please try again later."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Apply for a loan" />
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          loanAmount: "",
          loanPurpose: ""
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          isSubmitting
        }) => (
          <View style={styles.formWrapper}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.fullName && errors.fullName ? styles.inputError : null
                ]}
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              {touched.fullName && errors.fullName ? (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.email && errors.email ? styles.inputError : null
                ]}
                placeholder="yourname@example.com"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Loan Amount</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.loanAmount && errors.loanAmount
                    ? styles.inputError
                    : null
                ]}
                placeholder="UGX"
                keyboardType="numeric"
                onChangeText={(text) => {
                  const numericText = text.replace(/[^0-9]/g, "");
                  const numericValue = parseInt(numericText, 10);
                  if (!isNaN(numericValue)) {
                    const formattedAmount = formatAmount(numericValue);
                    setFieldValue("loanAmount", formattedAmount);
                  } else {
                    setFieldValue("loanAmount", "");
                  }
                }}
                onBlur={handleBlur("loanAmount")}
                value={values.loanAmount}
              />
              {touched.loanAmount && errors.loanAmount ? (
                <Text style={styles.errorText}>{errors.loanAmount}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Loan Purpose</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.loanPurpose && errors.loanPurpose
                    ? styles.inputError
                    : null
                ]}
                placeholder="Purpose of the loan"
                onChangeText={handleChange("loanPurpose")}
                onBlur={handleBlur("loanPurpose")}
                value={values.loanPurpose}
              />
              {touched.loanPurpose && errors.loanPurpose ? (
                <Text style={styles.errorText}>{errors.loanPurpose}</Text>
              ) : null}
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                label="SUBMIT"
                onPress={handleSubmit}
                variant="contained"
                disabled={isSubmitting}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000"
  },
  input: {
    height: 56,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 12
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: colors.primary
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 5,
    left: 1,
    right: 1
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5
  },
  formWrapper: {
    flex: 1
  }
});

export default ApplyLoan;
