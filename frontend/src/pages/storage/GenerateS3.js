import React, { useState } from "react";
import './EFS.css';
import axios from 'axios';


const GenerateS3 = () => {
    const [name, setname] = useState("");
    const [acl, setacl] = useState("");
    const [instance_type, setinstance_type] = useState("");
    const [region, setRegion] = useState("");
    const [key, setKey] = useState("");
    const [secret, setSecret] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
         
            const data = {

              "name":name,
              "acl":acl,
              "instance_type":instance_type,
             "Region":region,
                "Access Key ID":key,
                "Secret Access Key":secret,
                 
            } 
            axios.post('http://localhost:8080/api',data)
            .then((res)=>{
            setname("");
            setacl("");
            setinstance_type("");
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
            <div className="panel-heading">Create S3 Bucket</div>
            <div className="panel-body">
                
                <div className="col-md-offset-2 col-md-12">
                 
                    <form id="form" role="form" className="form" onSubmit={(e) => handleForm(e)}>
                        <div className="row">
                        <div className="col-6 styleL">
                            <label>name</label>
                            <input type="text" placeholder=":must be unique and cannot contain spaces or uppercase" name="name" id="name" className="form-control" required
                             value={name}
                             onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className="col-6 styleR">
                            <label>acl</label>
                            <input type="text" placeholder="private" name="acl" id="acl" className="form-control" required 
                             value={acl}
                             onChange={(e) => setacl(e.target.value)}
                            />
                        </div>
                        </div>
                        <div className='row'>
                        <div className="col-6 styleL">
                            <label>instance_type </label>
                            <input type="text" placeholder="t2.micro" name="instance_type" id="instance_type" className="form-control"   required
                             value={instance_type}
                             onChange={(e) => setinstance_type(e.target.value)}
                            />
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

export default GenerateS3;