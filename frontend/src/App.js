import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Storage  from './pages/storage/Storage';
import Calcul  from './pages/calcul/Calcul';
import Network  from './pages/network/Network';
import DataBase from './pages/dataBase/DataBase';
import DynamoDB from './pages/dataBase/DynamoDB';
import GenerateDB from './pages/dataBase/GenerateDB';
import DeployDB from './pages/dataBase/DeployDB';
import DestroyDB from './pages/dataBase/DestroyDB';
import Navbar from './components/Navbar';
import Home from './pages';
import about from './pages/about';
import Contact from './pages/Contact';
import ConnectToAws from './pages/ConnectToAws';
import  EC2  from './pages/calcul/EC2';
import GenerateEC2 from './pages/calcul/GenerateEC2';
import DeployEc2 from './pages/calcul/DeployEc2';
import DestroyEc2 from './pages/calcul/DestroyEc2';
import Generatelambda from './pages/calcul/Generatelambda';
import Deploylambda from './pages/calcul/Deploylambda';
import Destroylambda from './pages/calcul/Destroylambda';
import  GenerateEFS  from './pages/storage/GenerateEFS';
import  EBS  from './pages/storage/EBS';
import  EFS  from './pages/storage/EFS';
import  S3  from './pages/storage/S3';
import  VPC  from './pages/network/VPC';
import  Route53  from './pages/network/Route53';
import  GenerateS3  from './pages/storage/GenerateS3';
import  GenerateEBS  from './pages/storage/GenerateEBS';
import  Generateroute53  from './pages/network/Generateroute53';
import  Deployroute53  from './pages/network/Deployroute53';
import  Destroyroute53  from './pages/network/Destroyroute53';
import  Lambda  from './pages/calcul/Lambda';
import  RDS  from './pages/dataBase/RDS';
import  Services  from './pages/Services';
import ec2reation from './pages/calcul/ec2reation';



function App() {
 
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>

        <Route path='/calcul' exact component={Calcul} />
        <Route path='/calcul/Lambda'  exact component={Lambda} />
        <Route path='/lambda/Generatelambda'  exact  component={Generatelambda} />
        <Route path='/lambda/Deploylambda'  exact  component={Deploylambda} />
        <Route path='/lambda/Destroylambda'  exact  component={Destroylambda} />
        <Route path='/calcul/EC2'  exact  component={EC2} />
        <Route path='/EC2/GenerateEC2'  exact  component={GenerateEC2} />
        <Route path='/EC2/DeployEc2'  exact  component={DeployEc2} />
        <Route path='/EC2/DestroyEc2'  exact  component={DestroyEc2} />
        <Route path='/Storage' exact  component={Storage} />
        <Route path='/storage/EFS' exact  component={EFS} />
        <Route path='/storage/EBS' exact  component={EBS} />
        <Route path='/storage/S3' exact  component={S3} />
        <Route path='/S3/GenerateS3' exact  component={GenerateS3} />
        <Route path='/EBS/GenerateEBS' exact  component={GenerateEBS} />
        <Route path='/EFS/GenerateEFS' exact  component={GenerateEFS} />
        <Route path='/network'  exact component={Network} />
        <Route path='/network/Route53' exact  component={Route53} />
        <Route path='/Route53/Generateroute53' exact  component={Generateroute53} />
        <Route path='/Route53/Destroyroute53' exact  component={Destroyroute53} />
        <Route path='/Route53/Deployroute53' exact  component={Deployroute53} />
        <Route path='/network/VPC'  exact component={VPC} />
        <Route path='/database' exact  component={DataBase} />
        <Route path='/database/DynamoDB'  exact  component={DynamoDB} />
        <Route path='/DynamoDB/GenerateDB'  exact  component={GenerateDB} />
        <Route path='/DynamoDB/Deploy'  exact  component={DeployDB} />
        <Route path='/DynamoDB/Destory'  exact  component={DestroyDB} />
        <Route path='/database/RDS'  exact component={RDS} />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={about} />
        <Route path='/connectToAws' component={ConnectToAws} />
        <Route path='/services'  exact component={Services} />
        <Route path='/contact-us'  exact component={Contact} />
        <Route path='/ec2reation' exact component={ec2reation} />
        <Route path='/ec2reation' exact component={ec2reation} />


    </Switch>
    </Router>
    
    
  );
}


export default App;
