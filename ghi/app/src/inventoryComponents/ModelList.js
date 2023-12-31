import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ModelList() {
  const [modelList, setModelList] = useState([])

  const loadModels = async () => {
    const res = await fetch('http://localhost:8100/api/models/')
    if (res.ok) {
      const data = await res.json()
      setModelList(data.models)
    } else {
      setModelList([])
    }
  }

  useEffect(() => {
    loadModels()
  }, [])

  return (

    <div className="services">
      <div className="mt-2 mb-2">
        <Link to="/models/new" className="btn btn-info btn-md ">
          Add A Models
        </Link>
      </div>

      <h1 className="mb-5 mt-3">Our Esteemed Models</h1>

      <div className="row">

      {modelList.map((models, i) => (
        <div className="col-lg-4 col-md-6 mb-4" key={i}>
          <div className="card">
            <img src={models.picture_url} alt={models.name} />
            <div className="card-body">
              <h5 className="card-title">{models.manufacturer.name} {models.name} </h5>
            </div>
          </div>
        </div>
      )
      )}
      </div>
    </div>
  )

}

export default ModelList;
