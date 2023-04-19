//prompt: string | Required
//A text description of the desired image(s). The maximum length is 1000 characters.

//n: integer | Optional | Defaults to 1 | The number of images to generate. Must be between 1 and 10.

//size | string | Optional | Defaults to 1024x1024
//The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.

//response_format: string | Optional | Defaults to url
//The format in which the generated images are returned. Must be one of url or b64_json.

//user: string | Optional
//A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.

const imageCreate = async (req, res)=>{

  try {

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      organization: "org-JhcXmE8ULjmcbXBKEiyQSEr8",
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = await new OpenAIApi(configuration);

    const {prompt, n, size, response_format, user}=req.body;
    console.log(req.body)

    const response = await openai.createImage(req.body);
  
  
    res.status(200).json(response);
  } catch (error){
    res.status(400).json({ error: error.message });
  }


}

module.exports = {
  imageCreate,
};
