import { ExampleIdNotValidError, isExampleIdValid } from "./ExampleId";
import { ExampleTitleNotValidError, isExampleTitleValid } from "./ExampleTitle";

export interface Example {
    id: string;
    title: string;
};

export function ensureExampleIsValid({ id, title }: Example): void {

    interface Validation {
        type: string, 
        validation_accomplished: boolean, 
        error_exception: Error
    };

    const validations: Validation[] = [
        {
            type: 'ID_VALIDATION',
            validation_accomplished: isExampleIdValid(id),
            error_exception: ExampleIdNotValidError(id) 
        },
        {
            type: 'TITLE_VALIDATION',
            validation_accomplished: isExampleTitleValid(title),
            error_exception: ExampleTitleNotValidError(title) 
        }
    ];

    validations.forEach((validation: Validation) => {
        return validation.validation_accomplished ?? validation.error_exception
    })
};