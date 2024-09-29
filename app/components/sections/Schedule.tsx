
type DaySchedule = {
    day: string;
    courses: string[]

}



interface Schedules {
    weeklySchedule: DaySchedule[]
}

export function Schedule({ weeklySchedule }: Schedules) {
    return (<section id="schedule" className="bg-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Weekly Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {weeklySchedule.map((day, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-lg mb-2">{day.day}</h3>
                        <ul className="space-y-2">
                            {day.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="text-sm">{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>)
}