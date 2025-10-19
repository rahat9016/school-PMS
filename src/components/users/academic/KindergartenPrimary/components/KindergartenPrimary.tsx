import Image from "next/image";
import img1 from "../../../../../../public/academic/kindergarten1.jpg";
import img2 from "../../../../../../public/academic/kindergarten2.jpg";
import img3 from "../../../../../../public/academic/kindergarten3.jpg";
import img4 from "../../../../../../public/academic/kindergarten4.jpg";
export default function Kindergarten() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 0%, rgba(242,251,253,1) 38%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div className="container">
          <h1 className="text-main-primary font-semibold text-[30px] font-poppins pt-20">
            Kindergarten
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px]"></span>
          <p className="text-black-dark font-medium text-sm lg:text-lg font-poppins mt-4 lg:mt-8 mb-5 lg:mb-10">
            Pre-School and Kindergarten at PAIS, (Nursery, KG 1, KG2, and KG3)
            is a stimulating programme for young children from 2 – 5 years of
            age to help them develop and learn.
          </p>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <Image
                src={img1}
                width={632}
                height={461}
                alt="Kindergarten"
                className="w-auto h-auto lg:w-1/2 rounded-lg"
              />
              <Image
                src={img2}
                width={632}
                height={461}
                alt="Kindergarten"
                className="w-auto h-auto lg:w-1/2 rounded-lg"
              />
            </div>
            <p className="text-darkGray  text-sm lg:text-base font-light font-poppins mt-5 lg:mt-10">
              The programme has been designed to instill a positive attitude
              toward learning in a safe and relaxed, child-centered environment.
              Led by a team of experienced and dedicated Early Childhood
              specialists, the children ‘learn through doing’ to become active
              and confident participants in an immersive English environment.
              Through this carefully constructed learning environment the
              children are provided with an engaging and challenging range of
              learning experiences, designed for the development of social,
              cognitive, emotional, physical and creative skills. These are the
              key areas that reflect the development of the ‘whole child’,
              relating to all children, regardless of gender, background or
              culture.
            </p>
            <p className="text-darkGray  text-sm lg:text-base font-light font-poppins mt-5 lg:mt-10">
              Academically, language and literacy are placed at the center of
              our carefully devised Nursery and Kindergarten programme. This
              focus provides excellent opportunities for children to develop
              their language and literacy skills, often through song and
              movement. Each child will have multiple opportunities to
              communicate, collaborate, make choices, obtain and apply
              knowledge, and solve problems. The children also learn how to
              develop their mathematical and scientific ways of thinking,
              frequently involving physical activities; typically through trying
              things out and playing with ideas. Other subjects such as PE,
              Music and Thai also provide wider opportunities to learn and
              develop, and through inquiry-based exploration and play, the
              children develop important conceptual ideas about the world we
              live in.
            </p>
            <p className="text-darkGray  text-sm lg:text-base font-light font-poppins mt-5 lg:mt-10">
              As a whole each level of the programme provides a rich and
              productive educational experience for the children, for each stage
              of their development. As the children grow stronger, they become
              ready to take their place in the more formalized environment of
              the Grade 1 – 5 classrooms in the Primary section of the school.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(242,251,253,1) 19%, rgba(255,232,209,1) 51%, rgba(242,251,253,1) 89%)",
        }}
        className="py-10 lg:py-20"
      >
        <div className="container">
          <h1 className="text-main-primary font-semibold text-[30px] font-poppins lg:pt-20">
            Primary
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px]"></span>
          <p className="text-black-dark font-medium text-sm lg:text-lg font-poppins mt-4 lg:mt-8 mb-5 lg:mb-10">
            The Primary years at PAIS, Grades 1 – 5, offer a vibrant learning
            child-centered learning environment, designed to enhance children’s
            curiosity and creativity and deliver a high-quality, and engaging
            international education.
          </p>
          <div className="flex flex-col-reverse lg:flex-row items-start gap-4">
            <div className="w-full lg:w-8/12">
              <p className="text-darkGray  text-sm lg:text-base font-light font-poppins">
              During these vital years, we aim to meet the students’ learning needs through modern and innovative methods of teaching and learning. PAIS uses international curriculum standards to ensure that children are learning at an appropriate level throughout their time at our school. Each grade level is working towards specific educational objectives, as developed by international educational experts. The main core of our curriculum is based upon the standards for US Common Core State Standards for English and Mathematics, with an extra emphasis on reading, as that is the door that unlocks so much further academic success. In addition, students also learn Science, Thai, Physical Education (including swimming), Visual Arts, Music, Social Studies and World Languages (Chinese or Arabic). Each syllabus is carefully crafted, and reviewed annually, to expand opportunities for inquiry-based learning, personal growth and academic development, which connects students to the real world, and builds their conceptual understanding across all subject areas.
              </p>
              <p className="text-darkGray  text-sm lg:text-base font-light font-poppins mt-5 lg:mt-10">
              Rather than just delivering knowledge directly to children, we are committed to developing the students’ conceptual understanding. Conceptual understanding is important because it allows students to apply their skills and knowledge in new situations, to generate new ideas, and to find solutions to problems they’ve never encountered before. Students are guided to actively explore and discover for themselves to understand how things work, and why they are the way they are, rather than settling for superficial knowledge about names, dates and events.
              </p>
              <p className="text-darkGray  text-sm lg:text-base font-light font-poppins mt-5 lg:mt-10">
              The overall aim of the Primary years is to lay the foundations to support the students as they grow. This growth is defined in terms of being well-rounded, both academically and morally, and well-prepared for the challenges ahead in MYP (Middle Years Programme) and the IB DP (International Baccalaureate Diploma Program). This route is widely acclaimed to prepare students to succeed internationally at university level, in their careers, and in life.
              </p>
            </div>
            <div className="w-full lg:w-4/12 flex flex-col items-center gap-4">
              <Image
                src={img3}
                width={400}
                height={292}
                alt="Kindergarten"
                className="w-full h-full rounded-lg"
              />
              <Image
                src={img4}
                width={400}
                height={292}
                alt="Kindergarten"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
