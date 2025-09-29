# To-Do List Backend

This is the backend API for a To-Do List application. It provides endpoints for managing tasks, including creating, reading, updating, and deleting to-dos. The backend is built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for to-dos

- Filtering and sorting by priority and status

- Validation using Joi to ensure data integrity

- Error handling with meaningful responses

- Structured logging (e.g., with Pino)

## Technologies Used

- Node.js – JavaScript runtime

- Express – Web framework for building APIs

- MongoDB & Mongoose – Database and ODM

- Joi – Input validation

- dotenv – Environment variables management

- Pino – Logging

## Installation

Clone the repository:

git clone git@github.com:karinahurzan/to-do-list.git

cd to-do-list

Install dependencies:

`npm install`

Set up environment variables by creating a .env file:

```
MONGODB_USER=
MONGODB_PASSWORD=
PORT=
MONGODB_DB=
MONGODB_URL=
```

Start the server:

`npm run dev`

The server will run on http://localhost:3000 by default.

## Or via render: [to-do-list-nce4.onrender.com/](https://to-do-list-nce4.onrender.com/)

## API Endpoints

- GET /todos Get all to-dos (with filters and sorting)
- POST /todos Create a new to-do
- PATCH /todos/:id Update an existing to-do
- DELETE /todos/:id Delete a to-do by ID

Request Examples

### Create a to-do:

```
POST /todos
{
"todo": "Buy groceries",
"priority": 3,
"status": "undone"
}
```

### Response:

```
{
"id": "64f0a8c2f9d5f0b1c1234567",
"todo": "Buy groceries",
"priority": 3,
"status": "undone",
"createdAt": "2025-09-29T15:00:00Z",
"updatedAt": "2025-09-29T15:00:00Z"
}
```

## Validation

All inputs are validated using Joi:

- todo – string, required, 3–256 characters

- priority – number, optional, 1–10

- status – string, optional, either "done" or "undone"

## Error Handling

The API returns meaningful error messages:

- 400 Bad Request – invalid data

- 404 Not Found – resource not found

- 500 Internal Server Error – unexpected server error

Example:

```
{
"status": 400,
"message": "Todo must be at least 3 characters"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

License

This project is licensed under the MIT License.

Author: [Karina Hurzan](https://github.com/karinahurzan)
Linkedin of author: [Karina Hurzan](https://www.linkedin.com/in/karina-hurzan/)
