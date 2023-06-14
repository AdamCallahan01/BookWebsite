import * as AWS from 'aws-sdk'

AWS.config.update(
    {
        maxRetries: 3,
        region: 'us-west-2',
        secretAccessKey: process.env.REACT_APP_DYNAMO_SECRET_KEY,
        accessKeyId: process.env.REACT_APP_DYNAMO_ACCESS_KEY
    });

const docClient = new AWS.DynamoDB.DocumentClient();

export const updateAwsConfig = () => {
    AWS.config.update(
        {
            maxRetries: 3,
            region: 'us-west-2',
            secretAccessKey: process.env.REACT_APP_DYNAMO_SECRET_KEY,
            accessKeyId: process.env.REACT_APP_DYNAMO_ACCESS_KEY
        });
        console.log(process.env.REACT_APP_DYNAMO_SECRET_KEY);
}

//Logs all table data to the console
export const fetchData = async (tableName) => {
    // console.log("Reached fetchData");
    AWS.config.update(
        {
            maxRetries: 3,
            region: 'us-west-2',
            secretAccessKey: process.env.REACT_APP_DYNAMO_SECRET_KEY,
            accessKeyId: process.env.REACT_APP_DYNAMO_ACCESS_KEY
        });
    var params = {
        TableName: tableName,
        ReturnConsumedCapacity: 'TOTAL'
    }

    // docClient.scan(params, function (err, data) {
    //     if (!err) {
    //         console.log(data)
    //     } else {
    //         console.log(err)
    //     }
    // })
    const itemList = [];
    let items;
    items = await docClient.scan(params).promise();
    // console.log("Scan promise: ");
    // console.log(items);
    items.Items.forEach((item) => itemList.push(item));
    // console.log("Extracted items: ");
    // console.log(itemList);
    return itemList;
}

//Add data to dynamoDB
export const putData = (tableName, data) => {
    AWS.config.update({region: 'us-west-2'});

    var params = {
        TableName: tableName,
        Item: data
    }
    
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}