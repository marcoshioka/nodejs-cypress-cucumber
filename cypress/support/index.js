// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

require('cypress-plugin-retries')

Cypress.env('RETRIES', 2)

const addContext = require('mochawesome/addContext')
// const {
//     Before,
//     After,
//     Given,
//     Then
// } = require("cypress-cucumber-preprocessor/steps");

// onBeforeLoad {
//     var rimraf = require("rimraf");
//     rimraf("./mochawesome-report", function () { console.log("done"); });
// },

// cy.request() {
//     var rimraf = require("rimraf");
//     rimraf("./mochawesome-report", function () { console.log("done"); });
//   },

// Cypress.on('test:before:run', (runnable) => {
//     var rimraf = require("rimraf");
//     rimraf("./mochawesome-report", function (runnable) { console.log("done"); });
// })

//var rimraf = require("rimraf");
//rimraf("./mochawesome-report", function () { console.log("done"); });
//rimraf.sync("./mochawesome-report");
//  before (()=>{
//  const fs = require('fs-extra')
//  fs.rmdir('./mochawesome-report', { recursive: true });
//  }),

// gulp.task('clean', function () {
//     return del(['./mochawesome-report']);
// });

// afterEach ((test, runnable)=>{
//    //let evidence =  cy.screenshot('./screenshot.png') 
//     //addContext(evidence )
//     cy.screenshot(`${runnable.parent.title} -- ${test.title}.png`) 
// }),

Cypress.on('test:after:run', (test, runnable) => {
    //if (test.state === 'failed') {
    //const screenshotFileName = './screenshot.png'
    //addContext({ test },screenshotFileName )
    //}
    //cy.screenshot(`${runnable.parent.title} -- ${test.title}.png`) 
    const screenshotFileName = `${runnable.parent.title} -- ${test.title}.snap.png`
    addContext({ test }, `snapshots/${Cypress.spec.name}/${screenshotFileName}`)
})

