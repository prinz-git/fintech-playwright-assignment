# Fintech QA Automation Assignment (Playwright + TypeScript)

## Overview

This repository demonstrates professional-grade UI and API automation using Playwright with TypeScript, designed for a fintech environment with strong emphasis on:

* API mocking and frontend-backend decoupling

* End-to-End (E2E) UI automation

* Clean architecture using Page Object Model (POM)

* Explicit UI-based assertions

* HTML test reporting

* The project includes both mocked API tests and real E2E tests against a public demo site.

## Tech Stack

* Playwright Test

* TypeScript

* Node.js

* Page Object Model (POM)

* Built-in Playwright HTML Reporter

## Prerequisites

Node.js (v18 or newer recommended)
node -v

npm
npm -v

## Installation

From the project root, run: 

npm install
npx playwright install


## Running Tests

To run all tests:

npx playwright test


This will execute:

API mocking tests

SauceDemo E2E UI tests

## HTML Test Report

Playwright automatically generates an HTML report after each test run.

Open the HTML report:
npx playwright show-report

This opens the interactive HTML report located in:

playwright-report/


#### The report includes:

Test pass/fail status

Screenshots on failure

Execution traces

Test duration and logs

## Test Coverage

### API Automation (Mocking)

Intercepts POST /api/transfer

Success scenario (200 OK)

Failure scenario (400 Bad Request)

UI assertions based on mocked responses

### E2E UI Automation (SauceDemo)

Login using standard_user

Add product to cart

Verify cart item

Validate monetary price format ($XX.XX)

## Test Execution Report Screenshot

As required, include a screenshot of the final passing HTML report in this repository:

## Test Execution Report

![Playwright HTML Report](./screenshot.png)


## Author

Prince George
QA Automation Engineer
Playwright | TypeScript | API & E2E Automation