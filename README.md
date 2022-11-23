# Esca
Solo React Quora Clone Project: Quora but it's all about food!!!

### Starting The App
1. run npm install on the frontend folder, the backend folder, and the parent folder.
2. Create a .env file in the backend folder using the .env example.
3. Create a postgreSQL user with CREATEDB privilages that matches your .env file
4. run ->  npx dotenv sequelize db:create
5. run ->  npx dotenv sequelize db:migrate
6. run ->  npx dotenv sequelize db:seed:all
7. run ->  npm start in the backend and frontend folder
