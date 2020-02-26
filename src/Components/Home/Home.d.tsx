interface IObjProps {
    name: string
    role: string
    isManager?: boolean
}
export interface IHomeProps {
    title: string
    age?: number
    role?: string
    tempArray?: string[]
    tempObjArray: Array<IObjProps>
}

export interface IStateProps {
    name: string
}


// Array<string> or string[]