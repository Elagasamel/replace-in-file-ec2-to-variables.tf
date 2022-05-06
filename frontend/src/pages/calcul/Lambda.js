import Button from "react-bootstrap/Button";
import './EC2.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const Lambda = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="EC2">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/lambda/Generatelambda')}> Generate Terraform </Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/lambda/Deploylambda')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/lambda/Destroylambda')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>

     
    </div>
  );
};


export default Lambda;