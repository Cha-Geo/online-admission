const aboutSectionData: ISection[] = [
  {
    data: {
      head: "Welcome to DL-IBTC",
      body: "DL-IBTC is dedicated to providing high-quality education and professional training programs. With a legacy of excellence, we strive to empower our students for a successful future.",
      conclusion: "Join us on this journey of academic and career excellence.",
    },
    id: "about-dl",
  },
  {
    data: {
      head: "Our Journey Through Time",
      body: "Explore the rich history of DL-IBTC, spanning decades of educational leadership and innovation. Discover how our institution has evolved over the years.",
      conclusion:
        "Connect with our history and be part of our promising future.",
    },
    id: "history",
  },
  {
    data: {
      head: "Our Objectives",
      body: "At DL-IBTC, our objectives drive our unwavering commitment to providing top-notch education. We aim to nurture the talents and ambitions of our students.",
      conclusion:
        "Learn more about what we aim to achieve and how we can help you succeed.",
    },
    id: "objectives",
  },
  {
    data: {
      head: "Our Core Values",
      body: "DL-IBTC is guided by a set of core values that define our institution's character. These values include excellence, integrity, inclusivity, and innovation.",
      conclusion:
        "Explore the principles that shape our culture and the way we do things.",
    },
    id: "core-values",
  },
  {
    data: {
      head: "College Organogram",
      body: "Get insights into the organizational structure of DL-IBTC and how various departments work together to create a supportive learning environment.",
      conclusion:
        "Understand how our teams collaborate to make your educational experience exceptional.",
    },
    id: "college-organogram",
  },
  {
    data: {
      head: "Meet Our Faculty",
      body: "DL-IBTC's faculty members are passionate educators with extensive expertise in their respective fields. They are committed to providing top-quality education.",
      conclusion:
        "Discover the faces behind our education and the knowledge they bring to your learning journey.",
    },
    id: "faculty-profile",
  },
];

const admissionsSectionData: ISection[] = [
  {
    data: {
      head: "Welcome to DL-IBTC Admissions",
      body: "DL-IBTC offers a seamless and transparent admissions process. We are committed to helping you join our educational community and achieve your academic goals.",
      conclusion:
        "Explore our admissions process and take the first step toward your future.",
    },
    id: "our-admissions",
  },
  {
    data: {
      head: "Admission Requirements",
      body: "At DL-IBTC, we have specific admission requirements to ensure you meet the criteria for your desired program. These requirements may vary depending on your chosen program.",
      conclusion: "Learn more about the admission criteria and prerequisites.",
    },
    id: "requirements",
  },
  {
    data: {
      head: "Online Applications (Executive)",
      body: "Our executive programs offer a convenient online application process. Apply for executive programs, upload documents, and track your application status from anywhere.",
      conclusion: "Start your executive program application today.",
    },
    id: "online-application-executive",
  },
  {
    data: {
      head: "Online Applications (General)",
      body: "For our general programs, we provide an online application platform. Easily submit your application, required documents, and monitor the progress of your application.",
      conclusion:
        "Begin your journey to DL-IBTC with our general program application.",
    },
    id: "online-application-general",
  },
];

const academicsSectionData: ISection[] = [
  {
    data: {
      head: "Discover DL-IBTC Academics",
      body: "DL-IBTC is renowned for its academic excellence and commitment to providing a top-notch learning experience. Our academic programs are designed to empower students for success.",
      conclusion:
        "Explore our academic offerings and embark on a journey of knowledge and discovery.",
    },
    id: "our-academics",
  },
  {
    data: {
      head: "Engage in Research",
      body: "Research is at the heart of DL-IBTC's academic mission. Our dedicated faculty and students engage in cutting-edge research projects across various disciplines.",
      conclusion:
        "Learn more about our research initiatives and contribute to the advancement of knowledge.",
    },
    id: "research",
  },
  {
    data: {
      head: "Visual Classrooms",
      body: "Experience the future of learning with DL-IBTC's visual classrooms. Our innovative teaching methods blend technology and education to create engaging and immersive learning environments.",
      conclusion:
        "Step into our virtual classrooms and enhance your learning experience.",
    },
    id: "visual-classrooms",
  },
];

