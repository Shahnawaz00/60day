import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='homePage' >
            <h1 className='homeTitle' >60 Day Challenge</h1>
            <div className='homeButtons' >
              <Link to='/add'> <button className='addButton' >Add</button> </Link>
              <Link to='/view'><button className='viewButton' >View</button></Link>
            </div>
        </div>
    )
}

export default HomePage
