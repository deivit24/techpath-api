const { Tool, ToolUser, User } = require('../models');
const FRONTEND = [
  {
    name: 'Vue.js',
    type: ['FRONTEND'],
    link: 'https://vuejs.org/',
    description: 'An approachable, performant and versatile framework for building web user interfaces.',
    color: '#3EB883',
    imageUrl: 'https://img.stackshare.io/service/3837/paeckCWC.png',
  },
  {
    name: 'React.js',
    type: ['FRONTEND'],
    link: 'https://reactjs.org/',
    description: 'A JavaScript library for building user interfaces.',
    color: '#61DBFB',
    imageUrl: 'https://img.stackshare.io/service/1020/OYIaJ1KK.png',
  },
  {
    name: 'Ember.js',
    type: ['FRONTEND'],
    link: 'https://emberjs.com/',
    description: 'A framework for ambitious web developers.',
    color: '#E14529',
    imageUrl: 'https://img.stackshare.io/service/1018/3s1seyc0csl75btyw1vl.png',
  },
  {
    name: 'HTML',
    type: ['FRONTEND'],
    link: 'https://html.spec.whatwg.org/',
    description: '5th major revision of the core language of the World Wide Web',
    color: '#F16524',
    imageUrl: 'https://img.stackshare.io/service/2538/kEpgHiC9.png',
  },
  {
    name: 'CSS',
    type: ['FRONTEND'],
    link: 'https://www.w3.org/',
    description: 'The latest evolution of the Cascading Style Sheets language',
    color: '#0D73B7',
    imageUrl: 'https://img.stackshare.io/service/6727/css.png',
  },
  {
    name: 'Angular',
    type: ['FRONTEND'],
    link: 'https://angular.io/',
    description: 'The web development framework for building the future',
    color: '#E62537',
    imageUrl: 'https://img.stackshare.io/service/1019/square.png',
  },
  {
    name: 'JavaScript',
    type: ['FRONTEND', 'BACKEND'],
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    description: 'Lightweight, interpreted, object-oriented language with first-class functions.',
    color: '#F0DB4E',
    imageUrl: 'https://img.stackshare.io/service/1209/javascript.jpeg',
  },
  {
    name: 'TypeScript',
    type: ['FRONTEND'],
    link: 'https://www.typescriptlang.org/',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    color: '#2875C3',
    imageUrl: 'https://img.stackshare.io/service/1612/bynNY5dJ.jpg',
  },
  {
    name: 'Svelte',
    type: ['FRONTEND'],
    link: 'https://svelte.dev/',
    description: 'CYBERNETICALLY ENHANCED WEB APPS',
    color: '#FF3900',
    imageUrl: 'https://img.stackshare.io/service/6113/7exmJEg4_400x400.png',
  },
];

