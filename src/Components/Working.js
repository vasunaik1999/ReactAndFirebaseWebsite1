import React, {useState} from 'react'
import workapi from '../API/workApi.js';

const Working = () => {

    const [workData, setWorkData] = useState(workapi);

    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading">How Does It work</h1>
                    <div className="row">
                        {workData.map((props) => {
                            const {id, logo, title, info} = props;
                            return(
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                        <i className={`fontawesome-style ${logo}`} ></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{info}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Working
