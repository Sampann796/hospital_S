
import React, { useState } from 'react';
import Loader from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import Tabs from '../doctorAccount/Tabs';
import { BASE_URL } from '../../config';
import starIcon from  '../../assets/images/star.png'
import DoctorAbout from "../../pages/Doctors/DoctorAbout"
import ProfileD from './ProfileD';

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && data && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />

            <div className="lg:col-span-2">
              {data.isApproved === 'pending' && (
                <div className="flex items-center p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM9 9a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V9Zm1-5a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 10 4Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="sr-only">Info</span>

                  <div className="ml-3 text-sm font-medium">
                    To get approval, please complete your profile.
                    We'll review it manually and approve it within 3 days.
                  </div>
                </div>
              )}

              {tab === 'overview' && (
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <figure className="max-w-[200px] max-h-[200px]">
                      <img
                        src={data?.photo}
                        alt="Doctor"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </figure>

                    <div>
                      <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-xs leading-4 lg:text-base lg:leading-6 font-semibold">
                         Surgeon
                      </span>
                      <h3 className='text-[22px] leading-9 font-bld text-headingColor mt-3 '>Sam Batra</h3>
                      <div className='flex items-center gap-[6px]'>
                        <span className='flex items-center gap-[6px] text-headingColor text-[14px]
                        leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                          <img src={starIcon} alt="" />
                          4.5
                          </span>
                          <span className='text-textColor text-[14px]
                        leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                          (233)
                          </span>
                      </div>
                      <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>doctor bio</p>
                    </div>
                  </div>
                  <DoctorAbout 
                  name = {data.name} 
                  about={data.about} 
                  qualifications={data.qualifications}
                  experiences = {data.experiences}/>
                </div>
              )}

              {tab === 'appointments' && (
                <div>Appointments</div>
              )}

              {tab === 'settings' && (
                <ProfileD/>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
