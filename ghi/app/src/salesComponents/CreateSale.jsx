import React, {useState, useEffect} from "react";
import SalesForm from './SalesForm'

function CreateSale(props) {

    const [autos, setAutos] = useState([]);
    const [salespeople, setSalesPeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    async function getData(){
        const autoURL = "http://localhost:8100/api/automobiles/";
        const sellersURL = 'http://localhost:8090/api/salespeople/';
        const customerURL = 'http://localhost:8090/api/customers/';
        // fetch data for autos
        const autosData = await fetch(autoURL);
        const holdAutos = await autosData.json();
        const filteredAutos = (holdAutos.autos).filter(auto=>auto.sold === false);
        setAutos(filteredAutos)
        console.log("autos", filteredAutos)
        // fetch data for Sales people
        const salesPeopleData = await fetch(sellersURL);
        const holdSalesPeople = await salesPeopleData.json();
        setSalesPeople(holdSalesPeople.salespeople);
        // fetch data for customers
        const customersData = await fetch(customerURL);
        const holdCustomers= await customersData.json();
        setCustomers(holdCustomers.customers);
    }
    useEffect((props)=>{
        getData();
    },[])

    return (
        <div className="w-75 mx-auto salesMain">
            <h1>Record a new sale</h1>
            <SalesForm autos={autos} customers={customers} salespeople={salespeople}/>
        </div>
    )
}
export default CreateSale
