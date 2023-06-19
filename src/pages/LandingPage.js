import React from 'react';
import {fetchData, scanAllData} from '../AwsFunctions';

function LandingPage() {

    //Retrieve items from DynamoDB table
    const fetchDataFromDynamo = async () => {
      //takes in table name for param
      let data = await fetchData('book_reviews');
      console.log(data);
    }
    
    // const addDataToDynamoDB = async () => {
    //   const userData = {
    //     book_title:"TESTSTESGDH",
    //     author_name:"ADNAIUNWIUND",
    //     review_id: '198287194374914971'
    //   }
      
    //   console.log("AWAITING");
    //   let status = await putData('book_reviews' , userData);
    //   console.log(status);
    // }

    // const queryDynamoData = () => {
    //   console.log("Querying: ");
    //   queryData();
    // }

    const testScan = async () => {
      console.log("Scannig:");
      let x = await scanAllData('book_reviews');
      console.log(x);
    }
    
    return (
      <div>
        <button onClick={() => fetchDataFromDynamo()}>Load Table Data</button>
        <button onClick={() => testScan()}>Scan</button>
      </div>
    );
  }
  
  export default LandingPage;