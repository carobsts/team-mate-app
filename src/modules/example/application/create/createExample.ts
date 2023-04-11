import { ensureExampleIsValid, Example } from "../../domain/Example";
import { ExampleRepository } from "../../domain/ExampleRepository";

export function createExample(exampleRepository: ExampleRepository, example: Example): void {
    ensureExampleIsValid(example); 
    exampleRepository.save(example);
};