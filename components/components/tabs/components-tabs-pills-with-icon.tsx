'use client';
import IconHome from '@/components/icon/icon-home';
import IconPhone from '@/components/icon/icon-phone';
import IconSettings from '@/components/icon/icon-settings';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tab } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';

const ComponentsTabsPillsWithIcon = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <PanelCodeHighlight
            title="Pills with Icon"
            codeHighlight={`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}>
                                <svg>...</svg>
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}>
                            <svg>...</svg>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}>
                            <svg>...</svg>
                            Contact
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}>
                            <svg>...</svg>
                            Settings
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>`}
        >
            <div className="mb-5">
                {isMounted && (
                    <Tab.Group>
                        <Tab.List className="mb-5 mt-3 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                                    >
                                        <IconHome className="mb-1" />
                                        Home
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                                    >
                                        <IconUser className="mb-1 h-5 w-5" />
                                        Profile
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                                    >
                                        <IconPhone className="mb-1" />
                                        Contact
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                                    >
                                        <IconSettings className="mb-1 h-5 w-5" />
                                        Settings
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="active">
                                    <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div>
                                    <div className="flex items-start">
                                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                            <img src="/assets/images/profile-34.jpeg" alt="img" className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark" />
                                        </div>
                                        <div className="flex-auto">
                                            <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                            <p className="text-white-dark">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="rounded-br-md rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                                    <div className="flex items-start">
                                        <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                        </p>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                )}
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsTabsPillsWithIcon;
