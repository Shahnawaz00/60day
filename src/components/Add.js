import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../utils/DataContext";

const Add = () => {

    // context 

   const {dataArray, setDataArray} = useContext(DataContext)

//    states

    const [day, setDay] = useState();
    const [description, setDescription] = useState("");

    // submit function 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setDataArray([...dataArray, {day:day , description:description} ])
        setDay('');
        setDescription("");
        console.log(dataArray)
        
    }


    return (
        <div className='addPage' >
        {/* title  */}
          <h1 className='addTitle' >Add</h1>
        {/* inputs  */}
        <form className='addForm' onSubmit={handleSubmit} >
           
            {/* input day  */}
            <label for='day'> Day </label>
            <input className='inputDay' name='day' type='number' placeholder='1'
                   value={day} onChange={e => setDay(e.target.value)} />


             {/* input description  */}
            <label for='description'>Description</label>
            <textarea className='inputDescription' name='description' cols='50' rows='10' placeholder='list the things you did today'
                    value={description} onChange={e => setDescription(e.target.value)}
            ></textarea>

            <button type='submit' className='submitButton' >Add</button>

            <div className='addTopDiv' >
             <Link className='homeLink' to='/'> Home </Link>
             <Link className='viewLink' to='/view' >View</Link>
           </div>
            
        </form>
            
        </div>
    )
}

export default Add
