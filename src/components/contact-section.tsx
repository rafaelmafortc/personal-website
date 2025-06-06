import { useTranslations } from 'next-intl';

const contacts = {};

export function ContactSection() {
    const t = useTranslations('contact');

    return <div className="flex flex-col gap-8"></div>;
}
