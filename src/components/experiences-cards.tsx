import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
        <div className="flex flex-col gap-8 w-full">
            {Object.entries(experiences).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-2 justify-start">
                    <div className="flex items-center gap-4">
                        <Avatar size="lg">
                            <AvatarImage
                                src={`/experiences/${key}.svg`}
                                alt={value.title}
                            />
                            <AvatarFallback>
                                {value.title.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <p className="font-medium leading-none">
                                {value.title}
                            </p>
                            <p className="text-sm text-sidebar-ring">
                                {t(`${key}_date`)}
                            </p>
                        </div>
                    </div>
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
