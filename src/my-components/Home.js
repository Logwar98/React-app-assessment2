import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Function Component
function Home() {
    //Parent Component "Home"
    const updateSharedState = (value) => setsharedBond(value);//Child1(FormCourtesyPhone) pass data to Child2
    const [sharedBond, setsharedBond] = useState(0);//Child2(FormCost) receive data from Child1

    const updateWarranty = (value) => { setsharedWarranty(value); };//Child1 pass data to Child2
    const [sharedWarranty, setsharedWarranty] = useState(false);//Child2 receive data from Child1
    //Parent Component "Home" 
    const updateCustomerType = (value) => setSharedCustomerType(value);//Child1 pass data to Child2 
    const [sharedCustomerType, setSharedCustomerType] = useState(0);//Child2 receive data from Child1 
    
    //Pass customerDetails from "FormCustomerDetail" component to "Home"
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", });
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const attachedData = {sharedBond,
                sharedCustomerType,
                customerDetails,
            };
            navigate("/invoice", {state: { attachedData } });
        }
        catch (e) {
            alert('ERROR!!!');
        }
    }

    //Component UI: HTML Rendering
    return (<>
        <form className="row" style={{ minHeight: '60vh' }} onSubmit={onSubmit}>
            {/*Customner Details*/}
            <div className="col-12 col-lg-4 p-4 m-0"
                style={{ minHeight: '30vh', backgroundColor: '#FCF3CF' }}> <FormCustomerDetail passDataToParent={updateCustomerType}
                sendCustomerDetails={(value) => setCustomerDetails(value)} />
            </div>
            {/*Repair Details*/}
            <div className="col-12 col-lg-4 p-4 m-0"
                style={{ minHeight: '30vh', backgroundColor: '#D5F5E3' }}> <FormRepairDetail passDataToParent={updateWarranty}/>
            </div>
            {/*Courtesy Phone & Cost*/}
            <div className="col-12 col-lg-4 p-0 m-0">
                {/*Courtesy phone*/}
                <div className="p-4" style={{ minHeight: '30vh', backgroundColor: '#2874A6' }}>
                    <FormCourtesyPhone passDataToParent={updateSharedState} /> {/*Child1*/}
                </div>
                {/*Cost*/}
                <div className="p-4" style={{ minHeight: '20vh', backgroundColor: '#EDBB99' }}>
                    <FormCost sharedPropBond={sharedBond} sharedPropWarranty={sharedWarranty}/> {/*Child2*/}
                </div>
            </div>
            {/*Button area*/}
            <div className="p-4 text-center" style={{ minHeight: '10vh', backgroundColor: '#EDBB99' }}> <FormButtons />
            </div>
        </form>
    </>);
}
//Export this component to the entire app, can be re-used or hooked into other Components
export default Home; 