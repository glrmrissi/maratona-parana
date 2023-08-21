let showOpen2 = document.querySelector('.open')
let openTheme = document.querySelector('.theme-open')

function show() {
  showOpen2.classList.toggle('acti')
}

let dark = document.querySelector("#dark")
let header = document.querySelector(".header-container")
let menu = document.querySelector(".menu_svg")
let item_menu = document.querySelector(".item-menu")
let house = document.querySelector("#house")
let moon = document.querySelector("#moon")
let dots = document.querySelector("#three-dots")

dark.addEventListener('click', () => {
  document.body.classList.toggle("dark");
  header.classList.toggle('dark')
  menu.classList.toggle('dark')
  showOpen2.classList.toggle('dark')
  item_menu.classList.toggle('dark')
})

const darkButton = document.getElementById('dark')
const iconList = document.getElementById('iconList')
const close = document.getElementById('close')
const sun = document.querySelector("#sun")
const sun2 = document.querySelector("#sun-2")

darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        iconList.style.fill = 'white'
        flagColor.style.fill='white'
        house.style.fill='white'
        close.style.fill='white'
        sun.style.fill='white'
        sun2.style.fill='white'
    } else {
        iconList.style.fill = 'black'
        flagColor.style.fill='black'
        house.style.fill='black'
        close.style.fill='black'
        sun.style.fill='black'
        sun2.style.fill='black'
    }
});


let flagOpen = document.querySelector(".flag_open")

function flagShow () {
    flagOpen.classList.toggle('showFlag')

    setTimeout( function () {
      flagOpen.classList.remove('showFlag')
  }, 5000)
}


let btn = document.getElementById('btnTop')

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

function ocultar() {
  if (window.scrollY < 10) {
      btn.style.visibility = "hidden";
      btn.style.opacity = "0";
  } else {
      btn.style.visibility = "visible";
      btn.style.opacity = "1";
  }
}

window.addEventListener("scroll", ocultar)

