


const questions = [
    {
      question: "What is the term used to describe software that is distributed for free and includes access to the source code?",
      options: ["Open source", "Freeware", "Proprietary", "Shareware", "Closed source", "Public domain", "Copyleft", "Trialware", "Adware", "Malware"],
      answer: "Open source"
    },
    {
      question: "Which of the following is an example of a high-level programming language?",
      options: ["Java", "Assembly language", "C language", "Machine language", "BASIC", "COBOL", "FORTRAN", "Pascal", "SQL", "HTML"],
      answer: "Java"
    },
    {
      question: "Which of the following is an example of a network protocol used for sending email?",
      options: ["SMTP", "HTTP", "FTP", "TCP", "IP", "POP", "IRC", "SSH", "SNMP", "ICMP"],
      answer: "SMTP"
    },
    {
      question: "Which of the following is a type of malware that locks a user's computer and demands a ransom to be paid to unlock it?",
      options: ["Ransomware", "Trojan horse", "Adware", "Spyware", "Virus", "Worm", "Rootkit", "Keylogger", "Botnet", "Logic bomb"],
      answer: "Ransomware"
    },
    {
      question: "Which of the following is an example of a database management system?",
      options: ["Access", "Excel", "PowerPoint", "Word", "Photoshop", "Illustrator", "Dreamweaver", "Premiere Pro", "After Effects", "InDesign"],
      answer: "Access"
    },
    {
      question: "What is the name for a collection of interconnected networks?",
      options: ["Internet", "Intranet", "Extranet", "LAN", "WAN", "MAN", "SAN", "CAN", "PAN", "DAN"],
      answer: "Internet"
    },
    {
      question: "What is the term used to describe the process of converting a high-level programming language into machine language?",
      options: ["Compiling", "Debugging", "Interpreting", "Linking", "Assembling", "Optimizing", "Executing", "Parsing", "Preprocessing", "Profiling"],
      answer: "Compiling"
    },
    {
      question: "Which of the following is an example of a front-end web development language?",
      options: ["HTML", "CSS", "JavaScript", "PHP", "Ruby", "Python", "SQL", "C#", "Swift", "Kotlin"],
      answer: "HTML"
    },
    {
      question: "Which of the following is a type of cloud service that allows customers to rent virtualized computing resources?",
      options: ["IaaS", "SaaS", "PaaS", "DaaS", "FaaS", "BaaS", "MaaS", "XaaS", "NaaS", "TaaS"],
      answer: "IaaS"
    },
    {
      question: "Which of the following is an example of a version control system?",
      options: ["Git", "SVN", "Mercurial", "Perforce", "TFS", "Bitbucket", "GitHub", "GitLab", "SourceTree", "VSTS"],
      answer: "Git"
    },
    {
    question: "Which of the following is not a fundamental principle of object-oriented programming?",    
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction", "Composition", "Aggregation", "Association", "Dependency", "Coupling", "Cohesion"],
    answer: "Coupling"
  },
  {
    question: "Which of the following is a design pattern used in object-oriented programming to limit access to an object's components?",
    options: ["Singleton", "Factory Method", "Observer", "Decorator", "Facade", "Command", "Adapter", "Proxy", "Bridge", "Template Method"],
    answer: "Facade"
  },
  {
    question: "Which of the following is not an access specifier used in object-oriented programming?",
    options: ["Public", "Private", "Protected", "Static", "Final", "Abstract", "Transient", "Volatile", "Synchronized", "Native"],
    answer: "Static"
  },
  {
    question: "Which of the following is not a feature of inheritance in object-oriented programming?",
    options: ["Code reusability", "Polymorphism", "Encapsulation", "Abstraction", "Method overriding", "Method overloading", "Superclass-subclass relationship", "Access to superclass properties and methods", "Creation of specialized classes", "Reduction of code duplication"],
    answer: "Encapsulation"
  },
  { 
    question: "Which keyword is used to define a class in Java?",    
    options: ["class", "public", "static", "void", "final", "abstract", "interface", "extends", "implements", "package"],
    answer: "class"
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    options: ["int", "float", "boolean", "double", "char", "long", "byte", "short", "string", "void"],
    answer: "string"
  },
  {
    question: "What is the purpose of the 'finally' block in a try-catch statement in Java?",
    options: ["To execute code regardless of whether an exception is thrown or caught", "To catch an exception and handle it", "To throw an exception", "To declare a method that can throw an exception", "To create a custom exception", "To specify the type of exception that can be thrown", "To handle an exception", "To define a variable", "To instantiate an object", "To declare a method"],
    answer: "To execute code regardless of whether an exception is thrown or caught"
  },
  {
    question: "Which keyword is used to prevent a class from being subclassed in Java?",
    options: ["final", "static", "public", "private", "protected", "abstract", "interface", "extends", "implements", "package"],
    answer: "final"
  },
  {
    question: "Which of the following is not a visibility modifier in Java?",
    options: ["public", "private", "protected", "default", "final", "static", "abstract", "native", "synchronized", "transient"],
    answer: "final"
  },
  { 
    question: "Which of the following is not a data type in JavaScript?",    
    options: ["boolean", "number", "float", "string", "undefined", "null", "object", "symbol", "bigint", "function"],
    answer: "float"
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: ["To refer to the current object", "To define a new function", "To access the global scope", "To declare a variable", "To loop through an array", "To assign a value to a variable", "To create a new object", "To import a module", "To export a module", "To handle an exception"],
    answer: "To refer to the current object"
  },
  {
    question: "Which of the following is not a way to declare a variable in JavaScript?",
    options: ["var", "let", "const", "function", "global", "window", "this", "prototype", "class", "import"],
    answer: "global"
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    options: ["To determine the data type of a value", "To create a new object", "To define a new function", "To assign a value to a variable", "To import a module", "To export a module", "To handle an exception", "To access the global scope", "To refer to the current object", "To loop through an array"],
    answer: "To determine the data type of a value"
  },
  {
    question: "What is the purpose of the '=== operator in JavaScript?",
    options: ["To compare the value and data type of two values", "To assign a value to a variable", "To define a new function", "To create a new object", "To access the global scope", "To refer to the current object", "To loop through an array", "To import a module", "To export a module", "To handle an exception"],
    answer: "To compare the value and data type of two values"
  },
  { 
    question: "Which of the following is not a type of join in SQL?",    
    options: ["Inner join", "Outer join", "Cross join", "Self join", "Full join", "Union join", "Natural join", "Equijoin", "Anti join", "Semi join"],
    answer: "Union join"
  },
  {
    question: "What is the purpose of the 'GROUP BY' clause in SQL?",
    options: ["To group the result set based on one or more columns", "To sort the result set in ascending or descending order", "To filter the result set based on a condition", "To select specific columns from a table", "To create a new table", "To update existing records in a table", "To delete records from a table", "To insert new records into a table", "To create a view", "To create a trigger"],
    answer: "To group the result set based on one or more columns"
  },
  { 
    question: "What is encapsulation in object-oriented programming?",    
    options: ["Hiding implementation details and providing a public interface", "Creating objects from a class", "Defining a blueprint for an object", "Inheriting properties and methods from a parent class", "Extending the functionality of an existing class", "Implementing multiple interfaces in a class", "Creating a copy of an object", "Passing an object as a parameter to a function", "Storing data in an object", "Accessing the properties of an object"],
    answer: "Hiding implementation details and providing a public interface"
  },
  {
    question: "What is inheritance in object-oriented programming?",
    options: ["Creating a new class from an existing class", "Hiding implementation details and providing a public interface", "Defining a blueprint for an object", "Implementing multiple interfaces in a class", "Extending the functionality of an existing class", "Creating objects from a class", "Creating a copy of an object", "Passing an object as a parameter to a function", "Storing data in an object", "Accessing the properties of an object"],
    answer: "Creating a new class from an existing class"
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    options: ["The ability of an object to take on many forms", "Creating objects from a class", "Defining a blueprint for an object", "Hiding implementation details and providing a public interface", "Inheriting properties and methods from a parent class", "Extending the functionality of an existing class", "Implementing multiple interfaces in a class", "Creating a copy of an object", "Passing an object as a parameter to a function", "Storing data in an object"],
    answer: "The ability of an object to take on many forms"
  },
  {
    question: "What is an abstract class in Java?",
    options: ["A class that cannot be instantiated and may contain abstract methods", "A class that can be instantiated and may contain concrete methods", "A class that cannot be inherited by other classes", "A class that can be inherited by other classes but cannot be extended", "A class that is used to define constants", "A class that is used to perform mathematical operations", "A class that is used to create GUI components", "A class that is used to handle exceptions", "A class that is used to interact with databases", "A class that is used to manipulate strings"],
    answer: "A class that cannot be instantiated and may contain abstract methods"
  },
  {
    question: "What is the purpose of an interface in Java?",
    options: ["To define a set of methods that a class must implement", "To define a blueprint for an object", "To inherit properties and methods from a parent class", "To extend the functionality of an existing class", "To create objects from a class", "To create a copy of an object", "To pass an object as a parameter to a function", "To store data in an object", "To access the properties of an object", "To handle exceptions"],
    answer: "To define a set of methods that a class must implement"
  },
  {
    question: "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++);\nSystem.out.println(x);",
    options: ["5, 6", "5, 5", "6, 5", "6, 6", "Compilation error", "Runtime error", "Infinite loop", "None of the above", "Not sure", "Skip"],
    answer: "5, 6"
  },
  {
    question: "Which keyword is used to prevent a class from being inherited in Java?",
    options: ["final", "static", "private", "abstract", "interface", "protected", "volatile", "transient", "synchronized", "native"],
    answer: "final"
  },
  {
    question: "What is the purpose of the 'finally' block in Java?",
    options: ["To execute code that should always be run, whether an exception is thrown or not", "To catch and handle exceptions", "To define a new method", "To declare a variable", "To loop through an array", "To assign a value to a variable", "To create a new object", "To import a package", "To export a package", "To handle an exception"],
    answer: "To execute code that should always be run, whether an exception is thrown or not"
  },
  {
    question: "What is the output of the following code?\nString s1 = new String(\"hello\");\nString s2 = new String(\"hello\");\nSystem.out.println(s1 == s2);",
    options: ["false", "true", "Compilation error", "Runtime error", "Infinite loop", "None of the above", "Not sure", "Skip"],
    answer: "false"
  },
  {
    question: "What is the purpose of the 'super' keyword in Java?",
    options: ["To refer to the parent class", "To define a new class", "To catch and handle exceptions", "To declare a variable", "To loop through an array", "To assign a value to a variable", "To create a new object", "To import a package", "To export a package", "To handle an exception"],
    answer: "To refer to the parent class"
  },
  { 
    question: "What is Spring Framework?",    
    options: ["A framework for building Java applications", "A database management system", "An integrated development environment", "A continuous integration tool", "A code analysis tool", "A testing framework", "A security tool", "A web application server", "A version control system", "None of the above"],
    answer: "A framework for building Java applications"
  },
  {
    question: "What is Inversion of Control (IoC) in Spring?",
    options: ["A design pattern that decouples objects and makes them more reusable and maintainable", "A tool for managing project dependencies", "A tool for automating builds", "A tool for testing software", "A tool for deploying software", "A tool for analyzing code", "A tool for managing project versions", "A tool for optimizing performance", "A tool for securing software", "None of the above"],
    answer: "A design pattern that decouples objects and makes them more reusable and maintainable"
  },
  { 
    question: "What is Scrum?",    
    options: ["An Agile framework for managing and completing complex projects", "A programming language", "A database management system", "An integrated development environment", "A continuous integration tool", "A code analysis tool", "A testing framework", "A security tool", "A web application server", "None of the above"],
    answer: "An Agile framework for managing and completing complex projects"
  },
  {
    question: "What are the three roles in Scrum?",
    options: ["Product Owner, Scrum Master, Development Team", "Business Analyst, Project Manager, QA Engineer", "CEO, CTO, CFO", "IT Manager, Database Administrator, Network Engineer", "UX Designer, UI Developer, Full-Stack Engineer", "Marketing Manager, Sales Representative, Customer Support Specialist", "Front-End Developer, Back-End Developer, DevOps Engineer", "Software Architect, Software Engineer, Technical Writer", "Security Analyst, Compliance Officer, Risk Manager", "None of the above"],
    answer: "Product Owner, Scrum Master, Development Team"
  },
  {
    question: "What is the purpose of the Sprint Backlog in Scrum?",
    options: ["To plan and manage the work to be done during the current Sprint", "To track progress and performance throughout the project", "To prioritize the Product Backlog items", "To estimate the effort required to complete the project", "To document the project requirements", "To create and maintain the project schedule", "To communicate with stakeholders and customers", "To identify and mitigate project risks", "To monitor and control project scope", "None of the above"],
    answer: "To plan and manage the work to be done during the current Sprint"
  },
  {
    question: "What is the Sprint Review in Scrum?",
    options: ["A meeting at the end of the Sprint to review and demonstrate the work done", "A meeting at the beginning of the Sprint to plan and prioritize work", "A meeting to discuss project risks and issues", "A meeting to discuss project status and progress", "A meeting to discuss project scope and requirements", "A meeting to discuss project budget and resources", "A meeting to discuss project quality and testing", "A meeting to discuss project documentation and deliverables", "A meeting to discuss project communication and stakeholder engagement", "None of the above"],
    answer: "A meeting at the end of the Sprint to review and demonstrate the work done"
  },
  {
    question: "What is the purpose of the Daily Scrum meeting in Scrum?",
    options: ["To provide a daily status update and plan work for the day", "To discuss project risks and issues", "To discuss project status and progress", "To discuss project scope and requirements", "To discuss project budget and resources", "To discuss project quality and testing", "To discuss project documentation and deliverables", "To discuss project communication and stakeholder engagement", "To provide a weekly status update and plan work for the week", "None of the above"],
    answer: "To provide a daily status update and plan work for the day"
  },
  { question: "What are design patterns?",    
    options: ["Reusable solutions to common software design problems", "Pre-written code for common software design problems", "Software applications for common business problems", "Hardware solutions for common computing problems", "Mathematical algorithms for common optimization problems", "Marketing strategies for common product problems", "Customer service solutions for common customer problems", "Financial strategies for common budget problems", "Organizational structures for common management problems", "None of the above"],
    answer: "Reusable solutions to common software design problems"
  },
  {
    question: "What is the purpose of the Singleton pattern?",
    options: ["To ensure that a class has only one instance and provide a global point of access to it", "To separate the construction of a complex object from its representation", "To provide a way of creating objects without specifying their concrete classes", "To define a family of algorithms, encapsulate each one, and make them interchangeable", "To ensure that only one of a certain type of object is created", "To allow the creation of complex objects step-by-step", "To provide a way to access the elements of an aggregate object sequentially", "To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically", "To decouple an abstraction from its implementation so that they can vary independently", "None of the above"],
    answer: "To ensure that a class has only one instance and provide a global point of access to it"
  },
  {
    question: "What is the purpose of the Factory pattern?",
    options: ["To provide a way of creating objects without specifying their concrete classes", "To ensure that a class has only one instance and provide a global point of access to it", "To separate the construction of a complex object from its representation", "To define a family of algorithms, encapsulate each one, and make them interchangeable", "To ensure that only one of a certain type of object is created", "To allow the creation of complex objects step-by-step", "To provide a way to access the elements of an aggregate object sequentially", "To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically", "To decouple an abstraction from its implementation so that they can vary independently", "None of the above"],
    answer: "To provide a way of creating objects without specifying their concrete classes"
  },
  {
    question: "What is the purpose of the Observer pattern?",
    options: ["To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically", "To ensure that a class has only one instance and provide a global point of access to it", "To separate the construction of a complex object from its representation", "To provide a way of creating objects without specifying their concrete classes", "To define a family of algorithms, encapsulate each one, and make them interchangeable", "To ensure that only one of a certain type of object is created", "To allow the creation of complex objects step-by-step", "To provide a way to access the elements of an aggregate object sequentially", "To decouple an abstraction from its implementation so that they can vary independently", "None of the above"],
    answer: "To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically"
  }
]

export function getQuestions() {
  return questions;
}



