export const paragraphsData = [
  "The air that we breathe is very crucial to our health and safety as it can affect everyone around us inside and outside our learning space. As we learn here at Pan-Asia International School, being aware and conscious as to how healthy the air we breathe and managing effectively for a sustainable effort is our main priority.",

  "Poor air quality can significantly impact health, learning outcomes, and attendance, especially in areas like Prawet District, Bangkok where PAIS is located. It can lead to respiratory issues, eye irritation, fatigue, and long-term health problems for children. It also impacts cognitive functions, leading to reduced focus and learning efficacy. Increased respiratory illnesses and allergies during periods of poor AQI can result in higher student and teacher absenteeism.",

  "AQI level monitoring is more frequent during certain periods of the year based on season, especially that it weakens the immune system causing more problems with respiration . Peak pollution periods in Thailand are at its highest  during the months of November to March ( cool and dry season) due to temperature inversions trapping pollutants, and March to May (Pre-monsoon) having high levels of dust and heat which contribute to poor air quality.",

  "Air normally comprises nitrogen and oxygen as well as other gases. It is not detrimental to our health if it does not have a harmful level in it, as such we consider it clean air. To monitor the condition and how clean the air is, checking the air quality is necessary.",

  "When the presence and concentration of pollutants such as carbon monoxide, nitrogen oxide, lead, ground level ozone, particulate matter and sulfur dioxide in the atmosphere is high, it becomes hazardous to health. With the aid of air quality index  (AQI) which is a tool for measuring the level of pollutants of the air that we breathe and how it can affect our health, it becomes necessary as a guide in planning our activity outside and inside the classroom . ",
];

export interface AccordionData {
  title: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
  content?: string[];
  border?: string;
  bg?: string;
  keyPoints?: {
    value: string;
  }[];
  table?: {
    headers: string[];
    rows: {
      type: "paragraph" | "list";
      content: string | string[];
    }[][];
  };
}

export const data: AccordionData[] = [
  {
    title: "HOW PAIS ACQUIRE AQI READING",

    desc1:
      "Air quality in the school is monitored locally using new outdoor devices installed on the campus. Download the app “AirVisual” and access the school’s AQI reading by providing the school’s name and country. Daily and hourly updates who use the app will have a live update as to AQI level with health advisory.",
  },
  {
    title: "COMMUNICATING AQI PROTOCOL",
    desc1:
      "During the seasons where AQI is at its highest is when our safety and health officers and / or coordinators are more vigilant in monitoring the AQI at school.",
    desc2: "Action plan to communicate AQI across the school",
    desc3:
      "Promotion of AQI awareness in the school grounds through LINE app connecting to all sections of the school.Systematic AQI timely update when its reading or level is not good for the health by the safety and health officers as well as coordinator.",
  },
  {
    title: "AQI CATEGORIES AND ACTIONS FOR PAIS SCHOOLS",
    desc1: "---",
  },
  {
    title: "PAIS AIR QUALITY INDEX ACTION PLAN",
    table: {
      headers: ["ACTIVITES", "AQI 101-150 (ORANGE)", "AQI 151-200 (RED)"],
      rows: [
        [
          {
            type: "paragraph",
            content: "Snack Break / Recess",
          },
          {
            type: "paragraph",
            content:
              "Usual distribution area but those with respiratory concern should wear mask",
          },
          {
            type: "list",
            content: [
              "Nursery and Kindergarten should eat snacks inside the classroom",
              "Snack distribution area should be moved to the cafeteria for Primary. Get your snacks and go back to the classroom.",
            ],
          },
        ],
      ],
    },
  },
  {
    title: "ASTHMA ACTION PLAN WHEN AQI IS HIGH",

    keyPoints: [
      {
        value:
          "Identify the Symptoms such as difficulty breathing, wheezing, coughing, or fatigue.",
      },
      {
        value: "Avoid known triggers (e.g., dust, pollen).",
      },
      {
        value: "Stay indoors.",
      },
      {
        value: "Wearing of N95 Mask.",
      },
      {
        value: "Keep rescue inhalers accessible at all times.",
      },
    ],
  },
];
