import React, { useState, useEffect } from 'react';
import { Heart, Clock, Sparkles } from 'lucide-react';

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [message, setMessage] = useState('');
  const [prediction, setPrediction] = useState('');

  // Set your wedding date here
  const weddingDate = new Date('2025-04-20T00:00:00');

  const funMessages = [
    "Get ready for the most epic 'I do' moment ever! 💍",
    "Warning: This wedding may cause spontaneous dancing! 💃",
    "Love is in the air... and so is cake! 🎂",
    "Preparing for the best party of the year! 🎉",
    "Soon you'll be officially stuck with each other... forever! ❤️",
    "Counting down to your happily ever after! ✨",
    "Almost time to eat, drink, and be married! 🥂",
    "The adventure of a lifetime is about to begin! 🚀"
  ];

  const funPredictions = [
    "The first dance will be absolutely perfect! 💫",
    "Someone will cry during the vows (in a good way!) 😭",
    "The cake will be Instagram-worthy! 📸",
    "At least three people will try to catch the bouquet! 💐",
    "There will be an epic dance-off! 🕺",
    "The wedding photos will be magazine-worthy! 📷",
    "Everyone will remember this day forever! ✨",
    "The weather will be absolutely perfect! ☀️"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * funMessages.length);
    setMessage(funMessages[randomIndex]);
  };

  const getRandomPrediction = () => {
    const randomIndex = Math.floor(Math.random() * funPredictions.length);
    setPrediction(funPredictions[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-purple-800 mb-4">
          The Big Day Countdown!
        </h1>
        
        <div className="grid grid-cols-4 gap-4 my-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600">{timeLeft.days}</div>
            <div className="text-gray-600">Days</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600">{timeLeft.hours}</div>
            <div className="text-gray-600">Hours</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600">{timeLeft.minutes}</div>
            <div className="text-gray-600">Minutes</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600">{timeLeft.seconds}</div>
            <div className="text-gray-600">Seconds</div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button 
              onClick={getRandomMessage}
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center mx-auto mb-4"
            >
              <Heart className="mr-2" /> Get a Fun Message!
            </button>
            <p className="text-xl text-gray-700 min-h-[3rem]">{message}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <button 
              onClick={getRandomPrediction}
              className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center mx-auto mb-4"
            >
              <Sparkles className="mr-2" /> Wedding Prediction!
            </button>
            <p className="text-xl text-gray-700 min-h-[3rem]">{prediction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;