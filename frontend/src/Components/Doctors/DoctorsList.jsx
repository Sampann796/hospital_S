import DoctorCard from "./DoctorCard";
import { doctors } from "../../assets/data/Doctorr";

const DoctorsList = () => (
  <div className="grid grid-cols-1 gap-5 mt-[30px] sm:grid-cols-2 md:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
    {doctors.map((doctor) => (
      <DoctorCard key={doctor.id} doctor={doctor} />
    ))}
  </div>
);

 export default DoctorsList;
