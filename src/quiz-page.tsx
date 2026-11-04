import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
export const quizQuestions = [
  {title:'How do most of your leads reach you?', options:['Phone calls','Web forms','Texts or messages','Referrals']},
  {title:'How fast do you usually reply to a new lead?', options:['Within a few minutes','Within a few hours','The next day','It depends on the day']},
  {title:'What happens when you miss a call?', options:['They get a text back right away','They leave a voicemail','I call back when I can','Nothing happens']},
  {title:'When a lead goes quiet, how many times do you follow up?', options:['Many times','Two or three times','Once','Never']},
  {title:'What do you do with your old contacts?', options:['We message them often','We message them sometimes','They sit in a list',"We don’t have a list"]}
];
export function scoreQuiz(answers:number[]) {
  const speed = [0,1,3,2][answers[1] ?? 0] + [0,2,1,3][answers[2] ?? 0];
  const scores = [speed, [0,2,4,6][answers[3] ?? 0], [0,2,4,6][answers[4] ?? 0]];
  const highest = Math.max(...scores);
  return scores.filter(score => score === highest).length > 1 ? 0 : scores.indexOf(highest);
}
export function Quiz() {
  const [answers,setAnswers]=useState<number[]>([]),[step,setStep]=useState(0);
  const reduced=useReducedMotion();
  const resultIndex = scoreQuiz(answers);
  const results = [
    ['Speed leak', "Your leads wait too long for an answer. A missed call or a slow reply sends them to the next business. The fix is to answer in seconds, even when you’re on a job."],
    ['Follow up leak', "You reply once, and then it goes quiet. Most people need more than one touch before they book. The fix is follow up that keeps going until they book or say no."],
    ['Database leak', "You already have people who know you, but nobody is talking to them. Old contacts and past customers are sitting untouched. The fix is a reason for them to come back."]
  ];
  return <section className="section quiz-page"><h1>The 30 Second<br /><em>Lead Leak Quiz.</em></h1><p>Answer a few quick questions and we'll name where your leads are slipping away.</p><div className="quiz-card">{step < 5 ? <><small>Question {step + 1} of 5</small><div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuenow={step + 1} aria-valuemin={0} aria-valuemax={5}><span style={{
            width: (step + 1) * 20 + '%'
          }} /></div><motion.div key={step} initial={{
          x: reduced ? 0 : 12
        }} animate={{
          x: 0
        }} transition={{
          duration: .25
        }}><h2>{quizQuestions[step].title}</h2><div className="quiz-options">{quizQuestions[step].options.map((option, i) => <button key={option} onClick={() => {
              setAnswers([...answers.slice(0, step), i]);
              setStep(step + 1);
            }}>{option}<FiArrowRight /></button>)}</div></motion.div>{step > 0 && <button className="quiz-back" onClick={() => setStep(step - 1)}>Previous question</button>}</> : <div className="quiz-result" aria-live="polite"><h2>{results[resultIndex][0]}</h2><p>{results[resultIndex][1]}</p><p>Book your diagnostic and we'll show you how to close it.</p><a className="button" href="/book">Book My Lead Leak Diagnostic <FiArrowUpRight /></a></div>}</div></section>;
}
