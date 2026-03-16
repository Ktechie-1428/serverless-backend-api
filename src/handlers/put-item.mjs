import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const putItemHandler = async (event) => {

  const body = JSON.parse(event.body || "{}");

  const item = {
    id: crypto.randomUUID(),
    ...body
  };

  const command = new PutCommand({
    TableName: process.env.SAMPLE_TABLE,
    Item: item
  });

  await docClient.send(command);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  };
};