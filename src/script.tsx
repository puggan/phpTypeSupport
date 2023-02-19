/// <reference path="data.d.ts" />
/// <reference path="jsx.ts" />

document.addEventListener(
    "DOMContentLoaded",
    async () => {
        const data = await (await fetch('data.json')).json() as typeSupportData;

        const pageElement = document.getElementById('page') as HTMLDivElement;

        let referenceCount = 0;
        for (const category of data.categories) {
            const featureTrs = [];
            for (const feature of category.features) {
                //<editor-fold desc="reference">
                const featureReferences = [];
                for (const reference of feature.references || []) {
                    featureReferences.push(
                        <a href={reference.url} title={reference.title}>{'[' + (++referenceCount) + ']'}</a>
                    )
                }
                //</editor-fold>

                const supportTds = [];
                for (const softwareCode of Object.keys(data.software) as softwareCodes[]) {
                    if (!feature.support.hasOwnProperty(softwareCode)) {
                        supportTds.push(
                            <td class="unknown">?</td>
                        );
                        continue;
                    }

                    const support = feature.support[softwareCode];

                    const parts = [];
                    if (support.version) {
                        parts.push(<span class="version">{support.version}</span>);
                    }
                    if (support.partialVersion) {
                        parts.push(<span class="partialVersion">{support.partialVersion}</span>)
                    }
                    if (support.pr) {
                        parts.push(<a class="pr" title={support.pr.title} href={support.pr.url}>PR</a>)
                    } else if (support.issue) {
                        parts.push(<a class="issue" title={support.issue.title} href={support.issue.url}>I#</a>)
                    }
                    switch (support.supportType) {
                        case "supported":
                            if (!support.version && !support.partialVersion) {
                                parts.push(<span class="symbol">✓</span>);
                            }
                            break;

                        case "upcoming":
                            if (!support.version && !support.partialVersion) {
                                parts.push(<span class="symbol">🕑</span>);
                            }
                            break;

                        case "dev":
                            if (!support.version && !support.partialVersion) {
                                parts.push(<span class="symbol">D</span>);
                            }
                            break;

                        case "pr":
                            if (!support.version && !support.partialVersion && !support.pr) {
                                parts.push(<span class="symbol">P</span>);
                            }
                            break;

                        case "issue":
                            if (!support.version && !support.partialVersion && !support.pr && !support.issue) {
                                parts.push(<span class="symbol">I</span>);
                            }
                            break;

                        case "none":
                            parts.push(<span class="symbol">❌</span>);
                            break;

                        default:
                            const nonReach: never = support.supportType;
                            throw new Error('not reachable...');
                    }

                    //<editor-fold desc="reference">
                    const supportReferences = [];
                    for (const reference of support.references || []) {
                        supportReferences.push(
                            <a href={reference.url} title={reference.title}>{'[' + (++referenceCount) + ']'}</a>
                        )
                    }
                    if (supportReferences) {
                        parts.push(<sup>{supportReferences}</sup>)
                    }
                    //</editor-fold>


                    supportTds.push(
                        <td class={support.supportType}>
                            {parts}
                        </td>
                    );
                }

                //<editor-fold desc="feature">
                featureTrs.push(
                    <tr>
                        {
                            featureReferences ?
                                <td>
                                    <span title={feature.title}>{feature.name}</span>
                                    <sup>{featureReferences}</sup>
                                </td>
                                :
                                <td title={feature.title}>{feature.name}</td>

                        }
                        {supportTds}
                    </tr>
                );
                //</editor-fold>
            }

            //<editor-fold desc="softwareThs">
            const softwareThs = [];
            for (const software of Object.values(data.software)) {
                softwareThs.push(
                    <th title={software.name}>
                        <a href={software.website.url}>
                            <img alt={software.name} class="icon" src={software.icon}/>
                        </a>
                    </th>
                );
            }
            //</editor-fold>

            //<editor-fold desc="categories">
            pageElement.appendChild(
                <div>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                {softwareThs}
                            </tr>
                        </thead>
                        <tbody>
                            {featureTrs}
                        </tbody>
                    </table>
                </div>
            );
            //</editor-fold>
        }
    },
    {
        once: true,
        passive: true
    }
);