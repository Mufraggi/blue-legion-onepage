import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";

type Item = {
    image: string;
    name: string;
    price: number;
}

interface ShopItems {
    shopItems: Item[];
}

export function Shop({shopItems}: ShopItems) {
    return (<section id="shop" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Blue Legion Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {shopItems.map((item, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Image src={item.image} alt={item.name} width={300} height={300} className="rounded-lg"/>
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{item.name}</CardTitle>
                            <p className="text-2xl font-bold mt-2">${item.price.toFixed(2)}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Add to Cart</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </section>)
}