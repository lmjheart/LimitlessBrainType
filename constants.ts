
import { BrainType, Question, BrainTypeInfo } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "문제에 직면했을 때 당신이 선호하는 방식은 무엇인가?",
    options: [
      { label: "결정을 내리기 전에 여러 관점을 고려한다.", type: BrainType.DOLPHIN },
      { label: "자신의 직감을 믿고 즉각적으로 조치한다.", type: BrainType.CHEETAH },
      { label: "행동하기 전에 분석하고 전략을 세운다.", type: BrainType.OWL },
      { label: "다른 사람들과 협력하고 합의를 이끌어낸다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 2,
    text: "새로운 것을 배울 때 당신은 어떻게 하는가?",
    options: [
      { label: "논리적으로 세분화한다.", type: BrainType.OWL },
      { label: "바로 학습을 시작해 직접 체험하며 배운다.", type: BrainType.CHEETAH },
      { label: "다른 사람들과 토론하고 아이디어를 교환한다.", type: BrainType.ELEPHANT },
      { label: "자신의 기존 지식과 어떻게 연결되어 있는지 숙고한다.", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 3,
    text: "그룹 프로젝트에서 대체로 당신은 어떻게 하는가?",
    options: [
      { label: "모든 사람의 의견을 듣고 고려한다.", type: BrainType.ELEPHANT },
      { label: "신속하고 효율적으로 과업을 실행한다.", type: BrainType.CHEETAH },
      { label: "창의적인 아이디어와 해결책을 제안한다.", type: BrainType.DOLPHIN },
      { label: "사람들의 능력에 따라 다른 역할을 부여한다.", type: BrainType.OWL },
    ]
  },
  {
    id: 4,
    text: "결정을 내려야 할 때 당신이 더 의존하는 것은 무엇인가?",
    options: [
      { label: "직관과 직감", type: BrainType.CHEETAH },
      { label: "논리와 이성", type: BrainType.OWL },
      { label: "개인적 가치와 원칙", type: BrainType.DOLPHIN },
      { label: "다른 사람들의 제안과 집단 합의", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 5,
    text: "당신이 자유 시간에 할 가능성이 가장 큰 것은 무엇인가?",
    options: [
      { label: "독서를 하거나 지적 탐구에 참여한다.", type: BrainType.OWL },
      { label: "상상력을 발휘하게 하는 취미나 관심사를 추구한다.", type: BrainType.DOLPHIN },
      { label: "친구와 어울리거나 공공 행사에 참여한다.", type: BrainType.ELEPHANT },
      { label: "신체 활동이나 스포츠에 참여한다.", type: BrainType.CHEETAH },
    ]
  },
  {
    id: 6,
    text: "의사소통을 할 때 당신은 어떤 방식을 취하는가?",
    options: [
      { label: "공감과 이해", type: BrainType.DOLPHIN },
      { label: "포용적이고 열린 마음", type: BrainType.ELEPHANT },
      { label: "열정과 표현", type: BrainType.CHEETAH },
      { label: "정확하고 직접적인 설명", type: BrainType.OWL },
    ]
  },
  {
    id: 7,
    text: "목표를 정할 때 당신은 어떤 유형인가?",
    options: [
      { label: "세부적인 계획과 일정을 수립한다.", type: BrainType.OWL },
      { label: "목표가 미치는 광범위한 영향을 고려한다.", type: BrainType.DOLPHIN },
      { label: "속도에 우선순위를 둔다.", type: BrainType.CHEETAH },
      { label: "정기적으로 다른 사람들의 아이디어를 통합한다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 8,
    text: "당신에게 가장 편안한 역할은 무엇인가?",
    options: [
      { label: "팀워크와 협력을 촉진하는 역할", type: BrainType.ELEPHANT },
      { label: "업무 또는 과제 시 생각할 시간을 주는 역할", type: BrainType.OWL },
      { label: "신속한 결정과 적응력을 요구하는 역할", type: BrainType.CHEETAH },
      { label: "자유로운 아이디어의 흐름을 장려하는 역할", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 9,
    text: "당신이 가장 성취감을 느킬 때는 언제인가?",
    options: [
      { label: "사람들을 하나로 모아 공동의 목표를 달성할 때", type: BrainType.ELEPHANT },
      { label: "작업을 효율적으로 완료할 때", type: BrainType.CHEETAH },
      { label: "참신한 아이디어가 떠오를 때", type: BrainType.DOLPHIN },
      { label: "복잡한 문제를 해결할 때", type: BrainType.OWL },
    ]
  },
  {
    id: 10,
    text: "피드백을 제공할 때 당신은 어떠한가?",
    options: [
      { label: "세심하게 공감하며 당신의 생각을 공유한다.", type: BrainType.DOLPHIN },
      { label: "솔직하게 직설적으로 말해준다.", type: BrainType.CHEETAH },
      { label: "열린 대화와 토론을 장려한다.", type: BrainType.ELEPHANT },
      { label: "객관적이고 건설적인 비판을 제공한다.", type: BrainType.OWL },
    ]
  },
  {
    id: 11,
    text: "학습 환경에서 당신이 학습할 때 가장 도움이 되는 방식은 무엇인가?",
    options: [
      { label: "체험 활동 참여와 경험을 통한 학습", type: BrainType.CHEETAH },
      { label: "단계별, 구조화된 학습 방식", type: BrainType.OWL },
      { label: "시각 자료를 사용하고 상상력을 활용하는 학습", type: BrainType.DOLPHIN },
      { label: "집단토론 참여", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 12,
    text: "누군가를 설득하려 할 때 당신은 자신이 어떤 스타일이라고 설명할 것인가?",
    options: [
      { label: "수용하고 이해해주는 스타일", type: BrainType.ELEPHANT },
      { label: "직설적이고 간결하며 이성적인 스타일", type: BrainType.OWL },
      { label: "역동적이고 설득력 있는 스타일", type: BrainType.CHEETAH },
      { label: "활기차고 마음을 사로잡는 스타일", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 13,
    text: "당신은 일반적으로 갈등을 어떻게 처리하는가?",
    options: [
      { label: "상황을 분석하고 합리적인 해결책을 제시한다.", type: BrainType.OWL },
      { label: "정면으로 문제와 부딪히고 단호한 조치를 취한다.", type: BrainType.CHEETAH },
      { label: "창의적인 타협점을 찾는다.", type: BrainType.DOLPHIN },
      { label: "모든 당사자 간의 열린 의사소통과 이해를 증진한다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 14,
    text: "당신은 어떤 업무 환경이 가장 마음에 드는가?",
    options: [
      { label: "협력적이고 서로 지지해주는 분위기", type: BrainType.ELEPHANT },
      { label: "체계적이고 구조화된 환경", type: BrainType.OWL },
      { label: "속도감 있고 활기찬 환경", type: BrainType.CHEETAH },
      { label: "혁신과 브레인스토밍을 장려하는 공간", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 15,
    text: "당신이 가장 좋아하는 업무는 다음 중 무엇인가?",
    options: [
      { label: "신체적 도전이나 경쟁적 업무", type: BrainType.CHEETAH },
      { label: "새로운 제품이나 콘셉트의 설계", type: BrainType.DOLPHIN },
      { label: "팀을 이끌거나 집단토론을 진행하는 일", type: BrainType.ELEPHANT },
      { label: "수집한 데이터의 심층 분석", type: BrainType.OWL },
    ]
  },
  {
    id: 16,
    text: "당신은 평소 스트레스를 어떻게 처리하는가?",
    options: [
      { label: "스트레스의 원인을 해결할 계획을 세운다.", type: BrainType.OWL },
      { label: "믿을 수 있는 사람과 의논한다.", type: BrainType.ELEPHANT },
      { label: "긴장을 풀기 위해 신체 활동을 한다.", type: BrainType.CHEETAH },
      { label: "감정을 표출할 배출구를 창의적으로 찾아본다.", type: BrainType.DOLPHIN },
    ]
  },
  {
    id: 17,
    text: "휴가를 계획할 때 당신이 선호하는 방식은 무엇인가?",
    options: [
      { label: "미리 상세한 여행 일정을 짠다.", type: BrainType.OWL },
      { label: "가볼 만한 매력적인 장소가 많은 여행지를 선택한다.", type: BrainType.DOLPHIN },
      { label: "최소한의 계획으로 모험을 떠난다.", type: BrainType.CHEETAH },
      { label: "단체로 가서 대부분 시간을 함께 보낸다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 18,
    text: "당신의 어떤 유형의 영화나 TV 프로그램을 가장 좋아하는가?",
    options: [
      { label: "액션이나 스릴러", type: BrainType.CHEETAH },
      { label: "추리극이나 범죄 드라마", type: BrainType.OWL },
      { label: "SF나 판타지", type: BrainType.DOLPHIN },
      { label: "캐릭터 관계가 강한 드라마나 코미디", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 19,
    text: "당신의 시간 관리 방식을 가장 잘 설명하는 문장은 무엇인가?",
    options: [
      { label: "어떤 아이디어들은 일정에 차질을 줄 수 있음을 이해하고 개의치 않는다.", type: BrainType.DOLPHIN },
      { label: "일단 일정을 정하면 그대로 지키기 위해 최선을 다한다.", type: BrainType.OWL },
      { label: "변화하는 우선순위에 유연하게 적응하는 것을 선호한다.", type: BrainType.CHEETAH },
      { label: "일정을 지키는 가장 좋은 방법은 업무를 분산시키는 것이다.", type: BrainType.ELEPHANT },
    ]
  },
  {
    id: 20,
    text: "개인적 성장에 대한 당신의 접근 방식을 가장 잘 묘사하는 것은 무엇인가?",
    options: [
      { label: "항상 새로운 업무 처리 방식을 고려한다.", type: BrainType.DOLPHIN },
      { label: "돈독한 관계를 형성하고 다른 사람들로부터 배운다.", type: BrainType.ELEPHANT },
      { label: "도전을 받아들이고 한계를 뛰어넘는다.", type: BrainType.CHEETAH },
      { label: "정기적으로 자신의 강점과 약점을 분석하여 개선할 부분을 찾는다.", type: BrainType.OWL },
    ]
  },
];

export const BRAIN_TYPE_DETAILS: Record<BrainType, BrainTypeInfo> = {
  [BrainType.CHEETAH]: {
    type: BrainType.CHEETAH,
    name: "민첩한 치타",
    englishName: "Cheetah",
    color: "#FFD700",
    description: "빠른 속도와 강력한 추진력을 가진 행동파 리더입니다.",
    readingStrategy: [
      "빠르게 훑어보기: 텍스트를 빠르게 스캔하며 핵심 사항, 제목, 키워드를 식별하세요.",
      "독서 목표 설정: 일정 시간 안에 몇 장을 읽을지 구체적이고 달성 가능한 목표를 세우세요.",
      "능동적인 읽기: 질문하고 예측하며 본인의 경험과 연결 지을 때 몰입도가 극대화됩니다."
    ],
    memoryStrategy: [
      "행동을 통한 학습: 체험 활동에 참여하거나 실전 연습을 통해 기억력을 향상시키세요.",
      "시나리오 시각화: 기억하려는 정보를 실제 행동 상황으로 시각화하여 뇌에 각인시키세요.",
      "타인에게 가르치기: 배운 내용을 즉시 다른 사람에게 설명하며 지식을 확고히 하세요."
    ],
    decisionStrategy: [
      "직감의 신뢰: 신속한 결정이 필요한 상황에서 본능적인 직관을 활용하세요.",
      "경험을 통한 보정: 행동 후 결과를 검토하고 접근법을 즉시 수정하며 배우세요.",
      "균형 잡기: 타인의 피드백을 수용하여 직관적 결정의 사각지대를 보완하세요."
    ],
    chemistry: {
      partner: "공감하는 코끼리 (Elephant)",
      synergy: "치타의 추진력과 코끼리의 안정적인 실행력이 만나 시너지를 냅니다."
    },
    blindSpot: "속도 때문에 세부 사항을 놓치기 쉽습니다.",
    declaration: "나는 나의 폭발적인 에너지를 믿으며, 목표를 향해 거침없이 나아가는 실행의 화신이다.",
    recommendedAction: "오늘 당장 30분 이내에 끝낼 수 있는 가장 중요한 할 일 하나를 정하고 즉시 실행해 보세요!"
  },
  [BrainType.OWL]: {
    type: BrainType.OWL,
    name: "현명한 올빼미",
    englishName: "Owl",
    color: "#9370DB",
    description: "논리적 분석과 체계적인 사고를 즐기는 전략가입니다.",
    readingStrategy: [
      "개요 작성: 읽고 있는 내용의 구조와 개요를 작성하여 정보의 흐름을 파악하세요.",
      "체계적인 메모: 요점을 간결하고 논리적으로 정리하여 저장하는 습관을 들이세요."
    ],
    memoryStrategy: [
      "기억술의 활용: 약어나 연상법 같은 기억술을 고안하여 복잡한 정보를 구조화하세요.",
      "정보의 범주화: 정보를 논리적 그룹이나 계층 구조로 분류하여 정리하세요.",
      "간격을 둔 반복: 시간 간격을 늘려가며 반복 학습하여 장기 기억으로 전환하세요."
    ],
    decisionStrategy: [
      "문제의 세분화: 큰 문제를 작은 요소로 나누어 본질적인 원인을 파악하세요.",
      "대안의 평가: 분석 능력을 사용해 각 해결책의 장단점을 객관적으로 비교하세요."
    ],
    chemistry: {
      partner: "창의적인 돌고래 (Dolphin)",
      synergy: "올빼미의 정교한 논리와 돌고래의 창의적 영감이 만나 혁신을 만듭니다."
    },
    blindSpot: "지나친 분석으로 실행이 늦어질 수 있습니다.",
    declaration: "나는 명석한 지혜와 논리력을 활용하여, 복잡한 세상의 해답을 찾아내는 탐구자이다.",
    recommendedAction: "현재 해결이 안 되는 고민 하나를 마인드맵으로 그려보고, 논리적인 인과관계를 분석해 보세요."
  },
  [BrainType.DOLPHIN]: {
    type: BrainType.DOLPHIN,
    name: "창의적인 돌고래",
    englishName: "Dolphin",
    color: "#00BFFF",
    description: "풍부한 상상력과 유연한 사고를 하는 창의적 비전가입니다.",
    readingStrategy: [
      "내용의 비판적 분석: 정보를 단순히 읽는 것을 넘어 비판적으로 평가하고 패턴을 찾으세요.",
      "아이디어 연결: 서로 다른 아이디어들을 창의적으로 연결하며 읽기 능력을 향상시키세요."
    ],
    memoryStrategy: [
      "내용의 시각화: 읽고 있는 내용과 관련된 심상이나 장면을 생생하게 떠올리며 기억하세요.",
      "연결 짓기: 새로운 정보를 기존의 경험이나 다른 지식과 연결하여 이해도를 높이세요.",
      "컬러 코딩: 색연필이나 형광펜을 사용하여 핵심 사항과 아이디어를 시각적으로 표시하세요."
    ],
    decisionStrategy: [
      "마인드맵 활용: 정보를 시각적으로 표현하여 다른 개념 간의 관계를 한눈에 파악하세요.",
      "스토리텔링 기법: 정보를 이야기나 내러티브로 엮어 창의적으로 기억하고 전달하세요.",
      "다감각 활용: 음악, 그림, 향기 등 다양한 감각 경험을 학습에 통합하여 기억력을 강화하세요."
    ],
    chemistry: {
      partner: "현명한 올빼미 (Owl)",
      synergy: "돌고래의 상상력을 올빼미가 현실적인 전략으로 체계화할 때 빛이 납니다."
    },
    blindSpot: "현실적인 제약 조건을 무시하거나 주의가 산만해질 수 있습니다.",
    declaration: "나는 무한한 상상력을 발휘하여, 세상에 새로운 가치와 영감을 전하는 비전가이다.",
    recommendedAction: "오늘 배운 지식 하나를 나만의 재미있는 스토리로 만들어 보거나, 그림으로 시각화해 보세요!"
  },
  [BrainType.ELEPHANT]: {
    type: BrainType.ELEPHANT,
    name: "공감하는 코끼리",
    englishName: "Elephant",
    color: "#3CB371",
    description: "끈기 있고 성실하며 조화를 중시하는 조력자입니다.",
    readingStrategy: [
      "내용 토론: 다른 사람들과 내용을 토론하며 통찰을 얻고 이해를 심화시키세요.",
      "요약과 자기표현: 읽은 내용을 본인의 말로 다시 표현하여 뇌에 확실히 각인시키세요.",
      "독서 일정 수립: 따로 읽고 생각할 시간을 일정으로 만들어 집중력을 유지하세요."
    ],
    memoryStrategy: [
      "스터디 그룹 참여: 정보를 공유하고 토론하는 과정을 통해 기억력을 강화하세요.",
      "기억 궁전의 활용: 정보를 익숙한 환경의 특정 장소나 사물과 연결하여 기억하세요.",
      "능동적 회상: 정보를 요약하거나 타인에게 가르치는 연습을 통해 연결을 강화하세요."
    ],
    decisionStrategy: [
      "협력과 소통: 다양한 관점과 통찰을 수집하여 의사결정에 반영하세요.",
      "합의의 도출: 이해관계자 간의 합의를 이끌어내 지속 가능한 해결책을 만드세요.",
      "균형 유지: 본래의 공감 능력과 객관적인 판단의 균형을 맞추는 연습을 하세요."
    ],
    chemistry: {
      partner: "민첩한 치타 (Cheetah)",
      synergy: "코끼리의 세심한 지원이 치타의 돌진에 안정감을 더해 완벽한 결과를 냅니다."
    },
    blindSpot: "변화에 소극적일 수 있으며 본인보다 타인을 앞세우는 경향이 있습니다.",
    declaration: "나는 흔들리지 않는 끈기와 포용력으로, 어떠한 어려움도 이겨내는 견고한 실천가이다.",
    recommendedAction: "가장 친한 사람 한 명에게 오늘 배운 핵심 내용을 5분 동안 친절하게 설명해 주는 시간을 가져 보세요."
  },
};
