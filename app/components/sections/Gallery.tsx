import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

export function Gallery() {
    return (<section id="gallery" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Club Gallery</h2>
            <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image src={`/placeholder.svg?text=Image ${index}`} alt={`Club Image ${index}`}
                                           width={300} height={300} className="rounded-lg"/>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    </section>)
}