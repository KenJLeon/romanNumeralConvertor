# Roman Numeral Converter
## Functionality:
The user enters a whole number between 1 and 3999.
The backend processes the number and returns the corresponding Roman numeral.
The frontend displays the Roman numeral to the user in a clean and user-friendly interface.

## Technologies Used:
- Frontend: React, Adobe React Spectrum
- Backend: Express
- Containerization: Docker

## Requirement
- Docker and Docker compose installed. See [docker installation](https://docs.docker.com/engine/install/) and [docker compose installation](https://docs.docker.com/compose/install/)

## Start the Service
Run the following command at the root directory
```bash
docker compose up -d
```

Once all the containers are up, go to [localhost:3000](http://localhost:3000/)

## Testing
Testing are seperated by frontend and backend services.

### Frontend

```bash
cd client
npm test
```

### Backend
```bash
cd api
npm test
```

## Reference

Roman numeral Specification: [Roman Numerals](https://en.wikipedia.org/wiki/Roman_numerals).

Testing material [Roman numerals from 1 - 3999](https://oeis.org/A006968/a006968.txt).
