const axios = require('axios')
const Course = require("../models/Course");
// const User = require('../models/User');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-JhcXmE8ULjmcbXBKEiyQSEr8",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getMessages = async (req, res) => {
  try {
    const course_id = req.params.id;
    const foundCourse = await Course.findById(course_id).populate('discussions_id');
    console.log(foundCourse.discussions_id)
    res.status(200).json(foundCourse.discussions_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Create a new message
const postMessage = async (req, res) => {
  try {
    console.log(req.body, req.params.id)
    const {text, name, avatar} = req.body;
    const foundCourse = await Course.findById(req.params.id).populate('discussions_id');
    foundCourse.discussions_id.push({
      text, name, avatar
    });
    foundCourse.save();
    res.status(200).json({message: "ok"})
    //res.status(200).json(foundCourse.discussions_id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}

// Send message to OpenAI's GPT-3 API
const postMessageToBot = async (req, res) => {
  try {
    const course_id = req.params.id;
    const { text, context, numTokens } = req.body;
    const prompt = `As a expert in ${context}, ${text}`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    };

    const tokenLength = prompt.length / 2;
    
    const data = {
      prompt: prompt,
      max_tokens: tokenLength,
      n: 1,
      stop: ['\n'],
      temperature: 0.5,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      model: 'text-davinci-003'
    };
    
    const response = await axios.post('https://api.openai.com/v1/completions', data, { headers });
    
    const completion = response.data.choices[0].text;

    console.log(completion)

    const message = {
      text: completion,
      name: "@super",
      avatar: "favicon-32x32.png"
    };
    
    const foundCourse = await Course.findById(course_id).populate('discussions_id');
    foundCourse.discussions_id.push(message);
    await foundCourse.save();
    
    res.status(200).json({ success: true, message: message });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error generating response from bot' });
  }
};

module.exports = {
  postMessage,
  getMessages,
  postMessageToBot
};
