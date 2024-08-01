import project1 from "../assets/Codechat.jpg";
import project2 from "../assets/connect.jpg";
import project3 from "../assets/hostel.png";
import project4 from "../assets/student.png";
import project5 from "../assets/shop.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    role: "Diploma In SoftWare Engineering",
    company: "Institute of Software Engineering",
    description: `Followed GDSE Program in IJSE for develop my skills on software engineering feild and also to learn new technologies.Initially I was a interested in software development but lack of experience and knowledge in software development made me to focus on to follow the GDSE Program.`,
    subjects: ["Javascript", "React.js", "Node.js", "mongoDB","MySql","Java"],
  },
  {
    year: "2019-2021",
    role: "GCE ORDINARY LEVEL",
    company: "Princes International School",
    description: `Completed major barriers in mylife G.C.E Ordinary Level Examination in Princese International School in 2021.With Covid 19 pandemic,It was so difficult for me to study. I was also very interested in my studies.`,
    subjects: ["Maths","Science","English","Social Studies","Computer Science"],
  },
  {
    year: "2011-2019",
    role: "Primary Education",
    company: "Holy Cross College Kalutara",
    description: `Started my Education journey in Holy Cross College Kalutara.This led for my very first mindset for enterpreneurship.However due to lack of teachers i had to change the collage to a International one.`,
    subjects: ["English","Maths","Science","Social Studies","Computer Science"],
  },
];

export const PROJECTS = [
  {
    title: "Shoe Shop Management System",
    image: project5,
    description:
      "A Management System for Shoe Shop, with features such as product management, inventory management, and order management.",
    technologies: [ "Spring Boot", "Hibernate", "mySQL", "HTML", "CSS", "JAVASCRIPT", "JQUERY"],
  },
  {
    title: "Chat Room App", 
    image: project1,
    description:
      "A fully functional chat room app using socket programming with Java.",
    technologies: ["JAVA", "INP", "SOCKET"],
  },
  {
    title: "Connect 4 Game with Min Max Ai",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["JAVA", "OOP", "JAVAFX", "MYSQL"],
  },
  {
    title: "Hostel Management System",
    image: project3,
    description:
      "A Hostel Management System, with features such as room booking, room management, and room reservation.",
    technologies: ["JAVA", "CSS", "JAVAFX", "HIBERNATE", "MYSQL"],
  },
  {
    title: "Student Management System",
    image: project4,
    description:
      "A Student Management System, with features such as student registration, student management, and student attendance.",
    technologies: ["JAVA", "CSS", "JAVAFX", "MySQL"],
  },
];

export const CONTACT = {
  address: "30/9 Fonseka Place,Kalutara North",
  phoneNo: "+94 71 367 1979 ",
  email: "raycooray32@gmail.com",
};