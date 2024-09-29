import {Button} from "@/components/ui/button";

export function Contact() {
    return (<section id="contact" className="bg-blue-600 text-white py-16 md:py-20">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get in Touch</h2>
            <p className="mb-4">Ready to join Blue Legion or have questions? Contact us today!</p>
            <Button variant="outline" size="lg">Contact Us</Button>
        </div>
    </section>)
}