import React from 'react';
import Section8Card from '../Section8Card';
import Titles from '../Titles';
import News1 from "./../../images/news1.webp";
import News2 from "./../../images/news2.webp";
import News3 from "./../../images/news3.webp";



const Section8 = () => {


    return (
        <div className="container mt-5">
            <Titles title1="Testimonial" title2="Our latest news" />

            <section className="section8">
                <div className="row">
                    <Section8Card image={News1} />
                    <Section8Card image={News2} />
                    <Section8Card image={News3} />
                </div>
            </section>




        </div>
    )
}

export default Section8