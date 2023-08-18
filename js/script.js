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

const translate = {
  pt: {
    home: "Inicio", 
    learn: "Lendo",
    theme: "Tema",
    more: "Mais",
    curso: "Cursos Tecnícos",
    sdi: "Sistemas de informação",
    sdi_p_1: "- A faculdade de Sistemas de Informação oferece aos alunos uma educação abrangente e especializada na interseção entre a tecnologia da informação e os processos de negócios. Essa área de estudo visa preparar os estudantes para entender, projetar, desenvolver e gerenciar sistemas de informação eficazes, que desempenham um papel crucial em empresas, organizações governamentais e diversos setores da sociedade contemporânea.",
    sdi_p_2: "- Ao longo do curso de Sistemas de Informação, os alunos são expostos a uma variedade de tópicos que abrangem tanto os aspectos técnicos quanto os aspectos de negócios da disciplina. Algumas das áreas principais que são exploradas incluem: ",
    sdi_h5_1: "Programação e Desenvolvimento de Software",
    sdi_p_3: "- Os alunos aprendem várias linguagens de programação, estruturas de desenvolvimento e técnicas para criar aplicativos e sistemas de software eficientes e funcionais.",
    sdi_h5_2: "Análise e Projeto de Sistemas",
    sdi_p_4: "- Os estudantes são ensinados a identificar necessidades de sistemas de informação, modelar processos de negócios, projetar soluções tecnológicas e garantir que as aplicações atendam aos requisitos dos usuários.",
    sdi_h5_3: "Segurança da Informação",
    sdi_p_5: "- Com a crescente ameaça de ciberataques, os alunos aprendem sobre práticas e técnicas de segurança para proteger sistemas, redes e dados contra ameaças digitais.",
    sdi_h5_4: "Aspectos de Negócios",
    sdi_p_6: "- Além das habilidades técnicas, os alunos também exploram conceitos de gestão, economia, marketing e estratégia para entender como a tecnologia da informação pode impulsionar os objetivos de negócios de uma organização."
  }, 
  ja: {
    home: "ホーム", 
    learn: "ラーニング",
    theme: "テーマ",
    more: "モア",
    curso: "テクニカルコース",
    sdi: "情報システム",
    sdi_p_1: "- 情報システム学部は、情報技術とビジネスプロセスの交差点における幅広く専門的な教育を学生に提供します。この学問分野は、効果的な情報システムの理解、設計、開発、および管理を学生に準備させることを目指しており、これらは企業、政府機関、そして現代社会のさまざまなセクターにおいて重要な役割を果たしています。",
    sdi_p_2: "- 情報システムのコースを通じて、学生はその学問分野の技術的側面とビジネス側面の両方をカバーするさまざまなトピックに触れます。探求される主な分野には以下が含まれます：",
    sdi_h5_1: "プログラミングとソフトウェア開発",
    sdi_p_3: "- 学生は、効率的で機能的なソフトウェアアプリケーションやシステムを作成するためのさまざまなプログラミング言語、開発フレームワーク、および技術を学びます。がくせいは、こうりつてきできのうてきなそふとうぇああぷりけーしょんやしっすてむをさくせいするためのさまざまなぷろぐらみんぐげんご、かいはつふれーむわーく、およびぎじゅつをまなびます。",
    sdi_h5_2: "システム分析と設計",
    sdi_p_4: "- 学生は情報システムのニーズを特定し、ビジネスプロセスをモデル化し、技術的なソリューションを設計し、アプリケーションがユーザー要件を満たすことを確認する方法を学びます",
    sdi_h5_3: "情報セキュリティ",
    sdi_p_5: "- サイバーアタックの増加する脅威に対して、学生はシステム、ネットワーク、およびデータをデジタル脅威から守るためのセキュリティの実践と技術について学びます。",
    sdi_h5_4: "ビジネスの側面",
    sdi_p_6: "技術的なスキルに加えて、学生は経営、経済、マーケティング、戦略の概念も探求し、情報技術が組織のビジネス目標を推進する方法を理解します。"
  },
  en: {
    home: "Home", 
    learn: "Learning",
    theme: "Theme",
    more: "More",
    curso: "Technical Courses",
    sdi: "Information Systems",
    sdi_p_1: "- The Information Systems college provides students with comprehensive and specialized education at the intersection of information technology and business processes. This field of study aims to prepare students to understand, design, develop, and manage effective information systems, which play a crucial role in companies, governmental organizations, and various sectors of contemporary society.",
    sdi_p_2: "- Throughout the Information Systems course, students are exposed to a variety of topics that cover both the technical and business aspects of the discipline. Some of the main areas that are explored include",
    sdi_h5_1: "Programming and Software Development",
    sdi_p_3: "- Students learn various programming languages, development frameworks, and techniques to create efficient and functional software applications and systems.",
    sdi_h5_2: "Systems Analysis and Design",
    sdi_p_4: "- Students are taught to identify information system needs, model business processes, design technological solutions, and ensure that applications meet user requirements.",
    sdi_h5_3: "Information Security",
    sdi_p_5: "- With the increasing threat of cyberattacks, students learn about security practices and techniques to protect systems, networks, and data against digital threats.",
    sdi_h5_4: "Business Aspects",
    sdi_p_6: "- In addition to technical skills, students also explore concepts of management, economics, marketing, and strategy to understand how information technology can drive an organization's business objectives."
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


const imageForm = document.getElementById('imageForm')
const gallery = document.getElementById('gallery')

imageForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const imageInput = document.getElementById('imageInput')
    const imageTitle = document.getElementById('imageTitle').value
    const file = imageInput.files[0]
    
    if (file) {
        const reader = new FileReader()

        reader.onload = function () {
            const image = document.createElement('img')
            image.src = reader.result
            image.alt = imageTitle

            const title = document.createElement('h3')
            title.textContent = imageTitle
            title.style.color = "#fff"

            const imageCard = document.createElement('div')
            imageCard.classList.add('image-card')
            imageCard.appendChild(image)
            imageCard.appendChild(title)
            imageCard.style.display = "inline-block"

            gallery.appendChild(imageCard)
        }

        reader.readAsDataURL(file)
        imageForm.reset()
    }
});


function showTheme () {
  openTheme.classList.toggle('act')
}

