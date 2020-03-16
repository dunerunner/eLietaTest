export const GET_COUNTRY = `
query getCountry($code: String) {
    country(code: $code) {
        code
        name
        native
        phone
        continent {
            name
        }
        currency
        languages {
            name
        }
    }
}`;

export type CountryQuery = {
    country: {
        code: string,
        name: string,
        native: string,
        phone: string,
        continent: {
            name: string
        },
        currency: string,
        languages: {
            name: string
        }[]
    }
}