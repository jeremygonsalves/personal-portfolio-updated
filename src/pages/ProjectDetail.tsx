import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, TrendingUp, Clock, AlertTriangle, Zap, Brain, MessageSquare, BarChart3, Settings } from 'lucide-react';
import SpaceBackground from '../components/SpaceBackground';
import { projectsList } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsList[Number(id)];

  if (!project) {
    return (
      <div className="relative min-h-screen">
        <SpaceBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-white">Project not found</h1>
            <Link 
              to="/projects" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Special styling for the stock price predictor project
  const isStockPredictor = project.title.includes("Stock Price Predictor");
  const isNHLDraft = project.title.includes("NHL Draft");

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0">
        <SpaceBackground />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-12">
        <Link 
          to="/projects"
          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {isStockPredictor && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">LIVE PREDICTIONS</span>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                  <p className="text-blue-300 text-lg">Real-time AI-powered stock analysis with Slack integration</p>
                </div>
              </div>
            )}
            {isNHLDraft && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 text-sm font-medium">85% ACCURACY</span>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                  <p className="text-blue-300 text-lg">Advanced NLP-powered draft prediction with multi-model ensemble</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 md:p-8">
            {!isStockPredictor && !isNHLDraft && (
              <h1 className="text-3xl font-bold mb-4 text-white">{project.title}</h1>
            )}
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-blue-900/20 text-blue-400 border border-blue-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {!isStockPredictor && !isNHLDraft && (
              <p className="text-white mb-8 text-lg">{project.description}</p>
            )}
            
            {isStockPredictor && (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">LSTM Neural Networks</span>
                    </div>
                    <p className="text-white text-sm">Advanced deep learning for 4-hour price predictions</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-4 rounded-lg border border-green-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Slack Integration</span>
                    </div>
                    <p className="text-white text-sm">Real-time alerts and morning analysis reports</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-medium">20+ Technical Indicators</span>
                    </div>
                    <p className="text-white text-sm">RSI, MACD, Bollinger Bands, and more</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Settings className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-medium">Config-Driven</span>
                    </div>
                    <p className="text-white text-sm">All weights and metrics from config.json</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/30 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-white">Daily 12pm buy/sell recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-white">4-hour price predictions with LSTM</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        <span className="text-white">Robust error handling & fallback methods</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-purple-400" />
                        <span className="text-white">Reddit & news sentiment analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-orange-400" />
                        <span className="text-white">Morning stock analysis at 8:30 AM</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Settings className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Automatic currency detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isNHLDraft && (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Multi-Model Ensemble</span>
                    </div>
                    <p className="text-white text-sm">Logistic Regression, Random Forest, SVM, Neural Networks</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-4 rounded-lg border border-green-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Advanced NLP</span>
                    </div>
                    <p className="text-white text-sm">BERT and Word2Vec embeddings for scouting reports</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-medium">85% Accuracy</span>
                    </div>
                    <p className="text-white text-sm">High-performance ordinal classification</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Settings className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-medium">Production-Ready</span>
                    </div>
                    <p className="text-white text-sm">Modular, tested, and well-documented codebase</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-500/30 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-white">200+ prospects analyzed for 2023 draft</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-white">7 major scouting services integrated</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        <span className="text-white">Comprehensive EDA and visualization</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-purple-400" />
                        <span className="text-white">Ordinal classification handling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-orange-400" />
                        <span className="text-white">Automated data preprocessing pipelines</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Settings className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Robust feature engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {project.detailedDescription && (
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Technical Implementation</h3>
                {project.detailedDescription.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3 text-white bg-white/5 p-4 rounded-lg">
                    <span className="text-blue-500 mt-1.5 text-lg">•</span>
                    <p className="leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-900 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
              {isStockPredictor && (
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Active Development</span>
                </div>
              )}
              {isNHLDraft && (
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Research Project</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;