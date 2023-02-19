type softwareCodes = 'php' | 'phpstorm' | 'phpstan' | 'psalm';
//  phpDocumentor, Zend Studio, NetBeans, ActiveState Komodo Edit and IDE, PHPEdit and Aptana Studio, VSCode

type supportTypes = 'supported' | 'upcoming' | 'dev' | 'pr' | 'issue' | 'none';

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
        [key in softwareCodes]: featureSupport;
        /*
        php: featureSupport;
        phpstorm: featureSupport;
        phpstan: featureSupport;
        psalm: featureSupport;
        */
    };
    title: string;
}

type featureSupport = {
    issue?: reference;
    partialVersion?: version;
    pr?: reference;
    references?: reference[];
    supportType: supportTypes;
    version?: version;
}

type typeSupportData = {
    software: {
        [key in softwareCodes]: software;
        /*
        php: software;
        phpstorm: software;
        phpstan: software;
        psalm: software;
        */
    },
    categories: category[];
};