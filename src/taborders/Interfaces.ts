export interface ITaborderContainer {
    canFucus(fieldName: string): boolean;
    focus(fieldName: string): boolean;
    perform(actionName: string): boolean;
}

