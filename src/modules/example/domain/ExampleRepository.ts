import { Example } from "./Example";

export interface ExampleRepository {
    save: (example: Example) => void;
};