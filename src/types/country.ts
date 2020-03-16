export default interface ICountry {
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