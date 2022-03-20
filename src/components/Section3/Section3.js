import React from 'react'
import CoffeePochka from "./../../images/coffeepochka.webp"
import Chala from "./../../images/chala.svg"
import Toliq from "./../../images/toliq.svg"
import Cartt from '../Cartt'
import Titles from '../Titles'


const Section3 = () => {


    return (
        <div className="section3 container mt-5 pt-3" id="section3">
            <Titles title1={"Popular Product"} title2={"Coffee popular Product"} />
   

            <div className="row">
                <Cartt Toliq={Toliq} Chala={Chala} CoffeePochka={CoffeePochka} />
                <Cartt Toliq={Toliq} Chala={Chala} CoffeePochka={CoffeePochka} />
                <Cartt Toliq={Toliq} Chala={Chala} CoffeePochka={CoffeePochka} />
            </div>

            <div className="row">
                <div className="col-md-4 text-center mx-auto">
                    <button className="buttonn2 mt-5 text-white">
                        View all product
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Section3