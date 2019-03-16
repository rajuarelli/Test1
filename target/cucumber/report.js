$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:test.feature");
formatter.feature({
  "name": "test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open URL",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.hello()"
});
formatter.write("This is first statement");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.second()"
});
formatter.write("This is second statement");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.third()"
});
formatter.write("This is 3rd statement");
formatter.result({
  "status": "passed"
});
});