export const putItemHandler = async (event) => {
  console.log("putItemHandler event:", JSON.stringify(event, null, 2));

  const body = JSON.parse(event.body || "{}");

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Item created successfully",
      item: body,
      success: true
    })
  };
};