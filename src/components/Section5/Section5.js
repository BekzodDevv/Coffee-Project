import React from 'react'
import List from '../List'
import Titles from '../Titles'
import Bg1 from "./../../images/Bg1.webp"
import Bg2 from "./../../images/Bg2.webp"
import Bg3 from "./../../images/Bg3.webp"
import Bg4 from "./../../images/Bg4.webp"
import Bg5 from "./../../images/Bg5.webp"
import Bg6 from "./../../images/Bg6.webp"
import Bg7 from "./../../images/Bg7.webp"
import Bg8 from "./../../images/Bg8.webp"


const Section5 = () => {
    return (
        <div className="container mt-5 pt-5">
            <Titles title1={"Menu"} title2={"Coffee popular menu"} />

            <section className="section5">
                <div className="row ">
                    <List image={Bg1} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg2} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg3} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg4} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg5} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg6} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg7} title="Americano rosted gred" price={"$12:00"} />
                    <List image={Bg8} title="Americano rosted gred" price={"$12:00"} />
                </div>






            </section>


        </div>
    )
}

export default Section5