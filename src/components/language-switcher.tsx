'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
    const router = useRouter();
    const locale = useLocale();

    const newLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    const flagSrc = locale === 'pt-BR' ? '/flags/br.svg' : '/flags/us.svg';

    function handleLocaleChange() {
        document.cookie = `language=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    }

    return (
        <Button onClick={handleLocaleChange} size="icon" variant="ghost">
            <div className="relative flex items-center justify-center">
                <Image
                    src={flagSrc}
                    alt="us / br flag"
                    width={20}
                    height={15}
                    style={{ height: 'auto' }}
                />
            </div>
        </Button>
    );
}
