# Manager Demo Script (10 Minutes)

## Opening
- Introduce the framework as a practical example of API automation using Playwright and TypeScript.
- Explain the objective: demonstrate reusable design, CRUD coverage, reporting, and CI/CD readiness.
- Briefly mention that GitHub Copilot accelerated implementation while engineering judgment guided the design.

## Demo Flow

### 1. Project Overview
Show the purpose of the framework and how it targets JSONPlaceholder APIs for CRUD validation.

### 2. Folder Structure
Walk through the main folders and explain how the code is organized.

### 3. Framework Architecture
Explain the flow from tests to service layer to API client and then to the external API.

### 4. API Client Explanation
Highlight the reusable client, shared headers, timeout handling, and error handling.

### 5. Service Layer Explanation
Show how the service layer simplifies API interactions for post-related operations.

### 6. CRUD Test Execution
Run through create, read, update, and delete scenarios and explain the validation approach.

### 7. Test Reports
Show the HTML, JSON, and JUnit outputs and explain their value for test visibility.

### 8. CI/CD Workflow
Explain how the GitHub Actions workflow automates execution and publishes artifacts.

### 9. Copilot Prompt Journey
Summarize how prompts were used to build the framework progressively across foundation, CRUD, reporting, and production readiness phases.

## Closing
- Recap the main achievements.
- Highlight the learning outcomes from using GitHub Copilot collaboratively.
- Mention the next opportunities for growth, such as authentication, schema validation, and enterprise integration.
