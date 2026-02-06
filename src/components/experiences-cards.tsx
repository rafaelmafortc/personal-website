import { useTranslations } from 'next-intl';
import { GlobalCard } from '@/components/global-card';

const experiences = {
    btgpactual: {
        link: 'https://www.btgpactual.com',
    },
    vlepo: {
        link: 'https://www.linkedin.com/company/vlepo-tech/',
    },
};

export function ExperiencesCards() {
    const t = useTranslations('experiences');

    return (
        <div className="flex flex-col gap-8 w-full">
            {Object.entries(experiences).map(([key, value]) => (
                <GlobalCard
                    key={key}
                    icon={`/experiences/${key}.svg`}
                    iconAlt={t(`${key}_company`)}
                    title={`${t(`${key}_cargo`)} @ ${t(`${key}_company`)}`}
                    date={t(`${key}_date`)}
                    link={value.link}
                />
            ))}
        </div>
    );
}
