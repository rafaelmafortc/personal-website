import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface GlobalCardProps {
    icon: string;
    iconAlt: string;
    title: string;
    date: string;
    link?: string;
    bgcolor?: string;
}

export function GlobalCard({
    icon,
    iconAlt,
    title,
    date,
    link,
    bgcolor,
}: GlobalCardProps) {
    const avatarContent = (
        <Avatar
            size="lg"
            className={bgcolor ? 'rounded-lg p-1' : ''}
            style={bgcolor ? { backgroundColor: bgcolor } : undefined}
        >
            <AvatarImage src={icon} alt={iconAlt} />
            <AvatarFallback>{iconAlt.charAt(0)}</AvatarFallback>
        </Avatar>
    );

    const cardContent = (
        <div className="flex items-center gap-4">
            {link ? (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
                >
                    {avatarContent}
                </Link>
            ) : (
                avatarContent
            )}
            <div className="space-y-1">
                <p className="font-medium leading-none">{title}</p>
                <p className="text-sm text-sidebar-ring">{date}</p>
            </div>
        </div>
    );

    return <div className="flex flex-col gap-2 justify-start">{cardContent}</div>;
}