const BACKEND = [
  {
    name: 'Python',
    type: ['BACKEND', 'EMBEDDED'],
    link: 'https://www.python.org/',
    description: 'A clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.',
    color: '#FBD537',
    imageUrl: 'https://img.stackshare.io/service/993/pUBY5pVj.png',
  },
  {
    name: 'Ruby',
    type: ['BACKEND'],
    link: 'https://www.ruby-lang.org/',
    description: 'A dynamic, interpreted, open source programming language with a focus on simplicity and productivity',
    color: '#B40600',
    imageUrl: 'https://img.stackshare.io/service/989/ruby.png',
  },
  {
    name: 'Rails',
    type: ['BACKEND'],
    link: 'http://rubyonrails.org/',
    description: "Web development that doesn't hurt",
    color: '#CD0000',
    imageUrl: 'https://img.stackshare.io/service/990/x57_Lorv.png',
  },
  {
    name: 'NodeJS',
    type: ['BACKEND'],
    link: 'http://nodejs.org/',
    description: "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network application",
    color: '#78AF63',
    imageUrl: 'https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png',
  },
  {
    name: 'PHP',
    type: ['BACKEND'],
    link: 'http://www.php.net/',
    description: 'A popular general-purpose scripting language that is especially suited to web development',
    color: '#000000',
    imageUrl: 'https://img.stackshare.io/service/991/hwUcGZ41_400x400.jpg',
  },
  {
    name: 'Go',
    type: ['BACKEND'],
    link: 'http://golang.org/',
    description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software',
    color: '#00AFD9',
    imageUrl: 'https://img.stackshare.io/service/1005/O6AczwfV_400x400.png',
  },
  {
    name: 'Rust',
    type: ['BACKEND', 'EMBEDDED'],
    link: 'http://www.rust-lang.org/',
    description: 'A safe, concurrent, practical language',
    color: '#1E191A',
    imageUrl: 'https://img.stackshare.io/service/1070/v7txhrjp9pdqrkdtxxp0.png',
  },
  {
    name: 'Lua',
    type: ['BACKEND', 'EMBEDDED', 'GAME'],
    link: 'http://www.lua.org/',
    description: 'Powerful, fast, lightweight, embeddable scripting language',
    color: '#000081',
    imageUrl: 'https://img.stackshare.io/service/2118/128px-Lua-Logo.svg.png',
  },
  {
    name: 'Haskell',
    type: ['BACKEND'],
    color: '#5E4F88',
    imageUrl: 'https://img.stackshare.io/service/1069/oCgm29k9.png',
    link: 'http://www.haskell.org/',
    description: 'An advanced purely-functional programming language',
  },
  {
    name: 'C',
    type: ['BACKEND', 'EMBEDDED', 'GAME'],
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    description: 'One of the most widely used programming languages of all time',
    color: '#8E8E8E',
    imageUrl: 'https://img.stackshare.io/no-img-open-source.png',
  },
  {
    name: 'Java',
    type: ['BACKEND', 'EMBEDDED'],
    link: 'https://www.java.com/en/',
    description:
      'A concurrent, class-based, object-oriented, language specifically designed to have as few implementation dependencies as possible',
    color: '#5D8AA7',
    imageUrl: 'https://img.stackshare.io/service/995/K85ZWV2F.png',
  },
  {
    name: 'C++',
    type: ['BACKEND', 'GAME'],
    link: 'http://www.cplusplus.com/',
    description:
      'Has imperative, object-oriented and generic programming features, while also providing the facilities for low level memory manipulation',
    color: '#00589E',
    imageUrl: 'https://img.stackshare.io/service/1049/cplusplus.png',
  },
  {
    name: 'Flask',
    type: ['BACKEND'],
    link: 'https://flask.palletsprojects.com/en/2.2.x/',
    description: 'A microframework for Python based on Werkzeug, Jinja 2 and good intentions',
    color: '#0B0B0B',
    imageUrl: 'https://img.stackshare.io/service/1001/default_6d109315b60108628b7cd3e159b84645c31ef0e2.png',
  },
  {
    name: 'Django',
    type: ['BACKEND'],
    color: '#082E23',
    imageUrl: 'https://img.stackshare.io/service/994/4aGjtNQv.png',
    link: 'https://www.djangoproject.com/',
    description: 'The Web framework for perfectionists with deadlines',
  },
  {
    name: 'Express',
    type: ['BACKEND'],
    link: 'https://expressjs.com/',
    description: 'Sinatra inspired web development framework for node.js -- insanely fast, flexible, and simple',
    color: '#76D7E8',
    imageUrl: 'https://img.stackshare.io/service/1163/hashtag.png',
  },
  {
    name: 'FastAPI',
    type: ['BACKEND'],
    link: 'https://fastapi.tiangolo.com/',
    description: 'A high performance, easy to learn, fast to code, ready for production web framework',
    color: '#00998B',
    imageUrl: 'https://img.stackshare.io/service/25014/default_f6ff39141b468e832d1bc59fc98a060df604d44d.png',
  },
  {
    name: 'Spring Boot',
    type: ['BACKEND'],
    link: 'https://spring.io/',
    description: 'Create Spring-powered, production-grade applications and services with absolute minimum fuss',
    color: '#53B81B',
    imageUrl: 'https://img.stackshare.io/service/2927/nPzvMuo2_400x400.png',
  },
  {
    name: 'Laravel',
    type: ['BACKEND'],
    link: 'http://laravel.com/',
    description: 'A PHP Framework For Web Artisans',
    color: '#EF3B2D',
    imageUrl: 'https://img.stackshare.io/service/992/AcA2LnWL_400x400.jpg',
  },
  {
    name: '.NET',
    type: ['BACKEND'],
    link: 'https://dotnet.microsoft.com/en-us/',
    description: 'A free, cross-platform, open source developer platform for building many different types of applications',
    color: '#5027D5',
    imageUrl: 'https://img.stackshare.io/service/1014/IoPy1dce_400x400.png',
  },
];

