import { CategoryInfo, Question } from '../types/quiz';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Categories',
    description: 'Comprehensive cross-disciplinary challenge across all subjects.',
  },
  {
    id: 'science',
    name: 'Science & Nature',
    description: 'Physics, chemistry, astronomy, cell biology, and natural phenomena.',
  },
  {
    id: 'technology',
    name: 'Technology & Computing',
    description: 'Computer architecture, networking, software logic, and digital history.',
  },
  {
    id: 'history',
    name: 'History & Civilization',
    description: 'Ancient empires, watershed eras, revolutions, and geopolitical milestones.',
  },
  {
    id: 'geography',
    name: 'Geography & Earth',
    description: 'Physical terrain, cartography, capitals, hydrology, and biomes.',
  },
  {
    id: 'literature',
    name: 'Literature & Philosophy',
    description: 'World literature, philosophical discourse, rhetoric, and classical texts.',
  },
  {
    id: 'mathematics',
    name: 'Mathematics & Logic',
    description: 'Number theory, probability, deductive reasoning, and geometry.',
  },
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'Global affairs, economics, architecture, languages, and culture.',
  },
];

export const QUESTION_BANK: Question[] = [
  // ===================== SCIENCE (Beginner) =====================
  {
    id: 'sci-b-01',
    category: 'science',
    level: 'beginner',
    question: 'What is the most abundant gas in Earth\'s atmosphere by volume?',
    options: ['Nitrogen', 'Oxygen', 'Argon', 'Carbon Dioxide'],
    correctAnswer: 'Nitrogen',
    explanation: 'Nitrogen makes up approximately 78.08% of Earth\'s atmosphere, followed by oxygen at about 20.95%.'
  },
  {
    id: 'sci-b-02',
    category: 'science',
    level: 'beginner',
    question: 'Which subatomic particle carries a negative electric charge?',
    options: ['Electron', 'Proton', 'Neutron', 'Positron'],
    correctAnswer: 'Electron',
    explanation: 'Electrons carry a negative elementary charge (-1e), whereas protons carry a positive charge and neutrons are neutral.'
  },
  {
    id: 'sci-b-03',
    category: 'science',
    level: 'beginner',
    question: 'What organelle is commonly referred to as the powerhouse of eukaryotic cells?',
    options: ['Mitochondrion', 'Ribosome', 'Golgi apparatus', 'Endoplasmic reticulum'],
    correctAnswer: 'Mitochondrion',
    explanation: 'Mitochondria generate most of the cell\'s chemical energy in the form of adenosine triphosphate (ATP).'
  },
  {
    id: 'sci-b-04',
    category: 'science',
    level: 'beginner',
    question: 'At sea level, what is the boiling point of pure water in Celsius?',
    options: ['100°C', '90°C', '110°C', '212°C'],
    correctAnswer: '100°C',
    explanation: 'Under 1 standard atmospheric pressure (101.325 kPa), pure water boils at exactly 100°C (212°F).'
  },
  {
    id: 'sci-b-05',
    category: 'science',
    level: 'beginner',
    question: 'What is the chemical symbol for gold on the periodic table?',
    options: ['Au', 'Ag', 'Fe', 'Gd'],
    correctAnswer: 'Au',
    explanation: 'The symbol Au originates from the Latin word for gold, "aurum," meaning shining dawn.'
  },
  {
    id: 'sci-b-06',
    category: 'science',
    level: 'beginner',
    question: 'Which planet in our solar system has the highest average surface temperature?',
    options: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
    correctAnswer: 'Venus',
    explanation: 'Although Mercury is closer to the Sun, Venus possesses a dense CO2 atmosphere creating a runaway greenhouse effect reaching ~465°C.'
  },

  // ===================== SCIENCE (Intermediate) =====================
  {
    id: 'sci-i-01',
    category: 'science',
    level: 'intermediate',
    question: 'What fundamental law states that pressure and volume of a gas are inversely proportional at constant temperature?',
    options: ['Boyle\'s Law', 'Charles\'s Law', 'Gay-Lussac\'s Law', 'Avogadro\'s Law'],
    correctAnswer: 'Boyle\'s Law',
    explanation: 'Boyle\'s Law (P1V1 = P2V2) dictates that for a fixed amount of gas at constant temperature, pressure and volume are inversely related.'
  },
  {
    id: 'sci-i-02',
    category: 'science',
    level: 'intermediate',
    question: 'What type of chemical bond involves the equal sharing of electron pairs between identical nonmetal atoms?',
    options: ['Nonpolar covalent bond', 'Polar covalent bond', 'Ionic bond', 'Hydrogen bond'],
    correctAnswer: 'Nonpolar covalent bond',
    explanation: 'When two atoms with identical or very similar electronegativity share electrons, the bond is nonpolar covalent.'
  },
  {
    id: 'sci-i-03',
    category: 'science',
    level: 'intermediate',
    question: 'Which enzyme is primarily responsible for unzipping the DNA double helix during replication?',
    options: ['DNA Helicase', 'DNA Polymerase', 'RNA Primase', 'DNA Ligase'],
    correctAnswer: 'DNA Helicase',
    explanation: 'Helicases break hydrogen bonds between nitrogenous base pairs to separate the two strands ahead of the replication fork.'
  },
  {
    id: 'sci-i-04',
    category: 'science',
    level: 'intermediate',
    question: 'In the electromagnetic spectrum, which radiation has wavelengths directly shorter than visible violet light?',
    options: ['Ultraviolet', 'Infrared', 'Microwaves', 'X-rays'],
    correctAnswer: 'Ultraviolet',
    explanation: 'Ultraviolet (UV) radiation spans 10 nm to 400 nm, which is directly shorter in wavelength (and higher in frequency) than visible violet light.'
  },
  {
    id: 'sci-i-05',
    category: 'science',
    level: 'intermediate',
    question: 'What is the SI unit of electrical capacitance?',
    options: ['Farad', 'Henry', 'Siemens', 'Ohm'],
    correctAnswer: 'Farad',
    explanation: 'The farad (F), named after Michael Faraday, is the SI unit representing capacitance in coulombs per volt.'
  },

  // ===================== SCIENCE (Advanced) =====================
  {
    id: 'sci-a-01',
    category: 'science',
    level: 'advanced',
    question: 'The Bohr effect in respiratory physiology describes the shift of hemoglobin\'s oxygen dissociation curve caused by:',
    options: [
      'Decreased pH and increased carbon dioxide concentration',
      'Increased pH and decreased carbon dioxide concentration',
      'Decreased temperature and 2,3-BPG concentration',
      'Increased partial pressure of atmospheric oxygen'
    ],
    correctAnswer: 'Decreased pH and increased carbon dioxide concentration',
    explanation: 'Elevated CO2 and H+ ions stabilize deoxyhemoglobin in tissues, lowering oxygen affinity and facilitating O2 release.'
  },
  {
    id: 'sci-a-02',
    category: 'science',
    level: 'advanced',
    question: 'Which gauge boson is responsible for mediating the strong nuclear force binding quarks into hadrons?',
    options: ['Gluon', 'W boson', 'Z boson', 'Photon'],
    correctAnswer: 'Gluon',
    explanation: 'Gluons carry color charge and mediate the strong interaction described by quantum chromodynamics (QCD).'
  },
  {
    id: 'sci-a-03',
    category: 'science',
    level: 'advanced',
    question: 'What is the Chandrasekhar limit, approximately representing the maximum mass of a stable white dwarf?',
    options: ['1.44 Solar Masses', '3.0 Solar Masses', '0.08 Solar Masses', '5.2 Solar Masses'],
    correctAnswer: '1.44 Solar Masses',
    explanation: 'Above roughly 1.4 solar masses, electron degeneracy pressure fails to halt gravitational collapse, leading to a neutron star or supernova.'
  },
  {
    id: 'sci-a-04',
    category: 'science',
    level: 'advanced',
    question: 'In cellular respiration, what is the terminal electron acceptor in the mitochondrial electron transport chain?',
    options: ['Molecular Oxygen (O₂)', 'NAD+', 'Cytochrome c', 'Water (H₂O)'],
    correctAnswer: 'Molecular Oxygen (O₂)',
    explanation: 'Cytochrome c oxidase transfers electrons to molecular oxygen, which reacts with protons to form water as the final byproduct.'
  },

  // ===================== TECHNOLOGY & COMPUTING (Beginner) =====================
  {
    id: 'tech-b-01',
    category: 'technology',
    level: 'beginner',
    question: 'How many bits are contained in a standard computer byte?',
    options: ['8 bits', '4 bits', '16 bits', '32 bits'],
    correctAnswer: '8 bits',
    explanation: 'A standard byte consists of 8 bits, capable of representing 256 distinct numeric states (0 to 255).'
  },
  {
    id: 'tech-b-02',
    category: 'technology',
    level: 'beginner',
    question: 'What does the acronym "HTTP" stand for in web architecture?',
    options: [
      'Hypertext Transfer Protocol',
      'High-performance Terminal Text Program',
      'Hyperlink Transmission Tool Protocol',
      'Host Token Transfer Platform'
    ],
    correctAnswer: 'Hypertext Transfer Protocol',
    explanation: 'HTTP is the foundational application-layer protocol for transmitting hypermedia documents across the World Wide Web.'
  },
  {
    id: 'tech-b-03',
    category: 'technology',
    level: 'beginner',
    question: 'Which computer component is classified as volatile primary memory?',
    options: ['RAM (Random Access Memory)', 'NVMe SSD', 'Hard Disk Drive', 'BIOS ROM'],
    correctAnswer: 'RAM (Random Access Memory)',
    explanation: 'RAM requires continuous electrical power to preserve data; when power is terminated, the stored state is cleared.'
  },
  {
    id: 'tech-b-04',
    category: 'technology',
    level: 'beginner',
    question: 'Which symbol represents a single-line comment in JavaScript?',
    options: ['//', '#', '<!--', '/*'],
    correctAnswer: '//',
    explanation: 'Double forward slashes (//) indicate the remainder of the line is a comment in JavaScript, C, Java, and TypeScript.'
  },
  {
    id: 'tech-b-05',
    category: 'technology',
    level: 'beginner',
    question: 'What is the default TCP port used for unencrypted HTTP traffic?',
    options: ['Port 80', 'Port 443', 'Port 22', 'Port 21'],
    correctAnswer: 'Port 80',
    explanation: 'Standard HTTP communicates over TCP port 80, while encrypted HTTPS uses port 443.'
  },

  // ===================== TECHNOLOGY & COMPUTING (Intermediate) =====================
  {
    id: 'tech-i-01',
    category: 'technology',
    level: 'intermediate',
    question: 'What is the average time complexity of searching for an element in a balanced Binary Search Tree (BST)?',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
    correctAnswer: 'O(log n)',
    explanation: 'Because each comparison eliminates half the remaining subtrees in a balanced tree, lookup requires logarithmic time O(log n).'
  },
  {
    id: 'tech-i-02',
    category: 'technology',
    level: 'intermediate',
    question: 'In the OSI 7-layer networking model, at which layer does IP (Internet Protocol) operate?',
    options: ['Network Layer (Layer 3)', 'Transport Layer (Layer 4)', 'Data Link Layer (Layer 2)', 'Session Layer (Layer 5)'],
    correctAnswer: 'Network Layer (Layer 3)',
    explanation: 'IP is responsible for addressing and packet routing across networks, which operates at Layer 3 (Network Layer).'
  },
  {
    id: 'tech-i-03',
    category: 'technology',
    level: 'intermediate',
    question: 'In relational databases, what does the "A" in the ACID transactional guarantees represent?',
    options: ['Atomicity', 'Availability', 'Authorization', 'Asynchrony'],
    correctAnswer: 'Atomicity',
    explanation: 'Atomicity guarantees that all operations within a database transaction succeed or all fail entirely ("all-or-nothing").'
  },
  {
    id: 'tech-i-04',
    category: 'technology',
    level: 'intermediate',
    question: 'Which cryptographic algorithm relies on the mathematical difficulty of factoring large composite prime products?',
    options: ['RSA', 'AES', 'SHA-256', 'Diffie-Hellman'],
    correctAnswer: 'RSA',
    explanation: 'Rivest-Shamir-Adleman (RSA) public-key cryptography derives security from the integer factorization problem.'
  },

  // ===================== TECHNOLOGY & COMPUTING (Advanced) =====================
  {
    id: 'tech-a-01',
    category: 'technology',
    level: 'advanced',
    question: 'In distributed systems, the CAP theorem states that a distributed data store can guarantee at most two of which three properties?',
    options: [
      'Consistency, Availability, and Partition Tolerance',
      'Concurrency, Atomicity, and Performance',
      'Correctness, Adaptability, and Persistence',
      'Compatibility, Access control, and Throughput'
    ],
    correctAnswer: 'Consistency, Availability, and Partition Tolerance',
    explanation: 'Formulated by Eric Brewer, CAP asserts that when network partitions (P) occur, a system must trade off between Consistency (C) and Availability (A).'
  },
  {
    id: 'tech-a-02',
    category: 'technology',
    level: 'advanced',
    question: 'In modern CPU design, what hazard arises when an instruction depends on the result of a previous instruction still in the pipeline?',
    options: ['Data hazard', 'Structural hazard', 'Control hazard', 'Branch hazard'],
    correctAnswer: 'Data hazard',
    explanation: 'Data hazards occur when read-after-write (RAW), write-after-read (WAR), or write-after-write (WAW) dependencies disrupt pipeline parallelism.'
  },
  {
    id: 'tech-a-03',
    category: 'technology',
    level: 'advanced',
    question: 'What consensus algorithm utilizes Leader Election, Log Replication, and Safety terms to achieve distributed state machine consensus?',
    options: ['Raft', 'Bellman-Ford', 'Dijkstra', 'Floyd-Warshall'],
    correctAnswer: 'Raft',
    explanation: 'Raft is designed as an understandable alternative to Paxos, using an elected leader to manage replicated log state.'
  },

  // ===================== HISTORY & CIVILIZATION (Beginner) =====================
  {
    id: 'hist-b-01',
    category: 'history',
    level: 'beginner',
    question: 'In which year did the global conflict of World War II conclude?',
    options: ['1945', '1939', '1918', '1950'],
    correctAnswer: '1945',
    explanation: 'World War II concluded in 1945 with the unconditional surrender of the Axis powers in Europe (May) and Japan (September).'
  },
  {
    id: 'hist-b-02',
    category: 'history',
    level: 'beginner',
    question: 'Who was the first elected President of the United States of America?',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Alexander Hamilton'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served two terms as the first US president from 1789 until 1797.'
  },
  {
    id: 'hist-b-03',
    category: 'history',
    level: 'beginner',
    question: 'Along which major river system did ancient Egyptian civilization flourish?',
    options: ['Nile River', 'Tigris River', 'Indus River', 'Euphrates River'],
    correctAnswer: 'Nile River',
    explanation: 'The annual inundation of the Nile deposited nutrient-rich silt that sustained Egyptian agriculture for millennia.'
  },
  {
    id: 'hist-b-04',
    category: 'history',
    level: 'beginner',
    question: 'The Magna Carta was signed by King John of England in which year?',
    options: ['1215', '1066', '1492', '1337'],
    correctAnswer: '1215',
    explanation: 'Barons forced King John to grant the Magna Carta at Runnymede in June 1215, establishing that the sovereign is subject to law.'
  },
  {
    id: 'hist-b-05',
    category: 'history',
    level: 'beginner',
    question: 'The Parthenon was constructed in which ancient Mediterranean city-state?',
    options: ['Athens', 'Sparta', 'Rome', 'Carthage'],
    correctAnswer: 'Athens',
    explanation: 'Dedicated to the goddess Athena, the Parthenon was completed on the Athenian Acropolis in 438 BCE.'
  },

  // ===================== HISTORY & CIVILIZATION (Intermediate) =====================
  {
    id: 'hist-i-01',
    category: 'history',
    level: 'intermediate',
    question: 'The Peace of Westphalia (1648) fundamentally altered European diplomacy by ending which prolonged conflict?',
    options: ['Thirty Years\' War', 'Hundred Years\' War', 'Seven Years\' War', 'War of the Spanish Succession'],
    correctAnswer: 'Thirty Years\' War',
    explanation: 'The 1648 treaties concluded the catastrophic Thirty Years\' War and established the framework of modern sovereign nation-states.'
  },
  {
    id: 'hist-i-02',
    category: 'history',
    level: 'intermediate',
    question: 'Which Chinese dynasty presided over the construction of the Forbidden City and funded Zheng He\'s maritime voyages?',
    options: ['Ming Dynasty', 'Tang Dynasty', 'Song Dynasty', 'Qing Dynasty'],
    correctAnswer: 'Ming Dynasty',
    explanation: 'The Ming Dynasty (1368–1644) under Emperor Yongle moved the imperial capital to Beijing and commissioned the treasure fleet expeditions.'
  },
  {
    id: 'hist-i-03',
    category: 'history',
    level: 'intermediate',
    question: 'Who wrote the seminal economic treatise "The Wealth of Nations", published in 1776?',
    options: ['Adam Smith', 'David Ricardo', 'John Stuart Mill', 'Karl Marx'],
    correctAnswer: 'Adam Smith',
    explanation: 'Scottish moral philosopher Adam Smith detailed division of labor, productivity, and free markets in "The Wealth of Nations".'
  },
  {
    id: 'hist-i-04',
    category: 'history',
    level: 'intermediate',
    question: 'The Meiji Restoration of 1868 occurred in which nation, restoring direct imperial governance?',
    options: ['Japan', 'China', 'Korea', 'Thailand'],
    correctAnswer: 'Japan',
    explanation: 'The Meiji Restoration ended the Tokugawa Shogunate and initiated rapid modernization and industrialization in Japan.'
  },

  // ===================== HISTORY & CIVILIZATION (Advanced) =====================
  {
    id: 'hist-a-01',
    category: 'history',
    level: 'advanced',
    question: 'The Byzantine Empire met its final fall when Constantinople was conquered in 1453 by which Ottoman sultan?',
    options: ['Mehmed II', 'Suleiman the Magnificent', 'Selim I', 'Bayezid I'],
    correctAnswer: 'Mehmed II',
    explanation: 'Mehmed II ("The Conqueror") breached Constantinople\'s Theodosian Walls in May 1453, ending over a millennium of Roman imperial succession.'
  },
  {
    id: 'hist-a-02',
    category: 'history',
    level: 'advanced',
    question: 'Which ancient Mesopotamian legal code inscribed on a diorite stele established the principle of lex talionis ("eye for an eye")?',
    options: ['Code of Hammurabi', 'Code of Ur-Nammu', 'Code of Lipit-Ishtar', 'Edicts of Ashoka'],
    correctAnswer: 'Code of Hammurabi',
    explanation: 'Promulgated by the Babylonian king Hammurabi around 1750 BCE, this code contains 282 codified laws with standardized retributive penalties.'
  },
  {
    id: 'hist-a-03',
    category: 'history',
    level: 'advanced',
    question: 'In 1917, the Bolshevik Revolution in Russia was triggered in part by the storming of which Petrograd landmark?',
    options: ['The Winter Palace', 'The Kremlin', 'The Peter and Paul Fortress', 'Smolny Institute'],
    correctAnswer: 'The Winter Palace',
    explanation: 'In October/November 1917, Red Guards overthrew Alexander Kerensky\'s Russian Provisional Government headquartered at the Winter Palace.'
  },

  // ===================== GEOGRAPHY & WORLD (Beginner) =====================
  {
    id: 'geo-b-01',
    category: 'geography',
    level: 'beginner',
    question: 'What is the largest ocean on Earth by both surface area and volume?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
    explanation: 'The Pacific Ocean covers over 165 million square kilometers, encompassing roughly one-third of Earth\'s surface.'
  },
  {
    id: 'geo-b-02',
    category: 'geography',
    level: 'beginner',
    question: 'What is the capital city of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    correctAnswer: 'Canberra',
    explanation: 'Canberra was planned as a purpose-built capital territory in 1908 as a compromise between rival cities Sydney and Melbourne.'
  },
  {
    id: 'geo-b-03',
    category: 'geography',
    level: 'beginner',
    question: 'Which mountain range naturally separates the European and Asian parts of Russia?',
    options: ['Ural Mountains', 'Caucasus Mountains', 'Alps', 'Carpathian Mountains'],
    correctAnswer: 'Ural Mountains',
    explanation: 'The Ural Mountains extend from the Arctic Ocean to Kazakhstan, traditionally demarcating Europe from Asia.'
  },
  {
    id: 'geo-b-04',
    category: 'geography',
    level: 'beginner',
    question: 'Mount Everest is situated along the international border between Nepal and which territory?',
    options: ['China (Tibet)', 'India', 'Bhutan', 'Pakistan'],
    correctAnswer: 'China (Tibet)',
    explanation: 'Mount Everest\'s summit ridge marks the international boundary between Nepal and the Tibet Autonomous Region of China.'
  },
  {
    id: 'geo-b-05',
    category: 'geography',
    level: 'beginner',
    question: 'Which of the following is the longest river in South America?',
    options: ['Amazon River', 'Paraná River', 'Orinoco River', 'São Francisco River'],
    correctAnswer: 'Amazon River',
    explanation: 'The Amazon River carries the largest water discharge of any river on Earth and stretches over 6,400 kilometers.'
  },

  // ===================== GEOGRAPHY & WORLD (Intermediate) =====================
  {
    id: 'geo-i-01',
    category: 'geography',
    level: 'intermediate',
    question: 'Which strait links the Persian Gulf to the Gulf of Oman and is a strategic chokepoint for petroleum transit?',
    options: ['Strait of Hormuz', 'Strait of Malacca', 'Bab-el-Mandeb', 'Bosphorus Strait'],
    correctAnswer: 'Strait of Hormuz',
    explanation: 'Approximately 20–30% of globally consumed crude petroleum transits the narrow Strait of Hormuz between Oman and Iran.'
  },
  {
    id: 'geo-i-02',
    category: 'geography',
    level: 'intermediate',
    question: 'What is the highest uninterrupted waterfall on Earth, located in Canaima National Park, Venezuela?',
    options: ['Angel Falls', 'Iguazu Falls', 'Victoria Falls', 'Tugela Falls'],
    correctAnswer: 'Angel Falls',
    explanation: 'Angel Falls (Kerepakupai Merú) drops 979 meters (3,212 feet) from the Auyán-tepui plateau.'
  },
  {
    id: 'geo-i-03',
    category: 'geography',
    level: 'intermediate',
    question: 'Which country possesses the longest coastline in the world?',
    options: ['Canada', 'Norway', 'Indonesia', 'Russia'],
    correctAnswer: 'Canada',
    explanation: 'Canada\'s coastline spans over 202,080 kilometers across three oceans: the Atlantic, Pacific, and Arctic.'
  },
  {
    id: 'geo-i-04',
    category: 'geography',
    level: 'intermediate',
    question: 'Lake Baikal, the deepest freshwater lake on Earth holding ~20% of unfrozen surface freshwater, is in:',
    options: ['Russia (Siberia)', 'Mongolia', 'Kazakhstan', 'Finland'],
    correctAnswer: 'Russia (Siberia)',
    explanation: 'Lake Baikal in southern Siberia reaches a depth of 1,642 meters and is estimated to be 25 million years old.'
  },

  // ===================== GEOGRAPHY & WORLD (Advanced) =====================
  {
    id: 'geo-a-01',
    category: 'geography',
    level: 'advanced',
    question: 'Which landlocked European microstate is nestled entirely in the eastern Pyrenees between France and Spain?',
    options: ['Andorra', 'Liechtenstein', 'San Marino', 'Monaco'],
    correctAnswer: 'Andorra',
    explanation: 'The Principality of Andorra is a co-principality jointly headed by the Bishop of Urgell in Catalonia and the President of France.'
  },
  {
    id: 'geo-a-02',
    category: 'geography',
    level: 'advanced',
    question: 'The Wallace Line is a faunal boundary that separates the ecozones of Asia and Wallacea between which two Indonesian islands?',
    options: ['Bali and Lombok', 'Java and Sumatra', 'Sulawesi and Borneo', 'Flores and Timor'],
    correctAnswer: 'Bali and Lombok',
    explanation: 'Alfred Russel Wallace identified the deep oceanic trench separating Bali and Lombok as an ancient ecological divide.'
  },
  {
    id: 'geo-a-03',
    category: 'geography',
    level: 'advanced',
    question: 'Which of the following nations is classified as "doubly landlocked" (surrounded entirely by other landlocked countries)?',
    options: ['Liechtenstein', 'Bolivia', 'Switzerland', 'Mongolia'],
    correctAnswer: 'Liechtenstein',
    explanation: 'Only two nations on Earth are doubly landlocked: Liechtenstein (bounded by Switzerland and Austria) and Uzbekistan.'
  },

  // ===================== LITERATURE & PHILOSOPHY (Beginner) =====================
  {
    id: 'lit-b-01',
    category: 'literature',
    level: 'beginner',
    question: 'Who authored the monumental tragic play "Hamlet, Prince of Denmark"?',
    options: ['William Shakespeare', 'Christopher Marlowe', 'John Milton', 'Ben Jonson'],
    correctAnswer: 'William Shakespeare',
    explanation: 'Written between 1599 and 1601, Hamlet is Shakespeare\'s longest and among his most frequently produced tragedies.'
  },
  {
    id: 'lit-b-02',
    category: 'literature',
    level: 'beginner',
    question: 'Which ancient Greek philosopher was the mentor and teacher of Plato?',
    options: ['Socrates', 'Aristotle', 'Pythagoras', 'Epicurus'],
    correctAnswer: 'Socrates',
    explanation: 'Socrates taught Plato, who subsequently founded the Academy in Athens and taught Aristotle.'
  },
  {
    id: 'lit-b-03',
    category: 'literature',
    level: 'beginner',
    question: 'George Orwell\'s dystopian masterpiece published in 1949 depicting totalitarian rule is titled:',
    options: ['1984', 'Brave New World', 'Fahrenheit 451', 'Animal Farm'],
    correctAnswer: '1984',
    explanation: '1984 introduced concepts such as Big Brother, Thought Police, Doublethink, and Newspeak into the modern lexicon.'
  },
  {
    id: 'lit-b-04',
    category: 'literature',
    level: 'beginner',
    question: 'Who penned the classic 1813 novel "Pride and Prejudice"?',
    options: ['Jane Austen', 'Charlotte Brontë', 'Mary Shelley', 'Emily Dickinson'],
    correctAnswer: 'Jane Austen',
    explanation: 'Jane Austen published Pride and Prejudice anonymously in 1813, centering on the turbulent relationship of Elizabeth Bennet and Mr. Darcy.'
  },
  {
    id: 'lit-b-05',
    category: 'literature',
    level: 'beginner',
    question: 'In Greek mythology, who opened a jar releasing all evils upon humanity, leaving only hope inside?',
    options: ['Pandora', 'Persephone', 'Helen', 'Medea'],
    correctAnswer: 'Pandora',
    explanation: 'According to Hesiod\'s Works and Days, Pandora opened the pithos (jar), scattering sickness and sorrow into the mortal world.'
  },

  // ===================== LITERATURE & PHILOSOPHY (Intermediate) =====================
  {
    id: 'lit-i-01',
    category: 'literature',
    level: 'intermediate',
    question: 'Which philosophical concept formulated by René Descartes is translated as "I think, therefore I am"?',
    options: ['Cogito, ergo sum', 'Tabula rasa', 'Carpe diem', 'Amor fati'],
    correctAnswer: 'Cogito, ergo sum',
    explanation: 'Descartes established this indubitable foundation for knowledge in his 1637 work "Discourse on the Method".'
  },
  {
    id: 'lit-i-02',
    category: 'literature',
    level: 'intermediate',
    question: 'Which epic 14th-century Italian narrative poem is divided into Inferno, Purgatorio, and Paradiso?',
    options: ['Divine Comedy by Dante Alighieri', 'Decameron by Giovanni Boccaccio', 'The Aeneid by Virgil', 'Jerusalem Delivered by Torquato Tasso'],
    correctAnswer: 'Divine Comedy by Dante Alighieri',
    explanation: 'Dante\'s Commedia traces the soul\'s pilgrimage toward God through Hell, Purgatory, and Paradise under the guidance of Virgil and Beatrice.'
  },
  {
    id: 'lit-i-03',
    category: 'literature',
    level: 'intermediate',
    question: 'Albert Camus explored the absurd condition of human existence through the mythological figure of:',
    options: ['Sisyphus', 'Prometheus', 'Icarus', 'Tantalus'],
    correctAnswer: 'Sisyphus',
    explanation: 'In "The Myth of Sisyphus" (1942), Camus posits that despite the eternal, futile punishment of rolling a boulder uphill, "one must imagine Sisyphus happy."'
  },
  {
    id: 'lit-i-04',
    category: 'literature',
    level: 'intermediate',
    question: 'In rhetorical analysis, what term designates an appeal grounded in speaker credibility, character, and authority?',
    options: ['Ethos', 'Pathos', 'Logos', 'Kairos'],
    correctAnswer: 'Ethos',
    explanation: 'Aristotle identified three artistic modes of persuasion in his Rhetoric: Ethos (ethical authority), Pathos (emotional resonance), and Logos (logical demonstration).'
  },

  // ===================== LITERATURE & PHILOSOPHY (Advanced) =====================
  {
    id: 'lit-a-01',
    category: 'literature',
    level: 'advanced',
    question: 'Immanuel Kant\'s deontological ethical framework centers upon an unconditional moral obligation termed the:',
    options: ['Categorical Imperative', 'Principle of Utility', 'Veil of Ignorance', 'Will to Power'],
    correctAnswer: 'Categorical Imperative',
    explanation: 'Kant argued in the Groundwork of the Metaphysics of Morals that one must act only according to maxims that could be willed as universal laws.'
  },
  {
    id: 'lit-a-02',
    category: 'literature',
    level: 'advanced',
    question: 'Which modernist novel follows Leopold Bloom through Dublin across the single day of June 16, 1904?',
    options: ['Ulysses by James Joyce', 'Mrs Dalloway by Virginia Woolf', 'The Waste Land by T.S. Eliot', 'In Search of Lost Time by Marcel Proust'],
    correctAnswer: 'Ulysses by James Joyce',
    explanation: 'Joyce parallelled Homeric episodes using intricate stream-of-consciousness techniques throughout Dublin on what is now celebrated as Bloomsday.'
  },
  {
    id: 'lit-a-03',
    category: 'literature',
    level: 'advanced',
    question: 'Which pre-Socratic Greek philosopher argued that change is the fundamental nature of the cosmos ("All is flux", "You cannot step into the same river twice")?',
    options: ['Heraclitus', 'Parmenides', 'Thales', 'Democritus'],
    correctAnswer: 'Heraclitus',
    explanation: 'Heraclitus of Ephesus championed constant universal transformation governed by the Logos, symbolized by the element of fire.'
  },

  // ===================== MATHEMATICS & LOGIC (Beginner) =====================
  {
    id: 'math-b-01',
    category: 'mathematics',
    level: 'beginner',
    question: 'What is the sum of the interior angles of any planar Euclidean triangle?',
    options: ['180 degrees', '360 degrees', '90 degrees', '270 degrees'],
    correctAnswer: '180 degrees',
    explanation: 'In Euclidean plane geometry, the interior angles of every triangle invariably sum to π radians or 180°.'
  },
  {
    id: 'math-b-02',
    category: 'mathematics',
    level: 'beginner',
    question: 'Which of the following is the only even prime number?',
    options: ['2', '0', '4', '6'],
    correctAnswer: '2',
    explanation: '2 is the smallest prime number and the only even prime, since all higher even numbers are divisible by 2.'
  },
  {
    id: 'math-b-03',
    category: 'mathematics',
    level: 'beginner',
    question: 'If a fair 6-sided die is rolled once, what is the probability of rolling a multiple of 3?',
    options: ['1/3 (≈33.3%)', '1/6 (≈16.7%)', '1/2 (50%)', '2/3 (≈66.7%)'],
    correctAnswer: '1/3 (≈33.3%)',
    explanation: 'The multiples of 3 on a standard die are 3 and 6 (2 outcomes out of 6 total), yielding 2/6 = 1/3.'
  },
  {
    id: 'math-b-04',
    category: 'mathematics',
    level: 'beginner',
    question: 'What is the mathematical value of 5 factorial (5!)?',
    options: ['120', '60', '24', '720'],
    correctAnswer: '120',
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.'
  },
  {
    id: 'math-b-05',
    category: 'mathematics',
    level: 'beginner',
    question: 'In a right-angled triangle, if legs measure 3 cm and 4 cm, what is the length of the hypotenuse?',
    options: ['5 cm', '6 cm', '7 cm', '25 cm'],
    correctAnswer: '5 cm',
    explanation: 'By the Pythagorean theorem: c² = a² + b² = 3² + 4² = 9 + 16 = 25. Thus c = √25 = 5.'
  },

  // ===================== MATHEMATICS & LOGIC (Intermediate) =====================
  {
    id: 'math-i-01',
    category: 'mathematics',
    level: 'intermediate',
    question: 'What is the value of log₁₀(1000)?',
    options: ['3', '10', '100', '30'],
    correctAnswer: '3',
    explanation: 'The common base-10 logarithm answers 10^x = 1000. Since 10³ = 1000, log₁₀(1000) = 3.'
  },
  {
    id: 'math-i-02',
    category: 'mathematics',
    level: 'intermediate',
    question: 'In statistics, what term designates the middle value separating the upper half from the lower half of an ordered dataset?',
    options: ['Median', 'Mean', 'Mode', 'Variance'],
    correctAnswer: 'Median',
    explanation: 'The median represents the 50th percentile of an ordered sample and is resilient against extreme outliers.'
  },
  {
    id: 'math-i-03',
    category: 'mathematics',
    level: 'intermediate',
    question: 'How many distinct subsets can be constructed from a set with 5 elements?',
    options: ['32', '25', '10', '16'],
    correctAnswer: '32',
    explanation: 'The power set of a set with n elements has cardinality 2^n. For n = 5, 2⁵ = 32 subsets.'
  },
  {
    id: 'math-i-04',
    category: 'mathematics',
    level: 'intermediate',
    question: 'What is the derivative of f(x) = sin(x) with respect to x?',
    options: ['cos(x)', '-cos(x)', 'tan(x)', '-sin(x)'],
    correctAnswer: 'cos(x)',
    explanation: 'The instantaneous rate of change of the sine function is the cosine function: d/dx[sin(x)] = cos(x).'
  },

  // ===================== MATHEMATICS & LOGIC (Advanced) =====================
  {
    id: 'math-a-01',
    category: 'mathematics',
    level: 'advanced',
    question: 'Euler\'s identity e^(iπ) + 1 = 0 links which five fundamental mathematical constants?',
    options: ['e, i, π, 1, and 0', 'e, c, h, π, and 0', 'φ, π, i, e, and 1', 'α, β, γ, δ, and 0'],
    correctAnswer: 'e, i, π, 1, and 0',
    explanation: 'Often praised as the most beautiful formula in mathematics, Euler\'s identity unifies the base of natural logarithms (e), imaginary unit (i), circle ratio (π), multiplicative identity (1), and additive identity (0).'
  },
  {
    id: 'math-a-02',
    category: 'mathematics',
    level: 'advanced',
    question: 'Which theorem in mathematical logic establishes that in any consistent formal axiomatic system capable of arithmetic, there are true statements that cannot be proven within the system?',
    options: ['Gödel\'s First Incompleteness Theorem', 'Turing\'s Halting Theorem', 'Cantor\'s Diagonal Theorem', 'Fermat\'s Last Theorem'],
    correctAnswer: 'Gödel\'s First Incompleteness Theorem',
    explanation: 'Kurt Gödel published this milestone in 1931, proving inherent limitations in formal mathematical systems.'
  },
  {
    id: 'math-a-03',
    category: 'mathematics',
    level: 'advanced',
    question: 'What is the limit of (1 + 1/n)^n as n approaches infinity?',
    options: ['e (≈ 2.71828)', '1', 'Infinity', 'π'],
    correctAnswer: 'e (≈ 2.71828)',
    explanation: 'This limit is one of the standard formal definitions of Euler\'s number e, describing continuous compound growth.'
  },

  // ===================== GENERAL KNOWLEDGE (Beginner) =====================
  {
    id: 'gen-b-01',
    category: 'general',
    level: 'beginner',
    question: 'What is the official currency of Japan?',
    options: ['Yen', 'Won', 'Yuan', 'Ringgit'],
    correctAnswer: 'Yen',
    explanation: 'The Japanese Yen (¥) was established under the New Currency Act of 1871 during the Meiji era.'
  },
  {
    id: 'gen-b-02',
    category: 'general',
    level: 'beginner',
    question: 'Which international organization headquartered in Geneva is responsible for international public health?',
    options: ['WHO (World Health Organization)', 'UNESCO', 'UNICEF', 'IMF'],
    correctAnswer: 'WHO (World Health Organization)',
    explanation: 'Founded on April 7, 1948, the WHO is the specialized agency of the United Nations responsible for international public health.'
  },
  {
    id: 'gen-b-03',
    category: 'general',
    level: 'beginner',
    question: 'Who painted the iconic portrait known worldwide as the "Mona Lisa"?',
    options: ['Leonardo da Vinci', 'Michelangelo Buonarroti', 'Raphael Sanzio', 'Sandro Botticelli'],
    correctAnswer: 'Leonardo da Vinci',
    explanation: 'Painted in the early 16th century, Leonardo da Vinci\'s Mona Lisa is permanently displayed at the Musée du Louvre in Paris.'
  },
  {
    id: 'gen-b-04',
    category: 'general',
    level: 'beginner',
    question: 'Which instrument in a symphony orchestra has 88 keys and produces sound via felt hammers striking steel strings?',
    options: ['Piano', 'Harpsichord', 'Celesta', 'Organ'],
    correctAnswer: 'Piano',
    explanation: 'Invented by Bartolomeo Cristofori around 1700, the modern acoustic piano features 52 white keys and 36 black keys.'
  },
  {
    id: 'gen-b-05',
    category: 'general',
    level: 'beginner',
    question: 'Which country is shaped geographically like a boot and extends into the Mediterranean Sea?',
    options: ['Italy', 'Greece', 'Spain', 'Portugal'],
    correctAnswer: 'Italy',
    explanation: 'The Italian Peninsula resembles a boot, with the region of Calabria forming the toe and Salento forming the heel.'
  },

  // ===================== GENERAL KNOWLEDGE (Intermediate) =====================
  {
    id: 'gen-i-01',
    category: 'general',
    level: 'intermediate',
    question: 'What economic metric represents the total market monetary value of all finished goods and services produced within a country in a year?',
    options: ['GDP (Gross Domestic Product)', 'GNP (Gross National Product)', 'CPI (Consumer Price Index)', 'HDI (Human Development Index)'],
    correctAnswer: 'GDP (Gross Domestic Product)',
    explanation: 'Gross Domestic Product measures domestic output without adjusting for net foreign income.'
  },
  {
    id: 'gen-i-02',
    category: 'general',
    level: 'intermediate',
    question: 'Which iconic architectural style characterized by pointed arches, ribbed vaults, and flying buttresses flourished in medieval Europe?',
    options: ['Gothic', 'Romanesque', 'Baroque', 'Neoclassical'],
    correctAnswer: 'Gothic',
    explanation: 'Originating in 12th-century France with the Basilica of Saint-Denis, Gothic architecture allowed cathedral walls to feature expansive stained glass.'
  },
  {
    id: 'gen-i-03',
    category: 'general',
    level: 'intermediate',
    question: 'The Nobel Peace Prize is officially presented annually in which Scandinavian city?',
    options: ['Oslo, Norway', 'Stockholm, Sweden', 'Copenhagen, Denmark', 'Helsinki, Finland'],
    correctAnswer: 'Oslo, Norway',
    explanation: 'According to Alfred Nobel\'s will, the Peace Prize is determined and awarded by the Norwegian Nobel Committee in Oslo, while the other prizes are awarded in Stockholm.'
  },
  {
    id: 'gen-i-04',
    category: 'general',
    level: 'intermediate',
    question: 'In chess, what special move allows a king and rook to move simultaneously under specific unmoved conditions?',
    options: ['Castling', 'En passant', 'Promotion', 'Fianchetto'],
    correctAnswer: 'Castling',
    explanation: 'Castling allows the king to move two squares toward a rook on the first rank, and the rook hops to the square the king just crossed.'
  },

  // ===================== GENERAL KNOWLEDGE (Advanced) =====================
  {
    id: 'gen-a-01',
    category: 'general',
    level: 'advanced',
    question: 'Which economic concept describes a situation where an increase in supply of a money-like asset causes bad money to drive out good money?',
    options: ['Gresham\'s Law', 'Say\'s Law', 'Okun\'s Law', 'Pareto\'s Principle'],
    correctAnswer: 'Gresham\'s Law',
    explanation: 'Named after Sir Thomas Gresham in 1558, Gresham\'s Law observes that undervalued currency will be hoarded while overvalued currency circulates.'
  },
  {
    id: 'gen-a-02',
    category: 'general',
    level: 'advanced',
    question: 'Which architectural pioneer coined the maxim "Form follows function", heavily influencing the Chicago School of Architecture?',
    options: ['Louis Sullivan', 'Frank Lloyd Wright', 'Le Corbusier', 'Ludwig Mies van der Rohe'],
    correctAnswer: 'Louis Sullivan',
    explanation: 'Louis Sullivan wrote in 1896: "form ever follows function", establishing the foundational tenet of modern functionalist design.'
  },
  {
    id: 'gen-a-03',
    category: 'general',
    level: 'advanced',
    question: 'The Rosetta Stone, deciphered in 1822 by Jean-François Champollion, featured the same decree inscribed in Ancient Greek, Demotic, and:',
    options: ['Egyptian Hieroglyphs', 'Cuneiform', 'Coptic', 'Phoenician'],
    correctAnswer: 'Egyptian Hieroglyphs',
    explanation: 'Discovered in 1799, the trilingual inscription of Ptolemy V\'s decree enabled linguists to unlock the phonetic reading of Egyptian hieroglyphic script.'
  },

  // ===================== ADDITIONAL EXPANDED QUESTIONS =====================
  // Science - More
  {
    id: 'sci-b-07',
    category: 'science',
    level: 'beginner',
    question: 'Which component in green plants absorbs solar light energy to drive photosynthesis?',
    options: ['Chlorophyll', 'Carotenoid', 'Anthocyanin', 'Xanthophyll'],
    correctAnswer: 'Chlorophyll',
    explanation: 'Chlorophyll a and b pigments absorb red and blue wavelengths while reflecting green light.'
  },
  {
    id: 'sci-i-06',
    category: 'science',
    level: 'intermediate',
    question: 'What is the half-life of Carbon-14, widely used in archaeological radiometric dating?',
    options: ['5,730 years', '1,200 years', '10,500 years', '24,100 years'],
    correctAnswer: '5,730 years',
    explanation: 'Carbon-14 decays into Nitrogen-14 via beta decay with a characteristic half-life of 5,730 ± 40 years.'
  },
  {
    id: 'sci-a-05',
    category: 'science',
    level: 'advanced',
    question: 'The photoelectric effect, for which Albert Einstein received the 1921 Nobel Prize in Physics, demonstrated that:',
    options: [
      'Light consists of discrete quanta (photons) with energy proportional to frequency',
      'Electrons orbit atomic nuclei in stationary quantized orbits',
      'The speed of light is variable in non-inertial frames',
      'Spacetime curvature is equivalent to gravitational acceleration'
    ],
    correctAnswer: 'Light consists of discrete quanta (photons) with energy proportional to frequency',
    explanation: 'Einstein showed that light acts as discrete packets of energy (E = hf), where energy depends on frequency rather than intensity.'
  },

  // Technology - More
  {
    id: 'tech-b-06',
    category: 'technology',
    level: 'beginner',
    question: 'In Git version control, which command creates a localized clone of a remote repository?',
    options: ['git clone', 'git pull', 'git fetch', 'git fork'],
    correctAnswer: 'git clone',
    explanation: 'The command "git clone <url>" creates a local replica of an existing remote repository complete with commit history.'
  },
  {
    id: 'tech-i-05',
    category: 'technology',
    level: 'intermediate',
    question: 'Which data structure follows the Last-In, First-Out (LIFO) order of execution?',
    options: ['Stack', 'Queue', 'Linked List', 'Hash Map'],
    correctAnswer: 'Stack',
    explanation: 'A stack operates on LIFO principles, where push and pop actions occur at the top of the stack.'
  },
  {
    id: 'tech-a-04',
    category: 'technology',
    level: 'advanced',
    question: 'What type of compiler optimization eliminates calculations whose outputs are never read by subsequent operations?',
    options: [
      'Dead-code elimination',
      'Loop unrolling',
      'Tail-call optimization',
      'Constant folding'
    ],
    correctAnswer: 'Dead-code elimination',
    explanation: 'Dead-code elimination removes unreachable instructions and unused variable assignments without altering program semantics.'
  },

  // History - More
  {
    id: 'hist-b-06',
    category: 'history',
    level: 'beginner',
    question: 'Which Renaissance polymath designed conceptual prototypes of parachutes, helicopters, and armored tanks in his codices?',
    options: ['Leonardo da Vinci', 'Galileo Galilei', 'Michelangelo', 'Filippo Brunelleschi'],
    correctAnswer: 'Leonardo da Vinci',
    explanation: 'Da Vinci\'s notebooks contain hundreds of mechanical inventions centuries ahead of their practical engineering realization.'
  },
  {
    id: 'hist-i-05',
    category: 'history',
    level: 'intermediate',
    question: 'The Battle of Waterloo in 1815 marked the definitive military defeat of which French emperor?',
    options: ['Napoleon Bonaparte', 'Napoleon III', 'Louis XIV', 'Charles de Gaulle'],
    correctAnswer: 'Napoleon Bonaparte',
    explanation: 'An Anglo-Allied army under the Duke of Wellington and a Prussian army under Gebhard von Blücher defeated Napoleon at Waterloo.'
  },
  {
    id: 'hist-a-04',
    category: 'history',
    level: 'advanced',
    question: 'In 1648, the Fronde rebellions took place in France against the centralizing governance of which chief minister?',
    options: ['Cardinal Mazarin', 'Cardinal Richelieu', 'Jean-Baptiste Colbert', 'Marquis de Louvois'],
    correctAnswer: 'Cardinal Mazarin',
    explanation: 'The Fronde was a series of civil wars against Cardinal Mazarin during the minority of King Louis XIV.'
  },

  // Geography - More
  {
    id: 'geo-b-06',
    category: 'geography',
    level: 'beginner',
    question: 'Which continent contains the highest number of sovereign nations?',
    options: ['Africa (54 nations)', 'Asia (49 nations)', 'Europe (44 nations)', 'North America (23 nations)'],
    correctAnswer: 'Africa (54 nations)',
    explanation: 'Africa comprises 54 fully recognized United Nations member states.'
  },
  {
    id: 'geo-i-05',
    category: 'geography',
    level: 'intermediate',
    question: 'What is the capital city of Canada?',
    options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
    correctAnswer: 'Ottawa',
    explanation: 'Queen Victoria designated Ottawa as Canada\'s capital in 1857 due to its strategic position between English and French speaking colonies.'
  },
  {
    id: 'geo-a-04',
    category: 'geography',
    level: 'advanced',
    question: 'Which tectonic trench contains the Challenger Deep, the deepest known point in Earth\'s seabed hydrosphere?',
    options: ['Mariana Trench', 'Puerto Rico Trench', 'Java Trench', 'Tonga Trench'],
    correctAnswer: 'Mariana Trench',
    explanation: 'The Challenger Deep in the southern Mariana Trench reaches approximately 10,928 meters (35,853 feet) below sea level.'
  },

  // Literature - More
  {
    id: 'lit-b-06',
    category: 'literature',
    level: 'beginner',
    question: 'Who wrote the 1897 gothic horror novel "Dracula"?',
    options: ['Bram Stoker', 'Mary Shelley', 'H.G. Wells', 'Edgar Allan Poe'],
    correctAnswer: 'Bram Stoker',
    explanation: 'Irish author Bram Stoker established many tropes of modern vampire fantasy in his epistolary novel Dracula.'
  },
  {
    id: 'lit-i-05',
    category: 'literature',
    level: 'intermediate',
    question: 'Which Japanese poetic form consists of three unrhymed metric phrases structured in a 5-7-5 mora pattern?',
    options: ['Haiku', 'Tanka', 'Renga', 'Senryu'],
    correctAnswer: 'Haiku',
    explanation: 'Traditional haiku focus on transient seasonal imagery (kigo) and juxtaposition (kireji) in a 5, 7, 5 structure.'
  },
  {
    id: 'lit-a-04',
    category: 'literature',
    level: 'advanced',
    question: 'In Plato\'s Republic, the "Allegory of the Cave" illustrates the distinction between the world of appearances and the realm of:',
    options: [
      'The Forms (Ideas)',
      'The Demiurge',
      'The Stoic Pneuma',
      'Atomistic Void'
    ],
    correctAnswer: 'The Forms (Ideas)',
    explanation: 'Plato contrasts shadows on the cave wall (sensory phenomena) with illuminated external objects representing eternal intelligible Forms.'
  },

  // Mathematics - More
  {
    id: 'math-b-06',
    category: 'mathematics',
    level: 'beginner',
    question: 'What is the median of the integer sequence: [3, 7, 9, 12, 15]?',
    options: ['9', '7', '12', '9.2'],
    correctAnswer: '9',
    explanation: 'In the sorted odd-length list [3, 7, 9, 12, 15], the middle element at index 2 is 9.'
  },
  {
    id: 'math-i-05',
    category: 'mathematics',
    level: 'intermediate',
    question: 'If two standard fair six-sided dice are rolled simultaneously, what is the most probable sum of their faces?',
    options: ['7', '6', '8', '12'],
    correctAnswer: '7',
    explanation: 'A sum of 7 can occur in 6 distinct permutations out of 36 combinations: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) with probability 1/6.'
  },
  {
    id: 'math-a-04',
    category: 'mathematics',
    level: 'advanced',
    question: 'A graph is termed "Eulerian" and contains a closed Eulerian trail if and only if:',
    options: [
      'Every vertex has an even degree and all edges belong to a single connected component',
      'The graph is planar with chromatic number at most 4',
      'Every vertex has a degree equal to (V - 1)',
      'The graph has exactly two vertices of odd degree'
    ],
    correctAnswer: 'Every vertex has an even degree and all edges belong to a single connected component',
    explanation: 'Euler proved in 1736 (Seven Bridges of Königsberg) that an Eulerian circuit requires every connected vertex to have an even degree.'
  }
];
