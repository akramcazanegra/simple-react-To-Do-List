import logo from './logo.svg';
import './App.css';
import {useState} from "react";



let nextId = 5
function App() {
  const [deviceName , setDeviceName] = useState("")
  const [devices, setDevices] = useState([
    {id: 1 ,name:"iphone "},
    {id: 2  ,name:"mac"},
   {id: 3 ,name:"samsung"},
   {id: 4  ,name:"windows"},
  ])
  const devicesList = devices.map((device) => {
      return<li key={device.id}>{device.name} <button onClick={() => {
        handleDelete(device.id);
      }}>Delete</button></li>
  })

function handleDelete(id){
  // const newDevices=[...devices]
  

  // let index = 0;
  // let selectedIndex= 0;
  // for(let device of newDevice){
  //   if(device.id == id){
  //     selectedIndex = index
  //   }
  //   index++
  // }
  // newDevice.splice(id - selectedIndex , 1);

  const newDevices = devices.filter((device) =>
    {
      if(device.id == id)
        return false;
         return true;
    }  
  )
  setDevices(newDevices)
}



  function handleAdd(){
    // const newDevices = [...devices];
    // newDevices.push(deviceName);
  //  setDevices(newDevices);
        setDevices([...devices, {id: nextId, name:deviceName}]);
        nextId = nextId+1;
}
  return (
    <div className="App" style={{marginTop:"100px", fontSize:"50px"}}>
        {devicesList}
   
    <div>
    <input value={deviceName}  onChange={(event) => {setDeviceName(event.target.value);
    }}
 type="text"/>
    <button onClick={handleAdd}>ADD</button>
    </div>
    </div>
       
   

  );
}

export default App;