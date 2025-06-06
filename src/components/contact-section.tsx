import { Mail, Phone as PhoneIcon, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const contacts = {
    email: {
        value: 'rafaelmafortc@gmail.com',
        icon: Mail,
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rafaelmafortc@gmail.com',
    },
    phone: {
        value: '+55 (11) 96655-2003',
        icon: PhoneIcon,
        href: 'https://wa.me/11966552003',
    },
    linkedin: {
        value: 'linkedin.com/in/rafael-mafort-c/',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/rafael-mafort-c/',
    },
};

export function ContactSection() {
    const t = useTranslations('contact');

    return (
        <div className="flex flex-col gap-4 w-full">
            {Object.entries(contacts).map(([key, contact]) => {
                const Icon = contact.icon;
                return (
                    <div key={key} className="flex items-center gap-4">
                        <Icon className="w-6 h-6" />
                        <div className="flex flex-col">
                            <p className="font-medium leading-none">{t(key)}</p>
                            <a
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:underline"
                            >
                                {contact.value}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
