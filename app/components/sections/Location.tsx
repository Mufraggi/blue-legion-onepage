import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export function Location() {
    return (<section id="location" className="py-20 bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>Our Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>123 BJJ Street, Martial Arts City, MA 12345</p>
                        <p className="mt-2">Phone: (123) 456-7890</p>
                        <p>Email: info@bluelegion.com</p>
                    </CardContent>
                </Card>
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>Map</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <iframe
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{border: 0}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767190"
                            allowFullScreen
                        ></iframe>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>)
}