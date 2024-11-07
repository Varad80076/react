import React, { useEffect, useState } from 'react';
import Resume from '/new volume D/react/miniProject/src/componenets/resume.pdf';
import Loader from './Loader';

function Doc() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadDocument = async () => {
            try {
                // Simulate loading or any async operation here
                await new Promise(resolve => setTimeout(resolve, 3000)); // Example delay
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load document", error);
            }
        };
        loadDocument();
    }, []);

    return (
        <div className='h-{600px} w-{1150px} ' >
            {isLoaded ? (
                <embed src={Resume} height="600px" width="1150px" />
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default Doc;
