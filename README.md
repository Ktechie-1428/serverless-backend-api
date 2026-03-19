# Serverless Backend API

A serverless REST API built on AWS using Lambda, API Gateway, DynamoDB, and AWS SAM.

## Overview

This project demonstrates how to build and deploy a serverless backend without managing traditional servers. The API supports basic operations for creating and retrieving items through HTTP endpoints.

## Live API Endpoint

https://pn4vsaatyb.execute-api.us-east-1.amazonaws.com/Prod/

## Architecture

```text
Client Request
   ↓
Amazon API Gateway
   ↓
AWS Lambda
   ↓
Amazon DynamoDB
```

## Technologies Used

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS SAM
- AWS CloudFormation
- Node.js
- GitHub

## Features

GET `/`
- Returns all items

GET `/{id}`
- Returns a specific item by ID

POST `/`
- Creates a new item in DynamoDB

## Example Requests

### Get all items

```
curl https://pn4vsaatyb.execute-api.us-east-1.amazonaws.com/Prod/
```

### Get item by ID

```
curl https://pn4vsaatyb.execute-api.us-east-1.amazonaws.com/Prod/123
```

### Create item

```
curl -X POST https://pn4vsaatyb.execute-api.us-east-1.amazonaws.com/Prod/ \
-H "Content-Type: application/json" \
-d '{"name":"Kali","role":"Cloud Engineer"}'
```

## Example Response

```json
{
  "id": "generated-uuid",
  "name": "Kali",
  "role": "Cloud Engineer"
}
```

## What I Learned

Through this project, I learned how to:

- Define infrastructure using Infrastructure as Code
- Deploy serverless applications with AWS SAM
- Connect API Gateway routes to Lambda functions
- Store and retrieve data using DynamoDB
- Publish a cloud project through GitHub

## Deployment

This application was deployed using AWS SAM:

```
sam build
sam deploy --guided
```

## Portfolio Project

This repository is part of my cloud engineering portfolio and demonstrates hands-on experience with AWS serverless architecture.

## Skills Demonstrated

• AWS Lambda (serverless compute)
• Amazon API Gateway (REST API routing)
• Amazon DynamoDB (NoSQL database)
• AWS SAM (Serverless Application Model)
• AWS CloudFormation (Infrastructure as Code)
• Node.js backend development
• Git & GitHub for version control