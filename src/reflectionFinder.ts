import { Kind, IContainerReflection, IReflection } from "@/types";

export default function findReflection(
    name: string, reflections: Array<IReflection & IContainerReflection>, kind?: Kind
): IReflection|undefined {

    name = name.toLowerCase();
    const ref = reflections.find((r) => (kind === undefined || r.kind === kind) && r.name.toLowerCase() === name);
    if (ref) {
        return ref;
    } else {
        for (const r of reflections) {
            if (r.children) {
                const x = findReflection(name, r.children, kind);
                if (x) { return x; }
            }
        }
    }
}
