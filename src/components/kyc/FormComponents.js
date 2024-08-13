import "./form.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgDB,txtDB } from "./txtImgConfig";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

const FormComponents = () => {
  const [userData, setUserData] = useState({
    
    phoneNumber: '',
    PanNo: '',
    AadharNo: '',
    city:'',
    country:''
    
  });
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();
//  for photos
const [txt,setTxt] = useState('')
    const [img,setImg] = useState('')
    const [data,setData] = useState([])


    const handleUpload = (e) =>{
        console.log(e.target.files[0])
        const imgs = ref(imgDB,`Imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

    

    const getData = async () =>{
        const valRef = collection(txtDB,'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb)
    }

    useEffect(()=>{
        getData()
})
    console.log(data,"datadata")

  
  //for backend firebase datastore
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    
    setUserData({ ...userData, [name]: value });
  };
  
  // connect with firebase
  const submitData = async (event) => {
  
    

    event.preventDefault();
    const { phoneNumber,PanNo,AadharNo,city,country} = userData;
    
    if ( phoneNumber &&PanNo &&AadharNo &&city &&country) {
      const res = fetch(
        "https://login-auth-8411c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           
            phoneNumber,
            PanNo,
            AadharNo,
            city,
            country,
           
            
          }),
          }
      );

      if (res) {
        setUserData({
         
          phoneNumber: '',
          PanNo: '',
          AadharNo: '',
          city:'',
          country:''
          
          
          });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
      const valRef = collection(txtDB,'txtData')
      await addDoc(valRef,{txtVal:txt,imgUrl:img})
    };

    

    
    
    
    
    
    

    return (
    <div id='login-sing'>
      <div className='wrapperr'>


        <form className='form' onSubmit={submitData}>
          <h1>KYC FORM</h1>

                  <div className="input-box">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={postUserData}
              />
          </div>
          

         

          
          <div className="input-box">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={postUserData}
              />
          </div>

         

          <div className="input-box">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={postUserData}
              />
          </div>
          


          <div className="input-box">
            <label>AadharNo:</label>
            <input
              name="AadharNo"
              value={userData.AadharNo}
              onChange={postUserData}
            />
          </div>
         

          <div className="input-box">
            <label>PanNo:</label>
            <input
              name="PanNo"
              value={userData.PanNo}
              onChange={postUserData}
              />
          </div>
          <div className="input-box">
            <label>Please Attach document:</label>
          <div >
            <input type="file" onChange={(e)=>handleUpload(e)} /></div>
          </div>
         
         
         <div id="submit-form">
         <button type="submit" onClick={submitData} >Submit</button>
         </div>



        </form>
      </div>
    </div>
);
};
export default FormComponents;