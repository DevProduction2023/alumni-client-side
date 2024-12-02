import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchSingleuser } from '../../hooks/useFetch';
import { formatDate } from '../../hooks/UseInfo';
import { useNavigate } from 'react-router-dom';

function DisplayUserProfile() {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState('');
    const [ImgError, setImgError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetch = async () => {
            let response = await FetchSingleuser(id);
            setUserInfo(response.data)
        }
        if (userInfo == '') {
            fetch();
        }
    })

    const handleBackButton = () => {
        navigate("/admin/users")
    }

    return (
        <div className='w-full  lg:py-5 min-h-[65vh]' >
            <button onClick={handleBackButton} className='text-md bg-gray-400 rounded-md border text-white px-3 py-1 font-semibold hover:bg-white hover:border     hover:border-gray-400 hover:text-gray-500'>Back</button>
            <div className='w-[95%] lg:w-[80%] mx-auto bg-white my-2 rounded-md shadow-md shadow-black/10'>
                <ul className='w-full lg:flex mx-auto'>

                    <li className='lg:w-1/4  mx-auto bg-blue-400 flex justify-center items-center rounded-md'>
                        {
                            userInfo && userInfo.avatar && !ImgError ?
                                <img className='w-full h-full mx-auto my-auto rounded-md  object-cover' src={userInfo.avatar} alt='' onError={() => setImgError(true)} />
                                :
                                <div className=' w-full flex mx-auto '>
                                    {userInfo && userInfo.full_name ? <span className='px-10 mx-auto border-4 rounded-full justify-center text-center text-[5rem] capitalize' > {userInfo.full_name.charAt(0)} </span> : "#"}
                                </div>
                        }
                    </li>
                    <ul className=' w-3/4 pb-2'>
                        <li className=' mx-auto lg:px-10 py-2'>{
                            userInfo && userInfo ? <ul className='flex flex-wrap space-x-5  text-gray-600 text-[1.2rem] text-semibold space-y-3'>
                                <li className=' inline-block w-full text-gray-400 font-bold text-md border-b-2 rounded-md py-1  px-5'>Personal Info</li>
                                <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Role:  </span> <span className='align-middle'>{userInfo.role}</span></li>
                                <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> username:  </span> <span className='align-middle'> {userInfo.username} </span>  </li>
                                <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Full Name:  </span> <span className='align-middle'> {userInfo.full_name} </span> </li>
                                <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Email:  </span> <span className='align-middle'> {userInfo.email} </span> </li>
                                <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Mobile No.:  </span> <span className='align-middle'> {userInfo.mobile_number} </span> </li>
                            </ul> : ''
                        }
                        </li>
                        <hr className='w-full h-5 size-5 text-gray-500 mx-auto' />
                        <li className=' mx-auto lg:px-10 py-2'>
                            {
                                userInfo && userInfo.graduation_details ? <ul className='flex flex-wrap space-x-5  text-gray-600 text-[1.2rem] text-semibold space-y-3'>
                                    <li className=' inline-block w-full text-gray-400 font-bold text-md border-b-2 rounded-md py-1  px-5'>College Info</li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Degree:  </span> <span className='align-middle'>{userInfo.graduation_details.degree}</span></li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Specialization:  </span> <span className='align-middle'> {userInfo.graduation_details.specialization} </span> </li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Start year:  </span> <span className='align-middle'> {userInfo.graduation_details.start_year} </span> </li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> End year:  </span> <span className='align-middle'> {userInfo.graduation_details.end_year} </span> </li>
                                </ul> : ''
                            }
                        </li>
                        <hr className='w-full h-5 size-5 text-gray-500 mx-auto' />
                        <li className=' mx-auto lg:px-10 py-2'>
                            {
                                userInfo && userInfo.company_details ? <ul className='flex flex-wrap space-x-5  text-gray-600 text-[1.2rem] text-semibold space-y-3'>
                                    <li className=' inline-block w-full text-gray-400 font-bold text-md border-b-2 rounded-md py-1  px-5'>Company Info</li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Company:   </span><span className='align-middle'>{userInfo.company_details.company_name}</span></li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Designation:   </span> <span className='align-middle'> {userInfo.company_details.designation} </span> </li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> Joining Date:   </span> <span className='align-middle'> {formatDate(userInfo.company_details.start_date)} </span> </li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> End year:   </span> <span className='align-middle'> {formatDate(userInfo.company_details.end_date)} </span> </li>
                                    <li> <span className='font-semibold inline mx-auto text-gray-700 align-middle'> CurrentlyWorking </span><span>  {userInfo.company_details.currently_working}</span></li>
                                </ul> : ''
                            }
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default DisplayUserProfile