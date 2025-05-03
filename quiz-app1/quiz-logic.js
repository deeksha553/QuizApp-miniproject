
angular.module('quizApp', [])
  .controller('QuizController', function($scope) {
    const allSubjects = {
      java: {
        name: 'Java',
        questions: [
          { question: 'What keyword is used to define a class in Java?', options: ['class', 'define', 'struct'], answer: 'class' },
          { question: 'What is the extension for Java files?', options: ['.java', '.class', '.js'], answer: '.java' },
          { question: 'Which method is the entry point of a Java application?', options: ['main()', 'start()', 'run()'], answer: 'main()' },
          { question: 'Which keyword is used to inherit a class?', options: ['extends', 'implements', 'inherits'], answer: 'extends' },
          { question: 'Which package is automatically imported in Java programs?', options: ['java.lang', 'java.util', 'java.io'], answer: 'java.lang' },
          { question: 'What does JVM stand for?', options: ['Java Virtual Machine', 'Java Visual Machine', 'Java Verified Machine'], answer: 'Java Virtual Machine' },
          { question: 'Which is not a Java keyword?', options: ['static', 'Boolean', 'void'], answer: 'Boolean' },
          { question: 'Which of these is used to handle exceptions?', options: ['try-catch', 'do-while', 'for-if'], answer: 'try-catch' },
          { question: 'Which collection allows duplicate elements?', options: ['List', 'Set', 'Map'], answer: 'List' },
          { question: 'Which is a wrapper class?', options: ['Integer', 'int', 'void'], answer: 'Integer' }
        ]
      },
      js: {
        name: 'JavaScript',
        questions: [
          { question: 'Who created JavaScript?', options: ['Brendan Eich', 'Bill Gates', 'Mark Zuckerberg'], answer: 'Brendan Eich' },
          { question: 'Which keyword declares a constant?', options: ['const', 'let', 'var'], answer: 'const' },
          { question: 'What is the result of typeof null?', options: ['object', 'null', 'undefined'], answer: 'object' },
          { question: 'What is the output of "2" + 2?', options: ['22', '4', 'NaN'], answer: '22' },
          { question: 'Which method adds an element at end of array?', options: ['push()', 'pop()', 'shift()'], answer: 'push()' },
          { question: 'Which operator checks equality and type?', options: ['===', '==', '='], answer: '===' },
          { question: 'What is used to create a function?', options: ['function', 'def', 'create'], answer: 'function' },
          { question: 'Which symbol is used for single-line comments?', options: ['//', '#', '<!--'], answer: '//' },
          { question: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Manager'], answer: 'Document Object Model' },
          { question: 'Which method parses a string to int?', options: ['parseInt()', 'parse()', 'toInt()'], answer: 'parseInt()' }
        ]
      },
      python: {
        name: 'Python',
        questions: [
          { question: 'What is the symbol for comments in Python?', options: ['#', '//', '--'], answer: '#' },
          { question: 'Which of the following is mutable?', options: ['list', 'tuple', 'str'], answer: 'list' },
          { question: 'What does len() return?', options: ['length', 'last element', 'index'], answer: 'length' },
          { question: 'Which handles exceptions?', options: ['try-except', 'do-catch', 'if-else'], answer: 'try-except' },
          { question: 'Keyword to define function?', options: ['def', 'function', 'lambda'], answer: 'def' },
          { question: 'Extension of Python file?', options: ['.py', '.pt', '.p'], answer: '.py' },
          { question: 'Input from user is taken using?', options: ['input()', 'scan()', 'read()'], answer: 'input()' },
          { question: 'Invalid variable name?', options: ['_myvar', '2ndVar', 'my_var'], answer: '2ndVar' },
          { question: 'Not a Python data type?', options: ['int', 'string', 'char*'], answer: 'char*' },
          { question: '__init__ method is used for?', options: ['constructor', 'destructor', 'decorator'], answer: 'constructor' }
        ]
      },
      sql: {
        name: 'SQL',
        questions: [
          { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Standard Query List'], answer: 'Structured Query Language' },
          { question: 'Which command is used to retrieve data?', options: ['SELECT', 'GET', 'FETCH'], answer: 'SELECT' },
          { question: 'Which command is used to delete all rows?', options: ['TRUNCATE', 'DELETE', 'REMOVE'], answer: 'TRUNCATE' },
          { question: 'What is a primary key?', options: ['Unique identifier', 'Duplicate column', 'Foreign key'], answer: 'Unique identifier' },
          { question: 'Which clause is used with aggregate functions?', options: ['GROUP BY', 'ORDER BY', 'HAVING'], answer: 'GROUP BY' },
          { question: 'Which SQL statement is used to update data?', options: ['UPDATE', 'MODIFY', 'SET'], answer: 'UPDATE' },
          { question: 'Which keyword is used to sort?', options: ['ORDER BY', 'SORT', 'GROUP'], answer: 'ORDER BY' },
          { question: 'Which joins return all matching rows?', options: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN'], answer: 'INNER JOIN' },
          { question: 'How do you rename a column in SQL?', options: ['AS', 'RENAME TO', 'ALTER'], answer: 'AS' },
          { question: 'What does COUNT(*) do?', options: ['Counts rows', 'Counts columns', 'Counts values'], answer: 'Counts rows' }
        ]
      },
      css: {
        name: 'CSS',
        questions: [
          { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style Syntax', 'Color Style System'], answer: 'Cascading Style Sheets' },
          { question: 'Which symbol is used for class selector?', options: ['.', '#', '*'], answer: '.' },
          { question: 'Which symbol is used for ID selector?', options: ['#', '.', '%'], answer: '#' },
          { question: 'How do you comment in CSS?', options: ['/* comment */', '// comment', '# comment'], answer: '/* comment */' },
          { question: 'What is the default position value in CSS?', options: ['static', 'relative', 'absolute'], answer: 'static' },
          { question: 'Which property changes text color?', options: ['color', 'font-color', 'text-color'], answer: 'color' },
          { question: 'Which unit is relative to parent font-size?', options: ['em', 'px', '%'], answer: 'em' },
          { question: 'Which property is used to make text bold?', options: ['font-weight', 'text-style', 'bold'], answer: 'font-weight' },
          { question: 'How to apply style to all p tags?', options: ['p { }', '.p { }', '#p { }'], answer: 'p { }' },
          { question: 'Which property sets the background color?', options: ['background-color', 'bg-color', 'color'], answer: 'background-color' }
        ]
      },
      php: {
        name: 'PHP',
        questions: [
          { question: 'What does PHP stand for?', options: ['Hypertext Preprocessor', 'Personal Home Page', 'Pre Hypertext Processor'], answer: 'Hypertext Preprocessor' },
          { question: 'Which symbol starts a PHP variable?', options: ['$', '#', '&'], answer: '$' },
          { question: 'Which function is used to output data?', options: ['echo', 'print', 'write'], answer: 'echo' },
          { question: 'Which tag is used to start PHP code?', options: ['<?php', '<script>', '<php>'], answer: '<?php' },
          { question: 'Which superglobal holds form data?', options: ['$_POST', '$_GET', '$_DATA'], answer: '$_POST' },
          { question: 'Which function is used to include files?', options: ['include()', 'load()', 'require_file()'], answer: 'include()' },
          { question: 'What is the extension for PHP files?', options: ['.php', '.html', '.js'], answer: '.php' },
          { question: 'Which is not a PHP data type?', options: ['float', 'string', 'character'], answer: 'character' },
          { question: 'Which operator is used for concatenation?', options: ['.', '+', '&'], answer: '.' },
          { question: 'Which function returns number of characters?', options: ['strlen()', 'count()', 'length()'], answer: 'strlen()' }
        ]
      }
    };

    const queryParams = new URLSearchParams(window.location.search);
    const subjectKey = queryParams.get('subject');
    $scope.userName = localStorage.getItem('quizUser') || 'Guest';
    $scope.subjectName = allSubjects[subjectKey]?.name || '';
    $scope.questions = allSubjects[subjectKey]?.questions || [];
    $scope.currentQuestionIndex = 0;
    $scope.userAnswer = null;
    $scope.score = 0;

    $scope.next = function () {
      if ($scope.userAnswer === $scope.questions[$scope.currentQuestionIndex].answer) {
        $scope.score++;
      }
      $scope.currentQuestionIndex++;
      $scope.userAnswer = null;

      if ($scope.currentQuestionIndex >= $scope.questions.length) {
        const result = {
          name: $scope.userName,
          subject: subjectKey,
          score: $scope.score,
          total: $scope.questions.length
        };

        let history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        history.push(result);
        localStorage.setItem('quizHistory', JSON.stringify(history));
        localStorage.setItem('quizResult', JSON.stringify(result));

        window.location.href = 'result.html';
      }
    };
  });
