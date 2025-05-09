import * as React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const technologies = {
    nextjs: 'NextJS',
    react: 'React',
    django: 'Django',
    python: 'Python',
    typescript: 'TypeScript',
    postgresql: 'PostgreSQL',
    awsservices: 'AWS Services',
};

export function TechCarousel() {
    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            orientation="horizontal"
            className="w-4/5 h-[110px]"
        >
            <CarouselContent className="mt-2">
                {Object.entries(technologies).map(([key, name]) => (
                    <CarouselItem key={key} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                            <Card className="h-[80px]">
                                <CardContent className="flex items-center justify-center h-full">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={`/technologies/${key}.svg`}
                                            alt={name}
                                            width={44}
                                            height={44}
                                            style={{
                                                height: 'auto',
                                                userSelect: 'none',
                                            }}
                                        />
                                        <span className="text-xl font-semibold">
                                            {name}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
