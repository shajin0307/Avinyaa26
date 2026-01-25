import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Rocket,
  Code2,
  Cpu,
  Bot,
  ShieldCheck,
  Trophy,
  Zap,
  Gamepad2,
  Dumbbell,
  Sparkles,
  Menu,
  X,
  Users,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  MapPin,
  Calendar,
  ArrowDownCircle,
  Flag
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// Images
import retroDecode from '../assets/events/retro_decode_burgundy.png';
import promptVerse from '../assets/events/prompt_verse_burgundy.png';
import mindMatrix from '../assets/events/mind_matrix_burgundy.png';
import innoPaperx from '../assets/events/inno_paperx.png';
import havoc from '../assets/events/havoc_burgundy.png';
import valorant from '../assets/events/valorant_burgundy.png';
// import LightRays from '../components/LightRays';

const Events = () => {
  const { isDark } = useOutletContext() || { isDark: true };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events-grid');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allEvents = [
    {
      id: 'tech-1',
      category: 'Technical',
      title: 'RETRO DECODE',
      shortDesc: 'SQL Puzzles & Logic',
      fullDesc: `RETRO DECODE is an individual, puzzle-based SQL event testing fundamentals, logic, and memory across three engaging rounds.

Rounds:
1. MIND SPARK: Jumbled queries, error hunting, and MCQs.
2. DECODE QUEST: Solve SQL problems to unlock encrypted clues.
3. FOCUS LOOP: Visual memory challenge.

Rules:
• Individual participation only.
• Bring your own laptop.
• No internet allowed unless instructed.
• No elimination - all participants play all rounds.
• Cumulative scoring determines the winner.`,
      cashPrize: '₹2,000',
      prizeBreakdown: '1st: ₹1,200 | 2nd: ₹800',
      coordinators: ['VIMALESH - 88700 41235', 'KALYANI - 9500134746'],
      organizers: [
        'GIRIJA S D', 'G SRAVANTHI', 'J APARNA', 'KONDAPATURI SRICHANDANA', 'MUDI SWETHA',
        'JAYA SHREE', 'RAVI TEJA A', 'SANJEEV RAJ', 'SINDHU', 'THARUN V S', 'V YASASWI',
        'Y BINDULATHA', 'POLAVARAM CHETHANA', 'C AATHIL FELIX', 'AKASH S', 'AVINASH M',
        'HARI R', 'HARI VENKAT D', 'KARTHICK R'
      ],
      time: '2 Hours',
      team: 'Individual',
      image: retroDecode,
      icon: <Code2 className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe75DrfRSPNR2qDFsQ50eYZdr-_X5FhFD7TmETTyvgFHCfC-A/viewform',
      accent: 'from-pink-600 to-rose-900',
      venue: 'AI103'
    },
    {
      id: 'tech-2',
      category: 'Technical',
      title: 'PROMPT VERSE',
      shortDesc: 'Generative AI Face-off',
      fullDesc: `PromptVerse involves three non-elimination rounds testing creativity and prompt engineering skills.

Rounds:
1. CoT Gravity: Connect a seed word with a forbidden "gravity" word using logic/synonyms (Max 5 prompts).
2. Spin The Wheel: Generate media based on randomized Domain, Style, and Constraint wheels (30 mins).
3. Stitch The UI: Create a UI design using prompts in Google Stitch for an assigned domain.

Rules:
• Max 3 members per team.
• Bring your own laptop.
• Strict theme adherence.
• No plagiarism.`,
      cashPrize: '₹2,000',
      prizeBreakdown: '1st: ₹1,200 | 2nd: ₹800',
      coordinators: ['APPARNA R - 7904483789', 'KAMALIKA M - 8115382345', 'KANMANI P - 7397380858'],
      organizers: [
        'DHARMADURAI', 'HASIKA', 'HINDHUJA', 'MYTHREYAN', 'FARHAN TAWFEEQ',
        'LAKSHAN ADHITHYAA', 'PARTHIV', 'PRASAD', 'PUNITH SAI', 'RAVI KIRAN',
        'RITESH CHOWDARY', 'RITHISH KUMAR', 'SAI KAMAL', 'YOGESHWARAN'
      ],
      time: '2 Hours',
      team: 'Max 3 Members',
      image: promptVerse,
      icon: <Cpu className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdhEl0RhoMrO9aZaO1VNc-Hn_AJ6gohGetuwcedX1EZ6XloaQ/viewform',
      accent: 'from-fuchsia-600 to-purple-900',
      venue: 'AI205'
    },
    {
      id: 'tech-3',
      category: 'Technical',
      title: 'MINDMATRIX',
      shortDesc: 'AI Thinking & Strategy',
      fullDesc: `MindMatrix is a team-based technical event for students interested in Artificial Intelligence and Machine Learning. This event does not focus on coding or paper presentations. Instead, it tests AI thinking, problem-solving, teamwork, and decision-making in a fun and interactive way.
Participants solve real-world AI problems through game-based activities, select the correct AI approach, write simple Python syntax snippets, identify algorithms through image puzzles, and defend their choices before judges. All activities are light, safe, and engaging.

Special Reference Rule:
• Personal laptops and mobile phones are not allowed
• If reference is needed, teams must solve an extra image-based puzzle
• Upon success, 5 minutes of laptop usage will be allowed
• Laptop will be provided by the organizers

Rules & Regulations:
• Team participation only (2–4 members)
• Pen and paper will be provided
• Physical activities are light and safe
• Judges’ decision is final`,
      cashPrize: '₹2,000',
      prizeBreakdown: '1st: ₹1,200 | 2nd: ₹800',
      coordinators: ['EZHUMALAI A - 9384277193', 'SANGEETHA S - 6382025794', 'SHAIK SAMREEN - 7093780449'],
      organizers: [
        'Pavan Shankaran B', 'Sanjeev Raj G', 'Ramya N.C', 'Nagavarapu Mourya',
        'Doradla Amrutha Preethi', 'Enugurthi Harshitha', 'Maddineni Lahari', 'Motupalli Shruthi',
        'Mulla Thanuja', 'Muthukuru Vaishno Tejaswini', 'Puvvadi Lakshmi Bargavi',
        'C Santhi Swaroop', 'Shaik Mohammad Hafruddin', 'Suda Abhi Satwika', 'Vankavaram Preethi'
      ],
      time: '2 Hours',
      team: 'Teams of 2-4',
      image: mindMatrix,
      icon: <Bot className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/1pvzTJ4XwNGtTqsgZ7EC7vTH-Y0IBPemKy8x1UJ6e1UM/viewform?edit_requested=true',
      accent: 'from-amber-500 to-orange-700',
      venue: 'AI102'
    },
    {
      id: 'tech-4',
      category: 'Technical',
      title: 'INNO PAPERX',
      shortDesc: 'National Paper Presentation',
      fullDesc: `The event features a Paper Presentation, an academic platform where participants present their research, ideas, findings, or understanding on a selected topic in a structured and formal manner. Presentations are typically supported by slides and delivered within a fixed time, followed by a brief Q&A session.

This event encourages participants to enhance communication skills, subject expertise, confidence, and critical thinking. It also promotes exploration of emerging concepts, collaborative learning, and professional knowledge exchange.

Domains:
• Artificial Intelligence
• Quantum Computing
• Cybersecurity
• Blockchain
• Internet of Things (IoT)
• Cloud Computing

Rules & Regulations:
• Paper must follow IEEE standard format or any other recognized journal format.
• Participants must bring their own laptop.
• Slide template should match the research topic.
• Maximum of 10 slides.
• Presentation must strictly follow timing: 10 mins presentation + 2 mins Q&A.
• Font style & size must be readable and professional.

Judging Criteria:
• Originality
• Structure & Clarity of Presentation
• Accuracy
• Importance of Study
• Results / Findings
• Participation of All Team Members`,
      cashPrize: '₹2,000',
      prizeBreakdown: '1st: ₹1,200 | 2nd: ₹800',
      coordinators: ['Ssrutheega G I — 7904558206', 'Ruchita B K — 9025963007'],
      organizers: [
        'Mathinshack Meshack', 'Tharun S', 'Nivetha M', 'Jeeva Kumar', 'Pooja',
        'Mulaka Thanuja', 'Neha', 'Shivanne', 'Leema', 'Pavithra'
      ],
      time: '2 Hours',
      team: 'Max 3 Members',
      image: innoPaperx,
      icon: <ShieldCheck className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/1PJ4jKQj8kSrB_JElISd9nXqfn5wkn2j55ajQs9Nj-o4/viewform?edit_requested=true',
      accent: 'from-slate-400 to-slate-600',
      venue: 'AI204'
    },
    {
      id: 'non-tech-1',
      category: 'Non-Technical',
      title: 'HAVOC',
      shortDesc: 'Skill, Focus, Teamwork',
      fullDesc: `HAVOC features four offline games designed to test skill, focus, and teamwork. Teams can choose any two games from the lineup. Each game follows a point system, and the final score will be based on the total points earned across the two games they play. All selected games must be completed within the given timeframe to qualify for scoring.

RULES:
1. Each team consists of two players.
2. Teams must choose and play any two games from the four available.
3. Points are awarded based on performance in each selected game.
4. Scores from both games are combined to calculate the team’s total score.
5. The team with the highest total score is declared the winner.`,
      cashPrize: '₹2,200',
      coordinators: ['Lakshmi Shri K - 7010724907', 'Samiksha S - 9042442709'],
      organizers: [
        'Shruthi', 'Bhunavesh Ravi', 'Chethan', 'Deepak', 'Dhanush', 'Madhav', 'Moghish',
        'Yuvaraj', 'Aswini', 'Girish', 'Haridharshini', 'Harini', 'Lakshitha', 'Mogith',
        'Monish', 'Padma Priya', 'Ramachandru', 'Sabharish', 'Sudeep', 'Thulasi', 'Velan'
      ],
      time: '2 Hours',
      team: 'Teams of 2',
      image: havoc,
      icon: <Dumbbell className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/1V2_l_zhrJFFpotI31D5mvzXAxTvfdTFsp4dpK7oq9rA/viewform?edit_requested=true',
      accent: 'from-red-600 to-red-900',
      venue: 'AIML Seminar Hall'
    },
    {
      id: 'non-tech-2',
      category: 'Non-Technical',
      title: 'VALORANT SHOWDOWN',
      shortDesc: '5v5 Tactical Shooter',
      fullDesc: `VALORANT SHOWDOWN is a high-intensity team-based esports event conducted as part of AVINYAA’26, the annual symposium of R.M.D Engineering College. This tournament brings together competitive Valorant teams to showcase tactical gameplay, coordination, and skill in an electrifying 5v5 battle environment.

PARTICIPATION:
• Team-based
• 5 players per team
• 1 optional substitute allowed

REQUIREMENTS:
• Participants are encouraged to bring their own peripherals (keyboard, mouse, earphones, etc.)
• Earphones are not provided on college setups
• Bluetooth devices are not supported on provided systems
• Players may bring and use their own gaming laptops/setups
• Dedicated PC setups will also be available at the venue`,
      cashPrize: '₹1,500',
      coordinators: ['Kiran S – 9600078487', 'Kiran K – 93474 24055'],
      organizers: [
        'Ganapathy Shree', 'Baradwaj', 'Mithilesh', 'Chandu P.V', 'Meghasyam', 'Sri Nikesh',
        'Jasir', 'Haneesh', 'Aashish', 'Nizam', 'Bhuvan Sai', 'Harsha', 'Hari Haran',
        'Vibhav', 'Nishant', 'Munish'
      ],
      time: '2 Hours',
      team: '5 Players',
      image: valorant,
      icon: <Gamepad2 className="w-6 h-6" />,
      registerLink: 'https://docs.google.com/forms/d/1EW3Io66WNvds-QSviNAHJ72DZL8Cjm3V2F_jmMRXQgA/viewform?edit_requested=true',
      accent: 'from-rose-600 to-purple-900',
      venue: 'Computer Lab'
    }
  ];

  const techEvents = allEvents.filter(e => e.category === 'Technical');
  const nonTechEvents = allEvents.filter(e => e.category === 'Non-Technical');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    // Main Container with Red/White Chip Logic
    <div className={`min-h-screen relative overflow-x-hidden font-display transition-colors duration-700 ${isDark ? 'bg-[#2a0a10] text-white selection:bg-rose-500/30' : 'bg-gray-100 text-gray-900 selection:bg-rose-500/30'}`}>

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 transition-colors duration-700 ${isDark ? 'bg-gradient-to-b from-[#3d0f16] via-[#1f0508] to-[#0f0000]' : 'bg-gradient-to-b from-[#ffffff] via-[#f3f4f6] to-[#e5e7eb]'}`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] blur-[30px] pointer-events-none transition-colors duration-700 ${isDark ? 'bg-gradient-to-b from-[#ff3366]/20 to-transparent mix-blend-screen' : 'bg-gradient-to-b from-rose-200 to-transparent mix-blend-multiply'}`} />
      </div>

      {/* Hero Section - Text Reveal Animation */}
      <header className="relative pt-32 pb-12 px-6 text-center z-10 min-h-[50vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${isDark ? 'border-rose-400/30 bg-rose-900/80 shadow-[0_0_20px_rgba(225,29,72,0.2)]' : 'border-rose-200 bg-white/90 shadow-sm'}`}
        >
          <Flag className={`w-4 h-4 ${isDark ? 'text-rose-300' : 'text-rose-600'}`} />
          <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDark ? 'text-rose-100' : 'text-rose-900'}`}>3rd National Level Symposium</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.0] overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center gap-1 md:gap-4 flex-nowrap">
            {"AVINYAA".split('').map((char, index) => (
              <motion.span key={index} variants={wordVariants} className={`inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}>{char}</motion.span>
            ))}
          </div>
          <motion.div
            className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-rose-400 drop-shadow-md mt-2"
            initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            ASCENSION
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-12 ${isDark ? 'text-rose-100/90' : 'text-gray-600'}`}
        >
          A professional showcase of technical prowess and creative brilliance. Competition redefined.
        </motion.p>

        {/* Placeholder Menu / Scroll Trigger */}
        <motion.button
          onClick={scrollToEvents}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className={`group flex flex-col items-center gap-2 cursor-pointer transition-all hover:scale-110 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2">Explore Events</span>
          <ArrowDownCircle className={`w-10 h-10 ${isDark ? 'text-white' : 'text-gray-900'} animate-bounce`} />
        </motion.button>
      </header>

      {/* Main Content */}
      <main id="events-grid" className="max-w-[1440px] mx-auto px-6 pb-10 z-10 relative">

        {/* Technical Domain */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-2 h-12 bg-rose-500 rounded-full shadow-[0_0_20px_#e11d48]" />
            <div>
              <h2 className={`text-4xl font-black tracking-[0.05em] uppercase ${isDark ? 'text-white' : 'text-rose-950'}`}>Technical Domain</h2>
              <p className={`text-sm font-bold tracking-widest mt-1 ${isDark ? 'text-rose-200/60' : 'text-rose-700/80'}`}>CODE • INNOVATE • CONQUER</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techEvents.map((event, index) => (
              <AnimatedEventCard key={event.id} event={event} index={index} onClick={() => setSelectedEvent(event)} />
            ))}
          </div>
        </section>

        {/* Non-Technical Domain */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12 justify-end text-right"
          >
            <div>
              <h2 className={`text-4xl font-black tracking-[0.05em] uppercase ${isDark ? 'text-white' : 'text-rose-950'}`}>Non-Technical Domain</h2>
              <p className={`text-sm font-bold tracking-widest mt-1 ${isDark ? 'text-rose-200/60' : 'text-rose-700/80'}`}>STRATEGY • SKILL • GLORY</p>
            </div>
            <div className="w-2 h-12 bg-white rounded-full shadow-[0_0_20px_#ffffff]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonTechEvents.map((event, index) => (
              <AnimatedEventCard key={event.id} event={event} index={index} onClick={() => setSelectedEvent(event)} isWide={true} />
            ))}
          </div>
        </section>

      </main>



      {/* Modal - Scale In Animation */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0f0005]/80 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          />

          <button
            onClick={() => setSelectedEvent(null)}
            className="fixed top-6 right-6 z-[100] p-3 bg-rose-600 hover:bg-rose-700 border border-rose-400/50 rounded-full text-white shadow-[0_0_20px_rgba(225,29,72,0.6)] transition-all hover:rotate-90 hover:scale-110"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            layoutId={selectedEvent.id}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-6xl h-[90vh] md:h-[800px] bg-[#1a0508] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row z-50"
          >


            {/* Left Image Side */}
            <div className="w-full md:w-[45%] relative bg-black overflow-hidden group">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0508] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-20 left-10 right-10">
                <h2 className="text-5xl font-black text-white uppercase leading-none drop-shadow-lg mb-2">{selectedEvent.title}</h2>
                <p className="text-xl text-rose-200/80 font-display tracking-wider mb-6 italic">{selectedEvent.shortDesc}</p>
                <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-widest text-sm">
                  <Zap className="w-4 h-4 fill-current" /> {selectedEvent.category} Event
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-[55%] p-10 md:p-14 overflow-y-auto custom-scrollbar bg-[#1a0508] relative">
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${selectedEvent.accent} rounded-full blur-[150px] opacity-10 pointer-events-none`} />

              <div className="relative z-10">
                <p className="text-lg text-rose-100/80 leading-relaxed mb-10 font-medium font-sans whitespace-pre-line">
                  {selectedEvent.fullDesc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1">
                      <Trophy className="w-4 h-4" /> Prize Pool
                    </div>
                    <div className="text-2xl font-bold text-white">{selectedEvent.prizeBreakdown || selectedEvent.cashPrize}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1">
                      <Users className="w-4 h-4" /> Team Size
                    </div>
                    <div className="text-2xl font-bold text-white">{selectedEvent.team}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1">
                      <Clock className="w-4 h-4" /> Duration
                    </div>
                    <div className="text-2xl font-bold text-white">{selectedEvent.time}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1">
                      <MapPin className="w-4 h-4" /> Venue
                    </div>
                    <div className="text-2xl font-bold text-white">{selectedEvent.venue}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400 mb-4">Event Coordinators</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedEvent.coordinators.map((name, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-lg border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                          {name.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold text-rose-100">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedEvent.organizers && selectedEvent.organizers.length > 0 && (
                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400 mb-4">Organizers</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.organizers.map((name, i) => (
                        <span key={i} className="text-xs font-medium text-rose-200/60 bg-white/5 px-2 py-1 rounded border border-white/5">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href={selectedEvent.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 bg-white text-[#1a0508] rounded-xl font-black text-center uppercase tracking-[0.2em] hover:bg-rose-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Register Now
                </a>
              </div>
            </div>


          </motion.div>
        </div>
      )}
    </div>
  );
};

// Animated Card Component
const AnimatedEventCard = ({ event, index, onClick, isWide = false }) => {
  // Random Direction for Scroll Reveal
  const directions = [{ x: -50, y: 50 }, { x: 50, y: 50 }, { x: 0, y: 100 }, { x: -50, y: 0 }, { x: 50, y: 0 }];
  const randomDir = directions[index % directions.length];

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, x: randomDir.x, y: randomDir.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative ${isWide ? 'h-[350px]' : 'h-[450px]'} bg-[#120205] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_0_40px_rgba(225,29,72,0.3)] transition-all border border-white/5 hover:border-rose-500/50 will-change-transform`}
    >
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150305] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest text-white uppercase">
            {event.category}
          </span>
        </motion.div>

        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wide drop-shadow-md">{event.title}</h3>
          <div className="w-12 h-1 bg-rose-500 mb-3 rounded-full" />
          <p className="text-rose-100/90 text-sm font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">{event.fullDesc}</p>
          <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-white/90">
            <span className="flex items-center gap-2"><Trophy className="w-3 h-3 text-rose-400" /> {event.cashPrize}</span>
            <span className="flex items-center gap-2"><Users className="w-3 h-3 text-rose-400" /> {event.team}</span>
          </div>
        </div>

        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
