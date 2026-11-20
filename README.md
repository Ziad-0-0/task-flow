# TaskFlow API

A RESTful task management API built with Node.js, Express, and PostgreSQL.

## Overview

TaskFlow is a backend project focused on building a structured REST API for task management. It uses PostgreSQL for persistent data storage and Express.js to handle HTTP requests.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- node-postgres (`pg`)
- Zod for request validation
- bcrypt for password hashing
- dotenv for environment configuration

## Features

- RESTful API structure
- Task CRUD operations
- PostgreSQL database integration
- Request validation using Zod
- Centralized error handling
- Environment-based configuration
- Health check endpoint

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Ziad-0-0/taskflow.git
cd taskflow
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root using `.env.example` as a template, then configure your database credentials.

### Run the development server

```bash
npm run dev
```

The API runs on:

```text
http://localhost:3000
```

Health check:

```text
GET /health
```

## Project Status

TaskFlow is under active development. Authentication, authorization, automated testing, and additional API features are planned.

## Author

Ziad Tarek
