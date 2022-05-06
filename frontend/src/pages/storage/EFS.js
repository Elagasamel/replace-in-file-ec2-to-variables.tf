import Button from "react-bootstrap/Button";
import './EFS.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const EFS = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="EFS">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/EFS/GenerateEFS')}> Generate EFS</Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/EFS/DeployEFS')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/EFS/DestroyEFS')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>
    </div>
  );
};


export default EFS;