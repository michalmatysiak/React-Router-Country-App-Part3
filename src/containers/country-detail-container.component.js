import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
   
       componentDidMount() {
        const countryId = parseInt(this.props.params.id, 10);
        this.props.dispatch(getCountry(countryId));
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);