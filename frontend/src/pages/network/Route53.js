import Button from "react-bootstrap/Button";
import './Route53.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const Route53 = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div   className="container">

    
    <div className="Route53">
       
       <div className="d-grid gap-2">         
         <form>
           <Button variant="primary" size="lg"  onClick={() => history.push('/Route53/Generateroute53')}> Generate Route53 </Button>
           {' '} 
           <Button variant="btn btn-warning" size="lg" onClick={() => handleClick('/Route53/Deployroute53')}>Deploy to AWS</Button>
           {' '} 
           <Button variant="primary" size="lg"  onClick={() => handleClick('/Route53/Destroyroute53')}>Destroy Infrastructure</Button>
        </form>
       </div>
     </div>

     
    </div>
  );
};


export default Route53;