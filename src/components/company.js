import React from 'react';
import {FaArrowCircleDown} from "react-icons/fa";
import {FaArrowCircleUp} from "react-icons/fa";


class Company extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    //event to display offer if company clicked

    displayOffers = (e) => {
        this.setState({
            display: this.state.display ? false : true
        })
    };

    render() {

        //component to display one company from companies list

        const {
            company,
            select
        } = this.props;

        const style = {
            backgroundColor: this.props.selected == company ? '#FAF0E6' : 'white'
        };


        return (<div className='companyClass' onClick={() => select(company)} style={style}>
                    <div className='headerCompany'>
                    {!this.state.display && <FaArrowCircleDown onClick={this.displayOffers} className='arrowClass'/>}
                    {this.state.display && <FaArrowCircleUp onClick={this.displayOffers} className='arrowClass'/>}
                    <p>{company.name}</p>
                    </div>
                    {this.state.display && <div>
                    {company.offers.map((offer) => {
                        return <li className='offerClass'><a href='#'>{offer.title}</a></li>

                        })}
                    </div>}
                </div>)
    }
}

export default Company;