
import './EFS.css'
import React, { useState } from "react";
import axios from 'axios';

const GenerateEFS = () => {
 
  
      const [Name, setName] = useState("");
      const [VPC, setVPC] = useState("");
      const [availability, setAvailability] = useState("");
      const [region, setRegion] = useState("");
      const [key, setKey] = useState("");
      const [secret, setSecret] = useState("");
      const handleForm = (e) => {
          e.preventDefault();
           
              const data = {
  
                "Name":Name,
                "VPC":VPC,
                 "Availability": availability,
                 "Region":region,
                  "Access Key ID":key,
                  "Secret Access Key":secret,
                   
              } 
              axios.post('http://localhost:8080/api',data)
              .then((res)=>{
              setName("");
              setVPC("");
              setAvailability("")
              setRegion("")
              setKey("");
              setSecret("");
              
              
              })
              .catch((err)=>{
                  console.log(err);
              })
              
              
  
  
  
              
  
      };
      return (
  
      <div   className="container">
          <div className="panel panel-default">
              <div className="panel-heading">Create a file system</div>
              <div className="panel-body">
                  
                  <div className="col-md-offset-2 col-md-12">
                   
                      <form id="form" role="form" className="form" onSubmit={(e) => handleForm(e)}>
                      <div className="row">
                          <div className="col-6 styleL">
                              <label>Name</label>
                              <input type="text" placeholder="Name your file system" name="Name" id="Name" className="form-control" required
                               value={Name}
                               onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          <div className="col-6 styleR">
                              <label>VPC</label>
                              <input type="text" placeholder="VPC in which you want EC2 to connect to your FS" name="VPC" id="VPC" className="form-control" required 
                               value={VPC}
                               onChange={(e) => setVPC(e.target.value)}
                              />
                          </div>
                          </div>
                          <div className='row'>
                          <div className="col-6 styleL">
                              <label>Availability and durability</label>
                              <select className="form-control" id="availability" name="availability" required
                               value={availability}
                               onChange={(e) => setAvailability(e.target.value)}
                              >
                                  <option value="" selected disabled>Choose Regional (recommended) to create a file system using regional storage classes. Choose Unizone to create a file system using Unizone storage classes</option>
                                  <option value="Unizone">Unizone</option>
                                  <option value="regional">regional</option>

                              </select>
                              </div>
                          <div className="col-6 styleR" >
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
                          </div>
                          <div className='row'>
                          <div className="col-6 styleL">
                              <label>Access Key ID</label>
                              <input type="text" placeholder="AKIAIOSFODNN7EXAMPLE" v  name="accessid" id="accessid" className="form-control" required
                               value={key}
                               onChange={(e) => setKey(e.target.value)}
                              />
                          </div>
                          <div className="col-6 styleR">
                              <label>Secret Access Key</label>
                              <input type="password" placeholder="wJalrXUtnFEMIK7MDENGbPxRfiCYEXAMPLEKEY"   name="accesskey" id="accesskey" className="form-control" required 
                               value={secret}
                               onChange={(e) => setSecret(e.target.value)}
                              />
                          </div>
                          </div>
                          
                            
                          <div className="submit">
                              <button className="btn btn-info" type="submit" id="generate" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Creating EC2 Instance" >Create EC2 instance</button>
                          </div>
                     
                      </form>
                  </div>
              </div>
          </div>
       
               
      </div>
       );
     };
  


export default GenerateEFS;