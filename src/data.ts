/// <reference path="data.d.ts" />

const data: typeSupportData = {
    software: {
            'php': {
                icon: 'https://www.php.net/favicon-196x196.png?v=2',
                name: 'PHP Core',
                website: {
                    title: 'PHP.net',
                    url: 'https://www.php.net/',
                }
            },
            'phpstan': {
                icon: 'https://phpstan.org/images/logo-big.png',
                name: 'PHPStan',
                website: {
                    title: 'PHPStan.org',
                    url: 'https://phpstan.org/',
                }
            },
            'phpstorm': {
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/PhpStorm_Icon.svg/512px-PhpStorm_Icon.svg.png',
                name: 'JetBrain PHPStorm',
                website: {
                    title: 'JetBrain PHPStorm',
                    url: 'https://www.jetbrains.com/phpstorm/',
                }
            },
            'psalm': {
                icon: 'view-source:https://psalm.dev/favicon.png',
                name: 'Psalm',
                website: {
                    title: 'Psalm.dev',
                    url: 'https://psalm.dev/',
                }
            }
        },
        categories: [
            {
                name: 'shapes',
                description: 'Types with shape information.',
                features: []
            },
            {
                name: 'generic',
                description: 'Types with generic extentions',
                features: []
            },
            {
                name: 'operators',
                description: 'Types built with operators and paranteses.',
                features: []
            },
            {
                name: 'limited',
                description: 'Types that limits/narrows a basic types',
                features: []
            },
            {
                name: 'builtin',
                description: 'Types defined in php',
                features: [
                    {
                        name: 'ClassNames',
                        title: 'using classes like \\stdClass as types',
                        support: {
                            php: {
                                supportType: 'supported',
                                version: '7.0',
                                partialVersion: '5.0',
                                references: [
                                    {
                                        title: '3v4l: Class as return Type',
                                        url: 'https://3v4l.org/oL46H'
                                    },
                                    {
                                        title: '3v4l: Class as parameter Type',
                                        url: 'https://3v4l.org/MYvKv'
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
;