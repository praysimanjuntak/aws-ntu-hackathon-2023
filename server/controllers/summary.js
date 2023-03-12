const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime");

const client = new SageMakerRuntimeClient({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const handleGetSummary = () => async (req, res) => {
    const { text } = req.body;
    console.log(text)

    const params = {
        Body: JSON.stringify({
            inputs: text
        }),
        EndpointName: "huggingface-pytorch-inference-2023-03-11-17-20-50-666",
        ContentType: "application/json"
    }
    const command = new InvokeEndpointCommand(params);

    try {
        const response = await client.send(command);
        res.send(JSON.parse(Buffer.from(response.Body).toString()));
        console.log(JSON.parse(Buffer.from(response.Body).toString()));
    } catch (err) {
        console.log(err)
        res.status(400).json("Unable to get summary");
    }
}

module.exports = {handleGetSummary}