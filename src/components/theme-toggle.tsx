'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button onClick={handleTheme} size="icon" variant="outline">
            <div className="relative flex items-center justify-center">
                <Sun className="absolute w-5 h-5 scale-100 dark:scale-0" />
                <Moon className="absolute w-5 h-5 scale-0 dark:scale-100" />
            </div>
        </Button>
    );
}
