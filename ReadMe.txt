This is a Maven based framework

Pre Requisites
selenium jars to run locally (copy JAR folder to your C:\) - jars needs to be running to enable selenium tests to run!(Ex of Hub & Node jars at the bottom of this doc)
Selenium associated drivers for the browsers
cucumber pluggin for your your IDE

src/test/resources: contains your feature file of what you want to test, your scenario (s). 
					I would recomend having 1 feature file per page

src/test/java/stepdefs: this contains the glue copde that maps your feature file to your methods in the "webconnector class"
						Right click runner to excecute the test
						
			/testconfig: contains Key URL's of pages
			/OR.properties: contains xpaths or element ID's for assertions and references elements to click on
			
Example of NODE.cmd to be added to your local jar folder:

"echo Starting Local WebDriver node ...
java -Dwebdriver.chrome.driver="chromedriver.exe" -Dwebdriver.firefox.driver="geckodriver" -Dwebdriver.ghost.driver="Ghostdriver" -jar selenium-server-standalone-3.4.0.jar -role webdriver -hub http://Localhost:4444/grid/register -maxSession 60 -browser browserName=firefox,maxInstances=9,platform=ANY -browser browserName=chrome,maxInstances=9,platform=ANY -browser browserName="internet explorer",maxInstances=5,platform=ANY -browser browserName="Ghostdriver",maxInstances=0,platform=ANY -port 5555 -registerCycle 5000"

Example of HUB.cmd to be added to your local jar folder:

"echo Starting Selenium Hub (you must then start at least 1 webdriver node) ...
:: browserTimeout Controls how long the browser is allowed to hang (value in seconds)
:: timeout Controls how long the client is  is allowed to be gone before the session is reclaimed (value in seconds)
:: Please note that the "browserTimeout" is intended as a backup timeout mechanism when the ordinary timeout mechanism fails, which should be used mostly in grid/server environments to ensure that crashed/lost processes do not stay around for too long, polluting the runtime environment.
java -jar selenium-server-standalone-3.4.0.jar -role hub -timeout 120 -browserTimeout 160"
			
