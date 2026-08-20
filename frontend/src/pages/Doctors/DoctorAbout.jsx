import { FormatDate } from "../../utils/FormatDate";

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex-items-center 
                gap-2"> About of {" "}
                <span className="text-blue-400 font-bold text-[24px] leading-9">Sampann Arora</span>
                </h3>
                <p className="text__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi omnis, ea dolorem facilis dignissimos praesentium debitis magni suscipit at sunt laudantium inventore modi saepe rerum, sapiente tenetur! Cum, vitae maiores!</p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
                
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm;items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-blue-400 text-[15px] leading-6 font-semibold">
                                {FormatDate("8-26-2021")} - {FormatDate("8-26-2024")}</span>
                                <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                        </div>
                        <p className="text-[15px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm;items-end md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-blue-400 text-[15px] leading-6 font-semibold">
                                {FormatDate("8-26-2024")} - {FormatDate("8-26-2026")}</span>
                                <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
                    </li>
                </ul>
            </div>


            <div className="mt-12"></div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>

                <ul className="grid  sm:grid-cols-2 gap-[30px] pt-4x md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
                            {FormatDate("8-26-2024")} - {FormatDate("8-26-2026")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
                    </li>
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellow-400 text-[15px] leading-6 font-semibold">
                            {FormatDate("8-26-2024")} - {FormatDate("8-26-2026")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
                    </li>
                </ul>
        </div>
    )
}

export default DoctorAbout;