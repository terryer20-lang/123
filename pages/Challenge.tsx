import React, { useState, useEffect } from 'react';
import { QUIZ_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Challenge: React.FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const savedPoints = localStorage.getItem('macau_consular_points');
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints, 10));
    }
  }, []);

  const currentQuestion = QUIZ_DATA[currentQuestionIdx];

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 10);
    }

    if (currentQuestionIdx < QUIZ_DATA.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      const finalScore = score + (isCorrect ? 10 : 0);
      const newTotal = totalPoints + finalScore;
      localStorage.setItem('macau_consular_points', newTotal.toString());
      setTotalPoints(newTotal);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIdx(0);
    setShowResult(false);
  };

  const getQuestionText = (id: number) => t(`data.quiz.${id}.q`);
  // Helper to fetch option text, assuming options are 0,1,2,3
  const getOptionText = (id: number, idx: number) => t(`data.quiz.${id}.o.${idx}`);

  return (
    <div className="p-4 space-y-4 pt-16 md:pt-20">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 mb-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">{t('challenge.my_score')}</div>
          <div className="text-2xl font-bold text-yellow-600">{totalPoints}</div>
        </div>
      </div>

      {!showResult ? (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-brand-green px-4 py-3 text-white flex justify-between items-center">
            <span className="font-bold">
              {t('challenge.question_progress')
                .replace('{{current}}', (currentQuestionIdx + 1).toString())
                .replace('{{total}}', QUIZ_DATA.length.toString())}
            </span>
            <span className="text-sm bg-white/20 px-2 py-0.5 rounded">{t('challenge.weekly_challenge')}</span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-6 text-gray-800 leading-relaxed">
              {getQuestionText(currentQuestion.id)}
            </h3>
            <div className="space-y-3">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-brand-green transition-all"
                >
                  <span className="inline-block w-6 h-6 bg-gray-100 text-gray-500 rounded-full text-center text-sm leading-6 mr-3">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {getOptionText(currentQuestion.id, idx)}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('challenge.complete_title')}</h2>
          <p className="text-gray-500 mb-6">{t('challenge.points_earned')}</p>
          <div className="text-4xl font-bold text-brand-green mb-8">+{score}</div>
          <button 
            onClick={resetQuiz}
            className="w-full bg-brand-green text-white py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
          >
            {t('challenge.play_again')}
          </button>
        </div>
      )}
      
      {/* Mock Leaderboard */}
      <div className="bg-white p-4 rounded-xl shadow-sm mt-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>📊</span> {t('challenge.leaderboard_title')}
        </h3>
        {[1, 2, 3].map((rank) => (
          <div key={rank} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <span className={`w-6 text-center font-bold italic ${rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-gray-400' : 'text-orange-400'}`}>
                {rank}
              </span>
              <span className="text-sm text-gray-600">User_{Math.floor(Math.random() * 9000) + 1000}</span>
            </div>
            <span className="text-sm font-medium text-brand-green">{1200 - rank * 50} {t('challenge.score_suffix')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenge;