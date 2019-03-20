import React from 'react';
import Companies from './companies';
import Maps from './maps';
import Header from './header';
import {connect} from 'react-redux';
import {
    importAllCompanies,
    importNextPageCompanies,
    importPrevPageCompanies,
    getOffersBySeniority,
    select,
    getOffersByTechnology
} from '../actions/allCompanies';
import Filters from './filters';
import Buttons from './companiesButtonsChangeList'

class Main extends React.Component {
    render() {
        const {
            companiesList,
            importAllCompanies,
            importNextPageCompanies,
            counter,
            importPrevPageCompanies,
            getOffersBySeniority,
            select,
            selected,
            getOffersByTechnology,
        } = this.props;

        return (
            <div className='containerWrapper'>
                <Header/>
                <Filters
                    getOffersBySeniority={getOffersBySeniority}
                    getOffersByTechnology={getOffersByTechnology}/>
                <Companies
                    companiesList={companiesList}
                    importAllCompanies={importAllCompanies}
                    importNextPageCompanies={importNextPageCompanies}
                    counter={counter}
                    importPrevPageCompanies={importPrevPageCompanies}
                    select={select}
                    selected={selected}
                />
                <Maps
                    companiesList={companiesList}
                    selected={selected}/>
                <Buttons
                    importNextPageCompanies={importNextPageCompanies}
                    importPrevPageCompanies={importPrevPageCompanies}
                    counter={counter}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.companiesReducer
    }
};

const mapDispatchToProps = {
    importAllCompanies,
    importNextPageCompanies,
    importPrevPageCompanies,
    getOffersBySeniority,
    select,
    getOffersByTechnology
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);