import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

const experiences = {
    btgpactual: {
        title: 'BTG Pactual',
        technologies: ['Django', 'React', 'AWS Services', 'PostgreSQL'],
    },
    vlepo: {
        title: 'Vlepo',
        technologies: ['NextJS', 'TypeScript'],
    },
};

export function ExperiencesCards() {
    const t = useTranslations('experiences');

    return (
        <div className="flex flex-col gap-8">
            {Object.entries(experiences).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`/experiences/${key}.svg`}
                            alt={value.title}
                            width={48}
                            height={48}
                            style={{
                                height: 'auto',
                                userSelect: 'none',
                            }}
                        />
                        <div className="space-y-1">
                            <p className="font-medium leading-none">
                                {value.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {t(`${key}_date`)}
                            </p>
                        </div>
                    </div>
                    <p className="text-base">{t(`${key}_description`)}</p>
                    <div className="flex gap-2">
                        {value.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
