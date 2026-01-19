
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { BrainType, Step, BrainTypeInfo, DiagnosticResult } from './types';
import { QUESTIONS, BRAIN_TYPE_DETAILS } from './constants';
import Button from './components/Button';
import Progress from './components/Progress';
import DeclarationCard from './components/DeclarationCard';
import { 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Share2, 
  RefreshCw, 
  AlertTriangle, 
  Zap, 
  Target, 
  BookOpen, 
  BrainCircuit, 
  Heart, 
  BarChart3, 
  Edit3, 
  Sparkles,
  Info,
  ArrowDown,
  Users,
  EyeOff
} from 'lucide-react';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('SPLASH');
  const [userName, setUserName] = useState('');
  const [customCommitment, setCustomCommitment] = useState('');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<(BrainType | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [diagnosticData, setDiagnosticData] = useState<DiagnosticResult | null>(null);
  const [showCard, setShowCard] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const resultTopRef = useRef<HTMLDivElement>(null);

  const calculateResult = () => {
    const counts = answers.reduce((acc, type) => {
      if (type) acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {
      [BrainType.CHEETAH]: 0,
      [BrainType.OWL]: 0,
      [BrainType.DOLPHIN]: 0,
      [BrainType.ELEPHANT]: 0
    } as Record<BrainType, number>);

    const sortedTypes = (Object.keys(counts) as BrainType[]).sort((a, b) => counts[b] - counts[a]);
    
    setDiagnosticData({
      primary: BRAIN_TYPE_DETAILS[sortedTypes[0]],
      secondary: BRAIN_TYPE_DETAILS[sortedTypes[1]],
      scores: counts
    });

    setStep('LOADING');
    setTimeout(() => {
      setStep('RESULT');
      window.scrollTo(0, 0);
    }, 2500);
  };

  const handleSelectOption = (type: BrainType) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIdx] = type;
    setAnswers(newAnswers);
    
    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQuestionIdx(prev => prev + 1), 300);
    }
  };

  const goNext = () => {
    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else if (answers[currentQuestionIdx]) {
      calculateResult();
    }
  };

  const goBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(currentQuestionIdx - 1);
    }
  };

  const saveAsImage = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `${userName}_Limitless_Brain_Declaration.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      alert('이미지 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const shareResult = async () => {
    const url = window.location.href;
    const shareData = {
      title: '마지막 몰입: 뇌 유형 진단 (C.O.D.E)',
      text: `${userName}님의 뇌 유형은 '${diagnosticData?.primary.name}'! 짐 퀵의 뇌 최적화 전략을 확인해보세요.`,
      url: url,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) {}
    } else {
      await navigator.clipboard.writeText(url);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  const resetTest = () => {
    setStep('SPLASH');
    setUserName('');
    setCustomCommitment('');
    setCurrentQuestionIdx(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setDiagnosticData(null);
    setShowCard(false);
  };

  const handleFinalCommitment = () => {
    if (!customCommitment.trim()) {
      alert('당신을 변화시킬 실천 다짐을 최소 5자 이상 입력해주세요!');
      return;
    }
    setShowCard(true);
    setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white shadow-2xl relative overflow-x-hidden font-['Pretendard']">
      <AnimatePresence mode="wait">
        {step === 'SPLASH' && (
          <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-24 h-24 bg-indigo-600 rounded-[2.2rem] flex items-center justify-center text-white mb-10 shadow-2xl shadow-indigo-200">
              <BrainCircuit size={52} />
            </motion.div>
            <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tight">마지막 몰입<br/><span className="text-indigo-600">뇌 유형 진단</span></h1>
            <p className="text-gray-500 mb-12 font-medium leading-relaxed">짐 퀵의 C.O.D.E 시스템을 통해<br/>당신의 잠재된 뇌 엔진을 발견하세요.</p>
            <Button size="lg" fullWidth onClick={() => setStep('NAME_INPUT')} className="h-16 text-xl">진단 시작하기 <ChevronRight className="ml-2" size={24} /></Button>
          </motion.div>
        )}

        {step === 'NAME_INPUT' && (
          <motion.div key="name_input" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="flex-1 flex flex-col justify-center p-8 min-h-screen">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-gray-800 mb-3">반갑습니다!</h2>
              <p className="text-gray-500 font-medium leading-relaxed text-lg">진단 결과지에 표시될<br/><span className="text-indigo-600 font-bold">당신의 이름</span>을 입력해주세요.</p>
            </div>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="예: 홍길동" 
              className="w-full px-7 py-5 rounded-[1.5rem] border-2 border-gray-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none text-2xl transition-all mb-12 font-bold bg-gray-50" 
              autoFocus 
              onKeyPress={(e) => e.key === 'Enter' && userName.trim() && setStep('QUIZ')} 
            />
            <Button size="lg" fullWidth disabled={!userName.trim()} onClick={() => setStep('QUIZ')} className="h-16">진단 진행하기</Button>
          </motion.div>
        )}

        {step === 'QUIZ' && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col p-6 min-h-screen">
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-black text-indigo-600 tracking-widest uppercase">Question {currentQuestionIdx + 1}</span>
                <span className="text-xs text-gray-400 font-black">{currentQuestionIdx + 1} / {QUESTIONS.length}</span>
              </div>
              <Progress current={currentQuestionIdx + 1} total={QUESTIONS.length} />
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentQuestionIdx} 
                  initial={{ x: 40, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  exit={{ x: -40, opacity: 0 }} 
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-2xl font-black text-gray-800 mb-12 leading-tight break-keep">{QUESTIONS[currentQuestionIdx].text}</h3>
                  <div className="space-y-4">
                    {QUESTIONS[currentQuestionIdx].options.map((option, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleSelectOption(option.type)} 
                        className={`w-full p-6 text-left rounded-[1.8rem] border-2 transition-all flex items-center gap-5 group relative overflow-hidden ${
                          answers[currentQuestionIdx] === option.type 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                            : 'bg-white border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm transition-colors ${
                          answers[currentQuestionIdx] === option.type 
                            ? 'bg-white/20 text-white' 
                            : 'bg-indigo-50 text-indigo-500 border border-indigo-100'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className={`font-bold leading-snug flex-1 ${answers[currentQuestionIdx] === option.type ? 'text-white' : 'text-gray-700'}`}>
                          {option.label}
                        </span>
                        {answers[currentQuestionIdx] === option.type && (
                          <motion.div layoutId="check" className="absolute right-6"><Sparkles size={20} /></motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex gap-4">
              <Button variant="secondary" onClick={goBack} disabled={currentQuestionIdx === 0} className="flex-1 h-14 rounded-2xl">
                <ChevronLeft size={22} className="mr-1"/> 이전
              </Button>
              <Button variant="primary" onClick={goNext} disabled={!answers[currentQuestionIdx]} className="flex-[2] h-14 rounded-2xl">
                {currentQuestionIdx === QUESTIONS.length - 1 ? '분석 결과 보기' : '다음 단계'} <ChevronRight size={22} className="ml-1"/>
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'LOADING' && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
            <div className="relative mb-12">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                className="w-32 h-32 border-[12px] border-indigo-50 border-t-indigo-600 rounded-full" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit size={48} className="text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-gray-800 mb-4">지능 시스템 분석 중...</h2>
            <p className="text-gray-500 font-medium leading-relaxed italic">
              "당신의 뇌는 고정된 하드웨어가 아닙니다.<br/>매일 업그레이드할 수 있는 소프트웨어입니다."
            </p>
          </motion.div>
        )}

        {step === 'RESULT' && diagnosticData && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col bg-gray-50/30">
            <div ref={resultTopRef} className="p-10 pt-20 text-center text-white relative overflow-hidden" style={{ backgroundColor: diagnosticData.primary.color }}>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }}
                 className="relative z-10"
               >
                <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 border border-white/30">
                  Primary Brain Profile
                </div>
                <h2 className="text-6xl font-black mb-6 drop-shadow-2xl">{diagnosticData.primary.name}</h2>
                <div className="max-w-[280px] mx-auto bg-black/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <p className="text-[15px] font-bold leading-relaxed">{diagnosticData.primary.description}</p>
                </div>
               </motion.div>
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-white rounded-full blur-3xl" />
                 <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-black rounded-full blur-3xl" />
               </div>
            </div>

            <div className="px-6 -mt-10 relative z-20 pb-20">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 mb-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-gray-800 flex items-center gap-2"><BarChart3 size={24} className="text-indigo-600" /> C.O.D.E 밸런스</h3>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Total 20 Points</div>
                </div>
                <div className="space-y-6">
                  {(Object.entries(diagnosticData.scores) as [BrainType, number][]).map(([type, score]) => (
                    <div key={type} className="flex flex-col gap-2">
                      <div className="flex justify-between items-end px-1">
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">{BRAIN_TYPE_DETAILS[type].englishName}</span>
                        <span className="text-sm font-black" style={{ color: BRAIN_TYPE_DETAILS[type].color }}>{score} <span className="text-[10px] text-gray-300">/ 20</span></span>
                      </div>
                      <div className="h-3.5 bg-gray-50 rounded-full p-0.5 border border-gray-100 shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${(score / 20) * 100}%` }} 
                          transition={{ duration: 1.2, ease: "circOut" }} 
                          className="h-full rounded-full shadow-lg" 
                          style={{ backgroundColor: BRAIN_TYPE_DETAILS[type].color }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 상성 및 취약점 (고도화 콘텐츠) */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-pink-50 text-pink-500 rounded-xl">
                      <Users size={20} />
                    </div>
                    <h4 className="text-sm font-black text-gray-800 uppercase tracking-tighter">최고의 파트너 상성</h4>
                  </div>
                  <p className="text-[13px] font-bold text-gray-600 leading-snug mb-2">
                    <span className="text-pink-600">[{diagnosticData.primary.chemistry.partner}]</span>와 함께할 때 폭발적인 성장을 이룹니다.
                  </p>
                  <p className="text-[12px] font-medium text-gray-400 leading-relaxed italic">"{diagnosticData.primary.chemistry.synergy}"</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">
                      <EyeOff size={20} />
                    </div>
                    <h4 className="text-sm font-black text-gray-800 uppercase tracking-tighter">나의 사각지대 (주의점)</h4>
                  </div>
                  <p className="text-[13px] font-bold text-gray-600 leading-snug break-keep">
                    {diagnosticData.primary.blindSpot} 이 점을 의식적으로 경계하면 더 높은 수준의 몰입에 도달할 수 있습니다.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-indigo-950 rounded-[2.5rem] p-8 mb-10 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute right-[-20px] bottom-[-20px] text-indigo-800/20 rotate-12"><BrainCircuit size={140} /></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                      <Zap size={22} className="text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-black">당신의 제2 엔진: {diagnosticData.secondary.name}</h3>
                  </div>
                  <p className="text-[14px] font-bold text-indigo-100/90 leading-relaxed break-keep mb-4">
                    {userName}님은 {diagnosticData.primary.name}형이지만, {diagnosticData.secondary.name}형의 특징도 매우 잘 활용합니다.
                  </p>
                </div>
              </motion.div>

              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 mb-12 border border-gray-100">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-black text-gray-800 mb-2">브레인 마스터 전략</h3>
                  <div className="w-12 h-1 bg-indigo-100 mx-auto" />
                </div>
                
                <div className="space-y-12">
                  <GuideSection icon={<Target size={22}/>} title="읽는 순간 똑똑해지는 독서법" list={diagnosticData.primary.readingStrategy} color="orange" />
                  <GuideSection icon={<RefreshCw size={22}/>} title="더 많은 것을 외우는 기억 훈련" list={diagnosticData.primary.memoryStrategy} color="blue" />
                  <GuideSection icon={<Zap size={22}/>} title="합리적인 의사결정 방식" list={diagnosticData.primary.decisionStrategy} color="purple" />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-indigo-600 rounded-[3rem] p-9 mb-16 text-white text-center shadow-2xl shadow-indigo-200 relative"
              >
                <div className="absolute top-0 right-10 opacity-10"><Heart size={80} /></div>
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-xl"><Edit3 size={32} /></div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">당신을 깨우는 한 마디,<br/>실천 다짐</h3>
                
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl mb-8 text-left border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Info size={14} className="text-indigo-200" />
                    <span className="text-[11px] font-black text-indigo-200 uppercase tracking-widest">Recommended Action</span>
                  </div>
                  <p className="text-[14px] font-bold leading-snug">{diagnosticData.primary.recommendedAction}</p>
                </div>

                <p className="text-indigo-100 text-sm mb-8 font-medium leading-relaxed opacity-80 italic">
                  위 전략들을 읽으며 떠오른 당신만의<br/>'작지만 강력한 약속'을 적어보세요.
                </p>

                <textarea 
                  value={customCommitment} 
                  onChange={(e) => setCustomCommitment(e.target.value)} 
                  placeholder="예: 매일 아침 일어나자마자 그날의 핵심 목표 3가지를 시각화하겠다!" 
                  className="w-full h-32 px-6 py-5 rounded-[1.8rem] border-2 border-transparent focus:border-white/50 outline-none text-[16px] transition-all mb-8 font-bold resize-none shadow-inner bg-indigo-700 placeholder-indigo-400" 
                />
                
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-white/40 blur-lg rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Button 
                    size="lg" 
                    fullWidth 
                    onClick={handleFinalCommitment} 
                    className="relative bg-white text-indigo-600 hover:bg-yellow-50 hover:text-indigo-700 border-none h-18 text-2xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col gap-1 items-center justify-center py-6"
                  >
                    <div className="flex items-center gap-2">
                      선언서 카드 발급 <Sparkles size={24} className="animate-pulse text-indigo-500" />
                    </div>
                    <span className="text-[10px] font-black text-indigo-300 tracking-widest uppercase">Tap to Generate Final Card</span>
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute bottom-2"
                    >
                      <ArrowDown size={14} className="text-indigo-200" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {showCard && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.95 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    className="flex flex-col items-center mb-16"
                  >
                    <div className="flex flex-col items-center mb-10">
                       <h3 className="text-2xl font-black text-gray-800 mb-2 tracking-tight">나의 뇌 활용 선언서</h3>
                       <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Digital Certification</p>
                    </div>
                    
                    <DeclarationCard 
                      userName={userName} 
                      typeInfo={diagnosticData.primary} 
                      customCommitment={customCommitment} 
                      cardRef={cardRef} 
                    />
                    
                    <div className="w-full mt-12 flex flex-col gap-4 px-4">
                      <Button variant="primary" fullWidth size="lg" onClick={saveAsImage} className="h-16 text-lg shadow-2xl shadow-indigo-100">
                        <Download size={22} className="mr-2" /> 선언서 이미지 저장하기
                      </Button>
                      <Button variant="outline" fullWidth size="lg" onClick={shareResult} className="h-16 text-lg">
                        <Share2 size={22} className="mr-2" /> 결과 링크 공유하기
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-center pt-8 border-t border-gray-100">
                <button onClick={resetTest} className="text-gray-300 font-black flex items-center justify-center mx-auto text-sm hover:text-indigo-600 transition-colors py-4">
                  <RefreshCw size={16} className="mr-2" /> 테스트 처음부터 다시하기
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GuideSection = ({ icon, title, list, color }: any) => {
  const colorMap: any = { 
    orange: 'bg-orange-50 text-orange-600 border-orange-100', 
    blue: 'bg-blue-50 text-blue-600 border-blue-100', 
    purple: 'bg-purple-50 text-purple-600 border-purple-100' 
  };
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-[1.2rem] flex items-center justify-center border-2 transition-transform group-hover:rotate-6 ${colorMap[color]}`}>
          {icon}
        </div>
        <h4 className="font-black text-gray-800 text-[16px] leading-tight break-keep">{title}</h4>
      </div>
      <ul className="space-y-5 ml-2">
        {list.map((s: string, i: number) => {
          const hasSeparator = s.includes(':');
          const [label, content] = hasSeparator ? s.split(':') : [s, ''];
          return (
            <li key={i} className="flex gap-4">
              <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${colorMap[color].split(' ')[1]}`} />
              <div>
                <span className="text-[14.5px] text-gray-800 font-black leading-snug block">{label}{hasSeparator && ':'}</span>
                {content && <span className="text-[13.5px] text-gray-500 font-bold leading-relaxed block mt-1.5 break-keep">{content}</span>}
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default App;
