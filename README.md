### To run the application

- To run the application, you must have installed proper engines on your machine.
	- `node v10.x` 
	- `npm v6.9`
- Install the local dependencies for the project. To do so, go to the root of the project directory and run the command `npm install` in the terminal.
- For running the application, it should have valid configs and some of them are not committed to this repository, in this case, it is API key for MovieDB. The app expects the key as the environment variables and sets them as config. Please generate a MovieDB API KEY.
- To start the server, execute the command `MOVIE_DB_API_KEY=your_api_key npm start`
	The server should be up and running on port 3000. To it check you [http://localhost:3000/isServerUp](http://localhost:3000/isServerUp "http://localhost:3000/isServerUp")

### To test the application

- The server should be running in the test environment. To run it in the test environment, execute `MOVIE_DB_API_KEY=your_api_key npm run start:test`
- Now to test, execute the command in other terminal window `npm test`
