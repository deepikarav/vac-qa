This repo contains tests written in Cypress.

# 1. Install Cypress

npm install cypress --save-dev

Follow these instructions to install Cypress.
https://docs.cypress.io/guides/getting-started/installing-cypress


# 2. Clone this repo

## clone this repo to a local directory
git clone https://git-codecommit.ca-central-1.amazonaws.com/v1/repos/VAC-QA

## cd into the cloned repo
cd VAC-QA

## install the node_modules & install all dependencies from the root directory
npm install

## and open Cypress GUI
npm run cypress open

## run Cypress tests headlessly
npm run cypress run

## run Cypress tests headed
npm run cypress run -- --headed

## generate mochawesome report
npm run cypress run -- --reporter mochawesome

## runs all example projects in specific browser
npm run cypress run -- --browser chrome (for chrome browser)





