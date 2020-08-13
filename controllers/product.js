const serverless = require('serverless-http');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { "v4": uuidv4 } = require('uuid');

const dbConnection = require('../dbConfigs');
const SequenceService = require('../services/sequenceService');
const SequenceMiddleware = require('../middleware/hasMutation');
const StatsMiddleware = require('../middleware/stats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.send("<h3>Welcome to the Serverless Sequence API!!</h3>")
})

app.post('/mutation', async (req, res) => {
  try {
    await dbConnection();
    const data  = req.body;
    const { sequence } = data;
    if(!data) {
        return "Please pass all required fields!"
    }
    const hasMutation = SequenceMiddleware.hasMutation(sequence)
    const dataToSave = { sequence, hasMutation, id:uuidv4() };
    let addSequence =  await SequenceService.addSequence(dataToSave);
    if (addSequence) {
      return res.status(200).send(addSequence)
    }
  } catch (error) {
    return res.status(403).send(error)
  }
})

app.get('/stats', async (req, res) => {
try {
    await dbConnection();
    const allSequences = await SequenceService.getStats();
    if (allSequences) {
      const stats = StatsMiddleware.getSequencesStats(allSequences)
      return res.status(200).send({
        data: stats
      })
    }
  } catch (error) {
     //  handle errors here
     console.log(error, "error!!");
     return res.status(403).send(error)
  }
})

module.exports.handler = serverless(app);