import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

const projects = {
    bevoltz: {
        title: 'beVoltz',
        bgcolor: '#223739',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7125182003720667137/',
    },
    codify: {
        title: 'Codify',
        bgcolor: '#FFFFFF',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:6990068980187074561/',
    },
    myfinances: {
        title: 'MyFinances',
        bgcolor: '#09090b',
        href: 'https://my-finances-pro.vercel.app/',
    },
};

export function ProjectsCards() {
    return (
        <div className="flex flex-col sm:flex-row gap-2">
            {Object.entries(projects).map(([key, value]) => (
                <div key={key} className="p-1">
                    <a
                        key={key}
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card
                            className="h-[80px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg rounded-lg"
                            style={{ backgroundColor: value.bgcolor }}
                        >
                            <CardContent className="flex items-center justify-center h-full">
                                <Image
                                    src={`/projects/${key}.svg`}
                                    alt={value.title}
                                    width={160}
                                    height={60}
                                    style={{
                                        height: 'auto',
                                        userSelect: 'none',
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </a>
                </div>
            ))}
        </div>
    );
}
