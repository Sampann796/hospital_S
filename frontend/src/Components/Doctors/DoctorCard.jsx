import { Link } from "react-router-dom";
import Star from "../../assets/images/Star.png";
import {BsArrowRight} from "react-icons/bs";

const DoctorCard = ({ doctor }) => (
  <article className="rounded-[10px] border border-solid border-[#E0E4E8] p-5">
    <img src={doctor.photo} alt={doctor.name} className="w-full rounded-[10px]" />
    <h3 className="mt-5 text-[22px] font-[700] text-headingColor">{doctor.name}</h3>
    <div className="mt-2 text-textColor lg:mt-4 flex items-center justify-between">
      <span  className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{doctor.specialty}</span>
      <div className = "flex items-center gap-[6px]">
        <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
          <img src={Star} alt="" />{doctor.avgRating}
        </span>
        <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
          ({doctor.totalRating})
        </span>
      </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold" text-headingColor>+{doctor.totalPatients} patients</h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">{doctor.hospital}</p>
        </div>
        <Link to='/doctors' className = "w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
        <BsArrowRight className ="group-hover:text-white w-6 h-5"/>
        </Link>
      </div>

    <p className="mt-2 text-textColor">{doctor.hospital}</p>
    <Link to={`/Doctors/${doctor.id}`} className="btn inline-block">
      View Profile
    </Link>
  </article>
);

export default DoctorCard;
