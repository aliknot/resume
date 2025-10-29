import { ResumeData } from '../interfaces/resumeData';

export const resumeData: ResumeData = {
	about: {
		firstname: "Alireza",
		lastname: "Fazel",
		jobTitle: "Data Scientist & Software Engineer",
		description: "I'm a Data Science student passionate about Machine Learning and Deep Learning, supported by over three years of foundational Software Engineering experience. My expertise lies in analyzing complex data and developing diverse machine learning models—including predictive, classification, and deep learning solutions—optimizing neural networks using Python, TensorFlow, and PyTorch. I focus on building high-performing models and extracting meaningful insights from challenging datasets.",
		image: "/assets/images/about/about.jpg",
		socialLinks: [
			{
				icon: "location",
				value: "Italy, Naples"
			},
			{
				icon: "phone",
				value: "+39 3347089250",
				link: "tel: +39 3347089250"
			},
			{
				icon: "mail",
				value: "alirezafazel379@gmail.com",
				link: "mailto: alirezafazel379@gmail.com"
			},
			{
				icon: "linkedin",
				value: "alireza-fazel-863204199",
				link: "https://www.linkedin.com/in/alireza-fazel-863204199/"
			},
			{
				icon: "github",
				value: "GitHub: aliknot",
				link: "https://github.com/aliknot"
			}
		]
	},
	projects: {
		items: [
			{
				title: "Facial Expression Recognition",
				description: "A deep learning project to recognize facial expressions using CNNs and advanced computer vision techniques.",
				role: "Data Scientist",
				link: "https://github.com/aliknot/AffectNet_Facial_Expression_Recognition.git",
				bulletPoints: [
					"Benchmarked ResNet18 and ResNet50 architectures for 8-class emotion classification (Anger, Contempt, Disgust, Fear, Happy, Neutral, Sad, Surprise)",
					"Developed computer vision pipeline using AffectNet dataset with 96x96 pixel face-cropped images",
					"Built binary and multi-class classification models for comparative performance analysis",
					"Applied data augmentation and oversampling techniques with 70/20/10 train/validation/test splits",
					"Implemented T-SNE visualization for high-dimensional feature space analysis",
					"Conducted data quality analysis including color bias, brightness/contrast, and sharpness metrics",
					"Created end-to-end Jupyter Notebook pipeline for Data Mining coursework"
				],
				skills: [
					{
						title: "Core Technologies",
						items: ["Python", "TensorFlow", "Keras", "Jupyter Notebooks"]
					},
					{
						title: "Techniques",
						items: ["Deep Learning", "Computer Vision", "CNNs", "ResNet18", "ResNet50", "Data Augmentation", "T-SNE", "Data Mining"]
					}
				]
			},
			{
				title: "Classification of Open-Ended Metrics for LLM Tasks",
				description: "Comprehensive study classifying evaluation metrics for Large Language Models and open-ended NLP tasks.",
				role: "Research Analyst",
				bulletPoints: [
					"Conducted comprehensive classification study of 100+ evaluation metrics for open-ended NLP and LLM tasks",
					"Categorized metrics across multiple dimensions: automatic vs. human evaluation, reference-based vs. reference-free approaches",
					"Analyzed evaluation complexity and computational requirements for different metric categories",
					"Investigated trade-offs between evaluation accuracy, computational efficiency, and human annotation requirements",
					"Created detailed comparative analysis of metric reliability and applicability for various NLP scenarios"
				],
				skills: [
					{
						title: "Research & Analysis",
						items: ["NLP", "Large Language Models", "LLM Evaluation", "Metric Classification", "Research Methodology", "Evaluation Frameworks", "Data Analysis"]
					}
				]
			},
			{
				title: "Stroke Prediction using Machine Learning",
				description: "End-to-end ML pipeline for predicting stroke risk based on health and demographic factors, developed for Statistical Learning course.",
				role: "Data Scientist",
				link: "https://github.com/aliknot/stroke-prediction",
				bulletPoints: [
					"Developed end-to-end ML pipeline for stroke risk prediction from health and demographic data",
					"Implemented robust preprocessing pipeline with missing value handling, outlier detection, and feature scaling",
					"Built and compared multiple classification models (Logistic Regression, Random Forest, XGBoost, SVM)",
					"Applied SMOTE and resampling techniques to handle class imbalance",
					"Performed hyperparameter tuning and cross-validation for model optimization",
					"Analyzed feature importance to identify key stroke predictors"
				],
				skills: [
					{
						title: "Core Technologies",
						items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebooks"]
					},
					{
						title: "Techniques",
						items: ["Machine Learning", "Statistical Learning", "Classification", "Data Preprocessing", "Feature Engineering", "EDA", "SMOTE", "Cross-Validation", "Hyperparameter Tuning", "Model Evaluation"]
					}
				]
			}
		]
	},
	works: {
		items: [
			{
				title: "Apple Developer Academy @Unina Federico II",
				description: "ML-powered iOS Application Development",
				date: {
					start: "Sep 2024",
					finish: "Jun 2025"
				},
				location: "Naples",
				type: "Italy",
				jobTitle: "iOS Developer",
				icon: "/assets/images/works/apple-academy.png",
				bulletPoints: [
					"Developed iOS applications integrating on-device machine learning using Core ML and Create ML",
					"Built SwiftUI interfaces following Apple's Human Interface Guidelines",
					"Implemented data persistence solutions using SwiftData",
					"Applied product thinking principles to deliver user-centric solutions",
					"Distributed beta versions through TestFlight for user testing and feedback"
				],
				skills: [
					{
						title: "iOS Development",
						items: ["Swift", "SwiftUI", "Core ML", "Create ML", "SwiftData", "TestFlight"]
					},
					{
						title: "Practices",
						items: ["Product Thinking", "On-Device ML", "Beta Testing"]
					}
				]
			},
			{
				title: "Malltina",
				description: "E-Commerce Web Application",
				date: {
					start: "Jul 2021",
					finish: "Present"
				},
				location: "Karaj",
				type: "Remote",
				jobTitle: "Front-End Developer",
				icon: "/assets/images/works/malltina.jpg",
				link: "https://malltina.com",
				bulletPoints: [
					"Implemented purchasing portal from Asian countries including Turkey, UAE, and China",
					"Rewrote a new version of the most viewed web pages using Next.js based on micro-frontend architecture",
					"Mentored 2 junior front-end developers who wanted to get a deep understanding of React.js and Next.js",
					"Maintained graphic standards and branding throughout the product's interfaces using base components",
					"Improved code base quality and performance optimization",
					"Rewrote a complete new version of the search page, along with performance optimizations"
				],
				skills: [
					{
						title: "Technologies",
						items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Sass"]
					},
					{
						title: "Practices",
						items: ["Micro-frontend Architecture", "Performance Optimization", "Mentoring", "Code Quality"]
					}
				]
			},
			{
				title: "Aramicmedtour",
				description: "Health Tour Web Application",
				date: {
					start: "Mar 2020",
					finish: "Jul 2021"
				},
				location: "Isfahan",
				type: "Remote",
				jobTitle: "Front-End Developer",
				icon: "/assets/images/works/aramicmedtour.png",
				link: "https://aramicmedtour.com",
				bulletPoints: [
					"Implemented and designed the main pages (e.g. doctor, hospital, and hotel pages)",
					"Revised the usage of Next.js by utilizing SSR and SSG.",
                    "Added internationalization support to the web application (based on i18n)",
                    "Instructed and guided two interns by providing them with tutorials and assigning basic tasks and responsibilities to them",
                    "Improved code base quality and performance optimization",
					"Created admin dashboard for managing medical packages and bookings"
				],
				skills: [
					{
						title: "Technologies",
						items: ["Next.js", "React.js", "JavaScript", "HTML5", "CSS", "Git"]
					},
					{
						title: "Practices",
						items: ["Responsive Web Design", "Scrum", "Code Quality", "Internationalization (i18n)", "SSR", "SSG"]
					}
				]
			}
		]
	},
	skills: [
		{
			title: "Data Science & Machine Learning",
			items: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "Data Visualization", "Jupyter Notebooks", "Statistical Learning", "Statistical Analysis", "Neural Networks", "CNNs", "Classification", "Model Optimization", "Feature Engineering", "Data Preprocessing", "Data Mining", "Large Language Models", "EDA", "SMOTE", "Cross-Validation", "Hyperparameter Tuning", "Model Evaluation"]
		},
		{
			title: "Software Development",
			items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "HTML", "CSS", "Sass", "Tailwind CSS", "Git", "GitHub", "RESTful APIs", "Redux", "Zustand", "React Query", "SWR", "Styled Components", "Emotion", "Responsive Web Design", "Micro-frontend Architecture", "Performance Optimization", "PHP", "MySQL", "jQuery", "Web Development", "Front-End Development", "Swift", "SwiftUI", "Core ML", "Create ML", "SwiftData", "TestFlight", "iOS Development", "Mobile Development"]
		},
		{
			title: "Methodologies & Tools",
			items: ["Agile", "Scrum", "Jira", "Product Thinking", "Code Quality", "Mentoring"]
		},
		{
			title: "Soft Skills",
			items: ["Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Mentoring", "Leadership", "Adaptability", "Time Management", "Attention to Detail", "Creativity", "Organization", "Research"]
		}
	],
	education: {
		items: [
			{
				name: "University of Naples Federico II",
				grade: "Master's Degree",
				science: "Data Science",
				icon: "/assets/images/education/federico-ii.jpeg",
				date: {
					start: "2023",
					finish: "2026"
				}
			},
			{
				name: "Shamsipour Tehran",
				type: "Technical & Vocational",
				grade: "Bachelor's Degree",
				science: "Software Engineering",
				icon: "/assets/images/education/shamsipour.png",
				date: {
					start: "2020",
					finish: "2022"
				}
			},
			{
				name: "Mohajer Isfahan",
				type: "Technical & Vocational",
				grade: "Associate's Degree",
				science: "Computer Engineering",
				icon: "/assets/images/education/mohajer.jpg",
				date: {
					start: "2018",
					finish: "2020"
				}
			}
		]
	}
};
