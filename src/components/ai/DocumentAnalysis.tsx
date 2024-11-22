import React, { useState } from 'react';
import { FileText, Brain, AlertCircle } from 'lucide-react';

interface AnalysisResult {
  summary: string;
  keyPoints: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
  recommendations: string[];
}

export default function DocumentAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const mockAnalysis: AnalysisResult = {
    summary: "Employment contract with potential enforceability issues in the non-compete clause. The severance package terms appear to be below industry standards.",
    keyPoints: [
      "Non-compete clause duration exceeds state limitations",
      "Severance calculation lacks clarity",
      "Intellectual property rights section needs revision"
    ],
    riskLevel: "High",
    recommendations: [
      "Revise non-compete clause to 12 months maximum",
      "Define severance calculation method explicitly",
      "Add specific IP assignment provisions"
    ]
  };

  const analyzeDocument = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">AI Document Analysis</h2>
        <button
          onClick={analyzeDocument}
          disabled={isAnalyzing}
          className="btn-primary"
        >
          <Brain className="h-5 w-5 mr-2" />
          {isAnalyzing ? 'Analyzing...' : 'Analyze Document'}
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Summary</h3>
            <p className="text-sm text-gray-600">{analysis.summary}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Key Points</h3>
            <ul className="list-disc pl-5 space-y-1">
              {analysis.keyPoints.map((point, index) => (
                <li key={index} className="text-sm text-gray-600">{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Risk Assessment</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              ${analysis.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                analysis.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'}`}>
              <AlertCircle className="h-4 w-4 mr-1" />
              {analysis.riskLevel} Risk
            </span>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Recommendations</h3>
            <ul className="list-disc pl-5 space-y-1">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="text-sm text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}