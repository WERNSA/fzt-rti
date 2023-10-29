Use this repo to use ReactJS with Google Apps Script

To use this repo:

1- run "yarn install"

2- Change the name piar-react-gas in the packege.json for the name of the project.

3- Execute "yarn run gcreate"

4- Select project type "standalone"

5- Move the file .clasp.json to the main directory

6- Excute "yarn run gpush"

7- Go to the script.google.com and make the webapp deployment. (Now you can open the developtment address)

8- Execute "yarn run gpull" to merge the change of the appscript file.

9- Run the "yarn start"

10- Once you get the files from Google Apps Script, you can rename the Code.js to start.js and add this code.

function doGet () {
return HtmlService.createTemplateFromFile('dist/index')
.evaluate()
.addMetaTag('viewport', 'width=device-width, initial-scale=1')
}

Note: This project only works for the Frontend, you have to create an API in another project with GAS and consume it as an API rest
