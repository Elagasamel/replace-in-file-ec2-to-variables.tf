import Button from "react-bootstrap/Button";
import './EC2.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const EC2 = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="EC2">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/EC2/GenerateEC2')}> Generate Terraform </Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/EC2/DeployEc2')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/EC2/DestroyEc2')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>

     
    </div>
  );
};


export default EC2;