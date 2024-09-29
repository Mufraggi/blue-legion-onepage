import Link from "next/link";
import Image from "next/image";

export type Partner = {
    name: string;
    logo: string;
    url: string;

}

interface PartnerBLProps {
    partners: Partner[];
}


export function PartnerBL({partners}: PartnerBLProps) {
    return (<section id="partners" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {partners.map((partner, index) => (
                    <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center">
                        <Image src={partner.logo} alt={partner.name} width={150} height={75}
                               className="max-w-full h-auto"/>
                    </Link>
                ))}
            </div>
        </div>
    </section>)
}