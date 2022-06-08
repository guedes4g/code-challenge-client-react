# Pragmateam code challenge client (React)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

## Improvements
- Code Structure
- Split into smaller components
- Added test to the useProductsSensor hook because it contains the core busines logic
- Improved Performance removing N+1 requests from frontend to backend while fetching for products` temperature
- Simplified pooling logic
- Extracted business logic from the components

## Next Improvements
- Add application configuration (eg. Port, remove hardcoded urls)
- Add better error handling
- Improve UX, inform user of loading and errors (perhaps display when sensor data was last updated)
- Improve reusability of components
- Improve styles? (Would have to validade if it is this the clients UX guidelines/styles)
- Improve tests: (Improvement Ideas):
  - Add integration tests (eg. Cypress)
  - Add more Unit tests
- Add linters and code style checks
- Add i18n support
- Improve accesibility
