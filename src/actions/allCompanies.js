import {ALL_COMPANIES,
    NEXT_PAGE,
    PREV_PAGE,
    OFFERS_SENIORITY,
    SELECTED,
    GET_TECHNOLOGY} from "./actions";

const url='http://turowska.com.pl/jobapi/public/index.php/api/';

export const allCompanies=(data)=>{
    return{
        type:ALL_COMPANIES,
        payload:data
    }
};

export const nextPage=()=>{
    return{
        type:NEXT_PAGE
    }
};

export const prevPage=()=>{
  return{
      type:PREV_PAGE
  }
};

export const offersBySeniority=(offers)=>{
  return {
      type:OFFERS_SENIORITY,
      payload:offers
  }
};

export const select=(element)=>{
    return{
        type:SELECTED,
        payload:element
    }
};

export const offersByTechnology=(technology)=>{
  return{
      type:GET_TECHNOLOGY,
      payload:technology
  }
};

//action to import all companies

export const importAllCompanies=(page=1)=>(dispatch)=>{

    fetch(url+'companies?page='+page)
        .then((resp)=>resp.json())
        .then(data=>dispatch(allCompanies(data['hydra:member'])))
};

//action to import companies from next page

export const importNextPageCompanies=(page=1)=>(dispatch)=>{

    dispatch(nextPage());
    page++;
    fetch(url+'companies?page='+page)
        .then((resp)=>resp.json())
        .then(data=>dispatch(allCompanies(data['hydra:member'])))
};

//action to import companies from prev page

export const importPrevPageCompanies=(page=1)=>(dispatch)=>{

    dispatch(prevPage());
    if(page!==1){
        page--;
    }
    fetch(url+'companies?page='+page)
        .then((resp)=>resp.json())
        .then(data=>dispatch(allCompanies(data['hydra:member'])))
};

//action to get companies by seniority

export const getOffersBySeniority=(seniority)=>(dispatch)=>{

    fetch(url+'companies?offers.seniority='+seniority)
        .then(resp=>resp.json())
        .then(data=>dispatch(offersBySeniority(data['hydra:member'])));
};


//action to get companies by used technology
export const getOffersByTechnology=(technology)=>(dispatch)=>{

    fetch(url+'companies?offers.Technology='+technology)
        .then(resp=>resp.json())
        .then(data=>dispatch(offersByTechnology(data['hydra:member'])));
};
