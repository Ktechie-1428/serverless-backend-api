export const getAllItemsHandler = async (event) => {
  console.log("getAllItemsHandler received event:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hello from Kali's serverless API",
      endpoint: "GET /",
      success: true
    })
  };
};