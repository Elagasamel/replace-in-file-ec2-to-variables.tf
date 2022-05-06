import Button from "react-bootstrap/Button";
import './EFS.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const S3 = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="S3">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/S3/GenerateS3')}> Generate S3</Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/S3/DeployS3')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/S3/DestroyS3')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>

     
    </div>
  );
};


export default S3;