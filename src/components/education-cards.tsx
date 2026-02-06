import { useTranslations } from 'next-intl';
import { GlobalCard } from '@/components/global-card';

const education = {
    fiap: {
        link: 'https://www.fiap.com.br',
    },
    babson: {
        link: 'https://www.babson.edu',
    },
};

export function EducationCards() {
    const t = useTranslations('education');

    return (
        <div className="flex flex-col gap-8 w-full">
            {Object.entries(education).map(([key, value]) => (
                <GlobalCard
                    key={key}
                    icon={`/education/${key}.svg`}
                    iconAlt={t(`${key}_institution`)}
                    title={t(`${key}_institution`)}
                    subtitle={t(`${key}_degree`)}
                    date={t(`${key}_date`)}
                    link={value.link}
                />
            ))}
        </div>
    );
}
