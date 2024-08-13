import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const Form = () => {


  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('You made a request');
    let response = await axios.post("http://localhost:4000/api/cars/addcar", inputs); 
    console.log(response);

    // let data =  await axios.get("http://localhost:4000/",inputs);
    // console.log(data);
  }

  return (
    <>
<Navbar/>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />

        </label>
        <br />
        <br />
        <label>Company:
          <input
            type="text"
            name="company"
            value={inputs.company || ""}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
        <label>model:
          <input
            type="number"
            name="model"
            value={inputs.model || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>Year:
          <input
            type="number"
            name="year"
            value={inputs.year || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>Color:
          <input
            type="text"
            name="color"
            value={inputs.color || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>Transmission:
          <input
            type="text"
            name="transmission"
            value={inputs.transmission || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>MainImage:
          <input
            type="string"
            name="mainImage"
            value={inputs.mainImage || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        
        <label>image1:
          <input
            type="string"
            name="image1"
            value={inputs.image1 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>image2:
          <input
            type="string"
            name="image2"
            value={inputs.image2 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>image3:
          <input
            type="string"
            name="image3"
            value={inputs.image3 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>image4:
          <input
            type="string"
            name="image4"
            value={inputs.image4 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>image5:
          <input
            type="string"
            name="image5"
            value={inputs.image5 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        
        <label>capacity:
          <input
            type="number"
            name="capacity"
            value={inputs.capacity || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>FuelType:
          <input
            type="text"
            name="fuelType"
            value={inputs.fuelType || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>bookedTimeSlotsFrom:
          <input
            type="text"
            name="bookedTimeSlotsFrom"
            value={inputs.bookedTimeSlotsFrom || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        
        <label>bookedTimeSlotsTo:
          <input
            type="text"
            name="bookedTimeSlotsTo"
            value={inputs.bookedTimeSlotsTo || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>mileage:
          <input
            type="text"
            name="mileage"
            value={inputs.mileage || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>tenure:
          <input
            type="text"
            name="tenure"
            value={inputs.tenure || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>rentPerHour:
          <input
            type="number"
            name="rentPerHour"
            value={inputs.rentPerHour || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>offer:
          <input
            type="text"
            name="offer"
            value={inputs.offer || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form;
