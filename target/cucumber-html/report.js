$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/LoginPage.feature");
formatter.feature({
  "name": "Login into swiggy website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has opened swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct \"\u003cPhonenumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phonenumber"
      ]
    },
    {
      "cells": [
        "9986030084"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened swiggy website on Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Step.user_has_opened_swiggy_website_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct \"9986030084\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Step.user_enters_correct_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});