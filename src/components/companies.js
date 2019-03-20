import React from 'react';
import Company from "./company";

class Companies extends React.Component {
    render() {

        //component to render all companies on site

        const {companiesList,select,selected} = this.props;

        if (!companiesList) {
            return null;
        }

        let allCompanies = companiesList.map((company, i) => {
            return <Company company={company} key={i} select={select} selected={selected}/>
        });
        return (
            <main className='jobsSection'>
                <ul>
                    {allCompanies}
                </ul>
            </main>

        )
    }

    componentDidMount() {

        //function to import all companies
        this.props.importAllCompanies();
    }
}

export default Companies;