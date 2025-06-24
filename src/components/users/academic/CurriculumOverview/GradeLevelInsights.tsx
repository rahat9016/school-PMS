import TitleTag from "@/components/shared/TitleTag";
import bg from "../../../../../public/academic/progressBg.png";
export default function GradeLevelInsights() {
  return (
    <div  className="bg-main-primary py-[64px]">
        <div style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="bg-no-repeat  w-full object-cover bg-center bg">
      <div className="container">
        <div>
          <TitleTag title="Progress" />
          <h1 className="font-poppins text-3xl lg:text-5xl font-semibold text-white mb-10 mt-8">
            Grade Comparison
          </h1>
        </div>
        <div className="overflow-x-auto block rounded-2xl overflow-hidden">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-xs text-main-primary uppercase bg-main-secondary ">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 border-[2px] border-main-primary font-poppins"
                >
                  Age of Child
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 border-[2px] border-main-primary font-poppins"
                >
                  USA Equivalent
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 border-[2px] border-main-primary"
                >
                  Thai Equivalent
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 border-[2px] border-main-primary font-poppins"
                >
                  UK Equivalent
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 border-[2px] border-main-primary font-poppins"
                >
                  IB
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "2+",
                  "Pre-Nursery (Pre-K)",
                  "Tream Anuban / เตรียมอนุบาล",
                  "Pre-Nursery",
                  "Nursery",
                ],
                [
                  "3+",
                  "Nursery (KG1)",
                  "Anuban 1 / อนุบาล 1",
                  "Nursery",
                  "EYP 1",
                ],
                [
                  "4+",
                  "Pre-Kindergarten (KG2)",
                  "Anuban 2 / อนุบาล 2",
                  "Reception",
                  "EYP 2",
                ],
                [
                  "5+",
                  "Kindergarten (KG3)",
                  "Anuban 3 / อนุบาล 3",
                  "Year 1",
                  "EYP 3",
                ],
                [
                  "6+",
                  "Grade 1",
                  "Prathom 1 / ประถม 1",
                  "Year 2",
                  "PYP Year 1",
                ],
                [
                  "7+",
                  "Grade 2",
                  "Prathom 2 / ประถม 2",
                  "Year 3",
                  "PYP Year 2",
                ],
                [
                  "8+",
                  "Grade 3",
                  "Prathom 3 / ประถม 3",
                  "Year 4",
                  "PYP Year 3",
                ],
                [
                  "9+",
                  "Grade 4",
                  "Prathom 4 / ประถม 4",
                  "Year 5",
                  "PYP Year 4",
                ],
                [
                  "10+",
                  "Grade 5",
                  "Prathom 5 / ประถม 5",
                  "Year 6",
                  "PYP Year 5",
                ],
                [
                  "11+",
                  "Grade 6",
                  "Prathom 6 / ประถม 6",
                  "Year 7",
                  "MYP Year 1",
                ],
                [
                  "12+",
                  "Grade 7",
                  "Prathom 7 / ประถม 7",
                  "Year 8",
                  "MYP Year 2",
                ],
                [
                  "13+",
                  "Grade 8",
                  "Prathom 8 / ประถม 8",
                  "Year 9",
                  "MYP Year 3",
                ],
                [
                  "14+",
                  "Grade 9",
                  "Prathom 9 / ประถม 9",
                  "Year 10",
                  "MYP Year 4",
                ],
                [
                  "15+",
                  "Grade 10",
                  "Prathom 10 / ประถม 10",
                  "Year 11",
                  "MYP Year 5",
                ],
                [
                  "16+",
                  "Grade 11",
                  "Prathom 11 / ประถม 11",
                  "Year 12",
                  "DP Grade 11",
                ],
                [
                  "17+",
                  "Grade 12",
                  "Prathom 12 / ประถม 12",
                  "Year 13",
                  "DP Grade 12",
                ],
              ].map((row, index) => (
                <tr key={index} className=" bg-pureWhite hover:bg-white">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className="px-6 py-3 border-[2px] border-main-primary font-poppins font-normal text-base"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
