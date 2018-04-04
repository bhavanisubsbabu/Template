$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckWeather.feature");
formatter.feature({
  "line": 2,
  "name": "To test a website",
  "description": "",
  "id": "to-test-a-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckWeather"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To go to BBC weather page and see southampton forecast",
  "description": "",
  "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "customer open \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer is on bbc weather page \"BbcWeather\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "customer types \"so146hz\" in the \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"Keys.ENTER\" in \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer should see forcast displayed showing \"Area\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 13,
      "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;;1"
    },
    {
      "cells": [
        "FIREFOX"
      ],
      "line": 14,
      "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;;2"
    },
    {
      "cells": [
        "CHROME"
      ],
      "line": 15,
      "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To go to BBC weather page and see southampton forecast",
  "description": "",
  "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CheckWeather"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer open \"FIREFOX\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer is on bbc weather page \"BbcWeather\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "customer types \"so146hz\" in the \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"Keys.ENTER\" in \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer should see forcast displayed showing \"Area\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 15
    }
  ],
  "location": "CheckWeather.customer_open(String)"
});
formatter.result({
  "duration": 4411969315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BbcWeather",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_is_on_bbc_weather_page(String)"
});
formatter.result({
  "duration": 532885,
  "error_message": "java.lang.NullPointerException\r\n\tat co.uk.ordnancesurvey.testutils.WebConnector.navigate(WebConnector.java:165)\r\n\tat uk.co.ordnancesurvey.stepdefs.CheckWeather.customer_is_on_bbc_weather_page(CheckWeather.java:22)\r\n\tat ✽.Given customer is on bbc weather page \"BbcWeather\"(CheckWeather.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "so146hz",
      "offset": 16
    },
    {
      "val": "CitySearchBox",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_types_in_the(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keys.ENTER",
      "offset": 17
    },
    {
      "val": "CitySearchBox",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_clicks_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Area",
      "offset": 47
    }
  ],
  "location": "CheckWeather.customer_should_see_forcast_displayed_showing_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWeather.customer_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "To go to BBC weather page and see southampton forecast",
  "description": "",
  "id": "to-test-a-website;to-go-to-bbc-weather-page-and-see-southampton-forecast;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CheckWeather"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer open \"CHROME\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer is on bbc weather page \"BbcWeather\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "customer types \"so146hz\" in the \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer clicks \"Keys.ENTER\" in \"CitySearchBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer should see forcast displayed showing \"Area\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer closes browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 15
    }
  ],
  "location": "CheckWeather.customer_open(String)"
});
formatter.result({
  "duration": 2028397263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BbcWeather",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_is_on_bbc_weather_page(String)"
});
formatter.result({
  "duration": 290126,
  "error_message": "java.lang.NullPointerException\r\n\tat co.uk.ordnancesurvey.testutils.WebConnector.navigate(WebConnector.java:165)\r\n\tat uk.co.ordnancesurvey.stepdefs.CheckWeather.customer_is_on_bbc_weather_page(CheckWeather.java:22)\r\n\tat ✽.Given customer is on bbc weather page \"BbcWeather\"(CheckWeather.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "so146hz",
      "offset": 16
    },
    {
      "val": "CitySearchBox",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_types_in_the(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keys.ENTER",
      "offset": 17
    },
    {
      "val": "CitySearchBox",
      "offset": 33
    }
  ],
  "location": "CheckWeather.customer_clicks_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Area",
      "offset": 47
    }
  ],
  "location": "CheckWeather.customer_should_see_forcast_displayed_showing_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckWeather.customer_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
});