const DEVOPS = [
  {
    name: 'Git',
    type: ['DEVOPS'],
    link: 'http://git-scm.com/',
    description: 'Fast, scalable, distributed revision control system',
    color: '#EF4E2F',
    imageUrl: 'https://img.stackshare.io/service/1046/git.png',
  },
  {
    name: 'Maven',
    type: ['DEVOPS'],
    link: 'http://maven.apache.org/',
    description: 'Apache build manager for Java projects.',
    color: '#CF354C',
    imageUrl: 'https://img.stackshare.io/package_manager/977/default_9833f2ef0bbc2a946b4cc5e9307264033361076b.png',
  },
  {
    name: 'Jenkins',
    type: ['DEVOPS'],
    link: 'http://jenkins-ci.org/',
    description: 'An extendable open source continuous integration server',
    color: '#F0D7B8',
    imageUrl: 'https://img.stackshare.io/service/670/jenkins.png',
  },
  {
    name: 'Chef',
    type: ['DEVOPS'],
    link: 'https://www.chef.io/products/chef-infra',
    description: 'Build, destroy and rebuild servers on any public or private cloud',
    color: '#F38C00',
    imageUrl: 'https://img.stackshare.io/service/420/24f4ef5e7a67c0d720bf9ae69dd6de2a.png',
  },
  {
    name: 'Puppet',
    type: ['DEVOPS'],
    link: 'https://www.puppet.com/',
    description: 'Server automation framework and application',
    color: '#F38C00',
    imageUrl: 'https://img.stackshare.io/service/421/954f7381089ac290b4690c5ffd9dd7d3.png',
  },
  {
    name: 'Ansible',
    type: ['DEVOPS'],
    link: 'http://www.ansible.com/',
    description:
      'Radically simple configuration-management, application deployment, task-execution, and multi-node orchestration engine',
    color: '#000000',
    imageUrl: 'https://img.stackshare.io/service/663/ElOjna20.png',
  },
  {
    name: 'Docker',
    type: ['DEVOPS'],
    link: 'https://www.docker.com/',
    description: 'Enterprise Container Platform for High-Velocity Innovation.',
    color: '#0493D2',
    imageUrl: 'https://img.stackshare.io/service/586/n4u37v9t_400x400.png',
  },
  {
    name: 'Kubernetes',
    type: ['DEVOPS'],
    link: 'http://kubernetes.io/',
    description: 'Manage a cluster of Linux containers as a single system to accelerate Dev and simplify Ops',
    color: '#5C4EE5',
    imageUrl: 'https://img.stackshare.io/service/1885/21_d3cvM.png',
  },
  {
    name: 'AWS',
    type: ['DEVOPS'],
    link: 'https://aws.amazon.com/',
    description: 'A comprehensive and broadly adopted cloud platform',
    color: '#E99C32',
    imageUrl: 'https://img.stackshare.io/service/47978/default_ea0289e539375fac5b03a92e708e195c36927a81.jpg',
  },
  {
    name: 'Azure DevOps',
    type: ['DEVOPS'],
    link: 'https://azure.microsoft.com/',
    description: 'Services for teams to share code, track work, and ship software',
    color: '#0079D8',
    imageUrl: 'https://img.stackshare.io/service/4313/XNKktHjN_400x400.png',
  },
  {
    name: 'Google Cloud',
    type: ['DEVOPS'],
    link: 'https://cloud.google.com/',
    description: 'A suite of cloud computing services',
    color: '#32A755',
    imageUrl: 'https://img.stackshare.io/service/4240/1a61e4pu_400x400.jpg',
  },
  {
    name: 'Splunk',
    type: ['DEVOPS'],
    link: 'http://www.splunk.com/',
    description: 'Search, monitor, analyze and visualize machine data',
    color: '#32A755',
    imageUrl: 'https://img.stackshare.io/service/287/default_3ee4c34e118179464e491133fc4ac4f16e46771f.jpg',
  },
  {
    name: 'Selenium',
    type: ['DEVOPS', 'QA'],
    link: 'http://www.seleniumhq.org/',
    description: 'Web Browser Automation',
    color: '#01B400',
    imageUrl: 'https://img.stackshare.io/service/1517/sbUizSli_400x400.jpg',
  },
];

const DATABASE = [
  {
    name: 'MySQL',
    type: ['DATABASE'],
    link: 'http://www.mysql.com/',
    description: "The world's most popular open source database",
    color: '#F7950B',
    imageUrl: 'https://img.stackshare.io/service/1025/logo-mysql-170x170.png',
  },
  {
    name: 'PostgreSQL',
    type: ['DATABASE'],
    link: 'http://www.postgresql.org/',
    description: 'A powerful, open source object-relational database system',
    color: '#2E6691',
    imageUrl: 'https://img.stackshare.io/service/1028/ASOhU5xJ.png',
  },
  {
    name: 'MongoDB',
    type: ['DATABASE'],
    link: 'http://www.mongodb.com/',
    description: 'The database for giant ideas',
    color: '#589733',
    imageUrl: 'https://img.stackshare.io/service/1030/leaf-360x360.png',
  },
  {
    name: 'SQLite',
    type: ['DATABASE'],
    link: 'http://www.sqlite.org/',
    description:
      'A software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine',
    color: '#58B2DC',
    imageUrl: 'https://img.stackshare.io/service/1071/sqlite.jpg',
  },
  {
    name: 'MariaDB',
    type: ['DATABASE'],
    link: 'https://mariadb.com/',
    description: 'An enhanced, drop-in replacement for MySQL',
    color: '#002B41',
    imageUrl: 'https://img.stackshare.io/service/1615/mariadb-logo-400x400.png',
  },
];

const TOOLS = [...BACKEND, ...FRONTEND, ...DATABASE, ...DEVOPS];
TOOLS.sort((a, b) => a.name.localeCompare(b.name));
const seed = () => {
  Tool.insertMany(TOOLS)
    .then(() => {
      console.log('DATA INSERTED');
    })
    .catch((e) => {
      console.log(e);
    });
  User.create({
    name: 'admin',
    email: 'admin@admin.com',
    password: 'password1',
    role: 'admin',
  })
    .then(() => {
      console.log('SUCCESS INSERTED USER');
    })
    .catch((e) => {
      console.log(e);
    });
  User.create({
    name: 'user',
    email: 'user@user.com',
    password: 'password1',
    role: 'user',
  })
    .then(() => {
      console.log('SUCCESS INSERTED USER');
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = seed;
