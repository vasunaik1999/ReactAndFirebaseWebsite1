import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Online Payment Made <br/> Easy For You.</h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h3>Get early access for you</h3>
                            
                            <div className="input-group mt-3">
                                <input type='text' className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter your Email ..."/>
                                <button className="input-group-button">Get it now</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center  align-items-center main-herosection-images">
                            <img src="./images/image1.jpg" alt="heroimage" className="img-fluid" />
                            <img src="./images/image2.jpg" alt="heroimage" className="img-fluid main-hero-image2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;