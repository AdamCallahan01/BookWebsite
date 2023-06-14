import React from 'react';
import {fetchData, updateAwsConfig} from '../AwsFunctions';

function LandingPage() {

    //Retrieve items from DynamoDB table
    const fetchDataFromDynamo = async () => {
      //takes in table name for param
      let data = await fetchData('book_reviews');
      console.log(data);
    }
    
    const addDataToDynamoDB = async () => {
      const userData = {
        name:"Faisal",
        age:"170"
      }
      
      // await putData('users' , userData)
    }
    
    return (
      <div>
        <button onClick={() => fetchDataFromDynamo()}>Load Table Data</button>
        <button onClick={() => updateAwsConfig()}>Load Table Data</button>
      </div>
    );
  }
  
  export default LandingPage;