const programsSectionData: ISection[] = [
  {
    data: {
      head: "Explore DL-IBTC Programs",
      body: "DL-IBTC offers a diverse range of academic programs designed to cater to various interests and career goals. Our programs are crafted to provide students with a solid foundation for success.",
      conclusion:
        "Discover our programs and find the one that aligns with your aspirations.",
    },
    id: "our-programs",
  },
  {
    data: {
      head: "Diploma In Theology",
      body: "The Diploma in Theology program at DL-IBTC provides students with a comprehensive understanding of theological concepts and practices. Explore religious studies and deepen your faith.",
      conclusion: "Embark on a theological journey with our Diploma program.",
    },
    id: "diploma-theology",
  },
  {
    data: {
      head: "Certificate In Theology",
      body: "Our Certificate in Theology program is ideal for those seeking a foundational knowledge of theological principles. Gain insights into religious studies and spiritual growth.",
      conclusion:
        "Start your theological exploration with our Certificate program.",
    },
    id: "certificate-theology",
  },
  {
    data: {
      head: "Executive Course In Theology",
      body: "The Executive Course in Theology is tailored for busy professionals. Study theology at your own pace and enhance your understanding of spirituality and religion.",
      conclusion:
        "Advance your theological knowledge with our Executive Course.",
    },
    id: "executive-theology",
  },
];

// Example data
const coreValuesData: IContents[] = [
  {
    title: "Honesty",
    description:
      "We embrace honesty and base our decision making and lifestyle on conditions of chastity.",
  },
  {
    title: "Integrity",
    description:
      "We ensure strong moral principles in developing godly character.",
  },
  {
    title: "Diligence",
    description:
      "We achieve excellence through hard work, conscientiousness, determination, and perseverance.",
  },
  {
    title: "Dedication",
    description:
      "We are committed to actualizing our collective task of building and equipping God’s future army.",
  },
  {
    title: "Holiness",
    description:
      "We stand for piety and total devotion to God in life and ministry.",
  },
];

const addCoreValues: ISubContent[] = [
  {
  name: "The Significance of Knowledge in Christianity",
  description: `This description highlights the importance of knowledge in the Christian faith, emphasizing that knowledge dedicated to serving God is considered wisdom. It also mentions how the Christian environment at DL-IBTC helps students develop principles for their Christian witness.`,
  },
  {
  name: "Biblical Foundation in Education",
  description: `This description underscores the centrality of Biblical truth in education, stating that all subjects are approached with the belief in the supremacy of Biblical truth. It also mentions the role of the Holy Spirit in guiding Christians in their quest for truth.`,
  },
  {
  name: "Empowering Christian Learning",
  description: `This description focuses on the empowering aspect of Christian education, where students are encouraged to use knowledge for the glory of God. It highlights the role of the Holy Spirit as a guiding force in understanding and interpreting the scriptures.`,
}
]

const historyData: IContents[] = [
  {
    title: "Foundation",
    description:
      "DL-IBTC, or the Deeper Life International Bible Training College, is the arm of the church charged with the primary responsibility of theological training and development of Christian ministers.",
  },
  {
    title: "Affiliations",
    description:
      "DL-IBTC is affiliated with Anchor University in Lagos, the premier University of the Deeper Christian Life Ministry.",
  },
  {
    title: "Accreditations",
    description:
      "The University College is also accredited by the Ghana Tertiary Education Commission (GTEC) to run a 2-year Diploma in Theology Program.",
  },
];

