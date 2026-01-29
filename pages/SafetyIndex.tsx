import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SAFETY_QUESTIONS } from '../constants';

const SafetyIndex: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = (id: number) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateData = () => {
    const categories = {
      health: 0,
      crime: 0,
      political: 0
    };
    
    // Normalize simple counts for the demo chart
    Object.entries(answers).forEach(([key, val]) => {
      if (val) {
        const q = SAFETY_QUESTIONS.find(sq => sq.id === Number(key));
        if (q && (q.category === 'health' || q.category === 'crime' || q.category === 'political')) {
           categories[q.category] += 30; // Mock score weight
        }
      }
    });

    return [
      { subject: '健康准备', A: categories.health + 20, fullMark: 100 },
      { subject: '治安防范', A: categories.crime + 20, fullMark: 100 },
      { subject: '政策了解', A: categories.political + 20, fullMark: 100 },
      { subject: '紧急联络', A: 80, fullMark: 100 }, // Mock static data for visuals
      { subject: '证件备份', A: answers[4] ? 90 : 20, fullMark: 100 },
    ];
  };

  const score = Object.values(answers).filter(Boolean).length * 20;

  return (
    <div className="p-4 pb-24">
      {!submitted ? (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
            请勾选您已完成的准备事项，系统将评估您的出行安全指数。
          </div>
          {SAFETY_QUESTIONS.map(q => (
            <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <input 
                type="checkbox" 
                id={`q-${q.id}`}
                checked={!!answers[q.id]}
                onChange={() => toggleAnswer(q.id)}
                className="mt-1 w-5 h-5 text-macau-green rounded focus:ring-macau-green"
              />
              <label htmlFor={`q-${q.id}`} className="text-gray-700 text-sm font-medium leading-relaxed">
                {q.question}
              </label>
            </div>
          ))}
          <button 
            onClick={() => setSubmitted(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg mt-6 active:scale-95 transition-transform"
          >
            生成安全报告
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-2">您的安全指数</h2>
          <div className={`text-center text-5xl font-bold mb-6 ${score > 60 ? 'text-green-500' : 'text-orange-500'}`}>
            {score}
          </div>

          <div className="h-64 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={calculateData()}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar
                  name="Safety"
                  dataKey="A"
                  stroke="#007f5c"
                  fill="#007f5c"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="font-bold text-gray-800">改进建议:</h3>
            {!answers[4] && (
               <div className="p-3 bg-red-50 text-red-700 text-sm rounded border border-red-100">
                 ⚠️ 强烈建议您备份护照首页及签证页，并与原件分开存放。
               </div>
            )}
            {!answers[1] && (
               <div className="p-3 bg-red-50 text-red-700 text-sm rounded border border-red-100">
                 ⚠️ 医疗费用在海外极其昂贵，请务必购买保险。
               </div>
            )}
            {Object.values(answers).every(Boolean) && (
              <div className="p-3 bg-green-50 text-green-700 text-sm rounded border border-green-100">
                🎉 您的准备工作非常充分，祝您旅途愉快！
              </div>
            )}
          </div>
          
          <button 
            onClick={() => { setSubmitted(false); setAnswers({}); }}
            className="w-full border border-gray-300 text-gray-600 py-3 rounded-lg font-medium mt-8"
          >
            重新测试
          </button>
        </div>
      )}
    </div>
  );
};

export default SafetyIndex;