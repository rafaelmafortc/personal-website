import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const experiences = {
    btgpactual: {
        link: 'https://www.btgpactual.com',
        technologies: ['Django', 'React', 'AWS Services', 'PostgreSQL'],
    },
    vlepo: {
        link: 'https://www.linkedin.com/company/vlepo-tech/',
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
                        <a
                            href={value.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
                        >
                            <Avatar size="lg">
                                <AvatarImage
                                    src={`/experiences/${key}.svg`}
                                    alt={t(`${key}_company`)}
                                />
                                <AvatarFallback>
                                    {t(`${key}_company`).charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        </a>
                        <div className="space-y-1">
                            <p className="font-medium leading-none">
                                {t(`${key}_cargo`)} @ {t(`${key}_company`)}
                            </p>
                            <p className="text-sm text-sidebar-ring">
                                {t(`${key}_date`)}
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex gap-2">
                        {value.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div> */}
                </div>
            ))}
        </div>
    );
}
