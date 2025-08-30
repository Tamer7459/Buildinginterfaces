import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";


export default function LoanForm() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: "",
        isEmployed: false,
        salary: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const btnIsDisabled = !formData.name || !formData.phone || !formData.age || !formData.salary;

    function handleFormSubmit(e) {
        e.preventDefault();

        if (formData.age < 18) {
            setErrorMessage("You must be at least 18 years old.");
        } else if (formData.age > 100) {
            setErrorMessage("You must be less than 100 years old.");
        }else if (formData.phone.length !== 10) {
            setErrorMessage("Phone number must be exactly 10 digits long.");
        }else{
            setErrorMessage(null);
        }

        setIsModalVisible(true);
    }


    function handleModalClose() {
        if (isModalVisible) {
            setIsModalVisible(false);
        }
    }

    return (
        <div className="flex" style={{ flexDirection: "column"}} onClick={handleModalClose} >
            <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
                <h1>Requesting a Loan</h1>
                <hr></hr> 
                
                <label>Name:</label>
                <input value={formData.name}  type="text" name="name" onChange={handleChange} />

                <label>Phone Number:</label>
                <input value={formData.phone}  type="number" name="phone" onChange={handleChange} />

                <label>Age:</label>
                <input value={formData.age}  type="number" name="age" onChange={handleChange} />

                <label>Are you an employee?: </label>
                    <input id="checkbox" type="checkbox" checked={formData.isEmployed} name="isEmployed" onChange={handleChange} />

                <label> salary </label>
                    <select id="salary" name="salary" value={formData.salary} onChange={handleChange}>
                        <option value="" disabled>Select your salary</option>
                        <option value="less than 500$">less than 500$</option>
                        <option value="between 500$ and 2000$">between 500$ and 2000$</option>
                        <option value="above 2000$">above 2000$</option>
                    </select>

                <button className={btnIsDisabled ? "disabled" : "" } id="submit-loan-btn" type="submit" disabled={btnIsDisabled} 
                onClick={handleFormSubmit}
                >Submit</button>
            </form>
            <Modal errorMessage={errorMessage} isVisible={isModalVisible} />
        </div>
    );
}





