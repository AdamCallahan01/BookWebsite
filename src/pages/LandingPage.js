import React from 'react';
import {fetchData, putData} from '../AwsFunctions';

function LandingPage() {

    //Retrieve items from DynamoDB table
    const fetchDataFromDynamo = async () => {
      //takes in table name for param
      let data = await fetchData('book_reviews');
      console.log(data);
    }
    
    const addDataToDynamoDB = async () => {
      const userData = {
        book_title:"TESTSTESGDH",
        author_name:"ADNAIUNWIUND",
        review_id: '198287194374914971'
      }
      
      console.log("AWAITING");
      let status = await putData('book_reviews' , userData);
      console.log(status);
    }
    
    return (
      <div>
        <button onClick={() => fetchDataFromDynamo()}>Load Table Data</button>
        <button onClick={() => addDataToDynamoDB()}>Load Table Data</button>
      </div>
    );
  }
  
  export default LandingPage;