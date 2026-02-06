import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ContactHeader } from '@/components/contact-header';

import { SkillsCarousel } from '@/components/skills-carousel';
import { ExperiencesCards } from '@/components/experiences-cards';
import { ProjectsCards } from '@/components/projects-cards';
import { EducationCards } from '@/components/education-cards';

export default function Home() {
    const t = useTranslations('home');

    function Section({
        title,
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) {
        return (
            <section className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{t(title)}</h3>
                <div className="w-full flex justify-center">{children}</div>
            </section>
        );
    }

    return (
        <main className="min-h-full p-6 max-w-2xl mx-auto mt-4 mb-8">
            <div className="fixed flex gap-2 bottom-4 right-4">
                <LanguageSwitcher />
                <ThemeToggle />
            </div>
            <div className="flex flex-col gap-8">
                <section className="flex gap-4 items-center">
                    <Image
                        className="rounded-full"
                        src={'/profile-photo.svg'}
                        alt="Profile photo"
                        width={96}
                        height={96}
                        style={{ height: 'auto' }}
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold">
                            Rafael Mafort Coimbra
                        </h1>
                        <ContactHeader />
                    </div>
                </section>
                <Section title={'skills'}>
                    <SkillsCarousel />
                </Section>
                <Section title={'experience'}>
                    <ExperiencesCards />
                </Section>
                <Section title={'projects'}>
                    <ProjectsCards />
                </Section>
                <Section title={'education'}>
                    <EducationCards />
                </Section>
            </div>
        </main>
    );
}
