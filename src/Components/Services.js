import React, { useState } from 'react'
import serviceApi2 from '../API/servicesApi2'

const Services = () => {

    const [serviceData, setserviceData] = useState(serviceApi2);

    return (
        <>
            <section className="service-main-container container">
                <div className="service-container">
                    <h1 className="main-heading text-center fw-bold">How to send money</h1>
                </div>
                <div className="row">
                {
                    serviceData.map((props) => {
                        const {id, logo, title, info} = props;
                        return(
                            <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                            </>
                        )
                    })
                }
                </div>
            </section>
        </>
    )
}

export default Services
