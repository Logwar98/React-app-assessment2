import React, { useState, useEffect } from "react";

function FormRepairDetail({ passDataToParent }) {
    const [purchaseDate, setPurchaseDate] = useState("");
    const [repairDate, setRepairDate] = useState("");
    const [warranty, setWarranty] = useState(false);
    const [warrantyDisabled, setWarrantyDisabled] = useState(false);
    const today = new Date().toISOString().split("T")[0];

    // Disable warranty if purchase date is more than 1 year ago
    useEffect(() => {
        if (purchaseDate) {
            const purchase = new Date(purchaseDate);
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

            const isExpired = purchase < oneYearAgo;
            setWarrantyDisabled(isExpired);

            // Auto uncheck warranty if it's expired
            if (isExpired) {
                setWarranty(false);
                passDataToParent(false);
            }
        } else {
            setWarrantyDisabled(false);
        }
    }, [purchaseDate]);

    // Send warranty status to parent
    useEffect(() => {
        if (passDataToParent) {
            passDataToParent(warranty);
        }
    }, [warranty]);

    const validateDates = (e) => {
        e.preventDefault();
        // Add any custom date validation logic here
    };

    const updateWarranty = (value) => {
        passDataToParent(value); //Child1 (FormCourtesyPhone)
    }

    return (
        <>
            <h2>Repair Details</h2>
            <form onSubmit={validateDates}>
                {/* Purchase Date */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Purchase Date *</label>
                    <input
                        className="col-12 col-md-12 col-lg-7"
                        type="date"
                        id="purchaseDate"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                        max={today}
                        required
                    />
                </div>

                {/* Repair Date */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>
                    <input
                        className="col-12 col-md-12 col-lg-7"
                        type="date"
                        id="repairDate"
                        value={repairDate}
                        onChange={(e) => setRepairDate(e.target.value)}
                        min={today}
                        required
                    />
                </div>

                {/* Under Warranty */}
                <div className="row">
                    <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                        <legend className="col-11 float-none w-auto">Under Warranty</legend>
                        <div>
                            <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                            <input
                                type="checkbox"
                                id="warranty"
                                checked={warranty}
                                onChange={(e) => setWarranty(e.target.checked)}
                                disabled={warrantyDisabled}
                                onChange1={(event) => updateWarranty(event.target.checked)} />
                            {/*passDataToParent(event.target.checked). This is shared warranty need to pass upto parent Component "Home" */} 
                            
                        </div>
                    </fieldset>
                </div>

                {/* IMEI */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">IMEI Number *</label>
                    <input
                        className="col-12 col-md-12 col-lg-7"
                        type="text"
                        id="imei"
                        pattern="\d{15}"
                        title="Please enter exactly 15 digits"
                        required
                    />
                </div>

                {/* Make */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Make *</label>
                    <select className="col-12 col-md-12 col-lg-7" defaultValue="Apple" required>
                        <option value="Apple">Apple</option>
                        <option value="LG">LG</option>
                        <option value="Motorola">Motorola</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Model Number */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Model Number</label>
                    <input
                        className="col-12 col-md-12 col-lg-7"
                        type="number"
                        id="modelNumber"
                    />
                </div>

                {/* Fault Category */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Fault Category *</label>
                    <select className="col-12 col-md-12 col-lg-7" defaultValue="Battery" required>
                        <option value="Battery">Battery</option>
                        <option value="Charging">Charging</option>
                        <option value="Screen">Screen</option>
                        <option value="SD-Storage">SD-Storage</option>
                        <option value="Software">Software</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Description */}
                <div className="row mt-1">
                    <label className="col-12 col-md-12 col-lg-4">Description *</label>
                    <textarea
                        className="col-12 col-md-12 col-lg-7"
                        id="description"
                        rows="4"
                        required
                    ></textarea>
                </div>
            </form>
        </>
    );
}

export default FormRepairDetail;
