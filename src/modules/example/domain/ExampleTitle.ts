// fn validadora
export function isExampleTitleValid(title: string): boolean {
    return !!title;
};

// excepción
export function ExampleTitleNotValidError(title: string): Error {
    return new Error(`Title ${title} is not valid.`)
};