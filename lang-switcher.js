(function () {
  'use strict';

  /* ============================================================
     TRADUCTIONS — toutes les chaînes statiques du thème
     Clé = identifiant, valeur = texte affiché
  ============================================================ */
  var t = {
    fr: {
      /* --- Sélecteur de langue --- */
      'lang.current': 'FR',

      /* --- Héro accueil --- */
      'hero.badge':   'BAC +1 \u2014 Formation professionnelle',
      'hero.title':   'Une formation sp\u00e9cialis\u00e9e au service du num\u00e9rique',
      'hero.desc':    'Le CS SNO forme des professionnels comp\u00e9tents et rigoureux, capables de r\u00e9pondre aux besoins num\u00e9riques des organisations d\u2019aujourd\u2019hui et de demain.',
      'btn.discover': 'D\u00e9couvrir la formation',
      'btn.contact':  'Nous contacter',

      /* --- Chiffres cl\u00e9s --- */
      'stat.training':   'de formation',
      'stat.internship': 'semaines de stage',
      'stat.subjects':   'mati\u00e8res',
      'stat.certified':  'niveau certifi\u00e9',

      /* --- Section formation (accueil) --- */
      'home.form.title':  'La formation CS SNO',
      'home.form.p1':     'Le Certificat de Sp\u00e9cialisation Service aux Organisations est une formation professionnelle qui pr\u00e9pare concr\u00e8tement aux r\u00e9alit\u00e9s du monde du travail dans le domaine des services aux organisations.',
      'home.form.p2':     'Vous apprendrez \u00e0 cr\u00e9er des sites web sous WordPress, analyser les besoins d\u2019un client et travailler en mode projet professionnel \u00e0 travers des \u00e9tudes de cas concr\u00e8tes.',
      'home.form.btn':    'En savoir plus',
      'home.list.title':  'Ce que vous apprendrez',
      'home.li.1': 'Cr\u00e9er et g\u00e9rer un site web WordPress',
      'home.li.2': 'Analyser les besoins d\u2019un client',
      'home.li.3': 'Concevoir l\u2019architecture d\u2019un site (wireframes, arborescence)',
      'home.li.4': 'Respecter le RGPD et le droit \u00e0 l\u2019image',
      'home.li.5': 'Travailler en mode projet collaboratif',

      /* --- Points forts (accueil) --- */
      'points.title':  'Pourquoi choisir cette formation\u00a0?',
      'point1.title':  'Formation certifi\u00e9e',
      'point1.desc':   'Un dipl\u00f4me reconnu par l\u2019\u00c9tat qui ouvre les portes du march\u00e9 du travail et des formations sup\u00e9rieures.',
      'point2.title':  '100\u00a0% pratique',
      'point2.desc':   'Des projets concrets, des \u00e9tudes de cas r\u00e9els et 12 semaines de stage en entreprise pour une exp\u00e9rience directement valorisable.',
      'point3.title':  'Tourn\u00e9e vers l\u2019avenir',
      'point3.desc':   'Num\u00e9rique, cybers\u00e9curit\u00e9 et communication digitale au c\u0153ur du programme pour r\u00e9pondre aux besoins d\u2019aujourd\u2019hui.',

      /* --- Actualit\u00e9s (accueil) --- */
      'actu.title': 'Actualit\u00e9s',
      'actu.desc':  'Suivez les derni\u00e8res sorties scolaires, \u00e9v\u00e9nements et nouveaut\u00e9s de la formation.',
      'actu.btn':   'Voir les actualit\u00e9s',

      /* --- Page stages --- */
      'stage.section.title': 'Les stages',
      'stage.intro.p1': 'Dans le cadre de la formation les p\u00e9riodes de stage occupent une place essentielle. Elles permettent de mettre en pratique les connaissances acquises en centre de formation et de d\u00e9velopper des comp\u00e9tences professionnelles en situation r\u00e9elle au sein d\u2019une organisation.',
      'stage.intro.p2': 'Les stages sont directement li\u00e9s aux blocs de comp\u00e9tences de la formation.',
      'stage.referentiel.desc': 'Vous voulez conna\u00eetre pr\u00e9cis\u00e9ment ce qui est \u00e9valu\u00e9 en stage\u00a0? T\u00e9l\u00e9chargez le r\u00e9f\u00e9rentiel officiel\u00a0: il d\u00e9taille les blocs de comp\u00e9tences, les crit\u00e8res d\u2019\u00e9valuation et les attendus de chaque p\u00e9riode.',
      'stage.referentiel.btn': 'T\u00e9l\u00e9charger le r\u00e9f\u00e9rentiel MCSNO \u2193',
      'cours.label':         'semaines de cours',
      'cours.hint':          'Survolez pour les d\u00e9tails',
      'cours.back.title':    'Formation en classe',
      'cours.back.desc':     '20 semaines de formation th\u00e9orique avec vos formateurs. Vous y acqu\u00e9rez toutes les bases professionnelles et techniques n\u00e9cessaires\u00a0: bureautique, communication, cybers\u00e9curit\u00e9 et gestion administrative.',
      'auto.label':          'par semaine en autonomie',
      'auto.hint':           'Survolez pour les d\u00e9tails',
      'auto.back.title':     'Travail en autonomie',
      'auto.back.desc':      '4 heures par semaine consacr\u00e9es au travail personnel, aux r\u00e9visions et aux projets individuels. Ce temps vous permet de consolider vos acquis \u00e0 votre rythme et de pr\u00e9parer les \u00e9valuations.',
      'stage.flip.label':    'semaines de stage',
      'stage.flip.hint':     'Survolez pour les d\u00e9tails',
      'stage.back.title':    'Immersion professionnelle',
      'stage.back.desc':     '12 semaines r\u00e9parties en 2 p\u00e9riodes de 6 semaines en milieu professionnel. Une exp\u00e9rience concr\u00e8te pour mettre en pratique vos comp\u00e9tences et d\u00e9couvrir le monde du travail.',
      'periodes.title':      'D\u00e9tail des p\u00e9riodes de stage',
      'periode1.label':      'P\u00e9riode 1',
      'periode2.label':      'P\u00e9riode 2',
      'total.label':         'Total',
      'dur.6sem':            '6 semaines',
      'dur.12sem':           '12 semaines',
      'obj.title':           'Objectifs du stage',
      'obj1.title':          '\ud83c\udfaf Mettre en pratique',
      'obj1.desc':           'Appliquer en situation r\u00e9elle les comp\u00e9tences acquises en classe\u00a0: gestion administrative, communication, outils bureautiques et num\u00e9riques.',
      'obj2.title':          '\ud83e\udd1d D\u00e9couvrir l\u2019entreprise',
      'obj2.desc':           'Int\u00e9grer une \u00e9quipe professionnelle, comprendre le fonctionnement d\u2019une organisation et d\u00e9velopper son sens du service et de l\u2019adaptation.',
      'obj3.title':          '\ud83d\udccb Construire son dossier',
      'obj3.desc':           'R\u00e9diger un rapport de stage et pr\u00e9senter son exp\u00e9rience \u00e0 l\u2019oral devant un jury pour valider l\u2019\u00e9preuve professionnelle de fin d\u2019ann\u00e9e.',

      /* --- Page pr\u00e9sentation --- */
      'pres.badge':    'BAC +1 \u2014 Formation professionnelle',
      'pres.title':    'Pr\u00e9sentation de la formation',
      'pres.subtitle': 'D\u00e9couvrez le programme, les mati\u00e8res, les stages et les d\u00e9bouch\u00e9s du Certificat de Sp\u00e9cialisation Service aux Organisations.',
      'form.label':    'La formation',
      'form.title':    'Une formation tourn\u00e9e vers l\u2019avenir',
      'form.p1':       'Le Certificat de Sp\u00e9cialisation Service aux Organisations est une formation de niveau BAC\u00a0+\u00a01 qui te pr\u00e9pare concr\u00e8tement aux r\u00e9alit\u00e9s du monde professionnel.',
      'form.p2':       'En une ann\u00e9e, tu acqu\u00e9iers des comp\u00e9tences directement op\u00e9rationnelles pour int\u00e9grer le march\u00e9 du travail ou poursuivre tes \u00e9tudes.',
      'info.niveau.label': 'Niveau',
      'info.niveau.val':   'BAC +1 certifi\u00e9',
      'info.duree.label':  'Dur\u00e9e',
      'info.duree.val':    '1 an \u2014 576\u00a0h de formation',
      'info.stage.label':  'Stages',
      'info.stage.val':    '12 semaines en entreprise',
      'comp.label':    'Savoir-faire',
      'comp.title':    'Comp\u00e9tences d\u00e9velopp\u00e9es',
      'comp.intro':    'Au cours de cette formation, tu d\u00e9veloppes des comp\u00e9tences professionnelles et transversales recherch\u00e9es par les employeurs.',
      'comp.1': 'Organisation & gestion administrative',
      'comp.2': 'Communication \u00e9crite et orale',
      'comp.3': 'Ma\u00eetrise des outils bureautiques',
      'comp.4': 'Gestion de l\u2019information',
      'comp.5': 'Cybers\u00e9curit\u00e9 & outils num\u00e9riques',
      'comp.6': 'Sens du service & autonomie',
      'mat.label':   'Programme',
      'mat.title':   'Les mati\u00e8res de la formation',
      'mat.intro':   'Survolez chaque carte pour d\u00e9couvrir le contenu de la mati\u00e8re.',
      'flip.hint':   'Survolez pour en savoir plus',
      'mat.anglais.h3':    'Anglais',
      'mat.anglais.p':     'L\u2019anglais est incontournable dans l\u2019environnement professionnel d\u2019aujourd\u2019hui. Tu y travailles le vocabulaire des affaires, la compr\u00e9hension de documents professionnels, la r\u00e9daction de mails et la communication orale en contexte de travail.',
      'mat.media.h3':      'Technologie Multim\u00e9dia',
      'mat.media.p':       'Tu ma\u00eetrises les outils num\u00e9riques et multim\u00e9dias utilis\u00e9s en organisation\u00a0: cr\u00e9ation de contenus num\u00e9riques, logiciels de traitement d\u2019image et de vid\u00e9o, communication visuelle.',
      'mat.pro.h3':        'Enseignement Professionnel',
      'mat.pro.p':         'La mati\u00e8re centrale de la formation. Tu y \u00e9tudies les proc\u00e9dures administratives, la gestion documentaire, la relation avec les usagers et les t\u00e2ches propres au fonctionnement d\u2019un service, \u00e0 partir de cas r\u00e9els.',
      'mat.bureau.h3':     'Bureautique',
      'mat.bureau.p':      'Tu ma\u00eetrises la suite Office (Word, Excel, PowerPoint), la gestion de fichiers et bases de donn\u00e9es, la mise en forme de documents professionnels et les outils collaboratifs en entreprise.',
      'mat.cyber.h3':      'Cyber S\u00e9curit\u00e9',
      'mat.cyber.h3back':  'Cyber S\u00e9curit\u00e9 & Services Informatiques',
      'mat.cyber.p':       'Tu apprends \u00e0 identifier les risques num\u00e9riques, adopter les bonnes pratiques de s\u00e9curit\u00e9 informatique et comprendre l\u2019organisation des syst\u00e8mes d\u2019information au sein d\u2019une structure.',
      'horaire.title':     'Volume horaire par mati\u00e8re',
      'th.matiere':   'Mati\u00e8re',
      'th.h.sem':     'Heures / semaine',
      'th.h.an':      'Heures annuelles (36 semaines)',
      'th.coeff':     'Coefficient',
      'td.anglais':   'Anglais',
      'td.media':     'Technologie Multim\u00e9dia',
      'td.pro':       'Enseignement Professionnel',
      'td.bureau':    'Bureautique',
      'td.cyber':     'Cyber S\u00e9curit\u00e9 et Services Informatiques',
      'td.total':     'Total',
      'stagelink.label': 'Immersion professionnelle',
      'stagelink.title': 'Les stages',
      'stagelink.p':     'La formation inclut des p\u00e9riodes de stage en entreprise pour mettre en pratique tes acquis et d\u00e9couvrir le monde professionnel en conditions r\u00e9elles.',
      'stagelink.btn':   'Voir la page d\u00e9di\u00e9e aux stages \u2192',
      'apres.label':     'D\u00e9bouch\u00e9s',
      'apres.title':     'Apr\u00e8s la formation',
      'apres1.title':    '\ud83c\udf93 Poursuivre ses \u00e9tudes',
      'apres1.desc':     'Ce Certificat de Sp\u00e9cialisation BAC+1 te permet d\u2019acc\u00e9der \u00e0 des formations de niveau sup\u00e9rieur\u00a0: BTS (BAC+2), BUT (BAC+3), Licence professionnelle ou formation en alternance.',
      'apres2.title':    '\ud83d\udcbc M\u00e9tiers accessibles',
      'apres2.desc':     'Assistant(e) administratif(ve), assistant(e) de direction, charg\u00e9(e) d\u2019accueil, gestionnaire de dossiers, secr\u00e9taire, agent(e) de coordination ou assistant(e) RH dans tous les secteurs.',
      'epreuve.label':   'Examen',
      'epreuve.title':   'D\u00e9roulement des \u00e9preuves',
      'epreuve.intro':   'L\u2019examen final se compose de 3 \u00e9preuves\u00a0: 1 oral et 2 \u00e9crits.',
      'th.epreuve':  '\u00c9preuve',
      'th.format':   'Format',
      'th.duree':    'Dur\u00e9e',
      'th.desc':     'Description',
      'ep1.name':    'Expression orale professionnelle',
      'ep1.format':  'Oral',
      'ep1.duree':   '20 min (+ 20 min de pr\u00e9paration)',
      'ep1.desc':    'Pr\u00e9sentation d\u2019un dossier ou mise en situation devant un jury, suivie d\u2019un entretien.',
      'ep2.name':    'Culture g\u00e9n\u00e9rale et expression \u00e9crite',
      'ep2.format':  '\u00c9crit',
      'ep2.duree':   '2 h 30',
      'ep2.desc':    'Synth\u00e8se de documents et r\u00e9daction d\u2019un texte argument\u00e9 \u00e0 partir d\u2019un dossier th\u00e9matique.',
      'ep3.name':    'Enseignement Professionnel',
      'ep3.format':  '\u00c9crit',
      'ep3.duree':   '3 h',
      'ep3.desc':    '\u00c9tude de cas portant sur les comp\u00e9tences administratives et organisationnelles acquises durant l\u2019ann\u00e9e.',

      /* --- Footer --- */
      'footer.mentions':  'Mentions l\u00e9gales',
      'footer.politique': 'Politique de confidentialit\u00e9',
      'footer.contact':   'Contact',
      'footer.adresse':   'Adresse\u00a0:',
      'footer.tel':       'T\u00e9l\u00a0:',
      'footer.mail':      'Mail\u00a0:',
      'footer.rights':    'Tous droits r\u00e9serv\u00e9s.',
    },

    en: {
      /* --- Language selector --- */
      'lang.current': 'EN',

      /* --- Hero home --- */
      'hero.badge':   'BAC +1 \u2014 Professional Training',
      'hero.title':   'Specialized Training for Digital Services',
      'hero.desc':    'CS SNO trains competent and rigorous professionals, ready to meet the digital needs of today\u2019s and tomorrow\u2019s organizations.',
      'btn.discover': 'Discover the Training',
      'btn.contact':  'Contact Us',

      /* --- Key figures --- */
      'stat.training':   'of training',
      'stat.internship': 'weeks of internship',
      'stat.subjects':   'subjects',
      'stat.certified':  'certified level',

      /* --- Training overview (home) --- */
      'home.form.title':  'The CS SNO Training',
      'home.form.p1':     'The Certificate of Specialization in Organizational Services is a professional training program that concretely prepares students for the realities of the working world in the field of organizational services.',
      'home.form.p2':     'You will learn to build WordPress websites, analyze client needs, and work in a professional project mode through real-world case studies.',
      'home.form.btn':    'Learn More',
      'home.list.title':  'What You Will Learn',
      'home.li.1': 'Create and manage a WordPress website',
      'home.li.2': 'Analyze client needs',
      'home.li.3': 'Design site architecture (wireframes, site structure)',
      'home.li.4': 'Comply with GDPR and image rights',
      'home.li.5': 'Work in collaborative project mode',

      /* --- Highlights (home) --- */
      'points.title':  'Why Choose This Training?',
      'point1.title':  'State-Certified',
      'point1.desc':   'A state-recognized diploma that opens doors to the job market and higher education.',
      'point2.title':  '100% Practical',
      'point2.desc':   'Real projects, case studies and 12 weeks of internship for immediately valuable professional experience.',
      'point3.title':  'Future-Oriented',
      'point3.desc':   'Digital technology, cybersecurity and digital communication at the core of the curriculum.',

      /* --- News (home) --- */
      'actu.title': 'News & Events',
      'actu.desc':  'Follow the latest school trips, events and training news.',
      'actu.btn':   'View News',

      /* --- Internships page --- */
      'stage.section.title': 'Internships',
      'stage.intro.p1': 'As part of the training program, internship periods play an essential role. They allow students to apply the knowledge acquired at the training center and to develop professional skills in real situations within an organization.',
      'stage.intro.p2': 'The internships are directly linked to the competency blocks of the training program.',
      'stage.referentiel.desc': 'Want to know exactly what is assessed during the internship? Download the official framework: it details the competency blocks, assessment criteria and expectations for each period.',
      'stage.referentiel.btn': 'Download the MCSNO Framework \u2193',
      'cours.label':         'weeks of classes',
      'cours.hint':          'Hover for details',
      'cours.back.title':    'Classroom Training',
      'cours.back.desc':     '20 weeks of theoretical training with your instructors. You will acquire all the professional and technical foundations: office tools, communication, cybersecurity and administrative management.',
      'auto.label':          'per week of self-study',
      'auto.hint':           'Hover for details',
      'auto.back.title':     'Self-Study Work',
      'auto.back.desc':      '4 hours per week dedicated to personal work, revision and individual projects. This time helps you consolidate your skills at your own pace and prepare for assessments.',
      'stage.flip.label':    'weeks of internship',
      'stage.flip.hint':     'Hover for details',
      'stage.back.title':    'Professional Immersion',
      'stage.back.desc':     '12 weeks split into 2 periods of 6 weeks in a professional environment. A concrete experience to apply your skills and discover the working world.',
      'periodes.title':      'Internship Period Details',
      'periode1.label':      'Period 1',
      'periode2.label':      'Period 2',
      'total.label':         'Total',
      'dur.6sem':            '6 weeks',
      'dur.12sem':           '12 weeks',
      'obj.title':           'Internship Objectives',
      'obj1.title':          '\ud83c\udfaf Apply Knowledge',
      'obj1.desc':           'Apply in real situations the skills learned in class: administrative management, communication, office and digital tools.',
      'obj2.title':          '\ud83e\udd1d Discover the Company',
      'obj2.desc':           'Join a professional team, understand how an organization works and develop your sense of service and adaptability.',
      'obj3.title':          '\ud83d\udccb Build Your Portfolio',
      'obj3.desc':           'Write an internship report and present your experience orally before a panel to validate the professional assessment at the end of the year.',

      /* --- Presentation page --- */
      'pres.badge':    'BAC +1 \u2014 Professional Training',
      'pres.title':    'Training Overview',
      'pres.subtitle': 'Discover the curriculum, subjects, internships and career prospects of the Certificate of Specialization in Organizational Services.',
      'form.label':    'The Training',
      'form.title':    'Training for the Future',
      'form.p1':       'The Certificate of Specialization in Organizational Services is a BAC+1 level program that prepares you for the realities of the professional world.',
      'form.p2':       'In one year, you acquire directly operational skills to enter the job market or continue your studies.',
      'info.niveau.label': 'Level',
      'info.niveau.val':   'Certified BAC+1',
      'info.duree.label':  'Duration',
      'info.duree.val':    '1 year \u2014 576\u00a0h of training',
      'info.stage.label':  'Internships',
      'info.stage.val':    '12 weeks in companies',
      'comp.label':    'Skills',
      'comp.title':    'Developed Skills',
      'comp.intro':    'Throughout this training, you develop professional and transferable skills sought by employers.',
      'comp.1': 'Organization & administrative management',
      'comp.2': 'Written and oral communication',
      'comp.3': 'Mastery of office tools',
      'comp.4': 'Information management',
      'comp.5': 'Cybersecurity & digital tools',
      'comp.6': 'Service mindset & autonomy',
      'mat.label':   'Curriculum',
      'mat.title':   'Training Subjects',
      'mat.intro':   'Hover each card to discover the subject content.',
      'flip.hint':   'Hover to learn more',
      'mat.anglais.h3':    'English',
      'mat.anglais.p':     'English is essential in today\u2019s professional environment. You will work on business vocabulary, understanding professional documents, writing emails and oral communication in a work context.',
      'mat.media.h3':      'Multimedia Technology',
      'mat.media.p':       'You will master digital and multimedia tools used in organizations: creating digital content, image and video editing software, visual communication.',
      'mat.pro.h3':        'Professional Studies',
      'mat.pro.p':         'The core subject of the training. You will study administrative procedures, document management, user relations and service operations, based on real-life case studies.',
      'mat.bureau.h3':     'Office Computing',
      'mat.bureau.p':      'You will master the Office suite (Word, Excel, PowerPoint), file and database management, professional document formatting and collaborative tools.',
      'mat.cyber.h3':      'Cybersecurity',
      'mat.cyber.h3back':  'Cybersecurity & IT Services',
      'mat.cyber.p':       'You will learn to identify digital risks, adopt good IT security practices and understand how information systems are organized within a structure.',
      'horaire.title':     'Weekly Hours per Subject',
      'th.matiere':   'Subject',
      'th.h.sem':     'Hours / week',
      'th.h.an':      'Annual hours (36 weeks)',
      'th.coeff':     'Coefficient',
      'td.anglais':   'English',
      'td.media':     'Multimedia Technology',
      'td.pro':       'Professional Studies',
      'td.bureau':    'Office Computing',
      'td.cyber':     'Cybersecurity & IT Services',
      'td.total':     'Total',
      'stagelink.label': 'Professional Immersion',
      'stagelink.title': 'Internships',
      'stagelink.p':     'The training includes internship periods in companies to apply your knowledge and discover the professional world in real conditions.',
      'stagelink.btn':   'See the internship page \u2192',
      'apres.label':     'Career Prospects',
      'apres.title':     'After the Training',
      'apres1.title':    '\ud83c\udf93 Continue Studying',
      'apres1.desc':     'This BAC+1 Certificate gives you access to higher-level programs: BTS (BAC+2), BUT (BAC+3), Professional Degree or apprenticeship.',
      'apres2.title':    '\ud83d\udcbc Career Opportunities',
      'apres2.desc':     'Administrative assistant, executive assistant, receptionist, file manager, secretary, coordination officer or HR assistant across all sectors.',
      'epreuve.label':   'Examination',
      'epreuve.title':   'Examination Structure',
      'epreuve.intro':   'The final exam consists of 3 tests: 1 oral and 2 written.',
      'th.epreuve':  'Test',
      'th.format':   'Format',
      'th.duree':    'Duration',
      'th.desc':     'Description',
      'ep1.name':    'Professional Oral Presentation',
      'ep1.format':  'Oral',
      'ep1.duree':   '20 min (+ 20 min preparation)',
      'ep1.desc':    'Presentation of a portfolio or role-play before a panel, followed by an interview.',
      'ep2.name':    'General Knowledge & Written Expression',
      'ep2.format':  'Written',
      'ep2.duree':   '2 h 30',
      'ep2.desc':    'Document synthesis and writing of an argued text based on a thematic file.',
      'ep3.name':    'Professional Studies',
      'ep3.format':  'Written',
      'ep3.duree':   '3 h',
      'ep3.desc':    'Case study based on administrative and organizational skills acquired during the year.',

      /* --- Footer --- */
      'footer.mentions':  'Legal Notices',
      'footer.politique': 'Privacy Policy',
      'footer.contact':   'Contact',
      'footer.adresse':   'Address:',
      'footer.tel':       'Phone:',
      'footer.mail':      'Email:',
      'footer.rights':    'All rights reserved.',
    }
  };

  /* ============================================================
     MOTEUR DE TRADUCTION
  ============================================================ */
  function applyLang(lang) {
    var dict = t[lang] || t['fr'];

    /* Remplacement textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* Remplacement innerHTML (éléments avec balises internes) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* Mise à jour du bouton */
    var label = document.getElementById('lang-current');
    if (label && dict['lang.current']) label.textContent = dict['lang.current'];

    /* Mise à jour de l'état actif des options */
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Attribut lang sur <html> pour l'accessibilité */
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'fr');

    localStorage.setItem('siteLang', lang);
  }

  /* ============================================================
     INITIALISATION
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    var switcher  = document.getElementById('lang-switcher');
    var toggleBtn = document.getElementById('lang-toggle');

    /* Ouvrir / fermer le dropdown */
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        switcher.classList.toggle('open');
      });
    }

    /* Fermer en cliquant ailleurs */
    document.addEventListener('click', function () {
      if (switcher) switcher.classList.remove('open');
    });

    /* Clic sur une option de langue */
    document.querySelectorAll('.lang-option').forEach(function (option) {
      option.addEventListener('click', function (e) {
        e.stopPropagation();
        applyLang(this.dataset.lang);
        if (switcher) switcher.classList.remove('open');
      });
    });

    /* Appliquer la langue sauvegardée (ou FR par défaut) */
    var saved = localStorage.getItem('siteLang') || 'fr';
    applyLang(saved);
  });

})();
