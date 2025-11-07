import { useState, useEffect } from "react";

//Function Component
function FormCustomerDetail({ passDataToParent, sendCustomerDetails }) {

    //---------- 
    //customer type state 
    const [type, setType] = useState({ customer: "checked", business: "" });
    //update customer type 
    const updateCustomerType = (event) => {
        if (event.target.value === "customer") {
            passDataToParent(true);
            setType({ customer: "checked", business: "" });
        } else {
            passDataToParent(false);
            setType({ customer: "", business: "checked" });
        }
    }
    //customer details 
    const [customerDetails, setCustomerDetails] = useState({ title: "Mr", firstname: "", lastname: "", });
    const handleChange = (event) => {
        const { name, value } = event.target; //Get updated pair-value: “name” and “value” 
        setCustomerDetails({ ...customerDetails, ...{ [name]: value } });
    }
    //useEffect() hook "SYNCHRONIZE" a component with another component (or external system)
    //useEffect Hook syntax: useEffect(() => {}, [dependencies]);
    useEffect(() => {
        //Call-back function
        sendCustomerDetails(customerDetails);
    }, [customerDetails]);

    //Component UI: HTML Rendering
    return (<>
        <h2>Customer Details</h2>
        {/*Customer type*/}
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                <legend className="col-11 float-none w-auto">Customer type *</legend>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Customer</label>
                    <input type="radio" id="customerType" name="customer-type" value="customer" checked={type.customer} 
                    onChange={(event) => updateCustomerType(event)} />
                </div>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Business</label>
                    <input type="radio" id="businessType" name="customer-type" value="business" checked={type.business} onChange={(event) => updateCustomerType(event)} />
                </div>
            </fieldset>
        </div>

        {/*Details*/}
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Title *</label>
            <select className="col-12 col-md-12 col-lg-7"
                defaultValue="Mr"
                name="title"
                onChange={handleChange} required >
                <option value="Mr" selected>Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
        </div>

        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">First Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="fname" pattern="[A-Za-z\s–]"
                name="firstname" onChange={handleChange} required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Last Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="lname" pattern="[A-Za-z\s–]"
                name="lastname" onChange={handleChange} required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Street *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="street" required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Suburb</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="suburb" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">City *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="city" required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Post Code</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="post" pattern="\d{4}" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Phone Number *</label>
            <input className="col-12 col-md-12 col-lg-7" type="tel" id="phone" pattern="^[0-9\s\(\)\+\-]+$" required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Email *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="email" required />
        </div>
    </>);
}
//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail; 