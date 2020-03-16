import React from 'react';
import './Country.scss';
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {CountryQuery, GET_COUNTRY} from "../../queries/countryQuery";
import {Link, withRouter} from 'react-router-dom';

const Country = (props: any) => {

    const {data, loading, error} = useQuery<CountryQuery>(gql(GET_COUNTRY), {
        variables: {
            code: props.match.params.code
        }
    });

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error loading country</p>;

    return (
        <div className="container country-container">
            {data && data.country ? (
                <div>
                    <h1>{data.country.name}</h1>

                    <div className="card country-card">
                        <div className="card-body">
                            <p className="country-field">
                                <span className="country-field__title">Native name: </span>
                                <span className="country-field__value">{data.country.native}</span>
                            </p>
                            <p className="country-field">
                                <span className="country-field__title">Country code: </span>
                                <span className="country-field__value">{data.country.code}</span>
                            </p>

                            <p className="country-field">
                                <span className="country-field__title">Continent: </span>
                                <span className="country-field__value">{data.country.continent.name}</span>
                            </p>
                            <p className="country-field">
                                <span className="country-field__title">Phone area code: </span>
                                <span className="country-field__value">{data.country.phone}</span>
                            </p>
                            <p className="country-field">
                                <span className="country-field__title">Currency: </span>
                                <span className="country-field__value">{data.country.currency || '-'}</span>
                            </p>
                            <p className="country-field">
                                <span className="country-field__title">Languages: </span>
                                <span className="country-field__value">{data.country.languages.length ?
                                    data.country.languages.map((language: any, index) => (
                                        <span key={index} className="country-language">{language.name }</span>)) : '-'
                                }</span>
                            </p>
                        </div>
                        <Link to="/countries" className="btn btn-primary back-btn">Back to list</Link>
                    </div>
                </div>
            ) : ''
            }
        </div>
    );
};

export default withRouter(Country);