### Nuxt Masir Test

## About

This repository is the project created as a test for a job interview; it's a simple website; Using Nuxtjs.
The link to the project information:
`https://rest-countries.masir.io/`

## Dockerized

Navgiate to the project folder after downloading and installing all the packages and:
1 - To run in dev mode in terminal run: `docker-compose up -d --build`. <br>
Visit `localhost:3000` <br>
2 - To run in production mode run: `docker-compose -f docker-compose.prod.yml up -d --build`. <br>
Visit `localhost:8080`

## Help

The index will load the information of all countries; Use the action buttons on the top to filter and sort the results or search for a country.
Click on it's card to navigate to a dynamic SSR page loaded with more information about the country.
You can go back to Home (Index) by clicking the corresponding button.

## Demo

Visit a demo of the application:
`https://cimorexave.github.io/nuxt-masir-test/`
