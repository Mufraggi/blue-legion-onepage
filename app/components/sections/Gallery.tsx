import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

interface GalleryProps {
    images: string[]
}

export function Gallery({ images }: GalleryProps) {
    return (
        <section id="gallery" className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Club Gallery</h2>
                <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
                    <CarouselContent>
                        {images.map((imagePath, index) => (
                            <CarouselItem key={index}>
                                <Card className="border-none">
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={imagePath}
                                                alt={`Club Image ${index + 1}`}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
                                                className="rounded-lg object-cover"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
            </div>
        </section>
    )
}