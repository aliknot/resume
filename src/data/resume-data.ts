import { ResumeData } from '../interfaces/resumeData';

export const resumeData: ResumeData = {
    about: {
        firstname: "Mahdi",
        lastname: "Miri",
        jobTitle: "Data Scientist",
        description: ":)))))))))))))))",
        image: "/assets/images/about/IMG_2654 (1).jpg",
        socialLinks: [
            {
                icon: "location",
                value: "Naples - Italy "
            },
            {
                icon: "phone",
                value: "+39 3517867567",
                link: "tel: +39 3517867567"
            },
            {
                icon: "mail",
                value: "mahdimiri7@gmail.com",
                link: "mailto: mahdimiri7@gmail.com"
            },
            {
                icon: "linkedin",
                value: "mahdimi-miri-dev"
                // link: "https://www.linkedin.com/in/mahdimi-miri-dev/" // (Link was not present in your new data, you can add it)
            }
        ]
    },
    projects: {
        items: [
            {
                title: "IMDB Sentiment Analysis Pipeline",
                description: "A Python pipeline for cleaning and preprocessing movie reviews (removing HTML, normalization, and stemming) for sentiment analysis models.",
                role: "Data Preprocessing",
                link: "Git Link", // (Link was "Git Link" in your new data)
                bulletPoints: [
                    // (bulletPoints were not present in your new data)
                ],
                skills: [
                    {
                        title: "Core Technologies", // (Categorized based on the original template)
                        items: ["Pandas", "NLTK"] // (Converted hardSkills to the template structure)
                    }
                ]
            },
            {
                title: "Spam Text Detection Model",
                description: "Classifies SMS spam using TF-IDF and a Naive Bayes model. Evaluated with Accuracy and Recall metrics.",
                role: "Machine Learning",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["Pandas", "NLTK", "Scikit-learn", "Matplotlib"]
                    }
                ]
            },
            {
                title: "NN Hyperparameter Tuning",
                description: "Optimizes a Keras neural network by comparing GridSearchCV and RandomizedSearchCV methods to find the best hyperparameters.",
                role: "Model Optimization",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["Scikit-learn", "TensorFlow", "Keras", "Scikeras"]
                    }
                ]
            },
            {
                title: "Student Grade Prediction",
                description: "Implements a linear regression model to predict final student grades (G3) based on features like absences and previous grades.",
                role: "Machine Learning",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
                    }
                ]
            },
            {
                title: "MNIST Digit Recognition",
                description: "Builds and trains a deep neural network with TensorFlow/Keras to recognize handwritten digits from the MNIST dataset.",
                role: "Deep Learning",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["TensorFlow", "Keras", "NumPy", "Matplotlib"]
                    }
                ]
            },
            {
                title: "BoW & TF-IDF Vectorization",
                description: "Demonstrates text feature extraction techniques; converts cleaned sentences into numerical vectors using both BoW and TF-IDF.",
                role: "Feature Extraction",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["NLTK", "Scikit-learn"]
                    }
                ]
            },
            {
                title: "Byte Pair Encoding (BPE) Impl",
                description: "Implements a simplified version of the Byte Pair Encoding (BPE) tokenization algorithm from scratch in Python.",
                role: "Algorithm Implementation",
                link: "Git Link",
                bulletPoints: [],
                skills: [
                    {
                        title: "Core Technologies",
                        items: ["Python"]
                    }
                ]
            }
        ]
    },
    works: {
        items: [
            {
                title: "University of Naples Federico II",
                description: "", // (Your new data didn't have a separate description field)
                date: {
                    start: "2025",
                    finish: "2025"
                },
                location: "Naples - Italy",
                type: " ",
                jobTitle: "Internship in research on LLM",
                icon: "/assets/images/works/unina.jpg",
                link: "",
                bulletPoints: [
                    "Researched LLM vulnerabilities using adversarial prompting and jailbreak strategies to improve model robustness and Responsible AI." // (Used the description from new data as a bulletPoint)
                ],
                skills: [
                    {
                        title: "Technologies", // (Categorized based on the original template)
                        items: ["Python", "LLM"] // (Converted hardSkills to the template structure)
                    }
                ]
            },
            {
                title: "GoaLearn",
                description: "",
                date: {
                    start: "2021",
                    finish: "2022"
                },
                location: "Isfahan",
                type: " ",
                jobTitle: "Back-End DEVELOPER",
                icon: "/assets/images/works/goalearn.jpg",
                link: "",
                bulletPoints: [
                    "Engineered and optimized backend systems using PHP/Laravel and SQL, improving performance by 65% and stability by 20%."
                ],
                skills: [
                    {
                        title: "Technologies",
                        items: ["PHP", "Laravel", "SQL"]
                    }
                ]
            },
            {
                title: "BEHPARD AZ CHEHELSOTON",
                description: "",
                date: {
                    start: "2022",
                    finish: "" // (End date was empty in your new data)
                },
                location: "Isfahan",
                type: " ",
                jobTitle: "WEB DEVELOPER",
                icon: "/assets/images/works/behpardaz.jpg",
                link: "",
                bulletPoints: [
                    "Designed, managed, and enhanced corporate websites, focusing on cross-browser compatibility, usability, and security."
                ],
                skills: [
                    // (hardSkills was empty for this item in your new data)
                ]
            },
            {
                title: "Islamic Azad University Of Isfahan",
                description: "",
                date: {
                    start: "2021",
                    finish: "" // (End date was empty in your new data)
                },
                location: "Isfahan",
                type: " ",
                jobTitle: "TEACHER ASSISTANT",
                icon: "/assets/images/works/iau.jpg",
                link: "",
                bulletPoints: [
                    "Assisted in teaching Python programming, led hands-on coding workshops, and supported curriculum delivery."
                ],
                skills: [
                    {
                        title: "Technologies",
                        items: ["Python"]
                    }
                ]
            }
        ]
    },
    skills: [ // (Converted hardSkills and softSkills structure to the template's array structure)
        {
            title: "Hard Skills", // (From new data)
            items: [
                "Python",
                "R",
                "Machine-Learning",
                "Deep-Learning",
                "LLms",
                "Git",
                "Html",
                "CSS",
                "Statistical Analysis",
                "Text Mining",
                " Signal Processing" // (Leading space in " Signal Processing" preserved from original data)
            ]
        },
        {
            title: "Soft Skills", // (From new data)
            items: [
                "Communication skills",
                "Organizing skills",
                "Teamwork",
                "Accuracy",
                "Punctuality",
                "Creativity",
                "Adaptability",
                "Friendly Personality"
            ]
        }
    ],
    education: {
        items: [
            {
                name: "University of Naples Federico II",
                grade: "Master's Degree",
                science: "Data Science",
                icon: "", // (Icon was not present in your new data)
                date: {
                    start: "2023",
                    finish: "2026"
                },
                type: "Technical & Vocational" // (From new data)
            },
            {
                name: "Islamic Azad University of Isfahan",
                type: "Technical & Vocational", // (From new data)
                grade: "Bacholer's Degree", // (Spelling mistake "Bacholer's" preserved from original data)
                science: "Computer Engineering",
                icon: "", // (Icon was not present in your new data)
                date: {
                    start: "2019",
                    finish: "2022"
                }
            }
        ]
    }
};