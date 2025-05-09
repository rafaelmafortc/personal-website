import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { TechCarousel } from '@/components/tech-carousel';

export default function Home() {
    const t = useTranslations('home');

    return (
        <main className="min-h-full p-6 max-w-2xl mx-auto mt-12 mb-12">
            <div className="fixed flex gap-2 top-4 right-4">
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
                        <h2 className="text-lg text-muted-foreground font-semibold">
                            {t('subtitle')}
                        </h2>
                    </div>
                </section>
                <section className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold">{t('about')}</h3>
                    <p className="text-base text-muted-foreground font-medium">
                        {t('about_text')}
                    </p>
                </section>
                <section className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold">{t('skills')}</h3>
                    <div className="w-full flex justify-center">
                        <TechCarousel />
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-semibold">
                        {t('experience')}
                    </h3>
                </section>
            </div>
        </main>
    );
}
