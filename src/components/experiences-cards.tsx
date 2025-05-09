import Image from 'next/image';
import { useTranslations } from 'next-intl';

const experiences = {
    btgpactual: 'BTG Pactual',
    vlepo: 'Vlepo',
};

export function ExperiencesCards() {
    const t = useTranslations('experiences');

    return (
        <div className="flex flex-col gap-6">
            {Object.entries(experiences).map(([key, name]) => (
                <div key={key} className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`/experiences/${key}.svg`}
                            alt={name}
                            width={48}
                            height={48}
                            style={{
                                height: 'auto',
                                userSelect: 'none',
                            }}
                        />
                        <div className="space-y-1">
                            <p className="font-medium leading-none">{name}</p>
                            <p className="text-sm text-muted-foreground">
                                {t(`${key}_date`)}
                            </p>
                        </div>
                    </div>
                    <p className="text-base">{t(`${key}_description`)}</p>
                </div>
            ))}
        </div>
    );
}
