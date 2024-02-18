import ComponentsCounterSimple from '@/components/components/counter/components-counter-simple';
import ComponentsCounterWithIcon from '@/components/components/counter/components-counter-with-icon';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Counter',
};

const Counter = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Counter</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-countup" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-countup
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    <ComponentsCounterSimple />
                    <ComponentsCounterWithIcon />
                </div>
            </div>
        </div>
    );
};

export default Counter;
