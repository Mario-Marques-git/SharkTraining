export function getQuestions() {
  return questions;
}

const questions = [  {    
question: "What is the purpose of the HTML <head> element?",    
options: [      "To define the main content of the page",      "To define the footer of the page",      "To define the metadata of the page",      "To define the header of the page"    ],
answer: "To define the metadata of the page"
},
{
question: "What is the difference between null and undefined in JavaScript?",
options: [
  "Null means the variable has not been declared, while undefined means the variable has no value",
  "Undefined means the variable has not been declared, while null means the variable has no value",
  "Null and undefined are the same thing",
  "Null and undefined are both used to represent empty values"
],
answer: "Undefined means the variable has not been declared, while null means the variable has no value"
},
{
question: "What is a closure in JavaScript?",
options: [
  "A function that has no name",
  "An object that stores key-value pairs",
  "A function that can access variables in its outer scope",
  "A method for converting one data type to another"
],
answer: "A function that can access variables in its outer scope"
},
{
question: "What is the purpose of the CSS box-sizing property?",
options: [
  "To control the width of the content area of an element",
  "To control the width and height of the padding area of an element",
  "To control the width and height of the border area of an element",
  "To control the width and height of the margin area of an element"
],
answer: "To control the width and height of the padding area of an element"
},
 {    
   question: "What is the difference between HTTP and HTTPS?",    
   options: [      "HTTP is a protocol used for data transmission over the internet, while HTTPS is a secure version of HTTP",      "HTTP is a secure protocol used for data transmission over the internet, while HTTPS is an unsecured version of HTTP",      "HTTP and HTTPS are the same thing",      "HTTP is a protocol used for emails, while HTTPS is a protocol used for websites"    ],
    answer: "HTTP is a protocol used for data transmission over the internet, while HTTPS is a secure version of HTTP"
  },
  {
    question: "What is a RESTful API?",
    options: [
      "An API that uses the REST architecture style",
      "An API that uses SOAP for data transmission",
      "An API that only allows GET requests",
      "An API that can only be accessed from a specific domain"
    ],
    answer: "An API that uses the REST architecture style"
  },
  {
    question: "What is the difference between a stack and a queue data structure?",
    options: [
      "A stack uses the LIFO (Last In First Out) principle, while a queue uses the FIFO (First In First Out) principle",
      "A stack uses the FIFO (First In First Out) principle, while a queue uses the LIFO (Last In First Out) principle",
      "A stack and a queue are the same thing",
      "A stack and a queue are both used for searching data"
    ],
    answer: "A stack uses the LIFO (Last In First Out) principle, while a queue uses the FIFO (First In First Out) principle"
  },
  {
    question: "What is the purpose of the CSS property 'float'?",
    options: [
      "To align an element to the left or right of its container",
      "To change the font of an element",
      "To change the color of an element",
      "To change the size of an element"
    ],
    answer: "To align an element to the left or right of its container"
  },
  {
    question: "What is the difference between synchronous and asynchronous programming?",
    options: [
      "Synchronous programming blocks the main thread until a task is completed, while asynchronous programming allows the main thread to continue running while a task is being processed",
      "Asynchronous programming blocks the main thread until a task is completed, while synchronous programming allows the main thread to continue running while a task is being processed",
      "Synchronous programming and asynchronous programming are the same thing",
      "Synchronous programming is used for front-end development, while asynchronous programming is used for back-end development"
    ],
    answer: "Synchronous programming blocks the main thread until a task is completed, while asynchronous programming allows the main thread to continue running while a task is being processed"
  },
  { 
    question: "What is the difference between a stack and a queue data structure?",    
    options: [      "Stacks are LIFO and queues are FIFO",      "Stacks are FIFO and queues are LIFO",      "Stacks and queues are both LIFO",      "Stacks and queues are both FIFO"    ],
    answer: "Stacks are LIFO and queues are FIFO"
  },
  {
    question: "What is the purpose of the CSS display property?",
    options: [
      "To control the visibility of an element",
      "To control the positioning of an element",
      "To control the size of an element",
      "To control the layout of an element"
    ],
    answer: "To control the layout of an element"
  },
  {
    question: "What is the difference between a static website and a dynamic website?",
    options: [
      "Static websites have dynamic content and dynamic websites have static content",
      "Static websites are built using server-side scripting and dynamic websites are built using client-side scripting",
      "Static websites are faster and easier to maintain than dynamic websites",
      "Static websites display the same content to all users and dynamic websites can display personalized content"
    ],
    answer: "Static websites display the same content to all users and dynamic websites can display personalized content"
  },
  {
    question: "What is the difference between a web server and an application server?",
    options: [
      "Web servers serve web pages and application servers run applications",
      "Web servers run applications and application servers serve web pages",
      "Web servers and application servers are the same thing",
      "Web servers and application servers both serve web pages and run applications"
    ],
    answer: "Web servers serve web pages and application servers run applications"
  },
  {
    question: "What is the purpose of the JavaScript Map object?",
    options: [
      "To store key-value pairs in a predictable order",
      "To store key-value pairs in an unpredictable order",
      "To store key-value pairs as an array of arrays",
      "To store key-value pairs as an object with nested properties"
    ],
    answer: "To store key-value pairs in a predictable order"
  },
  { 
    question: "What is inheritance in object-oriented programming?",    
    options: [      "The ability of an object to take on the properties and methods of another object",      "The process of creating new objects from existing objects",      "The process of hiding the implementation details of an object",      "The process of breaking down a complex object into simpler objects"    ],
    answer: "The ability of an object to take on the properties and methods of another object"
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    options: [
      "The ability of an object to have different forms or types",
      "The ability of an object to access its own properties and methods",
      "The ability of an object to interact with other objects in the same class",
      "The ability of an object to manipulate its own data"
    ],
    answer: "The ability of an object to have different forms or types"
  },
  {
    question: "What is encapsulation in object-oriented programming?",
    options: [
      "The process of creating a new object from an existing object",
      "The process of breaking down a complex object into simpler objects",
      "The process of hiding the implementation details of an object",
      "The process of defining the data and behavior of an object"
    ],
    answer: "The process of hiding the implementation details of an object"
  },
  {
    question: "What is abstraction in object-oriented programming?",
    options: [
      "The process of breaking down a complex object into simpler objects",
      "The process of creating a new object from an existing object",
      "The process of defining the data and behavior of an object",
      "The process of focusing only on the important aspects of an object and ignoring the rest"
    ],
    answer: "The process of focusing only on the important aspects of an object and ignoring the rest"
  },
  {
    question: "What is a constructor in object-oriented programming?",
    options: [
      "A method that is called when an object is created",
      "A method that is called when an object is destroyed",
      "A method that is used to access an object's properties",
      "A method that is used to modify an object's behavior"
    ],
    answer: "A method that is called when an object is created"
  },
  { 
    question: "What is Apache Maven and what is it used for?",    
    options: [      "Apache Maven is a version control system used to manage source code",      "Apache Maven is a build automation tool used to compile and package Java code",      "Apache Maven is a web framework used to develop Java applications",      "Apache Maven is a database management system used to store Java data"    ],
    answer: "Apache Maven is a build automation tool used to compile and package Java code"
  },
  {
    question: "What is a Maven POM file and what does it contain?",
    options: [
      "A POM file is a package manager used to manage dependencies in a Maven project",
      "A POM file is a plugin used to build a Java application with Maven",
      "A POM file is a configuration file used to define the properties and dependencies of a Maven project",
      "A POM file is a build script used to compile and package a Maven project"
    ],
    answer: "A POM file is a configuration file used to define the properties and dependencies of a Maven project"
  },
  {
    question: "What is a Maven artifact and what does it consist of?",
    options: [
      "An artifact is a Java class file that is compiled by Maven",
      "An artifact is a library or module that is produced by a Maven build",
      "An artifact is a configuration file that is used by Maven to build a project",
      "An artifact is a test case that is executed by Maven during a build"
    ],
    answer: "An artifact is a library or module that is produced by a Maven build"
  },
  {
    question: "What is a Maven repository and what is it used for?",
    options: [
      "A repository is a collection of Java classes used by Maven to build a project",
      "A repository is a storage location for Maven artifacts and their dependencies",
      "A repository is a web server used by Maven to deploy a Java application",
      "A repository is a database used by Maven to store build logs and other build-related data"
    ],
    answer: "A repository is a storage location for Maven artifacts and their dependencies"
  },
  {
    question: "What is the purpose of the Maven build lifecycle?",
    options: [
      "To define the stages of the Maven build process and the order in which they are executed",
      "To define the dependencies of a Maven project and the version numbers of those dependencies",
      "To define the plugins that are used by a Maven project to compile and package the code",
      "To define the properties of a Maven project, such as the project name, version, and description"
    ],
    answer: "To define the stages of the Maven build process and the order in which they are executed"
  },
  {    
    question: "What is SQL and what is it used for?",    
    options: [      "SQL is a programming language used to create websites",      "SQL is a database management system used to store data",      "SQL is a web framework used to develop web applications",      "SQL is a scripting language used to automate tasks"    ],
    answer: "SQL is a database management system used to store data"
  },
  {
    question: "What is a database schema and why is it important?",
    options: [
      "A schema is a set of rules used to define the structure and constraints of a database",
      "A schema is a graphical representation of a database",
      "A schema is a backup copy of a database",
      "A schema is a database management tool used to optimize query performance"
    ],
    answer: "A schema is a set of rules used to define the structure and constraints of a database"
  },
  {
    question: "What is a primary key and why is it important?",
    options: [
      "A primary key is a column in a table used to store a unique identifier for each row",
      "A primary key is a database index used to speed up queries",
      "A primary key is a foreign key used to join two tables together",
      "A primary key is a backup copy of a table"
    ],
    answer: "A primary key is a column in a table used to store a unique identifier for each row"
  },
  {
    question: "What is a join and how is it used in SQL?",
    options: [
      "A join is a database index used to speed up queries",
      "A join is a foreign key used to join two tables together",
      "A join is a SQL statement used to combine rows from two or more tables",
      "A join is a primary key used to identify a specific row in a table"
    ],
    answer: "A join is a SQL statement used to combine rows from two or more tables"
  },
  {
    question: "What is the difference between a WHERE clause and a HAVING clause in SQL?",
    options: [
      "A WHERE clause is used to filter rows based on a condition, while a HAVING clause is used to filter groups based on a condition",
      "A WHERE clause is used to filter groups based on a condition, while a HAVING clause is used to filter rows based on a condition",
      "A WHERE clause is used to join two tables together, while a HAVING clause is used to group rows based on a condition",
      "A WHERE clause is used to sort rows in a table, while a HAVING clause is used to sort groups in a table"
    ],
    answer: "A WHERE clause is used to filter rows based on a condition, while a HAVING clause is used to filter groups based on a condition"
  },
  {    
    question: "What is JavaScript?",    
    options: [      "JavaScript is a programming language used for front-end web development",      "JavaScript is a programming language used for back-end web development",      "JavaScript is a programming language used for both front-end and back-end web development",      "JavaScript is a markup language used for creating web pages"    ],
    answer: "JavaScript is a programming language used for both front-end and back-end web development"
  },
  {
    question: "What is the difference between var, let, and const in JavaScript?",
    options: [
      "var, let, and const are all interchangeable keywords in JavaScript",
      "var is used for variable assignment, let is used for block-scoped variables, and const is used for constants",
      "var is used for constants, let is used for variable assignment, and const is used for block-scoped variables",
      "var, let, and const are all used for variable assignment but have different scoping rules"
    ],
    answer: "var is used for variable assignment, let is used for block-scoped variables, and const is used for constants"
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A closure is a function that returns another function",
      "A closure is a way to wrap up a block of code into a self-contained unit that can be passed around as an object",
      "A closure is a way to create private variables and methods in JavaScript",
      "A closure is a way to store and retrieve data from local storage"
    ],
    answer: "A closure is a way to create private variables and methods in JavaScript"
  },
  {
    question: "What is the event loop in JavaScript?",
    options: [
      "The event loop is a way to handle asynchronous JavaScript code",
      "The event loop is a way to handle synchronous JavaScript code",
      "The event loop is a way to handle errors in JavaScript code",
      "The event loop is a way to handle server-side JavaScript code"
    ],
    answer: "The event loop is a way to handle asynchronous JavaScript code"
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "== and === are identical operators in JavaScript",
      "== is used for loose equality, while === is used for strict equality",
      "=== is used for loose equality, while == is used for strict equality",
      "== and === are used for comparing strings and numbers in JavaScript"
    ],
    answer: "== is used for loose equality, while === is used for strict equality"
  },
  {    
    question: "What is Scrum?",    
    options: [      "Scrum is a project management framework used for software development",      "Scrum is a programming language used for web development",      "Scrum is a database management system",      "Scrum is a software testing methodology"    ],
    answer: "Scrum is a project management framework used for software development"
  },
  {
    question: "What are the three pillars of Scrum?",
    options: [
      "Transparency, Inspection, and Adaptation",
      "Planning, Execution, and Monitoring",
      "Testing, Debugging, and Deployment",
      "Requirements, Design, and Implementation"
    ],
    answer: "Transparency, Inspection, and Adaptation"
  },
  {
    question: "What is a sprint in Scrum?",
    options: [
      "A sprint is a period of time in which software is developed and tested",
      "A sprint is a type of meeting in which project status is reviewed",
      "A sprint is a way to track project progress over time",
      "A sprint is a type of report generated by the Scrum Master"
    ],
    answer: "A sprint is a period of time in which software is developed and tested"
  },
  {
    question: "What is the role of the Scrum Master?",
    options: [
      "The Scrum Master is responsible for leading the development team",
      "The Scrum Master is responsible for creating and executing the project plan",
      "The Scrum Master is responsible for ensuring the team is following Scrum principles and practices",
      "The Scrum Master is responsible for testing and validating the software"
    ],
    answer: "The Scrum Master is responsible for ensuring the team is following Scrum principles and practices"
  },
  {
    question: "What is a product backlog in Scrum?",
    options: [
      "A product backlog is a list of tasks to be completed during a sprint",
      "A product backlog is a list of features or requirements for a software product",
      "A product backlog is a list of bugs or issues found in the software",
      "A product backlog is a list of stakeholders involved in the project"
    ],
    answer: "A product backlog is a list of features or requirements for a software product"
  },
  {    
    question: "What is Java?",    
    options: [      "Java is a programming language used for web development",      "Java is a programming language used for mobile app development",      "Java is a programming language used for both web and mobile app development",      "Java is a database management system"    ],
    answer: "Java is a programming language used for both web and mobile app development"
  },
  {
    question: "What is the difference between JDK and JRE?",
    options: [
      "JDK stands for Java Development Kit and includes the JRE, while JRE stands for Java Runtime Environment and only includes the JVM",
      "JRE stands for Java Runtime Environment and includes the JDK, while JDK only includes the JRE",
      "JDK and JRE are the same thing",
      "JDK stands for Java Database Kit and only includes the JVM"
    ],
    answer: "JDK stands for Java Development Kit and includes the JRE, while JRE stands for Java Runtime Environment and only includes the JVM"
  },
  {
    question: "What is a constructor in Java?",
    options: [
      "A constructor is a method that is used to initialize an object when it is created",
      "A constructor is a method that is used to destroy an object when it is no longer needed",
      "A constructor is a method that is used to add functionality to an existing object",
      "A constructor is a keyword used to define a new class"
    ],
    answer: "A constructor is a method that is used to initialize an object when it is created"
  },
  {
    question: "What is inheritance in Java?",
    options: [
      "Inheritance is a mechanism in Java that allows one class to inherit the properties and methods of another class",
      "Inheritance is a way to define new data types in Java",
      "Inheritance is a way to create new objects in Java",
      "Inheritance is a way to define new variables in Java"
    ],
    answer: "Inheritance is a mechanism in Java that allows one class to inherit the properties and methods of another class"
  },
  {
    question: "What is the difference between an interface and an abstract class in Java?",
    options: [
      "An interface can only define abstract methods while an abstract class can define both abstract and non-abstract methods",
      "An abstract class can only define abstract methods while an interface can define both abstract and non-abstract methods",
      "An interface and an abstract class are the same thing",
      "An abstract class can define variables while an interface cannot"
    ],
    answer: "An interface can only define abstract methods while an abstract class can define both abstract and non-abstract methods"
  },
  {    
    question: "What are design patterns?",    
    options: [      "Design patterns are pre-written code snippets that can be used to speed up the development process",      "Design patterns are reusable solutions to common software design problems",      "Design patterns are specific software development methodologies",      "Design patterns are tools for automated software testing"    ],
    answer: "Design patterns are reusable solutions to common software design problems"
  },
  {
    question: "What are the three types of design patterns?",
    options: [
      "Structural, Behavioral, and Creational",
      "Structural, Abstract, and Creational",
      "Behavioral, Abstract, and Creational",
      "Structural, Behavioral, and Polymorphic"
    ],
    answer: "Structural, Behavioral, and Creational"
  },
  {
    question: "What is the Singleton design pattern?",
    options: [
      "The Singleton design pattern is a creational design pattern that ensures that only one instance of a class can be created",
      "The Singleton design pattern is a structural design pattern that allows objects to communicate without being aware of each other's class",
      "The Singleton design pattern is a behavioral design pattern that allows objects to change their behavior based on changes to their state",
      "The Singleton design pattern is not a design pattern"
    ],
    answer: "The Singleton design pattern is a creational design pattern that ensures that only one instance of a class can be created"
  },
  {
    question: "What is the Observer design pattern?",
    options: [
      "The Observer design pattern is a structural design pattern that allows objects to communicate without being aware of each other's class",
      "The Observer design pattern is a creational design pattern that ensures that only one instance of a class can be created",
      "The Observer design pattern is a behavioral design pattern that allows objects to change their behavior based on changes to their state",
      "The Observer design pattern is a creational design pattern that creates objects based on a specified prototype object"
    ],
    answer: "The Observer design pattern is a behavioral design pattern that allows objects to change their behavior based on changes to their state"
  },
  {
    question: "What is the Strategy design pattern?",
    options: [
      "The Strategy design pattern is a creational design pattern that ensures that only one instance of a class can be created",
      "The Strategy design pattern is a behavioral design pattern that allows objects to change their behavior based on changes to their state",
      "The Strategy design pattern is a structural design pattern that allows objects to communicate without being aware of each other's class",
      "The Strategy design pattern is a behavioral design pattern that enables an algorithm's behavior to be selected at runtime"
    ],
    answer: "The Strategy design pattern is a behavioral design pattern that enables an algorithm's behavior to be selected at runtime"
  }
];