export const GET_COUNTRIES = `
query {
    countries {
        code,
        name,
        continent {
            name
        }
    }
}`;

export type CountriesQuery = {
    countries: {
        code: string,
        name: string,
        continent: {
            name: string
        }
    }[]
}