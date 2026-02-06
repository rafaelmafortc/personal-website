'use client';

import { Mail, Phone as PhoneIcon, Linkedin } from 'lucide-react';
import Link from 'next/link';

const contacts = {
    email: {
        href: 'mailto:rafaelmafortc@gmail.com',
        icon: Mail,
        label: 'Email',
    },
    phone: {
        href: 'https://wa.me/11966552003',
        icon: PhoneIcon,
        label: 'Telefone',
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/rafael-mafort-c/',
        icon: Linkedin,
        label: 'LinkedIn',
    },
};

export function ContactHeader() {
    return (
        <div className="flex items-center gap-4 mt-2">
            {Object.entries(contacts).map(([key, contact]) => {
                const Icon = contact.icon;
                return (
                    <Link
                        key={key}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={contact.label}
                    >
                        <Icon className="w-5 h-5" />
                    </Link>
                );
            })}
        </div>
    );
}