const dlIbtcHistoryData = [
  {
    name: "DL-IBTC's Founding and Growth",
    description:
      "DL-IBTC, or the Deeper Life International Bible Training College, is the arm of the church charged with the primary responsibility of theological training and development of Christian ministers as a means of providing a stable, rich, and dynamic human resource base for the church at large. In its wider application, DL-IBTC doctors, develops, trains, prepares, and equips Christian workers by offering practical hands-on training that deals with all phases of the Ministry. It strives to provide a helpful learning environment where the fruit of the Spirit is constantly applied in all areas of Christian living. Graduates are prepared for full-time or part-time service. Our programs are now open to the public to equip many who desire to do effective and enduring work for the Lord."
  },
  {
    name: "The Rebirth of DL-IBTC",
    description:
      "The Deeper Life International Bible Training College (DL-IBTC), formerly known as the International Bible Training College (IBTC), started as an in-house training entity in Lagos, Nigeria, in 1980. However, in 1983, after producing three sets of students, the College temporarily closed its doors. In 1981, the leadership initiated a part-time program for the campus community named Short Term Ministerial Course (STMC) to reach the elite of society. It temporarily suspended these programs in 1983. Ghana also participated in training its ministers and leaders by sending students to Lagos for these programs before their eventual suspension."
  },
  {
    name: "Expanding DL-IBTC's Reach",
    description:
      "In 1992-94 and 1997-2000, Ghana initiated its DL-IBTC programs at Pakyi No. 2, Kumasi, and Accra, respectively. Another program began in 2004 and continues to date, thanks to an idea from the former National Overseer, Pastor Israel Akinsola. In 2003, an IBTC Implementation Committee was formed to establish formal parameters for IBTC's rebirth. This committee worked diligently, leading to IBTC's revival. The first batch of students was oriented in Kumasi in November 2004, and the college opened in Kumasi as the sole campus in Ghana with 57 pioneering students."
  },
  {
    name: "DL-IBTC's Growth and Impact",
    description:
      "Over the years, DL-IBTC has grown significantly, with multiple campuses and a focus on providing theological education. Graduates of DL-IBTC occupy key positions within the church's leadership structure, including Regional Overseers, Divisional Coordinators, Zonal and Group Coordinators, District Pastors, and Coordinators. DL-IBTC is registered with the Registrar General Department and approved by the Ghana Education Service (GES) to run a 1-year Certificate in Theology program. The University College is also accredited by the Ghana Tertiary Education Commission (GTEC) to run a 2-year Diploma in Theology Program. Today, DL-IBTC continues its mission to prepare individuals for effective service in ministry."
  },
  {
    name: "DL-IBTC's Commitment",
    description:
      "DL-IBTC is affiliated with Anchor University in Lagos, the premier University of the Deeper Christian Life Ministry, responsible for awarding certificates to graduating students. Since September 2018, the University College has operated from its main permanent facility in Kumasi, serving as the sole Campus for the College in Ghana. Despite facing challenges, DL-IBTC is determined to overcome them. As H.W. Longfellow once said, 'the heights great men reached and kept were not attained by sudden flights. But they, while their companions slept, were toiling upward in the night.' This is our time. Be inspired!"
  }
];

const aimsGoalsObjectives = [
  {
    title: "Christ-centered Living",
    description: "Embracing Christ-centered living.",
  },
  {
    title: "Biblical Knowledge",
    description: "Comprehensive knowledge of Biblical principles and content.",
  },
  {
    title: "Discipleship Imperative",
    description:
      "Confronting students with the imperative of making disciples of all nations.",
  },
  {
    title: "Love and Dedication",
    description: "Encouraging love, dedication to God and the Church.",
  },
  {
    title: "Specialized Christian Service",
    description: "Equipping students for specialized Christian service roles.",
  },
  {
    title: "Biblical Exegesis and Sermon Preparation",
    description:
      "Instructing students in Biblical exegesis, sermon preparation, and pastoral counseling.",
  },
  {
    title: "Spiritual Growth",
    description:
      "Fostering a desire for continual spiritual growth through discipline.",
  },
];

const faqData: IFaqData[] = [
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "FAQ Question 1",
    answer:
      "FAQ Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more FAQ items as needed
];


export {
  aboutSectionData,
  academicsSectionData,
  admissionsSectionData,
  programsSectionData,
  coreValuesData,
  addCoreValues,
  aimsGoalsObjectives,
  faqData,
  dlIbtcHistoryData,
  historyData,
};