import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Diganta Halder</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Badge className="px-3 py-1 text-sm mt-3" variant="secondary">
              Full-Stack Developer
            </Badge>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src='/protfolio.svg' alt='Portfolio' className='w-64 md:w-80 lg:w-96' />
        </motion.div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <h2 className="text-2xl font-semibold">Profile Summary</h2>
        <ul className="text-lg text-muted-foreground mt-2 list-disc list-inside">
          <li>Dynamic and results-driven Software Developer Engineer with hands-on experience in developing scalable web applications using React.js, Node.js, and related technologies.</li>
          <li>Proven track record of optimizing performance, enhancing user experience, and delivering high-quality software solutions.</li>
          <li>Seeking to leverage expertise in a challenging SDE role within a growth-oriented organization.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
