type softwareCodes = 'php' | 'phpstorm' | 'phpstan' | 'psalm';
//  phpDocumentor, Zend Studio, NetBeans, ActiveState Komodo Edit and IDE, PHPEdit and Aptana Studio, VSCode

type supportTypes = 'supported' | "upcoming'|'dev'|'pr'|'issue'|'none";

type version = string;

type reference = {
    title: string;
    url: string;
};

type software = {
    icon?: string;
    name: string;
    website?: reference;
}

type category = {
    description: string;
    features: feature[];
    name: string;
}

type feature = {
    name: string;
    references?: reference[];
    support: {
        [key: softwareCodes]: featureSupport;
    };
    title: string;
}

type featureSupport = {
    issue?: string;
    partialVersion?: version;
    pr?: string;
    references?: reference[];
    supportType: supportTypes;
    version?: version;
} & {
    supportType: 'supported'|'upcoming';
    version: version;
}

type typeSupportData = {
    software: {
        [key: softwareCodes]: software;
    },
    categories: category[];
};