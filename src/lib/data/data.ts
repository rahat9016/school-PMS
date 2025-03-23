import img1 from "../../../public/newsEvents/latest/latestNews1.png"
import img2 from "../../../public/newsEvents/latest/latestNews2.png"
import img3 from "../../../public/newsEvents/latest/latestNews3.png"
import img4 from "../../../public/newsEvents/latest/latestNews4.png"

const filterData = {
  categories: [
    { id: 1, name: "COVID19 Blogs" },
    { id: 2, name: "MYP" },
    { id: 3, name: "Secondary" },
    { id: 4, name: "Alumni" },
    { id: 5, name: "School Life" },
    { id: 6, name: "Kindergarten" },
    { id: 7, name: "Primary" },
    { id: 8, name: "High School" },
    { id: 9, name: "General" },
    { id: 10, name: "PAIS OLA" }
  ],
  tags: [
    { id: 1, name: "school" },
    { id: 2, name: "parents" },
    { id: 3, name: "primary" },
    { id: 4, name: "summer" },
    { id: 5, name: "bangkok" },
    { id: 6, name: "teachers" },
    { id: 7, name: "ib program" },
    { id: 8, name: "high school" },
    { id: 9, name: "Kindergarten" },
    { id: 10, name: "international day" },
    { id: 11, name: "pan asia international school" }
  ],
  posts: [
    {
      id: 101,
      title: "PAIS Victorious In World Scholar’s Cup",
      date: "April 3, 2024",
      content: "Pan-Asia International School made its presence felt in the recently concluded World Scholar’s Cup Bangkok Round at Denla British School last March 30-31. PAIS hauled 80 medals, 35 Golds and 45 Silvers, with all 5 teams advancing to the Global Round later this year. This year’s Bangkok Round saw the biggest turnout yet with more 1000 students coming from more than 20 schools, including teams from the Philippines and Vietnam.",
      content2: "The Junior team of Ghazala Naji, Yumeng Chen and Hafsat Yusuf finished as the 10th Best Debate Team overall. Ghazala also earned PAIS’ top Debater in Junior, her second in a row and the top 7 Junior debater overall. PAIS’ lone senior team composed of Phattaranun Haiyioumart, Laurene Pinto and Muna Sentiyanont finished as the 17th Best Senior Team overall. They also finished 8th place overall  in the Scholar’s Bowl Challenge. Phattaranun also earned the top debater in senior for Pan-Asia. ",
      content3: "The Junior team of Swati Sharma, Abdelkarim Benmoussa and Xiong Yidanni went undefeated in 3 rounds and finished 22nd best overall to qualify. The team of Hana Uchiyama Khantasit, Freija Lucila Medrano Loreto and Deema Poompatch, and the Team of Zaara KHan, Ananda Vibbonerawud and Teerapat Watwilai completed the list of PAIS qualifiers. ",
      category_ids: [1, 3],
      tag_ids: [1, 2, 3],
      image: img1
    },
    {
      id: 102,
      title: "Excelling in Mathematics: PAIS Students Shine",
      date: "March 15, 2024",
      content: "Pan-Asia International School made its presence felt in the recently concluded World Scholar’s Cup Bangkok Round at Denla British School last March 30-31. PAIS hauled 80 medals, 35 Golds and 45 Silvers, with all 5 teams advancing to the Global Round later this year. This year’s Bangkok Round saw the biggest turnout yet with more 1000 students coming from more than 20 schools, including teams from the Philippines and Vietnam.",
      content2: "The Junior team of Ghazala Naji, Yumeng Chen and Hafsat Yusuf finished as the 10th Best Debate Team overall. Ghazala also earned PAIS’ top Debater in Junior, her second in a row and the top 7 Junior debater overall. PAIS’ lone senior team composed of Phattaranun Haiyioumart, Laurene Pinto and Muna Sentiyanont finished as the 17th Best Senior Team overall. They also finished 8th place overall  in the Scholar’s Bowl Challenge. Phattaranun also earned the top debater in senior for Pan-Asia. ",
      content3: "The Junior team of Swati Sharma, Abdelkarim Benmoussa and Xiong Yidanni went undefeated in 3 rounds and finished 22nd best overall to qualify. The team of Hana Uchiyama Khantasit, Freija Lucila Medrano Loreto and Deema Poompatch, and the Team of Zaara KHan, Ananda Vibbonerawud and Teerapat Watwilai completed the list of PAIS qualifiers. ",
      category_ids: [2, 4], 
      tag_ids: [2, 3],
      image: img2
    },
    {
      id: 103,
      title: "PAIS Sports Day: A Fun-Filled Event",
      date: "February 20, 2024",
      content: "Pan-Asia International School made its presence felt in the recently concluded World Scholar’s Cup Bangkok Round at Denla British School last March 30-31. PAIS hauled 80 medals, 35 Golds and 45 Silvers, with all 5 teams advancing to the Global Round later this year. This year’s Bangkok Round saw the biggest turnout yet with more 1000 students coming from more than 20 schools, including teams from the Philippines and Vietnam.",
      content2: "The Junior team of Ghazala Naji, Yumeng Chen and Hafsat Yusuf finished as the 10th Best Debate Team overall. Ghazala also earned PAIS’ top Debater in Junior, her second in a row and the top 7 Junior debater overall. PAIS’ lone senior team composed of Phattaranun Haiyioumart, Laurene Pinto and Muna Sentiyanont finished as the 17th Best Senior Team overall. They also finished 8th place overall  in the Scholar’s Bowl Challenge. Phattaranun also earned the top debater in senior for Pan-Asia. ",
      content3: "The Junior team of Swati Sharma, Abdelkarim Benmoussa and Xiong Yidanni went undefeated in 3 rounds and finished 22nd best overall to qualify. The team of Hana Uchiyama Khantasit, Freija Lucila Medrano Loreto and Deema Poompatch, and the Team of Zaara KHan, Ananda Vibbonerawud and Teerapat Watwilai completed the list of PAIS qualifiers. ",
      category_ids: [3, 5],
      tag_ids: [4, 5, 6],
      image: img3
    },
    {
      id: 104,
      title: "PAIS Sports Day: A Fun-Filled Event",
      date: "February 20, 2024",
      content: "Pan-Asia International School made its presence felt in the recently concluded World Scholar’s Cup Bangkok Round at Denla British School last March 30-31. PAIS hauled 80 medals, 35 Golds and 45 Silvers, with all 5 teams advancing to the Global Round later this year. This year’s Bangkok Round saw the biggest turnout yet with more 1000 students coming from more than 20 schools, including teams from the Philippines and Vietnam.",
      content2: "The Junior team of Ghazala Naji, Yumeng Chen and Hafsat Yusuf finished as the 10th Best Debate Team overall. Ghazala also earned PAIS’ top Debater in Junior, her second in a row and the top 7 Junior debater overall. PAIS’ lone senior team composed of Phattaranun Haiyioumart, Laurene Pinto and Muna Sentiyanont finished as the 17th Best Senior Team overall. They also finished 8th place overall  in the Scholar’s Bowl Challenge. Phattaranun also earned the top debater in senior for Pan-Asia. ",
      content3: "The Junior team of Swati Sharma, Abdelkarim Benmoussa and Xiong Yidanni went undefeated in 3 rounds and finished 22nd best overall to qualify. The team of Hana Uchiyama Khantasit, Freija Lucila Medrano Loreto and Deema Poompatch, and the Team of Zaara KHan, Ananda Vibbonerawud and Teerapat Watwilai completed the list of PAIS qualifiers. ",
      category_ids: [3, 5],
      tag_ids: [4, 5, 6],
      image: img4
    }
  ],
  recent_posts: [
    "PAIS Victorious In World Scholar’s Cup",
    "Excelling in Mathematics: PAIS Students Shine",
    "PAIS Hosts Science Fair 2024",
    "PAIS Sports Day: A Fun-Filled Event",
    "Student Leadership Conference 2024"
  ]
};

export default filterData;
