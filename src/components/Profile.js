// import React, {useEffect, useState} from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './profile.css';
// import profile_pic from './profile_pic.jpg';
import 'bootstrap/dist/css/bootstrap.css';

const Profile = () => {
    const IsMobile = useMediaQuery({ query: '(max-device-width: 480px)' });
    // const IsTablet = useMediaQuery({ query: '(min-device-width: 481px) and (max-device-width: 1024px)' });
    // const IsDesktop = useMediaQuery({ query: '(min-device-width: 1025px)' });
    
    // const [ profileData, setprofileData] = useState(null)

    // useEffect(() => {
    //     fetch('https://Api-url/profile')
    //     .then(response => response.json())
    //     .then(data => setprofileData(data))
    //     .catch(error => console.error('Error -> ', error));
    // }, []);


    // if (!profileData) {
    //     return (
    //         <div>
    //             <h3>Loading....</h3>
    //         </div>
    //     )
    // }

    const profileData = {
        name: 'S.Meena',
        gender: 'F',
        age: 23,
        picture:"data:image/jpeg;base64,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",
        phone: '123-456-7890',
        email: 'meenarabinsachin2@gmail.com',
        patientId: '87 20200727153457',
        affectedSide: 'Billateral',
        condition: 'Ortho',
        speciality: 'Osteoarthritis',
        medicalHistory: 'Hypertension, DM ,Hypothyrodism',
        goalReached: 40,
    };

    return (
        <section className = "Profile" style = {{ padding : IsMobile ? '10px' : '20px'}}>

            {/* Header Container */}
            <div className="d-flex align-items-center header">
                <div className='back-button'>
                    <img className="back-pic" src="https://i.pinimg.com/736x/63/d9/a0/63d9a0f0ca26a6a3da699c91132aa03d.jpg " alt="back_button.."/>
                </div>
                <div className='ml-auto view-patient-container'>
                    <h4 className='view-patient'>View patient</h4>
                </div>
            </div>
            <hr className='hr'/>

            {/* Basic Profile Information Container */}
            <div className="d-flex profile-top">
                <div className="p-4 basic-info">
                    <h4>{profileData.name}, {profileData.gender}/{profileData.age}</h4>
                    <p>Patient ID: {profileData.patientId}</p>
                </div>
                <div className="ms-auto p-2">
                    <img className="profile-pic" src={profileData.picture} alt="picture_loading..."/>
                </div>
            </div>
            <hr className='hr'/>

            {/* SemiCircle Percentage Meter */}
            <div className="goalReachead-progressbar">
                <div id="visual-meter">
                    <h3 style={{color :'#FFFFFF', margin:'0 0 0 35%'}}>Goal Reached</h3>
                    <div class="d-flex align-items-center justify-content-around">
                        <div role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{"--value": profileData.goalReached}}></div>
                        <div class="d-flex flex-column">
                            <img className="Rate p-1" src="https://emg-ncv.com/wp-content/uploads/2018/12/Rate.png" alt=""/>
                            <img className="Rate p-1" src="https://i.pinimg.com/originals/65/22/2c/65222c4ab7c465dc94b2e6fe2aef056f.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
             

            {/* Reamining Information About the patient */}
            <div className="d-flex align-content-center justify-content-center remaining-info">
                <div className="ml-auto justify-content-center p-4 table-cell">
                    <p>Phone No.</p>
                    <p>Mail ID</p>
                    <p>Affected Side</p>
                    <p>Condition</p>
                    <p>Speciality</p>
                </div>
                <div className="ml-auto justify-content-center p-4 table-cell">
                    <p>
                        <img className="typeIcon" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="phone.."/>  
                        {profileData.phone}</p>
                    <p><img className="typeIcon" src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg" alt=""/>  
                        {profileData.email}</p>
                    <p><img className="typeIcon" src="https://cdn-icons-png.flaticon.com/512/6381/6381702.png" alt=""/>  
                        {profileData.affectedSide}</p>
                    <p><img className="typeIcon" src="https://img.freepik.com/premium-vector/joint-bones-vector-logo-design-orthopedic-clinics_665655-7887.jpg?w=2000" alt="" />
                        {profileData.condition}</p>
                    <p><img className="typeIcon" src="https://static.thenounproject.com/png/587349-200.png" alt=""/> 
                        {profileData.speciality}</p>
                </div>
            </div>
            <hr className='hr'/>

            {/* Footer of the dashboard  */}
            <div className="d-flex aligh-item-center justify-content-center">
                <div className="d-flex ml-auto p-2 medical-history">
                    <img className="medical-icon" src="data:image/png;base64,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" alt=".."/>
                    <h6>Medical history</h6>
                </div>
                <div className="ml-auto p-2">
                    <h6>{profileData.medicalHistory}</h6>
                </div>
            </div>
            <hr className='hr' id="endLine"/>
        </section>
    )
}

export default Profile;