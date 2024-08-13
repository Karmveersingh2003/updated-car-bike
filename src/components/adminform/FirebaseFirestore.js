import React, { useEffect, useState } from 'react';
import './admin-form.css';
import { imgDB, txtDB } from "../kyc/txtImgConfig";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { db } from '../firebase';
import { Container } from "react-bootstrap";
import countrydata from './Countrydata.json';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { auth } from "../firebase";

function FirebaseFirestore() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);
  const [val, setVal] = useState([]);
  const [txt, setTxt] = useState('');
  const [img, setImg] = useState('');
  const [data, setData] = useState([]);
  const value = collection(db, "demo");
  const [countryid, setCountryid] = useState('');
  const [stateid, setStateid] = useState('');
  const [Brandid, setBrandid] = useState('');
  const [Transmissionid, setTransmissionid] = useState('');
  const [consumption, setConsumption] = useState('');
  const [Engine, setEngine] = useState('');
  const [Seat, setSeat] = useState('');
  const [state, setState] = useState([]);
  const [Brand, setBrand] = useState([]);

  const handleCounty = (e) => {
    const getCountryId = e.target.value;
    const selectedCountry = countrydata.find(country => country.country_id === getCountryId);
    setState(selectedCountry?.states || []);
    setBrand(selectedCountry?.brands || []); // Corrected to setBrand
    setCountryid(getCountryId);
  };

  const handleState = (e) => {
    const stateId = e.target.value;
    setStateid(stateId);
  };

  const handleBrand = (e) => {
    const brandId = e.target.value;
    setBrandid(brandId);
  };

  const handleTransmission = (e) => {
    const transmissionId = e.target.value;
    setTransmissionid(transmissionId);
  };

  const handleConsumption = (e) => {
    const consumptionValue = e.target.value;
    setConsumption(consumptionValue);
  };

  const handleEngine = (e) => {
    const EngineValue = e.target.value;
    setEngine(EngineValue);
  };

  const handleSeat = (e) => {
    const SeatValue = e.target.value;
    setSeat(SeatValue);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const dbVal = await getDocs(value);
        setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);

  const handleCreate = async () => {
    try {
      const imgRef = img;
      await addDoc(value, { name1: fname, name2: lname, name3: imgRef,country: countryid,brand: Brandid ,transmission: Transmissionid,Mileage:consumption,engine:Engine,seat:Seat});
      setFname("");
      setCountryid("");
      setState("");
      setBrandid("");
      setLname("");
      setTransmissionid("");
      setImg("");
      setConsumption("");
      setEngine("");
      setSeat("");
      const valRef = collection(txtDB, 'txtData');
      await addDoc(valRef, { txtVal: txt, imgUrl: imgRef });

      // Refresh the data
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error creating document: ", error);
    }
  };

  const handleDelete = async (id, imgUrl) => {
    try {
      // Delete the document from Firestore
      const deleteVal = doc(db, "demo", id);
      await deleteDoc(deleteVal);

      // Delete the image from storage
      const imgRef = ref(imgDB, imgUrl);
      await deleteObject(imgRef);

      // Update state to remove deleted item from frontend
      setVal(prevVal => prevVal.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting document or image: ", error);
    }
  };

  const handleEdit = async (id, name1, name2, name3, country, brand, transmission, Mileage,engine,seat) => {
    setFname(name1);
    setLname(name2);
    setImg(name3);
    setId(id);
    setShow(true);
    setCountryid(country);
    setConsumption(Mileage);
    setBrandid(brand);
    setTransmissionid(transmission);
   
      setEngine(engine);
      setSeat(seat);

   
  };

  const handleUpdate = async () => {
    try {
      const updateData = doc(db, "demo", id);
      await updateDoc(updateData, { name1: fname, name2: lname, name3: img, country: countryid, brand: Brandid, transmission: Transmissionid, Mileage:consumption,engine:Engine,seat:Seat});
      setShow(false);
      setFname("");
      setImg("");
      setLname("");
      setCountryid("");
      setState("");
      setBrandid("");
      setTransmissionid("");
      setImg("");
     
      setEngine("");
      setSeat("");

      // Refresh the data
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };



  const getData = async () => {
    try {
      const valRef = collection(txtDB, 'txtData');
      const dataDb = await getDocs(valRef);
      const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
      setData(allData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className='container'>

      <div id="submit-form"></div>
      <input value={fname} onChange={(e) => setFname(e.target.value)} placeholder="first Name" />
      <input value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name" />
      <input value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" />







      <React.Fragment>
        <Container className="content">
          <div className="row">
            <div className="col-sm-12">
              <h3 className='mt-3'>Select Vehicle data from JSON file in React JS</h3>
              <form className="row g-3" >
                <div className="col-md-3">
                  <label className="form-label">Vehicle Category</label>
                  <div className="text-dark">
                    <select name='country' className='form-control' onChange={handleCounty}>
                      <option value="">--Select Vehicle Category--</option>
                      {countrydata.map((country, index) => (
                        <option value={country.country_id} key={index}>{country.country_name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Vehicle Type</label>
                  <div className="text-dark">
                    <select name='states' className='form-control' onChange={handleState}>
                      <option value="">--Select Vehicle Type--</option>
                      {state.map((getstate, index) => (
                        <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Brand</label>
                  <div className="text-dark">
                    <select name='brands' className='form-control' onChange={handleBrand}>
                      <option value="">--Select Brand--</option>
                      {Brand.map((brands, index) => (
                        <option value={brands.Brand_id} key={index}>{brands.Brand_name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Transmission Type</label>
                  <div className="text-dark">
                    <select name='transmission' className='form-control' onChange={handleTransmission}>
                      <option value="">--Select Transmission Type--</option>
                      {/* Options for transmission */}
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Consumption/Mileage</label>
                  <div className="text-dark">
                    <select name='consumption' className='form-control' onChange={handleConsumption}>
                      <option value="">--Select Consumption/Mileage--</option>
                      {/* Options for consumption/mileage */}
                      <option value="20-kmph">20-kmph</option>
                      <option value="30-kmph">30-kmph</option>
                      <option value="40-kmph">40-kmph</option>
                      <option value="50-kmph">50-kmph</option>
                      <option value="60-kmph">60-kmph</option>
                      <option value="70-kmph">70-kmph</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Engine Capacity</label>
                  <div className="text-dark">
                    <select name='Engine' className='form-control' onChange={handleEngine}>
                      <option value="">--Select Engine Capacity--</option>
                      {/* Options for engine capacity */}
                      <option value="Under 100CC">Under 100CC</option>
                      <option value="100CC-150CC">100CC-150CC</option>
                      <option value="150CC-200CC">150CC-200CC</option>
                      <option value="200CC-350CC">200CC-350CC</option>
                      <option value="Above 350CC">Above 350CC</option>
                    </select>
                  </div>
                </div>


                <div className="col-md-2" style={{ padding: '9px' }}>
                  <label className="form-label"></label>
                  <div className="text-dark">
                    <button type='submit' className='btn btn-success'>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </React.Fragment>









      {!show ? <button onClick={handleCreate}>Create</button> :
        <button onClick={handleUpdate}>Update</button>}
      {val.map(values => (
        <div key={values.id}>
          <h1>{values.name1}</h1>
          <h1>{values.name2}</h1>
          <h1>{values.name4}</h1>
          <h1>{values.name5}</h1>
          <h1>{values.name6}</h1>
          <h1>{values.name7}</h1>
          
          <img src={values.name3} height='200px' width='200px' alt="stored" />
          <button onClick={() => handleDelete(values.id, values.name3)}>Delete</button>
          <button onClick={() => handleEdit(values.id, values.name1, values.name2, values.name3,values.name4,values.name5,values.name6,values.name7)}>Edit</button>
        </div>
      ))}


<button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
    </div>

  );
}

export default FirebaseFirestore;
