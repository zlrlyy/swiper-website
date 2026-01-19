
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateWorldInsight } from '../services/geminiService';
import { Sparkles, Loader2, Search } from 'lucide-react';

const LoreExploreSection: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleExplore = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const result = await generateWorldInsight(topic);
    setInsight(result);
    setLoading(false);
  };

  return (
    <section className="snap-slide bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="z-10 text-center max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-6">Uncover the Unseen</h2>
        <p className="text-gray-400 text-lg mb-10 font-light">
          Ask the Whispering Winds about the history, creatures, or artifacts of the Mythos realm. Our AI sage will reveal the truth.
        </p>

        <div className="relative mb-12">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExplore()}
            placeholder="Search for lore (e.g., The Moonlit Dragon, Lost Kings)..."
            className="w-full bg-transparent border-b-2 border-gray-800 focus:border-[#d4af37] px-4 py-4 text-xl outline-none transition-colors duration-300 font-cinzel"
          />
          <button 
            onClick={handleExplore}
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#d4af37] p-2 hover:scale-110 transition-transform disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Search />}
          </button>
        </div>

        <div className="min-h-[200px] relative">
          {insight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg relative backdrop-blur-sm"
            >
              <Sparkles className="absolute -top-3 -left-3 text-[#d4af37] w-8 h-8" />
              <p className="italic text-gray-300 leading-relaxed text-lg text-left font-serif">
                "{insight}"
              </p>
              <div className="mt-4 text-right text-[#d4af37] text-xs font-cinzel tracking-widest">— THE ORACLE</div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default LoreExploreSection;
