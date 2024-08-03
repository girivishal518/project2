import React from 'react'
import "../css/Form.css"
import { useRef, useState } from 'react'
function Form() {
  // const formRef = useRef(null);
  // function done(e){
  //   e.preventDefault();
  //   const Data = new FormData(e.target);
  //   const Data_obj = Object.fromEntries(Data.entries());
  //   console.log(Data_obj);

  const [objData, setobjData] = useState({
    fn: "",
    ln: "",
    mb: "",
    em: "",
    gender: '',
    checkbox: false,
    File : ''
  });
  console.log(objData.gender);
  function done(e) {
    e.preventDefault();
   
    // setobjData({
    //   fn: e.currentTarget.fn.value, ln: e.currentTarget.ln.value, mb: e.currentTarget.mb.value,
    //   em: e.currentTarget.em.value
    // });
  }

  const handleChange = (e) => {
    // console.log(e.target.files[0].name);
    const { name, type, value,  } = e.target;
    // console.log(e.target.value);
    setobjData({
      ...objData,
      // [name]: value //[] -> updates the states dynamically without loosing previous values 
      [name]: type === 'checkbox' ? !objData.checkbox : type==='file' ? e.target.files[0].name:value 
    })
  }




  console.log(objData);
  return (
    <>
      <form className='form' onSubmit={done}>

        <div>
          <label htmlFor="fn">first name</label>
          <input
            type="text"
            name="fn"
            id="fn"
            placeholder='enter your first name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ln">last name</label>
          <input
            type="text"
            name="ln"
            id="ln"
            placeholder='enter your last name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mb">mobile no</label>
          <input
            type="tel"
            name="mb" id="mb"
            placeholder='enter your mobile number'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="em">Email</label>
          <input
            type="email"
            name="em" id="em"
            placeholder='enter your email here'
            onChange={handleChange}
          />
        </div>


        {/* Radio  */}

        <div>
          <label>M</label>
          <input type="radio"
            name="gender"
            id="Male"
            value="Male"
            onChange={handleChange}
            placeholder='Male'
          />
          <label>F</label>
          <input type="radio"
            name="gender"
            id="Female"
            value="Female"
            onChange={handleChange}
            placeholder='Female'
          />
        </div>


        {/* Check Box */}

        <div>
          <input
            type="checkbox"
            name="checkbox"
            id=""
            checked={objData.checkbox}
            onChange={handleChange}
            placeholder='Terms & Conditions'
          />
          <label>Terms & Conditions</label>

        </div>

        <div>
          <input
            type="file"
            name='File'
            id='File'
            onChange={handleChange}
          />
        </div>


        <div>
          <input type="submit" value="submit" />
        </div>



      </form>
    </>
  )
}
// }

export default Form
