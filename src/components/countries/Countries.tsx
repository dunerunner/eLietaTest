import React from 'react';
import './Countries.scss';
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import {CountriesQuery, GET_COUNTRIES} from "../../queries/countriesQuery";
import {withRouter} from 'react-router-dom';
import ICountryItem from "../../types/countryItem";


const Countries = (props: any) => {

    const navigateToCountry = (countryCode: string) => {
        props.history.push(`/country/${countryCode}`);
    };

    const {data, loading, error} = useQuery<CountriesQuery>(gql(GET_COUNTRIES));

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error loading countries</p>;

    return (
        <div className="container countries-container">
            <h1 className="h1 countries-header">Countries</h1>

            <table className="table table-striped countries-table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Country Code</th>
                    <th scope="col">Continent</th>
                </tr>
                </thead>
                <tbody>
                {data &&
                data.countries &&
                data.countries.map((country: ICountryItem, index: number) => (
                    <tr className="countries-table__row" key={index} onClick={() => {
                        navigateToCountry(country.code)
                    }}>
                        <th scope="row">{index}</th>
                        <td>{country.name}</td>
                        <td>{country.code}</td>
                        <td>{country.continent.name}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>

        </div>
    );
};

export default withRouter(Countries);