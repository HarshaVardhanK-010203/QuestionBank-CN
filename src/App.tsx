import { Search, Moon, Sun, BookOpen, Menu, X, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions as QUESTIONS } from './data/questions';
import { modules } from './data/modules';
import { Question } from './types';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMark, setSelectedMark] = useState<number | 'ALL'>('ALL');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const filteredQuestions = useMemo(() => {
    return (QUESTIONS || []).filter(q => {
      const matchesModule = selectedModule === null || q.moduleId === selectedModule;
      const matchesMark = selectedMark === 'ALL' || q.marks === selectedMark;
      const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           (q.answer.definition?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
                           (q.answer.directAnswer?.toLowerCase().includes(searchQuery.toLowerCase()) || false);
      return matchesModule && matchesMark && matchesSearch;
    });
  }, [selectedModule, selectedMark, searchQuery]);

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${isDarkMode ? 'dark bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'}`}>
      
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed inset-y-0 left-0 z-50 w-72 h-full border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-y-auto pt-6 px-4"
          >
            <div className="flex items-center justify-between mb-8 px-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h1 className="font-bold text-xl tracking-tight">NetAcademy</h1>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setSelectedModule(null)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${selectedModule === null ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
              >
                All Modules
              </button>
              <div className="pt-4 pb-2">
                <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">Modules</p>
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(m.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${selectedModule === m.id ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                  >
                    Module {m.id}: {m.title.replace('Module ' + m.id + ': ', '').split(' & ')[0]}
                  </button>
                ))}
              </div>
            </nav>

            <div className="absolute bottom-6 left-4 right-4 focus:outline-none">
               <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase mb-2">Quick Stats</p>
                  <div className="flex justify-between items-center text-xs">
                    <span>Questions</span>
                    <span className="font-mono">{QUESTIONS.length}</span>
                  </div>
               </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-72' : 'ml-0'}`}>
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 py-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {!isSidebarOpen && (
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Menu className="w-5 h-5" />
                </button>
              )}
              <div className="relative group flex-1 max-w-md hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search questions or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-100 dark:bg-neutral-900 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none text-neutral-900 dark:text-neutral-100"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800 mx-1 hidden sm:block"></div>
              <div className="flex bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl">
                 {(['ALL', 15, 8, 2] as const).map(mark => (
                   <button
                    key={mark}
                    onClick={() => setSelectedMark(mark)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${selectedMark === mark ? 'bg-white dark:bg-neutral-800 shadow-sm text-indigo-600 dark:text-indigo-300' : 'text-neutral-500 hover:text-neutral-700'}`}
                   >
                     {mark === 'ALL' ? 'ALL' : `${mark}M`}
                   </button>
                 ))}
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {selectedModule === null ? 'Computer Network Bank' : modules.find(m => m.id === selectedModule)?.title}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl">
              {selectedModule === null ? 'All questions categorized by modules and mark values.' : modules.find(m => m.id === selectedModule)?.description}
            </p>
          </header>

          <div className="space-y-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => (
                <QuestionCard 
                  key={q.id} 
                  question={q} 
                />
              ))
            ) : (
              <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/40 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800">
                <HelpCircle className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-500">No questions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function QuestionCard({ 
  question 
}: { 
  question: Question; 
  key?: string | number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-indigo-200 dark:border-indigo-900 bg-white dark:bg-neutral-950 shadow-xl scale-[1.01]' : 'border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-indigo-100 dark:hover:border-indigo-900'}`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
            question.marks === 15 ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
            question.marks === 8 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
            'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
          }`}>
            {question.marks} MARK
          </span>
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {question.question}
          </h3>
        </div>
        <ChevronRight className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-indigo-500' : ''}`} />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 border-t border-neutral-100 dark:border-neutral-800 pt-6">
              {question.marks === 2 ? (
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-1 pt-1 rounded-full bg-emerald-500" />
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                      "{question.answer.definition || question.answer.directAnswer}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Definition */}
                  <section>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-3 flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4" /> Definition
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {question.answer.definition}
                    </p>
                  </section>

                  {/* Explanation */}
                  {question.answer.explanation && (
                    <section>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-3">Explanation</h4>
                      <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                        <p className="text-neutral-600 dark:text-neutral-400 leading-loose text-sm">
                          {question.answer.explanation}
                        </p>
                      </div>
                    </section>
                  )}

                  {/* Diagram Description */}
                  {question.answer.diagramExplanation && (
                    <section className="border-l-4 border-indigo-200 dark:border-indigo-900 pl-6 py-2">
                      <h4 className="text-xs font-bold uppercase text-neutral-400 mb-2">Diagram Overview</h4>
                      <p className="text-sm text-neutral-500 italic">
                        {question.answer.diagramExplanation}
                      </p>
                    </section>
                  )}

                  {/* Pros & Cons / Key Points */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {question.answer.keyPoints && question.answer.keyPoints.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-4">Key Insights</h4>
                        <ul className="space-y-2">
                          {question.answer.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                              <span className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(question.answer.advantages || question.answer.disadvantages) && (
                      <div className="space-y-6">
                        {question.answer.advantages && (
                          <div>
                            <p className="text-[10px] font-bold uppercase text-neutral-400 mb-2">Advantages</p>
                            <div className="flex flex-wrap gap-2">
                              {question.answer.advantages.map((adv, idx) => (
                                <span key={idx} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs rounded-full border border-emerald-100 dark:border-emerald-800">
                                  {adv}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {question.answer.disadvantages && (
                          <div>
                            <p className="text-[10px] font-bold uppercase text-neutral-400 mb-2">Disadvantages</p>
                            <div className="flex flex-wrap gap-2">
                              {question.answer.disadvantages.map((dis, idx) => (
                                <span key={idx} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs rounded-full border border-rose-100 dark:border-rose-800">
                                  {dis}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Conclusion */}
                  {question.answer.conclusion && (
                     <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 italic">
                          <span className="font-bold uppercase not-italic mr-2">Summary:</span>
                          {question.answer.conclusion}
                        </p>
                     </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
