# Trend Application Setup with MongoDB

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [Yarn](https://yarnpkg.com/) (Package manager)
- [MongoDB](https://www.mongodb.com/) (Local installation or cloud-based like MongoDB Atlas)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/MatibeJeremy/trend-ai.git
cd trend-ai
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
MONGO_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_secret_key
```
For MongoDB Atlas, use:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your_database_name?retryWrites=true&w=majority
```

### 4. Run MongoDB (If Using Locally)
Ensure MongoDB is running on your system:
```bash
mongod
```
Or start MongoDB as a service:
```bash
sudo systemctl start mongod
```

### 5. Start the Application
#### Development Mode
```bash
yarn start:dev
```
#### Production Mode
```bash
yarn build
yarn start:prod
```

### 6. API Documentation (Swagger)
Once the app is running, access Swagger API docs at:
```
http://localhost:3000/api
```

## Useful Commands
| Command | Description |
|---------|-------------|
| `yarn start` | Start the app in normal mode |
| `yarn start:dev` | Start the app in watch mode for development |
| `yarn start:prod` | Start the app in production mode |
| `yarn build` | Build the application |
| `yarn lint` | Run linter |
| `yarn test` | Run unit tests |
| `yarn test:e2e` | Run end-to-end tests |

## Contributing
Feel free to fork this repository, create a feature branch, and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).