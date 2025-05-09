import Image from 'next/image';

import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
    return (
        <main className="min-h-full p-6 max-w-2xl mx-auto mt-8 mb-12">
            <div className="fixed top-4 right-4">
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
                            Fullstack Developer
                        </h2>
                    </div>
                </section>
                <section className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold">About</h3>
                    <p className="text-base text-muted-foreground font-medium">
                        Software developer with solid experience in frontend and
                        backend technologies, specializing in high-impact
                        projects within investment banks and startups.
                    </p>
                </section>
            </div>
        </main>
    );
}
