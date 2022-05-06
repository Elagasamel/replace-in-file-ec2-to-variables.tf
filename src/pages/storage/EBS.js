import Button from "react-bootstrap/Button";
import './EFS.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const EBS = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="Route53">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/EBS/GenerateEBS')}> Generate EBS </Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/EBS/DeployEBS')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/EBS/DestroyEBS')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>
    </div>
  );
};


export default EBS;