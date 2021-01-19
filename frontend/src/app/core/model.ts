export class Product {
    id?: number
    name: string
    price: number
}

export class UserGroup {
    id: string
    name: string
} 

export class User {
    id?: number
    name: string
    email: string
    password: string
    userGroup = new UserGroup()
    createdAt = new Date() 
} 

export class Permission {
    id: string
    name: string
} 