@Oxford_Academy_feature
Feature: Oxford Academy Website

@tc01_Oxford_Academy_register 
Scenario: Registering into Oxford Academy
Given Launch the Chrome browser
Then open the Oxford Academy website
Then register the details
Then close the browser

@tc02_Oxford_Academy_valid_login
Scenario Outline: Logging into Oxford Academy
Given the user launch chrome
Then the user opens website
Then the user login using "<email>" and "<password>" with vaild and invaild details
Then the user closes the browser

Examples:

|email					|password	|
|abcd@gmail.com			|abc123		|
|123@gmail.com			|maji123	|
|majida.maji98@gmail.com|M@jida1998	|


@tc03_Oxford_Academy_buybooks
Scenario: Buy book from website

Given user launches the browser
When user launches the Oxford Academy website
Then user selects Diplomatic history
Then purchase book
And close the page

@tc04_Oxford_Academy_Search_journal
Scenario: Searching journal in the application

Given The user should Launch the browser
Then The user should opens the Oxford Academy
Then the user enters journal name in search box
Then the user gets the title and prints
Then the user should close the browser

@tc05_Oxford_Academy_Link_count
Scenario: Counting number of links in a page

Given user launches the chrome browser
When user opens the webpage and logs in
Then user counts the number of journals and prints
Then closes the page 
