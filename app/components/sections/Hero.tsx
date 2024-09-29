import {Button} from "@/components/ui/button";

export function Hero() {
    return (<section id="hero" className="py-20 bg-cover bg-center"
                     style={{backgroundImage: "url('/placeholder.svg?text=BJJ+Background')"}}>
        <div className="container mx-auto text-center px-4">
            <div className="bg-black bg-opacity-50 p-6 md:p-8 inline-block rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Welcome to Blue Legion</h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-white">Join our Brazilian JBB sport club and
                    experience the thrill of martial arts!</p>
                <Button size="lg">Try a Free Class</Button>
            </div>
        </div>
    </section>)
}