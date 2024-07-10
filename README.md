# User Insights
## Overview
User Insights is a project aimed at providing analytical insights based on user data, specifically focusing on movie-watching history and user movie ratings.

## Features
### Backend: Handles data processing and database management.
### Frontend: User interface for interacting with the data.
### Data Analysis: Provides insights and analytics based on user data.

## Setup
### Prerequisites
1. Python 3.8 or higher
2. Node.js
3. npm

## Installation
### Clone the repository:
```
git clone https://github.com/Nikhil-Biyani/user-insights.git
cd user-insights
```
### Set up the backend:
```
cd app_backend
pip install -r requirements.txt
python initDB.py
```

### Set up the frontend:
```
cd ../app_frontend
npm install
npm start
```

### Usage
#### Ensure the backend server is running:
```
cd app_backend
python app.py
```
#### Open another terminal and start the frontend server:
```
cd app_frontend
npm start
```
#### Access the application at http://localhost:3000.

### Project Structure
1. app_backend: Contains the backend code.
2. app_frontend: Contains the frontend code.
3. Movie_insights.ipynb: Jupyter Notebook for data analysis.
4. create_tables.sql: SQL script to create database tables.
5. insert_data.sql: SQL script to insert initial data.

### Contributing
Feel free to fork the repository and submit pull requests.
