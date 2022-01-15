import DataContext from "../utils/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const View = () => {

    // context

    const {dataArray, setDataArray} = useContext(DataContext)


    return (
        <div className='viewPage' >
            {/* total days complete  */}
            <div className='viewTopDiv' >
            <Link className='homeLink2' to='/'> Home </Link>
            <h1 className='viewTitle' >Days completed = {dataArray.length}</h1>
            <Link className='addLink' to='/add'> Add </Link>


            </div>
            
            {/* wrap all info  */}
            <div className='wrapInfo' >
            {/* each day mapped  */}
            {dataArray.map(({day, description}, index) => {
                return <div className='eachDay' >
                    <h2 className='day' >Day {day}</h2>
                    <p className='description' > {description} </p>
                </div>
            })}
            </div>

        </div>
    )
}

export default View
