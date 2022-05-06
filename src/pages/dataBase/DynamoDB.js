import Button from "react-bootstrap/Button";
import './DynamoDB.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const DynamoDB = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    

    <>
    <div className="DataBase">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/DynamoDB/GenerateDB')}> Generate Terraform </Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/DynamoDB/Deploy')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/DynamoDB/Destory')}>Destory Infrastructure</Button>
        </form>
       </div>
     </div>

   
  

    </> 
  );
};


export default DynamoDB;