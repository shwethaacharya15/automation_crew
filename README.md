Spotify Testing Automation with Cypress


:rocket: Overview
This project is a comprehensive suite of automated end-to-end tests for Spotify's login functionality, utilizing Cypress as the testing framework. The primary focus of the tests is to verify the UI components, interactions, and functional flows associated with logging into Spotify, including support for both manual login (with username and password) and Google Authentication.

These automated tests simulate real user behavior to ensure that Spotify's login process works seamlessly across different devices and environments.

:star2: Features
UI Validation Tests: Verify the presence and correctness of UI components such as login forms, buttons, text placeholders, and login options.

Functional Tests: Test the login process with valid credentials, including testing login with Spotify credentials and through Google.

Cross-Device Testing: Ensure the login UI and functionality are properly responsive, particularly for mobile devices like the iPhone X.

Reusable Page Object Model: A clean and maintainable design pattern that ensures easy interaction with UI elements on the Spotify login page.

:clipboard: Table of Contents
Installation

Usage

Test Structure

Environment Variables

Technologies Used

Contributing

License

:package: Installation
To get started with this project, follow these steps:

1. Clone the Repository
Clone the project to your local machine:

bash

git clone https://github.com/shwethaacharya15/spotify-testing-automation.git
2. Navigate to the Project Folder
After cloning, go into the project folder:

bash

cd spotify-testing-automation
3. Install Dependencies
Install all necessary dependencies using npm (Node.js package manager):

bash
Copy
Edit
npm install
This will install Cypress and other required libraries specified in package.json.

:rocket: Usage
Once you have the project set up, you can run the tests in multiple ways.

Running Tests in Interactive Mode
Run Cypress in the interactive test runner to select and execute individual tests:

bash

npx cypress open
This will launch the Cypress Test Runner, where you can select the specific tests you wish to run.

Running Tests in Headless Mode
For running tests without the graphical interface, use the following command:

bash

npx cypress run
This command will run all the tests headlessly and display the results in the terminal.

:file_folder: Test Structure
This project uses the Page Object Model (POM) design pattern, which helps to separate test logic from UI interaction logic.

File Structure
cypress/integration/: Contains the actual test files.

login.spec.js: Contains tests for validating Spotify's login UI and functionality.

cypress/support/PageObjectModel/: Contains reusable page objects for interacting with the login page.

LoginPage.js: Page Object for Spotify’s login elements (buttons, input fields, etc.).

cypress.env.json: Holds environment variables like Spotify credentials and Google credentials.

cypress/fixtures/: Optional folder for storing static data or mock responses used in tests.

Key Test Scenarios
UI Validation:

Verifying that the "Log in" option, "Sign up", "Help", and other menu items are visible.

Checking that all buttons and links contain the expected text.

Ensuring that placeholders and error messages are displayed correctly.

Functional Login:

Validating login functionality with correct credentials for both Spotify and Google authentication.

Ensuring the user can log out after successful login.

Google Login:

Automated login using Google credentials by simulating user interaction with the Google login page.

Mobile Responsiveness:

Ensuring that the login page is fully responsive and works on a mobile viewport (e.g., iPhone X).

:gear: Environment Variables
In order to run the tests successfully, you'll need to provide environment variables for your Spotify and Google login credentials. You can set these variables in the cypress.env.json file as shown below:

Example of cypress.env.json:
json
Copy
Edit
{
  "spotify_email": "your_spotify_email@example.com",
  "spotify_password": "your_spotify_password",
  "google_email": "your_google_email@example.com",
  "google_password": "your_google_password"
}
Make sure to replace the placeholder values with your actual credentials. Note: Never commit sensitive credentials to a public repository.

:computer: Technologies Used
This project leverages several modern technologies to ensure effective testing and seamless integration:

Cypress: A JavaScript-based end-to-end testing framework, ideal for web applications.

JavaScript: Used for writing test scripts and supporting functionality.

Page Object Model (POM): A design pattern that enhances test maintenance by abstracting UI interactions into separate page objects.

Google OAuth: Used to simulate login using Google credentials.

Node.js and npm: Used for managing project dependencies and running scripts.

:handshake: Contributing
We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

Fork the repository on GitHub.

Create a new branch for your feature or bug fix:

bash

git checkout -b feature-branch
Make your changes and commit them:

bash

git commit -am 'Add new feature or fix bug'
Push your changes to your forked repository:

bash

git push origin feature-branch
Open a pull request on the main repository, describing the changes you've made.

Please ensure your code follows the project's style guidelines and includes tests if necessary.

:page_facing_up: License
This project is licensed under the MIT License - see the LICENSE file for details.

