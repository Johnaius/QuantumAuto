import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AutomobileList(){
    const [autoList, setAutoList] = useState([])

    const loadAutos = async () => {
        const res = await fetch('http://localhost:8100/api/automobiles/')
        if (res.ok){
            const data = await res.json()
            console.log('data:', data.autos)
            setAutoList(data.autos)
        } else {
            setAutoList([])
        }
    }

useEffect(()=>{
    loadAutos()
},[])

return (

    <div className="services">
         <div className="mt-2 mb-2">
            <Link to="/automobiles/new" className="btn btn-info btn-md ">
            Create Automobile
            </Link>
        </div>

        <h1 className="mb-5 mt-3">Our Cars</h1>

      <div className="row">
    {autoList.map((auto, i) => (
      <div className="col-lg-4 col-md-6 mb-4" key={i}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Automobile {auto.id} </h5>
            <p className="card-text"> <span className="fw-bold">Color</span> : {auto.color}</p>
            <p className="card-text"> <span className="fw-bold">Year</span> : {auto.year}</p>
            <p className="card-text"> <span className="fw-bold">Vin</span> : {auto.vin}</p>
            <p className="card-text"> <span className="fw-bold">Make</span> : {auto.model.manufacturer.name} {auto.model.name}</p>
            <p className="card-text"> <span className="fw-bold">Sold</span> :  {auto.sold?"Sold":"In Stock"}</p>
          </div>
        </div>
      </div>
    )
    )}
    </div>
  </div>
)

    }

export default AutomobileList;