const observer = new IntersectionObserver(entries => {
    entries[0].target.classList.add('init-hidden-off')
}, {
  threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(elementos => {
  observer.observe(elementos)
})



const translate = {
  pt: {
    home: "Início", 
    theme: "Tema",
    im: "Eu sou",
    im_span_1: "Desenvolvedor",
    im_span_2: "Estudante",
    curso: "Cursos Técnicos",
    sdi: "Sistemas de informação - 4 anos",
    sdi_p_1: "- A faculdade de Sistemas de Informação oferece aos alunos uma educação abrangente e especializada na interseção entre a tecnologia da informação e os processos de negócios. Essa área de estudo visa preparar os estudantes para entender, projetar, desenvolver e gerenciar sistemas de informação eficazes, que desempenham um papel crucial em empresas, organizações governamentais e diversos setores da sociedade contemporânea.",
    sdi_p_2: "- Ao longo do curso de Sistemas de Informação, os alunos são expostos a uma variedade de tópicos que abrangem tanto os aspectos técnicos quanto os aspectos de negócios da disciplina. Algumas das áreas principais que são exploradas incluem: ",
    sdi_h5_1: "Programação e Desenvolvimento de Software",
    sdi_p_3: "- Os alunos aprendem várias linguagens de programação, estruturas de desenvolvimento e técnicas para criar aplicativos e sistemas de software eficientes e funcionais.",
    sdi_h5_2: "Análise e Projeto de Sistemas",
    sdi_p_4: "- Os estudantes são ensinados a identificar necessidades de sistemas de informação, modelar processos de negócios, projetar soluções tecnológicas e garantir que as aplicações atendam aos requisitos dos usuários.",
    sdi_h5_3: "Segurança da Informação",
    sdi_p_5: "- Com a crescente ameaça de ciberataques, os alunos aprendem sobre práticas e técnicas de segurança para proteger sistemas, redes e dados contra ameaças digitais.",
    sdi_h5_4: "Aspectos de Negócios",
    sdi_p_6: "- Além das habilidades técnicas, os alunos também exploram conceitos de gestão, economia, marketing e estratégia para entender como a tecnologia da informação pode impulsionar os objetivos de negócios de uma organização.",
    ads: "Análise e Desenvolvimento de Sistemas - 2 a 3 anos", 
    ads_p_1: "- A faculdade de Análise e Desenvolvimento de Sistemas oferece aos alunos uma educação focada e prática em todas as etapas do ciclo de vida dos sistemas de software. Essa área de estudo visa preparar os estudantes para entender as necessidades dos usuários, projetar soluções eficazes, desenvolver aplicativos e garantir que esses sistemas atendam aos requisitos de qualidade e funcionalidade.",
    ads_p_2: "- Ao longo do curso de Análise e Desenvolvimento de Sistemas, os alunos são expostos a uma variedade de tópicos que abrangem tanto os aspectos técnicos quanto os aspectos práticos da disciplina. Algumas das áreas principais que são exploradas incluem:",
    ads_h5_1: "Programação e Desenvolvimento de Software",
    ads_p_3: "- Os alunos aprendem várias linguagens de programação, técnicas de codificação, estruturas de desenvolvimento e princípios de design para criar aplicativos e sistemas de software de alta qualidade.",
    ads_h5_2: "Análise de Requisitos ",
    ads_p_4: "- Os estudantes são treinados para coletar, documentar e compreender as necessidades dos usuários e transformá-las em requisitos claros e precisos para o desenvolvimento de sistemas.",
    ads_h5_3: "Banco de Dados",
    ads_p_5: "- Os alunos aprendem a projetar e gerenciar bancos de dados, permitindo a manipulação eficiente e a recuperação de informações relevantes.",
    saiba: "Saiba mais",
    ccp: "Ciência da Computação - 4 anos",
    ccp_p_1: "- A faculdade de Ciência da Computação oferece aos alunos uma educação abrangente e aprofundada no vasto campo da computação. Essa área de estudo visa proporcionar aos estudantes uma compreensão sólida dos princípios teóricos e práticos que sustentam a tecnologia da informação, bem como capacitá-los a resolver problemas complexos por meio de abordagens algorítmicas e criativas.",
    ccp_p_2: "- Ao longo do curso de Ciência da Computação, os alunos são expostos a uma ampla gama de tópicos que abrangem desde a teoria fundamental até as aplicações mais avançadas da disciplina. Algumas das áreas principais que são exploradas incluem:",
    ccp_h5_1: "Algoritmos e Estruturas de Dados",
    ccp_p_3: "- Os alunos aprendem a projetar algoritmos eficientes e estruturas de dados para resolver problemas de forma otimizada, seja em aplicativos, sistemas ou plataformas.",
    ccp_h5_2: "Programação",
    ccp_p_4: "-  A faculdade oferece um conhecimento profundo de várias linguagens de programação, bem como técnicas de codificação e desenvolvimento de software de alta qualidade.",
    ccp_h5_3: "Teoria da Computação",
    ccp_p_5: "- Os estudantes exploram os fundamentos teóricos da computação, incluindo autômatos, linguagens formais, complexidade computacional e lógica",
    ccp_h5_4: "Inteligência Artificial e Aprendizado de Máquina",
    ccp_p_6: "- Com o crescimento da IA, os alunos são apresentados aos conceitos de criação de sistemas que podem simular processos de inteligência humana e aprender a partir de dados.",
    ccp_h5_5: "Desenvolvimento de Software", 
    ccp_p_7: "- Além de programação, os estudantes exploram métodos de desenvolvimento de software, práticas ágeis e colaboração em equipes de desenvolvimento.",
    faculs: "Faculdades em Londrina",
    faculs_p_1: "Em Londrina, Brasil, diversas instituições de ensino oferecem cursos relacionados à área de Tecnologia da Informação, como Ciência da Computação, Análise e Desenvolvimento de Sistemas e Sistemas de Informação. Algumas das faculdades que podem oferecer esses cursos incluem:",
    faculs_h5_1: "Universidade Estadual de Londrina (UEL)",
    faculs_p_2: "- A UEL é uma das principais instituições de ensino da região e oferece cursos de Ciência da Computação e Sistemas de Informação.",
    faculs_h5_2: "Pontifícia Universidade Católica do Paraná (PUCPR) - Campus Londrina",
    faculs_p_3: "- A PUCPR também tem um campus em Londrina e oferece cursos na área de tecnologia, como Ciência da Computação e Engenharia de Software.",
    faculs_h5_3: "Centro Universitário Filadélfia (UNIFIL)",
    faculs_p_4: "- A UNIFIL oferece cursos como Análise e Desenvolvimento de Sistemas e Sistemas de Informação.",
    faculs_h5_4: "Faculdade Pitágoras",
    faculs_p_5: "- A Faculdade Pitágoras tem uma unidade em Londrina e oferece cursos como Análise e Desenvolvimento de Sistemas.",
    faculs_h5_5: "Instituto Federal do Paraná (IFPR) - Campus Londrina",
    faculs_p_6: "- O IFPR oferece cursos técnicos e de nível superior na área de Tecnologia da Informação.",
    faculs_p_7: "É importante ressaltar que a disponibilidade dos cursos pode variar de acordo com os semestres e a oferta acadêmica de cada instituição. Recomendo que você entre em contato diretamente com essas faculdades para obter informações atualizadas sobre os cursos que elas oferecem em Londrina. Além disso, você pode verificar os sites das instituições, participar de feiras de educação ou buscar informações junto a conselhos de estudantes locais para obter informações mais detalhadas sobre as opções disponíveis.",
    gui: "Por que escolhi Sistemas de informação?",
    gui_p_1: "-  Eu, Guilherme Rissi, escolhi sistemas de informação, para fazer um bacharelado para trabalhar fora, já que empresas de fora aceitam mais bacharelados.",
    gui_p_2: "- Além de eu gostar bastante de tráfego de redes e amar programação, estou a espera de terminar a escola para fazer um estágio e uma faculdade, sob oque eu mais gosto de estudar e fazer.",

  }, 
  ja: {
    home: "ホーム", 
    theme: "テーマ",
    im: "私は",
    im_span_1: "かいはつしゃ",
    im_span_2: "がくせい",
    curso: "テクニカルコース",
    sdi: "情報システム - 4年",
    sdi_p_1: "- 情報システム学部は、情報技術とビジネスプロセスの交差点における幅広く専門的な教育を学生に提供します。この学問分野は、効果的な情報システムの理解、設計、開発、および管理を学生に準備させることを目指しており、これらは企業、政府機関、そして現代社会のさまざまなセクターにおいて重要な役割を果たしています。",
    sdi_p_2: "- 情報システムのコースを通じて、学生はその学問分野の技術的側面とビジネス側面の両方をカバーするさまざまなトピックに触れます。探求される主な分野には以下が含まれます：",
    sdi_h5_1: "プログラミングとソフトウェア開発",
    sdi_p_3: "- 学生は、効率的で機能的なソフトウェアアプリケーションやシステムを作成するためのさまざまなプログラミング言語、開発フレームワーク、および技術を学びます。がくせいは、こうりつてきできのうてきなそふとうぇああぷりけーしょんやしっすてむをさくせいするためのさまざまなぷろぐらみんぐげんご、かいはつふれーむわーく、およびぎじゅつをまなびます。",
    sdi_h5_2: "システム分析と設計",
    sdi_p_4: "- 学生は情報システムのニーズを特定し、ビジネスプロセスをモデル化し、技術的なソリューションを設計し、アプリケーションがユーザー要件を満たすことを確認する方法を学びます",
    sdi_h5_3: "情報セキュリティ",
    sdi_p_5: "- サイバーアタックの増加する脅威に対して、学生はシステム、ネットワーク、およびデータをデジタル脅威から守るためのセキュリティの実践と技術について学びます。",
    sdi_h5_4: "ビジネスの側面",
    sdi_p_6: "- 技術的なスキルに加えて、学生は経営、経済、マーケティング、戦略の概念も探求し、情報技術が組織のビジネス目標を推進する方法を理解します。",
    ads: "システム分析と開発 - 2から3年",
    ads_p_1: "- システム分析と開発学部は、ソフトウェアシステムのライフサイクルのすべての段階で学生に焦点を当てた実践的な教育を提供します。この学問分野は、学生がユーザーのニーズを理解し、効果的なソリューションを設計し、アプリケーションを開発し、これらのシステムが品質と機能性の要件を満たすように準備することを目指しています。",
    ads_p_2: "- システム分析と開発のコース全体を通じて、学生はその学問分野の技術的な側面と実践的な側面の両方をカバーするさまざまなトピックに触れます。探求される主な分野には以下が含まれます：",
    ads_h5_1: "プログラミングとソフトウェア開発",
    ads_p_3: "- 学生は高品質のソフトウェアアプリケーションとシステムを作成するために、複数のプログラミング言語、コーディング技術、開発フレームワーク、およびデザイン原則を学びます。",
    ads_h5_2: "要件分析",
    ads_p_4: "- 学生はユーザーのニーズを収集し、文書化し、理解し、それらをシステムの開発のための明確かつ正確な要件に変換する訓練を受けます。",
    ads_h5_3: "データベース",
    ads_p_5: "- 学生はデータベースを設計し、管理する方法を学び、関連する情報の効率的な操作と取得を可能にします。",
    saiba: "もっと詳しく知る :",
    ccp: "こんぴゅーたさいえんす- 4年",
    ccp_p_1: "- コンピュータサイエンス学部は学生にコンピューティングの広大な分野で包括的かつ深い教育を提供します。この学問分野は、学生に情報技術を支える理論的な原則と実践的な原則の堅固な理解を提供することを目指し、アルゴリズムと創造的なアプローチを通じて複雑な問題を解決できるようにすることを目的としています。",
    ccp_p_2: "- コンピュータサイエンスのコース全体を通じて、学生は学問の基本理論から最も高度な応用までを含む幅広いトピックに触れます。探求される主要な分野には以下が含まれます：",
    ccp_h5_1: "アルゴリズムとデータ構造",
    ccp_p_3: "- がくせいは、あぷりけーしょん、しすてむ、またはぷらっとふぉーむにおいてさいてきなほうほうでもんだいをかいけつするためのこうりつてきなあるごりずむとでーたこうぞうをせっけいするほうほうをまなびます。",
    ccp_h5_2: "ぷろぐらみんぐ",
    ccp_p_4: "- このだいがくは、さまざまなぷろぐらみんぐげんごやこーでぃんぐぎじゅつ、こうひんしつなそふとうぇあかいはつにかんするふかいちしきをていきょうしています。",
    ccp_h5_3: "こんぴゅーたりろん",
    ccp_p_5: "- 学生は、オートマトン、形式言語、計算複雑性、および論理学を含むコンピュータサイエンスの理論的な基盤を探求します。",
    ccp_h5_4: "じんこうちのうときかいがくしゅう",
    ccp_p_6: "- AIの成長とともに、学生は人間の知的プロセスをシミュレートし、データから学習できるシステムを作成する概念に触れます。",
    ccp_h5_5: "ソフトウェア開発", 
    ccp_p_7: "- プログラムの他に、学生はソフトウェア開発の方法、アジャイルな実践、および開発チームでの協力を探求します。",
    faculs: "ロンドリーナの大学",
    faculs_p_1: "ブラジルのロンドリーナでは、コンピュータサイエンス、システム分析と開発、情報システムなど、情報技術分野に関連するさまざまな教育機関でコースが提供されています。これらのコースを提供する可能性がある大学の一部は次の通りです：",
    faculs_h5_1: "ロンドリーナ州立大学 UEL",
    faculs_p_2: "- UELはその地域でトップの教育機関の一つで、コンピュータサイエンスと情報システムのコースを提供しています。",
    faculs_h5_2: "パラナポンティフィシア大学 PUCPR - ロンドリーナキャンパス",
    faculs_p_3: "- PUCPRはロンドリーナにもキャンパスを持ち、コンピュータサイエンスやソフトウェアエンジニアリングなどの技術関連のコースを提供しています。",
    faculs_h5_3: "フィラデルフィア大学センター UNIFIL",
    faculs_p_4: "- UNIFILはシステム分析と開発、情報システムなどのコースを提供しています。",
    faculs_h5_4: "ピタゴラスカレッジ",
    faculs_p_5: "- ピタゴラスカレッジにはロンドリーナに支部があり、システム分析と開発などのコースを提供しています。",
    faculs_h5_5: "パラナ連邦大学 IFPR  - ロンドリーナキャンパス",
    faculs_p_6: "- IFPRは情報技術分野の技術コースと高等教育コースを提供しています。",
    faculs_p_7: "コースの提供状況は、各機関の学期と学術提供に応じて異なる場合がありますので、最新情報を入手するためには、直接これらの大学に連絡を取ることをお勧めします。さらに、各機関のウェブサイトを確認したり、教育フェアに参加したり、現地の学生評議会から利用可能なオプションに関する詳細な情報を入手することができます。",
    gui: "私はなぜ情報システムを選んだのか？",
    gui_p_1: "- 私、ギルヘルメ・リッシ、外国での就業を目指して情報システムを選び、学士号を取ることにしました。外国の企業は学士号をより広く受け入れる傾向があるからです。",
    gui_p_2: "- ネットワークトラフィックに大きな興味を持っており、プログラミングが大好きなことに加えて、学校を終えてインターンシップを追求し、最も楽しみながら勉強し、行動することを待ち望んでいます。",

  },
  en: {
    home: "Home", 
    theme: "Theme",
    im: "I'm",
    im_span_1: "Developer",
    im_span_2: "Student",
    curso: "Technical Courses",
    sdi: "Information Systems - 4 years",
    sdi_p_1: "- The Information Systems college provides students with comprehensive and specialized education at the intersection of information technology and business processes. This field of study aims to prepare students to understand, design, develop, and manage effective information systems, which play a crucial role in companies, governmental organizations, and various sectors of contemporary society.",
    sdi_p_2: "- Throughout the Information Systems course, students are exposed to a variety of topics that cover both the technical and business aspects of the discipline. Some of the main areas that are explored include",
    sdi_h5_1: "Programming and Software Development",
    sdi_p_3: "- Students learn various programming languages, development frameworks, and techniques to create efficient and functional software applications and systems.",
    sdi_h5_2: "Systems Analysis and Design",
    sdi_p_4: "- Students are taught to identify information system needs, model business processes, design technological solutions, and ensure that applications meet user requirements.",
    sdi_h5_3: "Information Security",
    sdi_p_5: "- With the increasing threat of cyberattacks, students learn about security practices and techniques to protect systems, networks, and data against digital threats.",
    sdi_h5_4: "Business Aspects",
    sdi_p_6: "- In addition to technical skills, students also explore concepts of management, economics, marketing, and strategy to understand how information technology can drive an organization's business objectives.",
    ads: "Systems Analysis and Development - 2 to 3 years",
    ads_p_1: "- The Systems Analysis and Development college provides students with a focused and practical education in all stages of the software systems lifecycle. This field of study aims to prepare students to understand user needs, design effective solutions, develop applications, and ensure that these systems meet quality and functionality requirements.",
    ads_p_2: "- Throughout the course of Systems Analysis and Development, students are exposed to a variety of topics that cover both the technical and practical aspects of the discipline. Some of the main areas that are explored include:",
    ads_h5_1: "Programming and Software Development",
    ads_p_3: "- Students learn multiple programming languages, coding techniques, development frameworks, and design principles to create high-quality software applications and systems.",
    ads_h5_2: "Requirements Analysis",
    ads_p_4: "- Students are trained to gather, document, and understand user needs and transform them into clear and precise requirements for system development.",
    ads_h5_3: "Database",
    ads_p_5: "- Students learn to design and manage databases, enabling efficient manipulation and retrieval of relevant information.",
    saiba: "Learn more: ",
    ccp: "Computer Science - 4 years",
    ccp_p_1: "- The Computer Science college provides students with a comprehensive and in-depth education in the vast field of computing. This field of study aims to give students a solid understanding of the theoretical and practical principles underpinning information technology, as well as to empower them to solve complex problems through algorithmic and creative approaches.",
    ccp_p_2: "Throughout the Computer Science course, students are exposed to a wide range of topics that encompass everything from fundamental theory to the most advanced applications of the discipline. Some of the main areas that are explored include:",
    ccp_h5_1: "Algorithms and Data Structures",
    ccp_p_3: "- Students learn to design efficient algorithms and data structures to solve problems in an optimized way, whether in applications, systems, or platforms.",
    ccp_h5_2: "Programming",
    ccp_p_4: "- The college offers in-depth knowledge of various programming languages as well as coding techniques and high-quality software development.",
    ccp_h5_3: "Computer Theory",
    ccp_p_5: "Students explore the theoretical foundations of computer science, including automata, formal languages, computational complexity, and logic.",
    ccp_h5_4: "Artificial Intelligence and Machine Learning",
    ccp_p_6: "- With the growth of AI, students are introduced to the concepts of creating systems that can simulate human intelligence processes and learn from data.",
    ccp_h5_5: "Software Development", 
    ccp_p_7: "In addition to programming, students explore software development methods, agile practices, and collaboration in development teams.",
    faculs: "Colleges in Londrina",
    faculs_p_1: "In Londrina, Brazil, several educational institutions offer courses related to the field of Information Technology, such as Computer Science, Systems Analysis and Development, and Information Systems. Some of the colleges that may offer these courses include:",
    faculs_h5_1: "State University of Londrina (UEL)",
    faculs_p_2: "- UEL is one of the top educational institutions in the region and offers courses in Computer Science and Information Systems.",
    faculs_h5_2: "Pontifical Catholic University of Paraná (PUCPR) - Londrina Campus",
    faculs_p_3: "- PUCPR also has a campus in Londrina and offers courses in the field of technology, such as Computer Science and Software Engineering.",
    faculs_h5_3: "Phildelphia University Center (UNIFIL)",
    faculs_p_4: "- UNIFIL offers courses such as Systems Analysis and Development and Information Systems.",
    faculs_h5_4: "Pitágoras College",
    faculs_p_5: "- Pitágoras College has a branch in Londrina and offers courses such as Systems Analysis and Development.",
    faculs_h5_5: "Federal Institute of Paraná (IFPR) - Londrina Campus",
    faculs_p_6: "- IFPR offers technical and higher education courses in the field of Information Technology.",
    faculs_p_7: "It's important to note that the availability of courses may vary depending on the semesters and the academic offerings of each institution. I recommend that you contact these colleges directly to obtain updated information on the courses they offer in Londrina. Additionally, you can check the institutions' websites, attend education fairs, or seek information from local student councils for more detailed information about the available options.",
    gui: "Why did I choose Information Systems?",
    gui_p_1: "- I, Guilherme Rissi, chose information systems to pursue a bachelor's degree in order to work abroad, as foreign companies tend to accept bachelor's degrees more readily.",
    gui_p_2: "- In addition to my strong interest in network traffic and my love for programming, I am eagerly awaiting the completion of school to pursue an internship and attend college in what I most enjoy studying and doing.",



  }
}

function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]')

  for (const element of elements) {
    const key = element.getAttribute('data-translate')
    element.textContent = translate[language][key]
  }
}

document.getElementById('ptLang').addEventListener('click', () => changeLanguage('pt'))
document.getElementById('jaLang').addEventListener('click', () => changeLanguage('ja'))
document.getElementById('usaLang').addEventListener('click', () => changeLanguage('en'))


function showTheme () {
  openTheme.classList.toggle('act')
  setTimeout( function () {
    openTheme.classList.remove('act')
}, 5000)
}

