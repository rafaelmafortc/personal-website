import { useTranslations } from 'next-intl';
import { GlobalCard } from '@/components/global-card';

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
                <GlobalCard
                    key={key}
                    icon={`/projects/${key}.svg`}
                    iconAlt={t(`${key}_title`)}
                    title={t(`${key}_title`)}
                    date={t(`${key}_date`)}
                    link={value.link}
                    bgcolor={value.bgcolor}
                />
            ))}
        </div>
    );
}
