import React, { useEffect, useMemo, useState } from 'react';

import { animateNodes } from 'sigma/utils';

import { useSigma } from '@react-sigma/core';
import { WorkerLayoutControl } from '@react-sigma/layout-core';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import { useLayoutCirclepack } from '@react-sigma/layout-circlepack';
import { useLayoutRandom } from '@react-sigma/layout-random';
import { useLayoutNoverlap, useWorkerLayoutNoverlap } from '@react-sigma/layout-noverlap';
import { useLayoutForce, useWorkerLayoutForce } from '@react-sigma/layout-force';
import { useLayoutForceAtlas2, useWorkerLayoutForceAtlas2 } from '@react-sigma/layout-forceatlas2';

export const LayoutsControl: React.FC = () => {
    const sigma = useSigma();
    const [layout, setLayout] = useState<string>('noverlaps');
    const [opened, setOpened] = useState<boolean>(false);
    const layoutCircular = useLayoutCircular();
    const layoutCirclepack = useLayoutCirclepack();
    const layoutRandom = useLayoutRandom();
    const layoutNoverlap = useLayoutNoverlap();
    const layoutForce = useLayoutForce({ maxIterations: 100 });
    const layoutForceAtlas2 = useLayoutForceAtlas2({
        iterations: 100,
        settings: { strongGravityMode: true, adjustSizes: true },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const layouts: { [key: string]: { layout: any; worker?: any } } = useMemo(() => {
        return {
            circular: {
                layout: layoutCircular,
            },
            circlepack: {
                layout: layoutCirclepack,
            },
            random: {
                layout: layoutRandom,
            },
            noverlaps: {
                layout: layoutNoverlap,
                worker: useWorkerLayoutNoverlap,
            },
            forceDirected: {
                layout: layoutForce,
                worker: useWorkerLayoutForce,
            },
            forceAtlas: {
                layout: layoutForceAtlas2,
                worker: useWorkerLayoutForceAtlas2,
            },
        };
    }, []);

    useEffect(() => {
        const { positions } = layouts[layout].layout;
        animateNodes(sigma.getGraph(), positions(), { duration: 1000 });
    }, [layout, layouts, sigma]);

    useEffect(() => {
        const close = () => {
            setOpened(false);
        };
        if (opened === true) {
            setTimeout(() => document.addEventListener('click', close), 0);
        }
        return () => document.removeEventListener('click', close);
    }, [opened]);

    return (
        <>
            <div>
                {layouts[layout] && layouts[layout].worker && (
                    <WorkerLayoutControl layout={layouts[layout].worker} settings={{}} />
                )}
            </div>
            <div>
                <div className="react-sigma-control">
                    <button onClick={() => setOpened((e: boolean) => !e)}>
                        <i className="fa-solid fa-diagram-project"></i>
                    </button>
                    {opened === true && (
                        <ul
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: '35px',
                                backgroundColor: '#e7e9ed',
                                margin: 0,
                                padding: 0,
                                listStyle: 'none',
                            }}
                        >
                            {Object.keys(layouts).map((name) => {
                                return (
                                    <li key={name}>
                                        <button
                                            className="btn btn-link"
                                            style={{ fontWeight: layout === name ? 'bold' : 'normal', width: '100%' }}
                                            onClick={() => {
                                                setLayout(name);
                                            }}
                                        >
                                            {name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};
