import React from 'react';
import {FaJs, FaPhp, FaJava, FaPython, FaHtml5} from "react-icons/fa";

const Filters = (props) => {

    //component to render filters based on seniority & technology
    return (
        <section className='filterSection'>
            <div className='seniorityLevel'>
                <h2>seniority level</h2>
                <div className='buttonSeniorityFilters'>
                    <button onClick={() => props.getOffersBySeniority(1)}>Junior</button>
                    <button onClick={() => props.getOffersBySeniority(2)}>Mid</button>
                    <button onClick={() => props.getOffersBySeniority(3)}>Senior</button>
                </div>
            </div>
            <div className='technologiesClass'>
                <h2>technologies</h2>
                <div className='technologiesChoose'>
                    <FaJs size={35} onClick={() => props.getOffersByTechnology(2)}/>
                    <FaPhp size={35} onClick={() => props.getOffersByTechnology(1)}/>
                    <FaJava size={35} onClick={() => props.getOffersByTechnology(4)}/>
                    <FaPython size={35} onClick={() => props.getOffersByTechnology(5)}/>
                    <FaHtml5 size={35} onClick={() => props.getOffersByTechnology(8)}/>
                </div>
            </div>
        </section>
    )
};

export default Filters;