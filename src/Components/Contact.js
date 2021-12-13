import React, {useState} from 'react'

const Contact = () => {

    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuserData({ ...userData, [name]:value });
    };

    // Firebase connection
    const submitData = async (event) => {
        event.preventDefault();
        const {firstName, lastName, phone, email, address, message} = userData;
        
        if(firstName && lastName && phone && email && address && message)
        {
            const res = await fetch(
                "https://reactfirebasewebsite-1dc5e-default-rtdb.firebaseio.com/contactForm.json",
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({firstName, lastName, phone, email, address, message}),
                }
                );
        
            if (res) {
                setuserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                })
                alert("Data stored");
            }else{
                alert("please fill the data");
            }       
        } else{
            alert("please fill the data");
        }  
    };
    return (
        <>
            <section className='contact-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className='main-heading fw-bold'>Connect With Our <br /> Sales Team</h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing. sit amet, consectetur adipiscing.</p>
                                    <img src="/images/image2.jpg" alt="" width="50%" height="40%" />
                                </div>
                                 <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-md-6 contact-input">
                                                    <input type="text" className="form-control" name="firstName" id="firstName" value={userData.firstName} onChange={postUserData} placeholder="First Name"/>
                                                </div>
                                                <div className="col-12 col-md-6 contact-input">
                                                    <input type="text" className="form-control" name="lastName" id="lastName" value={userData.lastName} onChange={postUserData} placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 contact-input">
                                                    <input type="text" className="form-control" name="phone" id="phone" defaultValue={userData.phone} onChange={postUserData} placeholder="Phone Number"/>
                                                </div>
                                                <div className="col-12 col-md-6 contact-input">
                                                    <input type="email" className="form-control" name="email" id="email" value={userData.email} onChange={postUserData} placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input">
                                                <input type="text" className="form-control" name="address" id="address" value={userData.address} onChange={postUserData} placeholder="Address"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                <input type="text" className="form-control" name="message" id="message" value={userData.message} onChange={postUserData} placeholder="Message"/>
                                                </div>
                                            </div>
                                            <div className="form-check form-checkbox-style contact-input">
                                                {/* <div className="col-12"> */}
                                                    <input type="checkbox" className="form-check-input" name="" id="check1" />
                                                    <label htmlFor="check1">I accept</label>  
                                                {/* </div> */}
                                            </div>
                                            <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Contact
