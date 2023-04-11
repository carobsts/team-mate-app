// fn validadora
export function isExampleIdValid(id: string): boolean {
    return !!id;
};

// excepción
export function ExampleIdNotValidError(id: string): Error {
    return new Error(`Id ${id} is not valid.`)
};