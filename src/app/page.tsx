import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
    return (
        <main className="min-h-full p-6 max-w-2xl mx-auto mt-8 mb-12">
            <div className="fixed top-4 right-4">
                <ThemeToggle />
            </div>
            <section className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold">Rafael Mafort Coimbra</h1>
                <h2 className="text-lg text-muted-foreground font-medium">
                    Fullstack Developer
                </h2>
            </section>
        </main>
    );
}
