# PasswordGenerator

## Description

The motivation for this project was to create the JavaScript logic behind a password generator. By using simple techniques of arrays, pre-defined functions, logical statements, and creating my own functions I learned how to manipulate data to check if requirements have been fulfilled. I also learned how to manipulate and handle user input and response to determine what data is outputted to the user. The thing I am most proud of with this project is that I was able to implement logic to check if the user criteria had been met with the password. I did this by testing a password with four characters and making sure that the password was regenerated if there were four criteria until all four criteria had been met for the password. With the completion of this project I fulfilled the following user acceptance criteria.

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

This project taught me introductory techniques on I can take input from a user and use it to output messaging to the user. In the future, I would try to incorporate the user messaging into a more UI friendly manner such that the prompt does not show OK/Cancel but either has a listener on a toggle in the UI or has a checkbox that I could read. This would make the UX more appealing and intelligent than the prompt way that it is today.

## Installation

1. Download all files within the main directory as well as the assets directory to your device.

2. Open the index.html file in your browser to view the website.

3. If future edits need to be made then the stylesheet can be found under ./assets/css/style.css. The javascript can be found under the parent folder.

## Usage

The following image shows the web application's appearance in a screenshot:

![The password generator webpage in a full screenshot.](./assets/images/websiteScreenshot.png)

You can view the deployed application here: https://heatherknoyes.github.io/PasswordGenerator/

## Credits

Credit to the GT Coding Bootcamp for providing the base HTML/CSS code for this project.

## License

No license.
