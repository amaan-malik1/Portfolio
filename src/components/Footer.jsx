import React from 'react';
import { communityLinks, platformLinks, resourcesLinks } from './constants/index'


const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="mt-20 border-t py-10 border-neutral-700 ">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    <div>
                        <h3 className="text-md font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 ">
                            {resourcesLinks.flatMap((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-base text-neutral-300 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 ">
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-base text-neutral-300 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4">Community</h3>
                        <ul className="space-y-2 ">
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-base text-neutral-300 hover:text-white">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer