import React from 'react';
import {
    ChangeName, ChangeNameAC,
    IncrementAge,
    IncrementAgeAC,
    IncrementChildrenCount,
    IncrementChildrenCountAC,
    userReducer
} from './user-reducer';

test('user reducer should increment only age', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };


    const endState = userReducer(startState, IncrementAgeAC())

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const endState = userReducer(startState, IncrementChildrenCountAC())

    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3);
});

test('user reducer should change name of user', () => {
    const startState = { name: 'Dimych', age: 20, childrenCount: 2 };
    const newName = 'Viktor';

    const endState = userReducer(startState, ChangeNameAC(newName))

    expect(endState.name).toBe(newName);
});


