
export interface Question {
  id: string;
  moduleId: number;
  marks: 2 | 8 | 15;
  question: string;
  answer: {
    definition: string;
    explanation?: string;
    diagramExplanation?: string;
    example?: string;
    advantages?: string[];
    disadvantages?: string[];
    applications?: string[];
    conclusion?: string;
    keyPoints: string[];
    directAnswer?: string;
  };
}

export interface Module {
  id: number;
  title: string;
  description: string;
}
