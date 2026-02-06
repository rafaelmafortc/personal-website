import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const projects = {
    bevoltz: {
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7125182003720667137/',
        bgcolor: '#223739',
    },
    codify: {
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:6990068980187074561/',
        bgcolor: '#ffffff',
    },
};

export function ProjectsCards() {
    const t = useTranslations('projects');

    return (
        <div className="flex flex-col gap-8 w-full">
            {Object.entries(projects).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-2 justify-start">
                    <div className="flex items-center gap-4">
                        <Link
                            href={value.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
                        >
                            <Avatar
                                size="lg"
                                className="p-1"
                                style={{ backgroundColor: value.bgcolor }}
                            >
                                <AvatarImage
                                    src={`/projects/${key}.svg`}
                                    alt={t(`${key}_title`)}
                                />
                                <AvatarFallback>
                                    {t(`${key}_title`).charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                        <div className="space-y-1">
                            <p className="font-medium leading-none">
                                {t(`${key}_title`)}
                            </p>
                            <p className="text-sm text-sidebar-ring">
                                {t(`${key}_date`)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
