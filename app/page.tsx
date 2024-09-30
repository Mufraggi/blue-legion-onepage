import {Location} from "@/app/components/sections/Location";
import {Partner, PartnerBL} from "@/app/components/sections/Partner";
import {FAQ} from "@/app/components/sections/FAQ";
import {Hero} from "@/app/components/sections/Hero";
import {Gallery} from "@/app/components/sections/Gallery";
import {Schedule} from "@/app/components/sections/Schedule";
import {Shop} from "@/app/components/sections/Shop";
import {About} from "@/app/components/sections/About";
import {Contact} from "@/app/components/sections/Contact";


const weeklySchedule = [
    {
        day: 'Lundi', courses: ['7.30H-8.30H : BJJ',
            '12H-13H : MUAY THAI',
            '13H-14H: PRÉPARATION PHYSIQUE',
            '17H00-17H45 : BABY BJJ',
            '17H45-19H00 : BJJ KIDS',
            '19H-20H30 : BJJ',
            '20H30-21H30 : LUTTE']
    },
    {
        day: 'Mardi', courses: ['12H30-14H : GRAPPLING',
            '13H-14H : PRÉPARATION PHYSIQUE',
            '17H-18H : LUTTE KIDS',
            '17H-18H : PREPARATION PHYSIQUE',
            '18H-19H : GRAPPLING',
            '18H-19H : LUTTE',
            '19H-20H : BOXE AMATEUR',
            '20H-21H30 : MMA']
    },
    {
        day: 'Mercredi', courses: ['7.30H-8.30H : BJJ',
            '10H-11H : BOXE FEMMES',
            '11H-12H : BOXE KIDS',
            '16H-17H : MMA KIDS',
            '17H-18H : BABY BJJ X BJJ KIDS',
            '18H-19H : LUTTE KIDS',
            '19H-20H30 : BJJ',
            '20H30-21H30 : LUTTE',
        ]
    },
    {
        day: 'Jeudi', courses: ['12H30-14H : GRAPPLING',
            '17H-18H : LUTTE',
            '18H-19H00 : GRAPPLING SPECIFIQUE',
            'SPARRING',
            '18H-19H00 : PRÉPARATION PHYSIQUE',
            '19H-20H : MUAY THAI',
            '20H-21H30 : MMA']
    },
    {
        day: 'Vendredi', courses: ['7.30H-8.30H : BJJ',
            '18H-19H : BOXE AMATEUR',
            '19H-20H : BJJ SPECIFIQUE SPARRING',
            '20H-21H30 : MUAY']
    },
    {
        day: 'Samedi', courses: ['10H-11H : MMA KIDS',
            '10H-11H : BOXE KIDS',
            '11H-12H : BOXE FEMMES',
            '11H-12H : BJJ KIDS',
            '12H-13H : LUTTE KIDS',
            '13H-15H : OPEN MAT']
    },
    {day: 'Dimanche', courses: ['CLASSES PRIVÉES & ÉVÉNEMENTS']},
]

const faqItems = [
    {
        question: "What is Brazilian Jiu-Jitsu?",
        answer: "Brazilian Jiu-Jitsu (BJJ) is a martial art and combat sport that focuses on grappling and ground fighting. It emphasizes technique and leverage over strength and size, making it effective for self-defense and competition."
    },
    {
        question: "Do I need to be in good shape to start BJJ?",
        answer: "No, you don't need to be in great shape to start. BJJ is for everyone, regardless of fitness level. Regular practice will naturally improve your fitness and flexibility over time."
    },
    {
        question: "What should I wear to my first class?",
        answer: "For your first class, comfortable athletic wear like a t-shirt and shorts or sweatpants is fine. If you decide to continue, you'll need to purchase a gi (the traditional uniform)."
    },
    {
        question: "How often should I train?",
        answer: "As a beginner, 2-3 times a week is a good start. As you progress and your body adapts, you can increase the frequency if you wish."
    },
]

const partners: Partner[] = [
    {name: "Draig", logo: "/logos/draig.webp", url: "https://acmegear.com"},
    {name: "Bad Torros", logo: "/logos/torros.webp", url: "https://fitlife.com"},
    {name: "GrappleWear", logo: "/placeholder.svg?text=GrappleWear", url: "https://grapplewear.com"},
    {name: "MMA World", logo: "/placeholder.svg?text=MMA+World", url: "https://mmaworld.com"},
]

const shopItems = [
    {name: "Blue Legion Gi", price: 129.99, image: "/shops/BASEKIMSND-4-562x703.webp"},
    {name: "Rash Guard", price: 49.99, image: "/shops/ATHLITEV6BLUEFEM-1-1-285x356.webp"},
    {name: "Protein Powder", price: 39.99, image: "/shops/SENSHURASH2425-562x703.webp"},
    {name: "Iso Whey Zero", price: 24.99, image: "/shops/iso_whey_zero_cookie.webp"},
]


const images = ["/pictures/test_hero.webp", "/pictures/testcarrousell.webp"]

export default function BlueLegionPage() {
    return (
        <main className="flex-grow">
            <Hero/>
            <Gallery images={images}/>
            <Schedule weeklySchedule={weeklySchedule}></Schedule>
            <Shop shopItems={shopItems}/>
            <About/>
            <FAQ faqItems={faqItems}/>
            <PartnerBL partners={partners}/>
            <Location/>
            <Contact/>
        </main>
    )
}