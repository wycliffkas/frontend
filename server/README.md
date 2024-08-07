![Numida](./logo.numida.png)

# SERVER SETUP INSTRUCTIONS

This is a python server and requires that you have python installed on your machine.

## Installation

> You will need docker installed in order to run the server

1. Change directory to the server folder `cd server`
2. Build and run the server `docker compose up --build`
3. Confirm your application is available at http://localhost:5000

## API Documentation

### GraphQL Endpoint

**URL:** `/graphql`

**Method:** `POST`

**Description:** This endpoint allows you to query loan products and loan applications using GraphQL.

**Example Query:**

To get all loan products:

```graphql
{
  loan_products {
    id
    name
    interest_rate
    max_loan_amount
  }
}
```

To get all loan applications:

```graphql
{
  loan_applications {
    id
    full_name
    email
    loan_amount
    loan_purpose
  }
}
```

### REST Endpoints

**URL:** `/apply-loan`
**Method:** `POST`

**Description:** This endpoint allows you to apply for a loan.

**Request Body:**

```json
{
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "loan_amount": 5000,
  "loan_purpose": "Business Expansion"
}
```
**Responses:**

* **Success (201)**:  

```json
{
  "message": "Loan application submitted successfully."
}
```

* **Error (400)**:

```json
    {
        "message": "All fields are required."
    }
```

### Home Endpoint

**URL:** `/`
**Method:** `GET`

**Description:** This endpoint returns a welcome message.

**Response:**

```json
{
  "message": "Welcome to the Numida API"
}
```
