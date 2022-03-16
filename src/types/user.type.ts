type Geo = {
    lat: string
    lng: string
    street: string
    suite: string
    zipcode: string
}

type Address = {
    city: string
    geo: Geo
}

type Company = {
    bs: string
    catchPhrase: string
    name: string
}

export type User = {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
    company: Company
    address: Address
}
