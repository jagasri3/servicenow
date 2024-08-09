import React from 'react';
import './card1.css';

const cards = [
    { title: 'Vehicle Diagnostic Check', copy:"Ensure your vehicle's health with a comprehensive diagnostic check for potential issues." },
    { title: 'Suspension Services', copy: "Ensure a smooth and safe ride with our expert suspension services for all vehicle types." },
    { title: 'Car Spa', copy: "Revitalize your vehicle with our comprehensive car spa services for a showroom shine." },
    { title: 'Maintenace Enquiry', copy: "Enable customers to check the status and details of their vehicle's maintenance service quickly."}
];

const Card = ({ title, copy, button, imageId }) => (
    <div className="card" style={{color: 'white'}}>
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{copy}</p>
            
        </div>
        <div className="background" style={{ backgroundImage: `url(${imageId})` }}></div>
    </div>
);

const PageContent = () => {
    const imageIds = [
        'https://img.freepik.com/free-photo/mechanic-man-repairing-car_1150-6496.jpg?size=626&ext=jpg&ga=GA1.1.1859402004.1703085205&semt=ais_user',
        'https://img.freepik.com/free-photo/male-mechanic-working-car-auto-repair-shop_23-2150376994.jpg?size=626&ext=jpg&ga=GA1.1.1859402004.1703085205&semt=ais_user',
        'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212222.jpg?w=360&t=st=1722010791~exp=1722011391~hmac=8e487d684e7e7e1f8a60fa2127dd2615dac7c16db6138a3b1773f27ebeb8cb74',
        'https://img.freepik.com/free-photo/mid-section-mechanic-with-wrench-tool-pocket_107420-95945.jpg?ga=GA1.1.1859402004.1703085205&semt=ais_user'
    ];

    return (
        <main className="page-content">
            {cards.map((card, index) => (
                <Card key={index} {...card} imageId={imageIds[index]} />
            ))}
        </main>
    );
};

export default PageContent;
