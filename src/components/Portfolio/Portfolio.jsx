import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar'
import './Portfolio.css';
import TextModel from './TextModel';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Evan Chou | Portfolio";
    });

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);

    const openModel = (content) => {
        setSelectedContent(content);
        setIsModelOpen(true);
    };

    const closeModel = () => {
        setSelectedContent(null);
        setIsModelOpen(false);
    };

    const contentData = [
        {
            title: "Hand Gestures Recognition System",
            description: "Performed image preprocessing on the dataset of distinct hand gestures. Used an ImageDataGenerator to execute data augmentation, including rotating, scaling, flipping, etc. Implemented a Convolutional Neural Network with Conv2D, MaxPooling2D, Dense, Flatten, and Dropout layers to extract features. Model achieved a 83% accuracy for the model, which I am still fine tuning for better classification.",
            subtitle: "Tags: Computer Vision, Deep Learning, Convolutional Neural Networks",
            link: "https://github.com/EvanJayChou/Hand-Gestures-Recognition-System"
        },
        {
            title: "SARS-CoV2 Protein Structure Analysis",
            description: "Preprocessed a large dataset of SARS-CoV-2 spike glycoproteins, and transformed the data into NumPy vectors highlighting horizontal, vertical, and perpendicular displacement of atoms in each molecule of protein. Performed feature engineering with the residue names, heteroatoms, and B-factors provided by the dataset to choose the feature that has the most correlation with their respective atomic displacements. Implemented a machine learning model using a Support Vector Machine (SVC) in three-dimensional space to classify protein structures into heteroatoms using their atomic displacements of molecules. Model achieved a 65.2% accuracy, which I am still fine-tuning for more precision and accuracy.",
            subtitle: "Tags: Bioinformatics, Machine Learning, Data Science",
            link: "https://github.com/EvanJayChou/Protein_Analysis"
        },
        {
            title: "Spotify Statistics Website (Ongoing)",
            description: "To be filled",
            subtitle: "Tags: Full-Stack Web Development, Machine Learning, Data Science",
            link: "https://github.com/EvanJayChou/Spotify_Statistics_Website"
        },
    ];

    return (
        <body id='portfolioBody'>
            <header id='portfolio'>Portfolio</header>
            <div className={`app ${isModelOpen ? 'blurred' : ''}`}>
                <div className='projects'>
                    {contentData.map((content, index) => (
                        <h1 key={index} className='project' onClick={() => openModel(content)}>
                            {content.title}
                        </h1>
                    ))}
                </div>

                {isModelOpen && <TextModel content={selectedContent} onClose={closeModel} />}
            </div>
        </body>
    );
}

export default Portfolio;