$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("firstCucumberPackage/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login test Verification",
  "description": "",
  "id": "login-test-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-test-verification;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"qaurl\" with \"Chrome_browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Tester\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"test\" in the \"password_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \"singbtn_xpath\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate that \"LstOfOdrs_xpath\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I logout from the application",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close broswer",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qaurl",
      "offset": 9
    },
    {
      "val": "Chrome_browser",
      "offset": 22
    }
  ],
  "location": "StepDefinationLogin.launchingURl(String,String)"
});
formatter.result({
  "duration": 9452235717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    },
    {
      "val": "username_id",
      "offset": 25
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 73713909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 9
    },
    {
      "val": "password_name",
      "offset": 23
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 52825574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singbtn_xpath",
      "offset": 12
    }
  ],
  "location": "StepDefinationLogin.click(String)"
});
formatter.result({
  "duration": 1799394344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LstOfOdrs_xpath",
      "offset": 17
    }
  ],
  "location": "StepDefinationLogin.verifytext(String)"
});
formatter.result({
  "duration": 104745275,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationLogin.logout()"
});
formatter.result({
  "duration": 1383865721,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationLogin.closeBr()"
});
formatter.result({
  "duration": 145531089,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with Invalid username and valid password",
  "description": "",
  "id": "login-test-verification;login-with-invalid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I go to \"qaurl\" with \"Chrome_browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter \"ABCDEFG\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter \"test\" in the \"password_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"singbtn_xpath\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate that \"InvalidLogInMSg_xpath\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close broswer",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qaurl",
      "offset": 9
    },
    {
      "val": "Chrome_browser",
      "offset": 22
    }
  ],
  "location": "StepDefinationLogin.launchingURl(String,String)"
});
formatter.result({
  "duration": 6730494366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDEFG",
      "offset": 9
    },
    {
      "val": "username_id",
      "offset": 26
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 80028576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 9
    },
    {
      "val": "password_name",
      "offset": 23
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 54434566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singbtn_xpath",
      "offset": 12
    }
  ],
  "location": "StepDefinationLogin.click(String)"
});
formatter.result({
  "duration": 469321780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidLogInMSg_xpath",
      "offset": 17
    }
  ],
  "location": "StepDefinationLogin.verifytext(String)"
});
formatter.result({
  "duration": 106423733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationLogin.closeBr()"
});
formatter.result({
  "duration": 187357829,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with blank username and blank password",
  "description": "",
  "id": "login-test-verification;login-with-blank-username-and-blank-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I go to \"qaurl\" with \"Chrome_browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter \"\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter \"\" in the \"password_name\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on \"singbtn_xpath\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I validate that \"InvalidLogInMSg_xpath\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I close broswer",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "qaurl",
      "offset": 9
    },
    {
      "val": "Chrome_browser",
      "offset": 22
    }
  ],
  "location": "StepDefinationLogin.launchingURl(String,String)"
});
formatter.result({
  "duration": 6631056331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "username_id",
      "offset": 19
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 55624296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "password_name",
      "offset": 19
    }
  ],
  "location": "StepDefinationLogin.entertext(String,String)"
});
formatter.result({
  "duration": 45670267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singbtn_xpath",
      "offset": 12
    }
  ],
  "location": "StepDefinationLogin.click(String)"
});
formatter.result({
  "duration": 448655947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidLogInMSg_xpath",
      "offset": 17
    }
  ],
  "location": "StepDefinationLogin.verifytext(String)"
});
formatter.result({
  "duration": 92477372,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationLogin.closeBr()"
});
formatter.result({
  "duration": 162031456,
  "status": "passed"
});
});