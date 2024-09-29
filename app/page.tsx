import Image from 'next/image'
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
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
    {day: 'Monday', courses: ['Beginners BJJ 6-7 PM', 'Advanced BJJ 7-8:30 PM']},
    {day: 'Tuesday', courses: ['No-Gi BJJ 6-7:30 PM', 'Open Mat 7:30-9 PM']},
    {day: 'Wednesday', courses: ['Kids BJJ 5-6 PM', 'All Levels BJJ 6:30-8 PM']},
    {day: 'Thursday', courses: ['Fundamentals BJJ 6-7 PM', 'Competition Training 7-8:30 PM']},
    {day: 'Friday', courses: ['No-Gi BJJ 6-7:30 PM', 'Advanced BJJ 7:30-9 PM']},
    {day: 'Saturday', courses: ['All Levels BJJ 10-11:30 AM', 'Open Mat 11:30 AM-1 PM']},
    {day: 'Sunday', courses: ['Beginners Workshop 10-11:30 AM']},
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
    {name: "Acme Gear", logo: "/placeholder.svg?text=Acme+Gear", url: "https://acmegear.com"},
    {name: "FitLife Supplements", logo: "/placeholder.svg?text=FitLife", url: "https://fitlife.com"},
    {name: "GrappleWear", logo: "/placeholder.svg?text=GrappleWear", url: "https://grapplewear.com"},
    {name: "MMA World", logo: "/placeholder.svg?text=MMA+World", url: "https://mmaworld.com"},
]

const shopItems = [
    {name: "Blue Legion Gi", price: 129.99, image: "/placeholder.svg?text=Blue+Legion+Gi"},
    {name: "Rash Guard", price: 49.99, image: "/placeholder.svg?text=Rash+Guard"},
    {name: "Protein Powder", price: 39.99, image: "/placeholder.svg?text=Protein+Powder"},
    {name: "BJJ Belt", price: 24.99, image: "/placeholder.svg?text=BJJ+Belt"},
]

export default function BlueLegionPage() {
    return (
        <main className="flex-grow">
            <Hero/>
            <Gallery/>
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