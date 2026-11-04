from pathlib import Path
p=Path('src/quiz-page.tsx');s=p.read_text();s=s.replace('  const resultIndex = scoreQuiz(answers);', '''  const scores = [speed, [0,2,4,6][answers[3] ?? 0], [0,2,4,6][answers[4] ?? 0]];
  return scores.indexOf(Math.max(...scores));
}
export function Quiz() {
  const [answers,setAnswers]=useState<number[]>([]),[step,setStep]=useState(0);
  const reduced=useReducedMotion();
  const resultIndex = scoreQuiz(answers);''');s=s.replace(chr(65533),"'");s=s.replace("'We're",'"We\'re') if False else s
# Keep apostrophes safe inside double-quoted text.
s=s.replace('"We don\'t have a list"','"We don\'t have a list"')
p.write_text(s,encoding='utf-8')
p=Path('src/proof-section.tsx');s=p.read_text().replace(chr(65533),'x');p.write_text(s,encoding='utf-8')
