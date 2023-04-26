const axios = require('axios')
const Course = require("../models/Course");
// const User = require('../models/User');

const getMessages = async (req, res) => {
  try {
    const course_id = req.params.id;
    const foundCourse = Course.findById(course_id).populate('discussions_id');
    console.log(foundCourse.discussions_id)
    res.status(200).json(foundCourse.discussions_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Create a new message
const postMessage = async (req, res) => {
  try {
    const course_id = req.params.id;
    const foundCourse = await Course.findByIdAndUpdate(course_id).populate('discussions_id');

    //res.status(200).json(foundCourse.discussions_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}

// Send message to OpenAI's GPT-3 API
const postMessageToBot = (req, res) => {
  const course_id = req.params.id;


  const { message, numTokens } = req.body;
  const prompt = `As a [topic:'Typescript'] expert, [context:'https://www.typescriptlang.org/docs/'] question [question:'${message}']`;

  axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
    prompt: prompt,
    max_tokens: numTokens,
    n: 1,
    stop: ['\n'],
    temperature: 0.5,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    model: 'davinci-codex'
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPEN_API_SECRET}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const text = response.data.choices[0].text;
      res.json(text);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error generating response from bot' });
    });
};

module.exports = {
  postMessage,
  getMessages,
  postMessageToBot
};
