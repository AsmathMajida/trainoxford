$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OxfordAcademy.Feature");
formatter.feature({
  "line": 2,
  "name": "Oxford Academy Website",
  "description": "",
  "id": "oxford-academy-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "register the details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.launch_Chrome_browser()"
});
formatter.result({
  "duration": 4724720300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.open_Oxford_Academy_website()"
});
formatter.result({
  "duration": 8666229400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.register_the_valid_details()"
});
formatter.result({
  "duration": 17743792300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStep.close_browser()"
});
formatter.result({
  "duration": 5232047400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tc02_Oxford_Academy_valid_login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user login using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild details",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 20,
      "id": "oxford-academy-website;logging-into-oxford-academy;;1"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "abc123"
      ],
      "line": 21,
      "id": "oxford-academy-website;logging-into-oxford-academy;;2"
    },
    {
      "cells": [
        "123@gmail.com",
        "maji123"
      ],
      "line": 22,
      "id": "oxford-academy-website;logging-into-oxford-academy;;3"
    },
    {
      "cells": [
        "majida.maji98@gmail.com",
        "M@jida1998"
      ],
      "line": 23,
      "id": "oxford-academy-website;logging-into-oxford-academy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 11,
      "name": "@tc02_Oxford_Academy_valid_login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user login using \"abcd@gmail.com\" and \"abc123\" with vaild and invaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_chrome()"
});
formatter.result({
  "duration": 3099587300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 9006415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 43
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_details(String,String)"
});
formatter.result({
  "duration": 5057288300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7266961500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 11,
      "name": "@tc02_Oxford_Academy_valid_login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user login using \"123@gmail.com\" and \"maji123\" with vaild and invaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_chrome()"
});
formatter.result({
  "duration": 2174437000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 9873287000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123@gmail.com",
      "offset": 22
    },
    {
      "val": "maji123",
      "offset": 42
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_details(String,String)"
});
formatter.result({
  "duration": 5643136800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7420458500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 11,
      "name": "@tc02_Oxford_Academy_valid_login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user login using \"majida.maji98@gmail.com\" and \"M@jida1998\" with vaild and invaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_user_launch_chrome()"
});
formatter.result({
  "duration": 2453387700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 6469840700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "majida.maji98@gmail.com",
      "offset": 22
    },
    {
      "val": "M@jida1998",
      "offset": 52
    }
  ],
  "location": "LoginStep.the_user_login_using_and_with_vaild_and_invaild_details(String,String)"
});
formatter.result({
  "duration": 5918244300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7450734300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Buy book from website",
  "description": "",
  "id": "oxford-academy-website;buy-book-from-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc03_Oxford_Academy_buybooks"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user launches the Oxford Academy website",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user selects Diplomatic history",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "purchase book",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close the page",
  "keyword": "And "
});
formatter.match({
  "location": "BuyBookStep.user_launches_the_browser()"
});
formatter.result({
  "duration": 3992048500,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookStep.user_launches_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 7535519500,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookStep.user_selects_Diplomatic_history()"
});
formatter.result({
  "duration": 7591706200,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookStep.purchase_book()"
});
formatter.result({
  "duration": 14304642300,
  "status": "passed"
});
formatter.match({
  "location": "BuyBookStep.close_the_page()"
});
formatter.result({
  "duration": 194433100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Searching journal in the application",
  "description": "",
  "id": "oxford-academy-website;searching-journal-in-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc04_Oxford_Academy_Search_journal"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "The user should Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "The user should opens the Oxford Academy",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the user enters journal name in search box",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the user gets the title and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the user should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.the_user_should_Launch_the_browser()"
});
formatter.result({
  "duration": 3333828500,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.the_user_should_opens_the_Oxford_Academy()"
});
formatter.result({
  "duration": 8320873700,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.the_user_enters_journal_name_in_search_box()"
});
formatter.result({
  "duration": 4869449900,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.the_user_gets_the_title_and_prints()"
});
formatter.result({
  "duration": 81936100,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.the_user_should_close_the_browser()"
});
formatter.result({
  "duration": 397157200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Counting number of links in a page",
  "description": "",
  "id": "oxford-academy-website;counting-number-of-links-in-a-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@tc05_Oxford_Academy_Link_count"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user launches the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user opens the webpage and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user counts the number of journals and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "closes the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LinkCountStep.user_launches_the_chrome_browser()"
});
formatter.result({
  "duration": 2762836400,
  "status": "passed"
});
formatter.match({
  "location": "LinkCountStep.user_opens_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 16928723600,
  "status": "passed"
});
formatter.match({
  "location": "LinkCountStep.user_counts_the_number_of_journals_and_prints()"
});
formatter.result({
  "duration": 47922900,
  "status": "passed"
});
formatter.match({
  "location": "LinkCountStep.closes_the_page()"
});
formatter.result({
  "duration": 4164549200,
  "status": "passed"
});
});