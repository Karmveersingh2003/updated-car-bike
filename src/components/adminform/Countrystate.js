import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import countrydata from './Countrydata.json';


function Countrystate() {
  const [countryid, setCountryid] = useState('');
  const [stateid, setStateid] = useState('');
  const [seatid, setSeatid] = useState('');
  const [Brandid, setBrandid] = useState('');
  const [Transmissionid, setTransmissionid] = useState('');
  const [consumption, setConsumption] = useState('');
  const [Fuelid, setFuelid] = useState('');
  const [Engine, setEngine] = useState('');
  const [Seat, setSeat] = useState([]);
  const [state, setState] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [Fuel, setFuel] = useState([]);
  const [colour, setColour] = useState([]);
  const [cylinders, setCylinders] = useState([]);
  const [Fuelcapacity, setCapacity] = useState([]);
  const [AC, setAC] = useState([]);

  const handleCounty = (e) => {
    const getCountryId = e.target.value;
    const selectedCountry = countrydata.find(country => country.country_id === getCountryId);
    setState(selectedCountry?.states || []);
    setBrand(selectedCountry?.Brands || []);
    setSeat(selectedCountry?.Seats || []); 
    setFuel(selectedCountry?.Fuels || []); 
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
  const handleFuel = (e) => {
    const FuelValue = e.target.value;
    setFuel(FuelValue);
  };

  const handleColour = (e) => {
    const ColourValue = e.target.value;
    setColour(ColourValue);
  };
  const handleCylinders = (e) => {
    const CylinderValue = e.target.value;
    setCylinders(CylinderValue);
  };
  const handleFuelcapacity = (e) => {
    const FuelcapacityValue = e.target.value;
    setCapacity(FuelcapacityValue);
  };
  const handleAC = (e) => {
    const ACValue = e.target.value;
    setAC(ACValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Country id: ${countryid}, State id: ${stateid}, Brand id: ${Brandid}, Transmission id: ${Transmissionid}, Consumption/Mileage: ${consumption}`);
    // You can perform additional actions like submitting the form data to a server here
  };

  


  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h3 className='mt-3'>Select Vehicle data from JSON file in React JS</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
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
                    {Brand.map((Brands, index) => (
                      <option value={Brands.Brand_id} key={index}>{Brands.Brand_name}</option>
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
                <label className="form-label">Fuel</label>
                <div className="text-dark">
                  <select name='fuel' className='form-control' onChange={handleFuel}>
                    <option value="">--Select Fuel Type--</option>
                    {Fuel.map((Fuels, index) => (
                      <option value={Fuels.Fuel_id} key={index}>{Fuels.Fuel_name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label">COLOUR</label>
                <div className="text-dark">
                  <select name='colour' className='form-control' onChange={handleColour}>
                    <option value="">--Select Colour--</option>
               
                    <option value="">White</option>
                    <option value="">Black</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label">NO. Of Cylinders</label>
                <div className="text-dark">
                  <select name='cylinders' className='form-control' onChange={handleCylinders}>
                    <option value="">--Select NO. Of Cylinders--</option>
               
                    <option value="">1</option>
                    <option value="">2</option>
                    
                    
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

              <div className="col-md-3">
                <label className="form-label">Fuel Capacity</label>
                <div className="text-dark">
                  <select name='Engine' className='form-control' onChange={handleFuelcapacity}>
                    <option value="">--Select Fuel Capacity--</option>
                  
                    <option value="">Under 5L</option>
                    <option value="">5L</option>
                    <option value="">10L</option>
                    <option value="">15L</option>
                    <option value="">Above 15L</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label">AC</label>
                <div className="text-dark">
                  <select name='AC' className='form-control' onChange={handleAC}>
                    <option value="">--Select AC--</option>
                  
                    <option value="">Available</option>
                    <option value="">Not Available</option>
                    
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label">Seats</label>
                <div className="text-dark">
                  <select name='seats' className='form-control' onChange={handleSeat}>
                    <option value="">--Select Seats--</option>
                    {Seat.map((Seats, index) => (
                      <option value={Seats.seat_id} key={index}>{Seats.seat_name}</option>
                    ))}
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
  );
}

export default Countrystate;
