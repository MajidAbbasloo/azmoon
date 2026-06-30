const QUESTION_BANK = {
  russian: {
    russian: [
      {
        id: "ru-01",
        prompt: "Выберите правильный вариант: Я ___ в университет каждый день.",
        options: ["иду", "еду", "хожу", "ходил"],
        answerIndex: 2,
        explanation: "For repeated action with 'каждый день', 'хожу' is the natural choice."
      },
      {
        id: "ru-02",
        prompt: "Какой падеж нужен после предлога 'без'?",
        options: ["Именительный", "Родительный", "Дательный", "Творительный"],
        answerIndex: 1,
        explanation: "The preposition 'без' requires the genitive case: без книги, без воды."
      },
      {
        id: "ru-03",
        prompt: "Выберите правильную форму: У меня нет ___ тетради.",
        options: ["новая", "новой", "новую", "новым"],
        answerIndex: 1,
        explanation: "After 'нет', genitive case is used: нет новой тетради."
      },
      {
        id: "ru-04",
        prompt: "Что означает слово 'общежитие'?",
        options: ["library", "dormitory", "classroom", "canteen"],
        answerIndex: 1,
        explanation: "'Общежитие' means dormitory/student residence."
      },
      {
        id: "ru-05",
        prompt: "Выберите правильный вариант: Студенты готовятся ___ экзамену.",
        options: ["к", "на", "в", "с"],
        answerIndex: 0,
        explanation: "The phrase is 'готовиться к экзамену'."
      },
      {
        id: "ru-06",
        prompt: "Найдите антоним слова 'трудный'.",
        options: ["сложный", "лёгкий", "важный", "быстрый"],
        answerIndex: 1,
        explanation: "The antonym of 'трудный' is 'лёгкий'."
      },
      {
        id: "ru-07",
        prompt: "Выберите правильное окончание: Мы живём в больш___ городе.",
        options: ["ой", "ом", "ого", "ому"],
        answerIndex: 1,
        explanation: "After 'в' for location, prepositional case is used: в большом городе."
      },
      {
        id: "ru-08",
        prompt: "Какой вариант является прошедшим временем глагола 'читать'?",
        options: ["читаю", "читал", "прочитаю", "читай"],
        answerIndex: 1,
        explanation: "'Читал' is the past tense form."
      },
      {
        id: "ru-09",
        prompt: "Выберите правильный вопрос к ответу: 'Я из Ирана.'",
        options: ["Куда ты?", "Откуда ты?", "Где ты?", "Когда ты?"],
        answerIndex: 1,
        explanation: "'Откуда ты?' means 'Where are you from?'"
      },
      {
        id: "ru-10",
        prompt: "Выберите правильный вариант: После занятий я пошёл ___ библиотеку.",
        options: ["в", "на", "из", "у"],
        answerIndex: 0,
        explanation: "Direction to a place commonly uses 'в': пошёл в библиотеку."
      }
    ]
  },
  chemistry: {
    english: [
      {
        id: "ch-en-01",
        prompt: "Which particle has a negative electric charge?",
        options: ["Proton", "Neutron", "Electron", "Nucleus"],
        answerIndex: 2,
        explanation: "An electron carries a negative charge."
      },
      {
        id: "ch-en-02",
        prompt: "What is the chemical formula of water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answerIndex: 1,
        explanation: "Water contains two hydrogen atoms and one oxygen atom: H2O."
      },
      {
        id: "ch-en-03",
        prompt: "Which of the following is an acid?",
        options: ["NaOH", "HCl", "KOH", "CaCO3"],
        answerIndex: 1,
        explanation: "Hydrochloric acid is HCl."
      },
      {
        id: "ch-en-04",
        prompt: "The pH of a neutral solution at 25°C is approximately:",
        options: ["1", "7", "10", "14"],
        answerIndex: 1,
        explanation: "Pure water is neutral and has a pH near 7 at 25°C."
      },
      {
        id: "ch-en-05",
        prompt: "Which bond usually forms between a metal and a non-metal?",
        options: ["Ionic bond", "Hydrogen bond", "Metallic bond", "Peptide bond"],
        answerIndex: 0,
        explanation: "Metal + non-metal combinations commonly form ionic bonds."
      },
      {
        id: "ch-en-06",
        prompt: "What is the molar mass of CO2?",
        options: ["28 g/mol", "32 g/mol", "44 g/mol", "56 g/mol"],
        answerIndex: 2,
        explanation: "Carbon is 12 and two oxygens are 32, so CO2 is 44 g/mol."
      },
      {
        id: "ch-en-07",
        prompt: "Which element has the symbol Na?",
        options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
        answerIndex: 1,
        explanation: "Na is the symbol for sodium."
      },
      {
        id: "ch-en-08",
        prompt: "Oxidation is generally described as:",
        options: ["Gain of electrons", "Loss of electrons", "Gain of neutrons", "Loss of protons"],
        answerIndex: 1,
        explanation: "Oxidation is loss of electrons. Reduction is gain of electrons."
      },
      {
        id: "ch-en-09",
        prompt: "Which gas is released when an acid reacts with a carbonate?",
        options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        answerIndex: 2,
        explanation: "Acid + carbonate produces salt, water, and carbon dioxide."
      },
      {
        id: "ch-en-10",
        prompt: "How many atoms are in one molecule of methane, CH4?",
        options: ["2", "4", "5", "6"],
        answerIndex: 2,
        explanation: "CH4 has 1 carbon atom and 4 hydrogen atoms, total 5 atoms."
      }
    ],
    russian: [
      {
        id: "ch-ru-01",
        prompt: "Какая частица имеет отрицательный электрический заряд?",
        options: ["Протон", "Нейтрон", "Электрон", "Ядро"],
        answerIndex: 2,
        explanation: "Электрон имеет отрицательный заряд."
      },
      {
        id: "ch-ru-02",
        prompt: "Какова химическая формула воды?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answerIndex: 1,
        explanation: "Вода состоит из двух атомов водорода и одного атома кислорода: H2O."
      },
      {
        id: "ch-ru-03",
        prompt: "Какое из веществ является кислотой?",
        options: ["NaOH", "HCl", "KOH", "CaCO3"],
        answerIndex: 1,
        explanation: "HCl — это соляная кислота."
      },
      {
        id: "ch-ru-04",
        prompt: "pH нейтрального раствора при 25°C примерно равен:",
        options: ["1", "7", "10", "14"],
        answerIndex: 1,
        explanation: "Нейтральная среда имеет pH около 7."
      },
      {
        id: "ch-ru-05",
        prompt: "Какая связь обычно образуется между металлом и неметаллом?",
        options: ["Ионная", "Водородная", "Металлическая", "Пептидная"],
        answerIndex: 0,
        explanation: "Металлы и неметаллы часто образуют ионную связь."
      },
      {
        id: "ch-ru-06",
        prompt: "Чему равна молярная масса CO2?",
        options: ["28 г/моль", "32 г/моль", "44 г/моль", "56 г/моль"],
        answerIndex: 2,
        explanation: "12 + 16×2 = 44 г/моль."
      },
      {
        id: "ch-ru-07",
        prompt: "Какой элемент имеет символ Na?",
        options: ["Азот", "Натрий", "Неон", "Никель"],
        answerIndex: 1,
        explanation: "Na — химический символ натрия."
      },
      {
        id: "ch-ru-08",
        prompt: "Окисление обычно означает:",
        options: ["Присоединение электронов", "Потерю электронов", "Присоединение нейтронов", "Потерю протонов"],
        answerIndex: 1,
        explanation: "Окисление — это потеря электронов."
      },
      {
        id: "ch-ru-09",
        prompt: "Какой газ выделяется при реакции кислоты с карбонатом?",
        options: ["Кислород", "Водород", "Углекислый газ", "Азот"],
        answerIndex: 2,
        explanation: "Кислота + карбонат дают соль, воду и CO2."
      },
      {
        id: "ch-ru-10",
        prompt: "Сколько атомов в одной молекуле метана CH4?",
        options: ["2", "4", "5", "6"],
        answerIndex: 2,
        explanation: "CH4 содержит 1 атом углерода и 4 атома водорода, всего 5."
      }
    ]
  },
  biology: {
    english: [
      {
        id: "bio-en-01",
        prompt: "Which organelle is the main site of cellular respiration?",
        options: ["Nucleus", "Mitochondrion", "Ribosome", "Golgi apparatus"],
        answerIndex: 1,
        explanation: "Mitochondria are the main site of aerobic cellular respiration."
      },
      {
        id: "bio-en-02",
        prompt: "DNA is mainly located in which part of a eukaryotic cell?",
        options: ["Nucleus", "Cell wall", "Cytoplasm only", "Vacuole"],
        answerIndex: 0,
        explanation: "In eukaryotic cells, most DNA is found in the nucleus."
      },
      {
        id: "bio-en-03",
        prompt: "Which blood cells transport oxygen?",
        options: ["White blood cells", "Platelets", "Red blood cells", "Plasma cells"],
        answerIndex: 2,
        explanation: "Red blood cells carry oxygen using hemoglobin."
      },
      {
        id: "bio-en-04",
        prompt: "Photosynthesis primarily occurs in:",
        options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Lysosomes"],
        answerIndex: 1,
        explanation: "Chloroplasts contain chlorophyll and perform photosynthesis."
      },
      {
        id: "bio-en-05",
        prompt: "A gene is best described as:",
        options: ["A type of cell", "A segment of DNA", "A blood protein", "A mineral"],
        answerIndex: 1,
        explanation: "A gene is a segment of DNA that carries genetic information."
      },
      {
        id: "bio-en-06",
        prompt: "Which system controls body activities using hormones?",
        options: ["Digestive system", "Endocrine system", "Respiratory system", "Skeletal system"],
        answerIndex: 1,
        explanation: "The endocrine system produces hormones that regulate body functions."
      },
      {
        id: "bio-en-07",
        prompt: "The basic unit of life is the:",
        options: ["Atom", "Cell", "Tissue", "Organ"],
        answerIndex: 1,
        explanation: "The cell is the smallest structural and functional unit of life."
      },
      {
        id: "bio-en-08",
        prompt: "Which molecule is the main energy currency of the cell?",
        options: ["ATP", "DNA", "RNA", "Glucose only"],
        answerIndex: 0,
        explanation: "ATP stores and transfers energy for cellular processes."
      },
      {
        id: "bio-en-09",
        prompt: "Which process produces gametes in humans?",
        options: ["Mitosis", "Meiosis", "Fermentation", "Diffusion"],
        answerIndex: 1,
        explanation: "Meiosis produces sex cells/gametes with half the chromosome number."
      },
      {
        id: "bio-en-10",
        prompt: "What is the function of enzymes?",
        options: ["Store genetic information", "Speed up chemical reactions", "Transport oxygen only", "Build bones only"],
        answerIndex: 1,
        explanation: "Enzymes act as biological catalysts and speed up reactions."
      }
    ],
    russian: [
      {
        id: "bio-ru-01",
        prompt: "Какая органелла является главным местом клеточного дыхания?",
        options: ["Ядро", "Митохондрия", "Рибосома", "Аппарат Гольджи"],
        answerIndex: 1,
        explanation: "Митохондрии — основное место аэробного клеточного дыхания."
      },
      {
        id: "bio-ru-02",
        prompt: "Где в эукариотической клетке главным образом находится ДНК?",
        options: ["В ядре", "В клеточной стенке", "Только в цитоплазме", "В вакуоли"],
        answerIndex: 0,
        explanation: "У эукариот большая часть ДНК находится в ядре."
      },
      {
        id: "bio-ru-03",
        prompt: "Какие клетки крови переносят кислород?",
        options: ["Лейкоциты", "Тромбоциты", "Эритроциты", "Плазматические клетки"],
        answerIndex: 2,
        explanation: "Эритроциты переносят кислород с помощью гемоглобина."
      },
      {
        id: "bio-ru-04",
        prompt: "Фотосинтез главным образом происходит в:",
        options: ["Митохондриях", "Хлоропластах", "Рибосомах", "Лизосомах"],
        answerIndex: 1,
        explanation: "Хлоропласты содержат хлорофилл и осуществляют фотосинтез."
      },
      {
        id: "bio-ru-05",
        prompt: "Ген — это:",
        options: ["Тип клетки", "Участок ДНК", "Белок крови", "Минерал"],
        answerIndex: 1,
        explanation: "Ген — это участок ДНК, содержащий наследственную информацию."
      },
      {
        id: "bio-ru-06",
        prompt: "Какая система регулирует деятельность организма с помощью гормонов?",
        options: ["Пищеварительная", "Эндокринная", "Дыхательная", "Скелетная"],
        answerIndex: 1,
        explanation: "Эндокринная система вырабатывает гормоны."
      },
      {
        id: "bio-ru-07",
        prompt: "Основная единица жизни — это:",
        options: ["Атом", "Клетка", "Ткань", "Орган"],
        answerIndex: 1,
        explanation: "Клетка — основная структурная и функциональная единица жизни."
      },
      {
        id: "bio-ru-08",
        prompt: "Какая молекула является основной энергетической валютой клетки?",
        options: ["АТФ", "ДНК", "РНК", "Только глюкоза"],
        answerIndex: 0,
        explanation: "АТФ переносит энергию для клеточных процессов."
      },
      {
        id: "bio-ru-09",
        prompt: "Какой процесс образует гаметы у человека?",
        options: ["Митоз", "Мейоз", "Брожение", "Диффузия"],
        answerIndex: 1,
        explanation: "Мейоз образует половые клетки с половинным набором хромосом."
      },
      {
        id: "bio-ru-10",
        prompt: "Какова функция ферментов?",
        options: ["Хранить наследственную информацию", "Ускорять химические реакции", "Только переносить кислород", "Только строить кости"],
        answerIndex: 1,
        explanation: "Ферменты являются биологическими катализаторами."
      }
    ]
  }
};
