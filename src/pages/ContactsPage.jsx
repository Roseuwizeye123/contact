import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactsPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list')
            .then((res) => {
                setContacts(res.data.contacts);
            })
            .catch((err) => {
                console.log(err);
                alert("Fetching contacts failed");
            });
    };

    return (
        <div className='flex flex-col items-center bg-slate-500 w-full h-100'>
            <button className='bg-green-800 text-white font-bold py-1 px-2 mt-4 mb-4'>
                <Link to="/sign">Add New</Link>
            </button>
            {contacts.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full'>
                    {contacts.map((contact, index) => (
                        <div key={index} className='border border-gray-300 rounded-lg p-4'>
                            <h2 className='text-xl font-bold'>{contact.fullName}</h2>
                            
                            <div className='flex justify-between'>
                            <Link to={`/details/${contact._id}`} className='bg-yellow-400 text-black font-bold flex  py-1 px-2 mt-2 rounded-lg'>
    View
</Link>

                                
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p> All Contact list</p>
            )}
        </div>
    );
};

export default ContactsPage;
