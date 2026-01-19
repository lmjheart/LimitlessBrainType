
export enum BrainType {
  CHEETAH = 'CHEETAH',
  OWL = 'OWL',
  DOLPHIN = 'DOLPHIN',
  ELEPHANT = 'ELEPHANT'
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    type: BrainType;
  }[];
}

export interface BrainTypeInfo {
  type: BrainType;
  name: string;
  englishName: string;
  color: string;
  description: string;
  readingStrategy: string[];
  memoryStrategy: string[];
  decisionStrategy: string[];
  chemistry: {
    partner: string;
    synergy: string;
  };
  blindSpot: string;
  declaration: string;
  recommendedAction: string; // 추천 실천 사항 추가
}

export interface DiagnosticResult {
  primary: BrainTypeInfo;
  secondary: BrainTypeInfo;
  scores: Record<BrainType, number>;
}

export type Step = 'SPLASH' | 'NAME_INPUT' | 'QUIZ' | 'LOADING' | 'RESULT';
