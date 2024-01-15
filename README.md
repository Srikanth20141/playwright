# Playwright Documents

This repository contains all the project documents that I follow for the manual activity. The projects were completed using a combination of manual testing techniques and test management tools.

## Project

| Project Name | Description | Tools Used |
|--------------|-------------|------------|
| Project 1    | Tested a web application for functionality and usability. | Javascript |

## VS code commands
**npm init playwright@latest:->** initial project <br />
**create the node project:->** npm init -y <br />
**Install playwright :->** npm install playwright <br />
**Run the test in the headless mode:->** npx playwright test <br />
**Run the test in multiple worker parallel :** npx playwright test –workers 3 <br />
**Run a specific test file:** npx playwright test test.spec.js <br />
**Run on specific browser:**  npx playwright test --project=chromium <br />
**Run tests in headed mode:** npx playwright –headed <br />
**Severity:** Minor / Major <br />
**Priority:** Low / Medium / High <br />
**Resolution:** Resolved / Fix / Closed <br />
**Type:** Bug / Task / Subtask <br />
**Reporter:** Srikanth <br />
**Assignee:** Srikanth <br />

**Description:** The item does not increase when the product is added to the item <br />
Step to reproduce:  <br />
1. Navigate to amazon.com <br />
2. Search for a product and click on add  <br />
3. Add some more product <br />
4. Go to the cart <br />

**Actual Result:** Total item list should be listed <br />
