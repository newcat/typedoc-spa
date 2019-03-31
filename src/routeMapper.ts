import { Kind } from "./types";

export default new Map<Kind, string>([
    [Kind.Class, "classes"],
    [Kind.Enum, "enums"],
    [Kind.Interface, "interfaces"],
    [Kind.TypeAlias, "types"],
    [Kind.Function, "functions"]
]);
