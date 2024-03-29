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
        ReturnConsumedCapacity: 'TOTAL',
        Limit: 10
    }

    // docClient.scan(params, function (err, data) {
    //     if (!err) {
    //         console.log(data)
    //     } else {
    //         console.log(err)
    //     }
    // })
    let items;
    items = await docClient.scan(params).promise();
    // console.log("Scan promise: ");
    // console.log(items);
    // items.Items.forEach((item) => itemList.push(item));
    // console.log("Extracted items: ");
    // console.log(itemList);
    return items;
}

//Fetch the items from Dynamo after a certain item key
export const fetchData2 = async (tableName, lastKey) => {
    var params = {
        TableName: tableName,
        ReturnConsumedCapacity: 'TOTAL',
        Limit: 10
    }

    params.ExclusiveStartKey = lastKey;
    let items;
    items = await docClient.scan(params).promise();
    return items;
}

//Add data to dynamoDB
export const putData = async (tableName, data) => {
    AWS.config.update({region: 'us-west-2'});

    var params = {
        TableName: tableName,
        Item: data
    }

    // docClient.put(params, function (err, data) {
    //     if (err) {
    //         console.log('Error', err)
    //     } else {
    //         console.log('Success', data)
    //     }
    // })

    //return true if succeddful
    //return false if error occurs
    let status = false;
    await docClient.put(params).promise().then(() => {
        status = true;
        console.log("SUCCESS");
      })
      .catch((error) => {
        console.log("ERROR");
      });

    return status;
}

//NEW FUNCTION
//Retrieve all the data from dynamo trhough a series of scans
export const scanAllData = async () => {
    AWS.config.update(
        {
            maxRetries: 3,
            region: 'us-west-2',
            secretAccessKey: process.env.REACT_APP_DYNAMO_SECRET_KEY,
            accessKeyId: process.env.REACT_APP_DYNAMO_ACCESS_KEY
        });

    var params = {
        TableName: 'book_reviews'
    }

    const scanResults = [];
    let items;
    do{
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey !== "undefined");
    
    console.log(scanResults);
    return scanResults;
}

//Dynamo Query
export const queryData = async () => {
    //Define query
    //https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-query-scan.html
    var params = {
        ExpressionAttributeValues: {
          ':b': 'All Systems Red'
        //   ':e' : {N: '09'},
        //   ':topic' : {S: 'PHRASE'}
        },
        IndexName: 'book_title',
        KeyConditionExpression: 'book_title = :b',
        // ProjectionExpression: 'Episode, Title, Subtitle',
        // FilterExpression: 'contains (Subtitle, :topic)',
        TableName: 'book_reviews'
      };

      //do the query
      docClient.query(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          //console.log("Success", data.Items);
          data.Items.forEach(function(element, index, array) {
            console.log(element);
          });
        }
      });
}