import landing from './landing.jpg';
import footer from './footer.png';
import header from './header.png';
import './App.css';
import React from 'react'



const styleObj1 = {
  fontSize: 50,
  color: "#000000",
  textAlign: "center",
  paddingTop: "2px",
  fontWeight: 'bold'
}


const styleObj2 = {
  fontSize: 25,
  color: "#000000",
  textAlign: "center",
  paddingTop: "20px",
}


const onSubmit =  (event) => {
  event.preventDefault(); // Prevent default submission
  const data = new FormData(event.target);
  console.log(data.get('cellphone'));

  /*
  const url = 'https://pws-ny/global2-svcs/gblsvcs/v1/customer/phone?at=MnwxNjI4MjMzNjYzfnVua25vd25fZmFzdGx5X3BvcA==.ZGhOcVdndHovVmlKbDR0cjlKRE00a0kvNTllS0VGYVFYZHFOVkVLclQwVT0=';
  const phoneList = [];

  const customerPhone = {
    "phoneTypeCode": "D",
    "phoneNumber": data.get('cellphone')
  }

  phoneList.push(customerPhone);

  const customerData = {
    "phoneList": phoneList
  }

  const requestBody = {
    'customer': customerData
  }

const other_params = {
    headers : { "content-type" : "application/json; charset=UTF-8" },
    body : requestBody,
    method : "POST",
    strictSSL: false
};
console.log(url);
console.log(requestBody);

const response = fetch(url, other_params);

if(response.ok) {
  console.log("Successful");
} else {
  console.log("Could not reach the API: " + response);
}
*/

  window.location.href='https://trip-opt-in.herokuapp.com/';
}

function App() {
  return (
    <div className="App">
 <Navbar/>
<div styleName="photoDiv">
     <img src={landing} alt="Landing" className="photo"/>
</div>
   
<div styleName="textDiv">
     <p> 
     <text style={styleObj1}>Sign up for trip updates at your finger tips!</text>
     <br></br>
     <br></br>
     <text style={styleObj2}>The easiest way to get updates about your trip when and where you need them</text>
     </p>
       
     <form onSubmit={onSubmit}>
  
    <input type="text" name="cellphone" placeholder="Cell Phone Number"/>
    <br></br>
  <input type="submit" value="Sign Me Up!" className="submitButton" />
</form>

      
      <h6>Carrier mobile messaging and data rates may apply.</h6>
   </div>

   <BottomPane/>     
    </div>
  );
}


class Navbar extends React.Component{
  render() {
      return (
        <div>
        <img src={header} alt="Footer" className="photoHeader"/>
  </div>
      );
  }
}

class BottomPane extends React.Component{
  render() {
      return (
          <div className="bottomPane">
                <img src={footer} alt="Footer" className="photoFooter"/>
          </div>
      );
  }
}

export default App;
