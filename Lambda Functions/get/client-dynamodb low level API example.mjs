import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ESM import

const config = {
    region: "ap-south-1",
};

const client = new DynamoDBClient(config);

export const getCoffee = async (event) => {

    const coffeeId = "c123";

    const input = {
        TableName: "CoffeeShop",
        Key: {
            coffeeId: {
                S: coffeeId,
            },
        },
    };

    const command = new GetItemCommand(input);
    const response = await client.send(command);

    console.log(response);
    return response;
}