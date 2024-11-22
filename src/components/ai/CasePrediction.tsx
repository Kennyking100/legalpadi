import React, { useState } from 'react';
import { Brain, TrendingUp, Scale } from 'lucide-react';

interface PredictionResult {
  successProbability: number;
  similarCases: Array<{
    title: string;
    outcome: string;
    relevance: number;
  }>;
  keyFactors: Array<{
    factor: string;
    impact: 'positive' | 'negative' | 'neutral';
  }>;
}

export default function CasePrediction() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  const mockPrediction: PredictionResult = {
    successProbability: 75,
    similarCases: [
      {
        title: "Thompson v. Tech Corp (2023)",
        outcome: "Settled in favor of plaintiff",
        relevance: 89
      },
      {
        title: "Davis Enterprises Case (2022)",
        outcome: "Verdict for plaintiff",
        relevance: 82
      }
    ],
    keyFactors: [
      {
        factor: "Clear documentation of contract breach",
        impact: "positive"
      },
      {
        factor: "Industry standard severance practices",
        impact: "positive"
      },
      {
        factor: "Delayed filing timeline",
        impact: "negative"
      }
    ]
  };

  const generatePrediction = () => {
    setIsPredicting(true);
    setTimeout(() => {
      setPrediction(mockPrediction);
      setIsPredicting(false);
    }, 2000);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">AI Case Prediction</h2>
        <button
          onClick={generatePrediction}
          disabled={isPredicting}
          className="btn-primary"
        >
          <Brain className="h-5 w-5 mr-2" />
          {isPredicting ? 'Analyzing...' : 'Generate Prediction'}
        </button>
      </div>

      {prediction && (
        <div className="space-y-6">
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-indigo-900">Success Probability</h3>
                  <p className="text-indigo-700">{prediction.successProbability}% favorable outcome</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Similar Cases</h3>
            <div className="space-y-3">
              {prediction.similarCases.map((case_, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{case_.title}</h4>
                      <p className="text-sm text-gray-600">{case_.outcome}</p>
                    </div>
                    <span className="text-sm text-gray-500">{case_.relevance}% match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Key Factors</h3>
            <div className="space-y-2">
              {prediction.keyFactors.map((factor, index) => (
                <div key={index} className="flex items-center">
                  <span className={`h-2 w-2 rounded-full mr-2
                    ${factor.impact === 'positive' ? 'bg-green-400' :
                      factor.impact === 'negative' ? 'bg-red-400' :
                      'bg-gray-400'}`}
                  />
                  <span className="text-sm text-gray-600">{factor.factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}