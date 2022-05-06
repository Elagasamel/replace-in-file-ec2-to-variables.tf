import React, { useState } from "react";
import axios from 'axios';
import './EC2.css';

const Generatelambda = () => {

  const [FunctionName, setFunctionName] = useState("");
      const [Execution, setExecution] = useState("");
      const [Architecture, setArchitecture] = useState("");
      const [region, setRegion] = useState("");
      const [key, setKey] = useState("");
      const [secret, setSecret] = useState("");
      const handleForm = (e) => {
          e.preventDefault();
           
              const data = {
  
                "FunctionName":FunctionName,
                "Execution":Execution,
                "Architecture":Architecture,
                 "Region":region,
                  "Access_Key_ID":key,
                  "Secret_Access_Key":secret,
                   
              } 
              axios.post('http://localhost:8080/api',data)
              .then((res)=>{
              setFunctionName("");
              setExecution("");
              setArchitecture("");
              setKey("");
              setSecret("");
              setRegion("")
              })
              .catch((err)=>{
                  console.log(err);
              })
              
              
  
  
  
              
  
      };
      return (
  
      <div   className="container">
          <div className="panel panel-default">
              <div className="panel-heading"> Create Lambda </div>
              <div className="panel-body">
                  
                  <div className="col-md-offset-2 col-md-12">
                   
                      <form id="form" role="form" className="form" onSubmit={(e) => handleForm(e)}>
                          <div className="row">
                          <div className="col-6 styleL">
                              <label>FunctionName</label>
                              <input type="text" placeholder="Enter a name that describes the purpose of your function." name="FunctionName" id="FunctionName" className="form-control" required
                               value={FunctionName}
                               onChange={(e) => FunctionName(e.target.value)}
                              />
                          </div>
                          <div className="col-6 styleR" >
                              <label>Execution</label>
                              <select className="form-control" id="Execution" name="Execution" required
                               value={Execution}
                               onChange={(e) => setRegion(e.target.value)}
                              >
                                  <option value="" selected disabled>Choose the language to use to write your function.</option>
                                  <option value="us-east-1">.NET 6</option>
                                  <option value="us-east-2">.NET Core 3.1</option>
                                  <option value="us-west-1">Java 11 </option>
                                  <option value="us-west-2">Node.js</option>
                              </select>
                          </div>
                          </div>
                          <div className='row'>
                          <div className="col-6 styleL">
                          <label>Region</label>
                              <select className="form-control" id="region" name="region" required
                               value={region}
                               onChange={(e) => setRegion(e.target.value)}
                              >
                                  <option value="" selected disabled>Select Region</option>
                                  <option value="us-east-1">US East (N. Virginia)</option>
                                  <option value="us-east-2">US East (Ohio)</option>
                                  <option value="us-west-1">US West (N. California)</option>
                                  <option value="us-west-2">US West (Oregon)</option>
                              </select>
                          </div>
                          <div className="col-6 styleR" >
                              <label>Architecture</label>
                              <select className="form-control" id="region" name="region" required
                               value={Architecture}
                               onChange={(e) => setRegion(e.target.value)}
                              >
                                  <option value="" selected disabled>Choose the desired instruction set architecture (ISA) for your function code.</option>
                                  <option value="x86_64">x86_64</option>
                                  <option value="arm64">arm64</option>
                                  
                              </select>
                          </div>
                          </div>
                          <div className='row'>
                          <div className="col-6 styleL">
                              <label>Access_Key_ID</label>
                              <input type="text" placeholder="AKIAIOSFODNN7EXAMPLE" v  name="accessid" id="accessid" className="form-control" required
                               value={key}
                               onChange={(e) => setKey(e.target.value)}
                              />
                          </div>
                          <div className="col-6 styleR">
                              <label>Secret_Access_Key</label>
                              <input type="password" placeholder="wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY"   name="accesskey" id="accesskey" className="form-control" required 
                               value={secret}
                               onChange={(e) => setSecret(e.target.value)}
                              />
                          </div>
                          </div>
                          
                            
                          <div className="submit">
                              <button className="btn btn-info" type="submit" id="generate" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Creating EC2 Instance" >Create Lambda</button>
                          </div>
                     
                      </form>
                  </div>
              </div>
          </div>
       
               
      </div>
       );
     };
  
export default Generatelambda;