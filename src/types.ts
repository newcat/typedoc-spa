export enum Kind {
    Global = 0,
    ExternalModule = 1,
    Module = 2,
    Enum = 4,
    EnumMember = 16,
    Variable = 32,
    Function = 64,
    Class = 128,
    Interface = 256,
    Constructor = 512,
    Property = 1024,
    Method = 2048,
    CallSignature = 4096,
    IndexSignature = 8192,
    ConstructorSignature = 16384,
    Parameter = 32768,
    TypeLiteral = 65536,
    TypeParameter = 131072,
    Accessor = 262144,
    GetSignature = 524288,
    SetSignature = 1048576,
    ObjectLiteral = 2097152,
    TypeAlias = 4194304,
    Event = 8388608,

    ClassOrInterface = Class | Interface,
    VariableOrProperty = Variable | Property,
    FunctionOrMethod = Function | Method,
    SomeSignature = CallSignature | IndexSignature | ConstructorSignature | GetSignature | SetSignature,
    SomeModule = Module | ExternalModule,
    SomeType = Interface | TypeLiteral | TypeParameter | TypeAlias,
    SomeValue = Variable | Function | ObjectLiteral
}

export enum Flag {
    None = 0,
    Private = 1,
    Protected = 2,
    Public = 4,
    Static = 8,
    Exported = 16,
    ExportAssignment = 32,
    External = 64,
    Optional = 128,
    DefaultValue = 256,
    Rest = 512,
    ConstructorProperty = 1024,
    Abstract = 2048,
    Const = 4096,
    Let = 8192
}

// WIP
export interface ISource {
    fileName: string;
    line: number;
    character: number;
}

// TODO
export interface IType {
    type: string;
    name: string;
    id?: number;
    typeArguments?: IType[];
    types: IType[];
    elementType: IType;
    declaration?: IDeclarationReflection;
}

export interface ITag {
    tagName: string;
    text: string;
    paramName?: string;
}

export interface IComment {
    shortText?: string;
    text?: string;
    returns?: string;
    tags?: ITag[];
}

// TODO: Decorators
export interface IReflection {
    id: number;
    name: string;
    kind: Kind;
    kindString: string;
    flags?: Record<string, boolean>;
    comment?: IComment;
    sources: ISource[];
}

export interface IContainerReflection extends IReflection {
    children?: IDeclarationReflection[];
    groups?: any[]; // TODO
}

export interface IParameterReflection extends IReflection {
    type?: IType;
    defaultValue?: string;
}

export interface ITypeParameterReflection extends IReflection {
    type?: IType;
}

export interface IDeclarationReflection extends IContainerReflection {
    type?: IType;
    typeParameter?: ITypeParameterReflection[];
    signatures?: ISignatureReflection[];
    indexSignature?: ISignatureReflection;
    getSignature?: ISignatureReflection;
    setSignature?: ISignatureReflection;
    defaultValue?: string;
    overwrites?: IType;
    inheritedFrom?: IType;
    implementationOf?: IType;
    extendedTypes?: IType[];
    extendedBy?: IType[];
    implementedTypes?: IType[];
    implementedBy?: IType[];
}

export interface ISignatureReflection extends IReflection {
    parameters?: IParameterReflection[];
    typeParameters?: ITypeParameterReflection[];
    overwrites?: IType;
    inheritedFrom?: IType;
    implementationOf?: IType;
}
