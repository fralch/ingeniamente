# CLAUDE.md

## Project Overview

Ingeniamente.com has been refactored into a **Full Stack JavaScript Application** implementing a generic **MVC** pattern with a decoupled frontend.
- **Backend (API)**: Node.js + Express + Sequelize (MySQL)
- **Frontend (Client)**: React + Vite + Tailwind CSS

## Technology Stack

### Backend (`/`)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL 8.0+
- **ORM**: Sequelize (handling Models and Migrations)
- **API**: RESTful JSON API served at `/api`

### Frontend (`/client`)
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (To be configured)
- **State Management**: React Hooks

## Project Structure

```
/
├── app.js               # API Entry Point (Port 3000)
├── models/              # Sequelize Models (Topic, Category)
├── migrations/          # Database Migrations
├── routes/              # API Routes
├── controllers/         # Logic Handlers
├── config/              # DB Configuration
├── client/              # React Application (Port 5173)
│   ├── src/             # React Source
│   ├── public/          # Static Assets
│   └── vite.config.js   # Vite Config
└── .env                 # Environment Variables
```

## Development Workflow

### 1. Backend (API)
- **Install**: `npm install`
- **Database**: 
  - Ensure MySQL is running.
  - Create DB: `npx sequelize-cli db:create` (if not exists)
  - Migrate: `npx sequelize-cli db:migrate`
- **Run**: `node app.js` (Server runs on http://localhost:3000)

### 2. Frontend (React)
- **Install**: `cd client && npm install`
- **Run**: `npm run dev` (Client runs on http://localhost:5173)

### 3. Migrations
- **Generate Model**: `npx sequelize-cli model:generate --name ModelName --attributes name:string`
- **Run Migrations**: `npx sequelize-cli db:migrate`
- **Undo**: `npx sequelize-cli db:migrate:undo`

## Deployment
- Backend and Frontend are decoupled.
- For production, build the React app (`npm run build` in client) and serve the `client/dist` folder via Express (or easier, use Nginx/Vercel for frontend).

## Current Status
- Database initialized with `Category` and `Topic` tables.
- Express configured to serve `/api` endpoints.
- React app scaffolded in `client/`.
- **Next Steps**:
  - Configure Tailwind in `client`.
  - Migrate HTML/JS views to React Components.
  - Connect React to API.
