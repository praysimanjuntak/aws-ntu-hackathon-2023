# AWS-NTU-hackathon-2023

This is an chrome extension project to help people to reduce their reading time by selecting the whole text that they want to summarize.
Clone the server and extension and get started. You can either create your own server or use the Lightsail instance that I created (note, this instance might be deleted after the hackathon)

## Endpoint
I used a `flan-t5-base-samsum` model for the summary. You can check the notebook file for your reference in AWS SageMaker.

## Server
You would need to create a server for better security between your chrome extension and AWS SageMaker model.
Before started, make sure you do `npm install` and create a `.env` file for your AWS SecretKey and SecretKeyID. The format of your `.env` file should look like this:

```
AWS_ACCESS_KEY_ID=<yourAccessKeyID>
AWS_SECRET_ACCESS_KEY=<yourSecretAccessKey>
AWS_REGION=<Region>

SUMMARY_ENDPOINT=<EndpointURLofYourSageMakerModel>
```
Finally, you can just do `node index.js`

## Extension
Go to Extension settings in Chrome and toggle the developer mode. <b>Make sure you use the right URL for the fetch in</b> `background.js`. If you create your own server, then change it to your own URL, otherwise use the this link made in AWS Lightsail for the server `http://13.250.71.154:8080`. After that, you can just import the extension to chrome and use it.

## Further improvement
- Might change the alert to popup by injecting the modal to background page
- Use Whisper AI or Amazon Transcribe to transcribe youtube videos and call the summarizer model
