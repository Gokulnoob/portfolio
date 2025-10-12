import type { ProjectSummary } from "../components/types";

export const projectSummaries: ProjectSummary[] = [
  {
    title: "MyAnimeTracker",
    summary:
      "A modern anime tracking application with trending discovery, seasonal exploration, and offline support.",
    challenge:
      "Anime enthusiasts needed a modern, offline-capable app for tracking their favorite shows and managing watchlists.",
    outcome:
      "Achieved high user engagement through trending discovery and progress tracking; demonstrated expertise in mobile-first design and state management.",
    stack: ["Flutter", "Dart", "Riverpod", "Hive", "Material 3", "Jikan API"],
    link: {
      label: "GitHub",
      href: "https://github.com/Gokulnoob/myanimetracker",
    },
    caseStudy: {
      intro:
        "Built a comprehensive anime tracking app to help users manage their viewing habits with modern mobile technologies.",
      problem:
        "Existing apps lacked offline support and clean architecture for reliable data management.",
      process: [
        "Implemented clean architecture with Riverpod for state management.",
        "Integrated Jikan API for real-time anime data.",
        "Added Hive for local storage and offline functionality.",
      ],
      results: [
        "Delivered a fully functional app with multiple watchlists and progress tracking.",
        "Enhanced user experience with Material 3 design and smooth animations.",
      ],
      takeaways: [
        "Clean architecture improves maintainability in mobile apps.",
        "Offline support is crucial for user retention in entertainment apps.",
      ],
    },
  },
  {
    title: "RAG Assistant with Gemini",
    summary:
      "A sophisticated question-answering assistant using RAG technology with Google Gemini for accurate responses.",
    challenge:
      "Users required an intelligent Q&A system for document-based queries with accurate, sourced responses.",
    outcome:
      "Delivered a sophisticated assistant with source attribution; enhanced AI/ML skills and learned vector search optimization.",
    stack: [
      "Python",
      "Google Gemini",
      "FAISS",
      "Streamlit",
      "LangChain",
      "Vector DB",
    ],
    metrics: ["Source attribution accuracy: High"],
    link: {
      label: "GitHub",
      href: "https://github.com/Gokulnoob/aai-rag-assistant-gemini",
    },
    caseStudy: {
      intro:
        "Developed an AI-powered assistant to answer questions from documents using retrieval-augmented generation.",
      problem:
        "Traditional chatbots lacked context from specific documents and accurate sourcing.",
      process: [
        "Set up document loading and vector embeddings with FAISS.",
        "Integrated Google Gemini for response generation.",
        "Built Streamlit interface for user interaction.",
      ],
      results: [
        "Created a functional RAG system with intelligent chunking and source attribution.",
        "Improved response accuracy through vector search and AI integration.",
      ],
      takeaways: [
        "RAG systems significantly enhance AI response quality.",
        "Vector databases are essential for efficient document retrieval.",
      ],
    },
  },
  {
    title: "StudyPro - Career Guidance App",
    summary:
      "Comprehensive Flutter application for students with event management, AI career guidance, and personalized recommendations.",
    challenge:
      "Students lacked a comprehensive platform for event management, career advice, and personalized recommendations.",
    outcome:
      "Provided mood tracking and job analysis features; improved user experience through personalized AI interactions.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "AI Chatbot", "Lottie"],
    link: {
      label: "GitHub",
      href: "https://github.com/Gokulnoob/StudyPro",
    },
    caseStudy: {
      intro:
        "Built an all-in-one app for students to manage events and get career guidance.",
      problem:
        "Students needed integrated tools for event tracking, mood monitoring, and AI-driven advice.",
      process: [
        "Developed user authentication and profile management with Firebase.",
        "Integrated AI chatbot for personalized career recommendations.",
        "Added event tracking and notification systems.",
      ],
      results: [
        "Launched a feature-rich app with job application analysis and mood tracking.",
        "Enhanced student engagement with Lottie animations and clean UI.",
      ],
      takeaways: [
        "AI integration in mobile apps can provide valuable personalized experiences.",
        "Firebase simplifies backend development for Flutter apps.",
      ],
    },
  },
  {
    title: "Employee Salary Prediction ML",
    summary:
      "Complete ML pipeline for salary prediction using multiple algorithms with hyperparameter tuning.",
    challenge:
      "Organizations needed accurate salary prediction models for employee compensation planning.",
    outcome:
      "Achieved R² score of 0.85-0.90; demonstrated proficiency in ML pipelines and model comparison.",
    stack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Matplotlib",
      "Jupyter",
    ],
    metrics: ["R² score: 0.85-0.90"],
    link: {
      label: "GitHub",
      href: "https://github.com/Gokulnoob/Employee-Salary-Prediction-using-ML",
    },
    caseStudy: {
      intro:
        "Created a machine learning model to predict employee salaries based on various features.",
      problem: "Manual salary estimation was inaccurate and time-consuming.",
      process: [
        "Performed data preprocessing and feature engineering.",
        "Compared algorithms like Random Forest, XGBoost, and LightGBM.",
        "Tuned hyperparameters for optimal performance.",
      ],
      results: [
        "Delivered an interactive prediction interface with high accuracy.",
        "Provided visualizations for model insights.",
      ],
      takeaways: [
        "Hyperparameter tuning is crucial for ML model performance.",
        "Ensemble methods like XGBoost often outperform single models.",
      ],
    },
  },
  {
    title: "Student Event Management App",
    summary:
      "Student-focused event management application with user authentication and Firebase integration.",
    challenge:
      "Students needed a dedicated platform for tracking events and managing profiles.",
    outcome:
      "Built a functional app with event tracking and notifications; gained experience in Firebase and Flutter integration.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "HTTP", "Lottie"],
    link: {
      label: "GitHub",
      href: "https://github.com/Gokulnoob/Student-APP",
    },
    caseStudy: {
      intro:
        "Developed an app for students to manage events and profiles with real-time updates.",
      problem:
        "Existing solutions lacked seamless integration and user-friendly interfaces.",
      process: [
        "Implemented user authentication with Firebase.",
        "Set up Firestore for data storage and real-time sync.",
        "Added Lottie animations for enhanced UI.",
      ],
      results: [
        "Created a responsive app with event notifications and profile management.",
        "Improved user experience with clean design and smooth interactions.",
      ],
      takeaways: [
        "Real-time databases like Firestore enable dynamic app features.",
        "Animations can significantly boost user engagement.",
      ],
    },
  },
];
