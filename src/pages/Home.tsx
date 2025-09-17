import SpaceBackground from '../components/SpaceBackground';
import DailyStoicQuote from '../components/DailyStoicQuote';
import { Mail, Github, Linkedin, FileText, Database, BarChart2, LineChart, Download, Award, Briefcase, GraduationCap } from 'lucide-react';

const Home = () => {
  const skills = [
    { icon: <Database className="w-8 h-8" />, name: "Data Science", description: "Expert in SQL & Python" },
    { icon: <BarChart2 className="w-8 h-8" />, name: "Business Intelligence", description: "Dashboard Design" },
    { icon: <LineChart className="w-8 h-8" />, name: "Machine Learning", description: "Predictive Analytics" }
  ];

  return (
    <div className="relative min-h-screen bg-transparent">
      <SpaceBackground />
      
      <div className="relative z-20">
        <div className="min-h-screen flex flex-col justify-center items-center px-4 text-white">
          <div className="max-w-4xl w-full text-center space-y-6 px-4">
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-900 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Jeremy Gonsalves"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Jeremy Gonsalves
              </h1>
              <h2 className="text-xl md:text-3xl text-blue-500">
                Data Science & Business Intelligence
              </h2>
            </div>
            
            <p className="text-lg md:text-2xl text-white">
              Bilingual Data Scientist | Python Expert | SQL Specialist
            </p>

            <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 mt-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-lg w-full md:w-64 transform hover:scale-105 transition-transform duration-300 border border-blue-900/30"
                >
                  <div className="flex justify-center mb-4 text-blue-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                  <p className="text-white">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <a 
                href="mailto:jeremygonsalves98@gmail.com" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Send Email
                </span>
              </a>
              <a 
                href="https://github.com/jeremygonsalves" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Github className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View GitHub
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jeremy-gonsalves/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View LinkedIn
                </span>
              </a>
              <a 
                href="https://docs.google.com/document/d/1fKOhy8o-gwWtrIlvbLbSiBycjc8ezfz9/edit?usp=sharing&ouid=106194094018121644660&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative text-white hover:text-blue-500 transition-colors"
              >
                <FileText className="w-6 h-6 md:w-8 md:h-8" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16 bg-transparent relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">My Journey</h2>
            
            {/* Timeline */}
            <div className="timeline-container">
              <ul className="timeline">
                {/* Technical Skills */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">Technical Skills</span>
                      <span className="time-wrapper"><span className="time">Core Expertise</span></span>
                    </div>
                    <div className="desc">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Python</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">TensorFlow</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">PyTorch</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">SQL</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Power BI</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Excel</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">TypeScript</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Three.js</span>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Professional Background */}
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Professional Background</span>
                      <span className="time-wrapper"><span className="time">Current Focus</span></span>
                    </div>
                    <div className="desc">
                      Bilingual Data Scientist with expertise in Python, SQL, and cloud-based deployments, specializing in statistical analysis, predictive modeling, and machine learning integration. Skilled in building and validating ML models with scikit-learn and PyTorch, applying advanced techniques to solve business problems and deliver actionable insights.
                    </div>
                  </div>
                </li>

                {/* Experience & Approach */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">Experience & Approach</span>
                      <span className="time-wrapper"><span className="time">Work Style</span></span>
                    </div>
                    <div className="desc">
                      Experienced in designing scalable ETL pipelines, automating data workflows, and integrating models with APIs and databases to support decision-making across teams. Adept at data visualization and dashboarding with tools like Power BI, ensuring stakeholders receive clear, reliable insights.
                    </div>
                  </div>
                </li>

                {/* Personal Philosophy */}
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Personal Philosophy</span>
                      <span className="time-wrapper"><span className="time">Who I Am</span></span>
                    </div>
                    <div className="desc">
                      As an outgoing individual, I thrive in client-facing environments, where I can apply my technical skills to solve complex problems while building strong relationships. I'm extremely passionate about contributing to innovative projects in industries like financial services, sports, technology, and e-commerce.
                    </div>
                  </div>
                </li>

                {/* Professional Skills */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">Professional Skills</span>
                      <span className="time-wrapper"><span className="time">Core Competencies</span></span>
                    </div>
                    <div className="desc">
                      Continuous Learner and Problem Solver, Teaching and Training Skills, Entrepreneurial Mindset, Analytical Thinker, Presentation Preparation, Data Visualization, Financial Modelling, Interpersonal Skills, and Leadership.
                    </div>
                  </div>
                  </li>

                {/* Personal Interests */}
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">Personal Interests</span>
                      <span className="time-wrapper"><span className="time">Beyond Work</span></span>
                    </div>
                    <div className="desc">
                      Triathlete focusing on Fitness and Wellness, Language Learner (Spanish, Dutch, Italian). Passionate about continuous growth both professionally and personally.
                    </div>
                  </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Resume Preview Section */}
        <div className="py-16 bg-transparent relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Resume Preview</h2>
            
            {/* Embedded Google Docs Resume */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl p-4 md:p-8 max-w-5xl mx-auto mb-8">
              <div className="aspect-[8.5/11] w-full">
                <iframe
                  src="https://docs.google.com/document/d/1fKOhy8o-gwWtrIlvbLbSiBycjc8ezfz9/edit?usp=sharing&ouid=106194094018121644660&rtpof=true&sd=true&embedded=true"
                  className="w-full h-full rounded-lg border-0"
                  title="Jeremy Gonsalves Resume"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Resume Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Contact Info Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> jeremygonsalves98@gmail.com</p>
                  <p><strong>Phone:</strong> 647-229-2249</p>
                  <p><strong>LinkedIn:</strong> linkedin.com/in/jeremy-gonsalves</p>
                  <p><strong>Website:</strong> jeremygonsalves.com</p>
                  <p><strong>Languages:</strong> Bilingual (French & English)</p>
                </div>
              </div>

              {/* Current Role Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                  Current Role
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Position:</strong> Business Intelligence Associate</p>
                  <p><strong>Company:</strong> TD Bank</p>
                  <p><strong>Location:</strong> Toronto, ON</p>
                  <p><strong>Duration:</strong> June 2025 - Present</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Reduced manual business reporting by 20% through scalable ETL pipelines and improved data delivery speed by 30%.
                  </p>
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Degree:</strong> Applied Mathematics Engineering</p>
                  <p><strong>University:</strong> Queen's University</p>
                  <p><strong>Location:</strong> Kingston, ON</p>
                  <p><strong>Duration:</strong> September 2019 - April 2024</p>
                  <p><strong>Honors:</strong> First Class Honours</p>
                </div>
              </div>

              {/* Key Skills Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-blue-600" />
                  Key Skills
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Programming:</strong> Python, SQL, MATLAB</p>
                  <p><strong>ML/AI:</strong> TensorFlow, PyTorch, Scikit-learn</p>
                  <p><strong>Data Tools:</strong> Power BI, Looker, Superset</p>
                  <p><strong>Cloud:</strong> AWS, PySpark, Airflow</p>
                  <p><strong>Web Dev:</strong> Flask, React, TypeScript</p>
                </div>
              </div>

              {/* Notable Projects Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Notable Projects
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold">Real-Time Stock Prediction System</p>
                    <p className="text-sm text-gray-600">42% accuracy with LSTM neural networks</p>
                  </div>
                  <div>
                    <p className="font-semibold">NHL Draft Prediction Model</p>
                    <p className="text-sm text-gray-600">82% accuracy in draft position prediction</p>
                  </div>
                  <div>
                    <p className="font-semibold">DataFlow Pro SaaS Platform</p>
                    <p className="text-sm text-gray-600">90% reduction in manual reporting time</p>
                  </div>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Key Achievements
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 1st place in TD's BI Practice Town Hall (Q3 2025)</p>
                  <p>• Founded Jeremy's Tutoring Academy ($20K+ profit)</p>
                  <p>• 95% accuracy in financial transaction categorization</p>
                  <p>• 30% reduction in ETL processing time at Credit Sesame</p>
                  <p>• Promoted from intern to full-time at OTPP</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-12">
              <a
                href="https://docs.google.com/document/d/1fKOhy8o-gwWtrIlvbLbSiBycjc8ezfz9/edit?usp=sharing&ouid=106194094018121644660&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                <Download className="w-5 h-5" />
                View Full Resume
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10">
        <DailyStoicQuote />
        </div>
      </div>
    </div>
  );
};

export default Home;