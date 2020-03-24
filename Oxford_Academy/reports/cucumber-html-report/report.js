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
  "duration": 4272955100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 7365065400,
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
  "duration": 5109919000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7415610900,
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
  "duration": 1770784600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 8103731600,
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
  "duration": 5000688400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7134849500,
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
  "duration": 2387775500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_opens_website()"
});
formatter.result({
  "duration": 6268716600,
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
  "duration": 5467449600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 7701678900,
  "status": "passed"
});
});