import { Example } from "../domain/Example";
import { ExampleRepository } from "../domain/ExampleRepository";

export function createAPIExampleRepository(): ExampleRepository {
    return {
        save
    }
};

function save(example: Example) {
    // do something ... 
};

// tmb pueden ir funciones que sean parte de las fns del repo