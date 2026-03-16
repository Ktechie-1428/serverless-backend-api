export const getByIdHandler = async (event) => {
  console.log("getByIdHandler event:", JSON.stringify(event, null, 2));

  const id = event.pathParameters?.id;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Item retrieved successfully",
      id: id,
      success: true
    })
  };
};