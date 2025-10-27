import HeroSection from "@/components/shared/HeroSection";
import StudentAchievementAwards from "./components/StudentAchievementAwards";
import herobg from "../../../../../public/newsEvents/UED.jpg";
import IMG1 from "../../../../../public/newsEvents/img1.png";
import IMG2 from "../../../../../public/newsEvents/img2.png";
const eventData = {
    title: "Student Achievement Awards Night 2025",
    host: "Pan Asia International School (PAIS) Parent Faculty Club (PFC)",
    date: "Friday, June 13, 2025",
    time: "6:00 PM – 9:00 PM",
    venue: "PAIS Auditorium, Prawet, Bangkok",
    overview: [
      "The Student Achievement Awards Night is one of the most anticipated annual events at Pan Asia International School, celebrating the outstanding accomplishments of our students across academics, leadership, sports, creativity, and community service.",
      "This special evening recognizes the hard work, dedication, and growth of students who exemplify the PAIS values of Integrity, Responsibility, and Excellence. It’s a night to honor their efforts, inspire their peers, and strengthen the bond between students, teachers, and families.",
    ],
    awardCategories: [
      "Academic Distinction Awards (Top Performers by Grade Level)",
      "Leadership & Citizenship Awards",
      "Sportsmanship & Team Spirit Awards",
      "Creative Arts & Innovation Awards",
      "Community Service & Volunteer Recognition",
      "Special Honors — Principal’s Award, PFC Outstanding Student Award",
    ],
    eveningHighlights: [
      "Opening speech by the Principal & PFC Chairperson",
      "Student Performances (music, dance, and drama)",
      "Awards Presentation Ceremony",
      "Photo Session & Refreshments",
      "Closing remarks and vote of thanks",
    ],
    designConcept: [
      "The auditorium will be transformed into an elegant evening venue, decorated with gold and navy blue elements symbolizing prestige, unity, and excellence. A stage backdrop featuring the event theme will serve as the focal point, complemented by soft lighting, floral arrangements, and a red-carpet photo zone for honorees and guests.",
      "Background music, student-hosted segments, and audiovisual highlights will make the evening lively and memorable, leaving every guest inspired and proud to be part of the PAIS community.",
    ],
    closingMessage:
      "The Student Achievement Awards Night is not just an event — it’s a celebration of effort, excellence, and unity. It reminds every student that success is not measured only by winning, but by learning, growing, and striving to make a positive difference. Together, we honor our students’ journey and look forward to the achievements that will continue to make the PAIS community proud.",
    images: [IMG1, IMG2],
  };
export default function UpcomingEventsDetails() {

  return (
    <div>
      <HeroSection
              img={herobg}
              title="Upcoming Events Details"
              className="bg-cover h-[280px]"
            />
      <StudentAchievementAwards data={eventData} />
    </div>
  )
}
