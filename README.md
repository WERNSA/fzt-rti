Use this repo to use ReactJS with Google Apps Script

To use this repo:

1- run "yarn install"

2- Change the name "script-name" in the packege.json for the name of the project.

3- Execute "yarn gcreate"

4- Select project type "standalone"

5- Move the file .clasp.json to the main directory

6- Excute "yarn gpush"

7- Go to the script.google.com and make the webapp deployment. (Now you can open the developtment address)

8- Execute "yarn gpull" to merge the change of the appscript file.

9- Run the "yarn dev"

10- To build the index for GAS use "yarn build" and later "yarn push"

Note: This project only works for the Frontend, you have to create an API in another project with GAS and consume it as an API rest
