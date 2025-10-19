
export default function DevelopmentPolicy() {
  return (
    <div className="bg-white py-20 lg:py-[104px]">
      <div className="container">
        <h1
          className={`text-black font-poppins mx-auto font-semibold text-2xl mt-4 lg:text-5xl text-center lg:w-[60%] `}
        >
          Child Protection and Student Development Policy
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[47.5px] my-5 lg:my-8 mx-auto"></span>
        {/* <Image src={Policy} alt="SaftyImg" className="mx-auto" /> */}
        <div className="w-full max-w-full overflow-x-auto">
          <iframe
            src="/Child_Protection_and_Student_Development_Policy_2025.pdf"
            className="w-full h-[80vh] min-h-[500px] rounded-lg shadow-md"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
