type StateType = {
    age: number
    childrenCount: number
    name: string
}

export type IncrementAge = {
    type: 'INCREMENT-AGE'
}
export type IncrementChildrenCount = {
    type: 'INCREMENT-CHILDREN-COUNT'
}
export type ChangeName = {
    type: 'CHANGE-NAME',
    newName: string
}

type ActionType = IncrementAge | IncrementChildrenCount | ChangeName;

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let newState = {...state};//делаем копию
            newState.age = state.age + 1;// у копии имеем право менять св-во
            return newState;//возвращаем копию
        case 'INCREMENT-CHILDREN-COUNT':
            // а можно без создания переменных промежуточных (делайте, как вам понятнее)
            return {
                ...state,
                childrenCount: state.childrenCount + 1
            };
        case 'CHANGE-NAME':
            // а можно без  создания переменных промежуточных (делайте, как вам понятнее)
            return {
                ...state,
                name: action.newName
            };
        default:
            throw new Error("I don't understand this type")
    }
}


export const IncrementAgeAC = (): IncrementAge => {
    return { type: 'INCREMENT-AGE' }
}
export const IncrementChildrenCountAC = (): IncrementChildrenCount => {
    return { type: 'INCREMENT-CHILDREN-COUNT' }
}
export const ChangeNameAC = (newName:string): ChangeName => {
    return { type: 'CHANGE-NAME', newName: newName }
}
