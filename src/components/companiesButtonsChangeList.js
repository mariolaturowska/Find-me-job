import React from 'react';

const Buttons=(props)=> {

    //component with buttons responsible for rendering companies list from prev or next page

    const {importPrevPageCompanies, importNextPageCompanies,counter} =props;
    return (
        <section className='buttonsToNextPage'>
            <button onClick={() => importPrevPageCompanies(props.counter)}>Prev</button>
            <button onClick={() => importNextPageCompanies(props.counter)}>Next</button>
        </section>
    )
};

export default Buttons;