export interface Project {
  title: string;
  description: string;
  detailedDescription?: string[];
  tags: string[];
  image: string;
  github: string;
  pdf?: string;
}

export const projectsList: Project[] = [
  {
    title: "Real-Time Stock Price Predictor with Slack Integration",
    description: "Sophisticated real-time stock prediction system providing buy/sell recommendations at 12pm daily, featuring LSTM neural networks, sentiment analysis, and automated Slack alerts",
    detailedDescription: [
      "Built a comprehensive real-time stock prediction system that provides buy/sell recommendations at 12pm daily based on 4-hour price predictions using config-driven ensemble methods with LSTM neural networks.",
      "Implemented advanced sentiment analysis integrating Reddit and news sources with 20+ technical indicators including RSI, MACD, Bollinger Bands, and volume analysis for enhanced prediction accuracy.",
      "Developed automated Slack integration for real-time alerts and morning stock analysis reports, featuring config-driven architecture where all weights and metrics are inherited from config.json for easy tuning.",
      "Created robust error handling with multiple fallback methods for reliable price data, automatic currency detection, and comprehensive logging system with alert history tracking.",
      "Built morning stock analysis feature that runs at 8:30 AM weekdays, analyzing news from multiple sources to identify top stocks to watch with sentiment scoring and engagement metrics."
    ],
    tags: ["Python", "Machine Learning", "Deep Learning", "Neural Networks", "Data Engineering"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    github: "https://github.com/jeremygonsalves/price-predictor-stocks",
    pdf: "/Stock_Predictor.pdf"
  },
  {
    title: "NHL Draft Prediction Model",
    description: "Comprehensive machine learning system predicting NHL draft positions using historical prospect data, scouting reports, and advanced NLP techniques with 85% accuracy",
    detailedDescription: [
      "Developed a sophisticated multi-model machine learning system combining Logistic Regression, Random Forest, SVM, and Neural Networks to predict NHL draft outcomes using historical prospect data and scouting reports from 7 major scouting services.",
      "Implemented advanced NLP techniques including BERT and Word2Vec embeddings to analyze scouting reports, achieving 85% accuracy in predicting draft positions for 200+ prospects in the 2023 NHL draft year.",
      "Built a production-ready, modular codebase with comprehensive EDA, ordinal classification handling, and extensive testing, featuring automated data preprocessing pipelines and robust feature engineering.",
      "Created an end-to-end solution that processes raw scouting data, generates text embeddings, combines physical attributes with NLP features, and provides interpretable model predictions with detailed performance metrics.",
      "Established a scalable architecture with configurable model parameters, comprehensive documentation, and automated testing suites, enabling easy model comparison and deployment for future draft predictions."
    ],
    tags: ["Python", "Machine Learning", "NLP", "Deep Learning", "Data Engineering"],
    image: "https://i0.wp.com/www.recruitscouting.com/wp-content/uploads/2021/07/mockdraft1.jpg?w=960&ssl=1",
    github: "https://github.com/jeremygonsalves/PredictingDraftNHL"
  },
  {
    title: "Financial Transaction Tracker",
    description: "Advanced ML-powered transaction categorization system utilizing multiple deep learning frameworks for 95% accuracy in financial data analysis",
    detailedDescription: [
      "Reduced categorization time by 80% by developing a transaction categorization system using Python and machine learning (Random Forest and SVM), achieving 95% accuracy on over 3,000 transactions and improving financial tracking efficiency.",
      "Built an interactive dashboard in Excel to visualize categorized spending across multiple categories, enabling data-driven insights into personal financial management, reducing unnecessary costs and saving 20% of personal budget."
    ],
    tags: ["Python", "Machine Learning", "Data Engineering", "SQL"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/jeremygonsalves/Financing"
  },
  {
    title: "Neural Network Image Classifier",
    description: "Convolutional Neural Network (CNN) implementation achieving 87% accuracy in image classification tasks using Python and deep learning",
    detailedDescription: [
      "Utilized PyTorch to build and train a Convolutional Neural Network (CNN) for image classification, achieving a training accuracy of 87% and a testing accuracy of 66% on 2,000+ images, incorporating advanced techniques like data augmentation, transformation, and batching.",
      "Implemented efficient data pipelines for preprocessing large datasets of images, ensuring consistency and enhancing model performance through libraries such as NumPy and PIL."
    ],
    tags: ["Python", "Deep Learning", "Neural Networks"],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/jeremygonsalves/Image_classification"
  },
  {
    title: "Healthcare Analytics Dashboard",
    description: "Research project analyzing cognitive decline factors using Python and PySpark, funded by the Spark Grant through the Center for Aging and Brain Health Innovation",
    detailedDescription: [
      "Led the data analysis on a research project funded by the Spark Grant through the Center for Aging and Brain Health Innovation, powered by Baycrest, identifying key factors influencing cognitive decline in adults.",
      "Developed sophisticated Python scripts to manipulate, preprocess, and analyze large datasets, leveraging PySpark to efficiently process and handle large-scale data, significantly speeding up the analysis.",
      "Reduced patient testing time by 90% by applying statistical methods to uncover significant patterns and relationships, including Chi-squared tests, correlation heat maps, and T-tests."
    ],
    tags: ["Python", "Data Engineering", "Statistical Analysis", "Research"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/jeremygonsalves/Dementia_Research"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, TypeScript, and Three.js, featuring interactive 3D graphics and responsive design",
    tags: ["React", "TypeScript", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/jeremygonsalves/personal-portfolio-updated"
  }
];