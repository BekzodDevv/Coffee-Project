import React from 'react'



const Titles = ({ title1, title2 }) => {


    return (
        <>
            <div className="row">
                <div className="col-md-12 text-center mx-auto">
                    <div className="fs18">
                        {title1}
                    </div>
                    <div className="fs48 text-white">
                        {title2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Titles