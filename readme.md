# Serverless hasMutationDna


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

You must have Node.js and serverless installed on your terminal  <br />


### Installing

1.- Clone the repo and install the node modules. <br />
You can do that by typing `npm i` whithin the project folder on your terminal. <br />

2.- I have created a test user in order for you to play with the app:

```sh
Username: testUser
Password: OWugT07SOCoK2xTG
```

3.- Create an .env file on root and paste the following env variable replacing the username and password with the test user provided above:<br />

```sh
MONGODB_URL = mongodb+srv://<username>:<password>@cluster0.8nvmi.mongodb.net/dna-sequences?retryWrites=true&w=majority
```


### Running the app

### --> Dev

1.- Open your terminal and go to the project folder. <br />
2.- To start the app run: <br />

```sh
npm start
```

3.- You should be able to see some paths on your terminal created by service-offline.

4.- Copy the URL given and paste it in postman.


### Paths to test in postman:

If you are not using port 3000 to run something else:

1.- POST /mutation
```sh
 POST request to add the DNA sequence: http://localhost:3000/dev/mutation
```

The payload of the request should be raw type JSON:

```sh
{
    "sequence" : [
        "ATGGGA",
        "ATGTTA",
        "AGCGTT",
        "GTGCGA",
        "CCACTA",
        "GGTGCA"
        ]
}
```


and the response you should get should be similar to this one:

```sh
{
    "data": {
        "sequence": [
            "ATGGGA",
            "ATGTTA",
            "AGCGTT",
            "GTGCGA",
            "CCACTA",
            "GGTGCA"
        ],
        "hasMutation": false,
        "id": "d886815f-e8c6-47c6-976c-28611ed01904"
    },
    "message": "Sequence successfully added!"
}
```

2.- GET /stats
```sh
 GET request to get all DNA sequences saved within the DB:  http://localhost:3000/dev/stats


and the response you should get should be similar to this one:

```sh
{
    "data": {
        "count_mutations": 2,
        "count_no_mutation": 3,
        "ratio": 0.6666666666666666
    }
}
```