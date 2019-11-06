export const userInfo = [
    {
        id: '00001',
        firstname: 'John',
        lastname: 'Doe',
        teacher: 'J Austin',
        students: ['',''],
        role: 'student',
        email: 'john.doe@school.com',
        progress: {
            liver: '',
            stomach: '',
            smallintestines: '',
            largeintestines: '',
            pancreas: '',
            overallscore: ''
        } 
    },
    {
        id: '00002',
        firstname: 'Jane',
        lastname: 'Austin',
        teacher: '',
        students: ['John Doe','Alex Anderson'],
        role: 'teacher',
        email: 'JAustin@school.com',
        progress: {
            liver: '',
            stomach: '',
            smallintestines: '',
            largeintestines: '',
            pancreas: '',
            overallscore: ''
        } 
    }
]
export const organInfo ={
    'Liver': {
        'image': `./Liver.png`,
        'heading':'The Liver',
        'text':['Bile is produced in the liver and transferred over to the small intestine to continue the process of digestion.',
            'Fatty foods are easier to digest because of the liver.',
            'The liver helps with digestion but does not allow food to pass through it.'],
        'quiz':[
            ['What is the function that is performed by the liver?',
                ["the production of bile",
                 "the storage of bile", 
                 "the absorption of nutrients", 
                 "the production of enzymes"
                ]
            ],
            ["Which organ does NOT allow food to pass through it?",
                ["liver" , 
                "stomach", 
                "large intestine",  
                "small intestine"
                ]
            ], 
            ["What does the liver look like?",
                ["It is shaped like a cone and is a dark reddish brown color.", 
                "It is shaped like a tube and is a light red color.", 
                "It is shaped like a 'J' and is a light red color.",
                "It is shaped like a tube and is a brown color."
                ]
            ], 
            ["The bile from the liver goes into what organ?",
                ["small intestine",  
                "large intestine", 
                "pancreas", 
                "stomach"
                ]
            ], 
            ["Which of these organs is the liver?",
                ["<img src='./images/Liver transparent.png' width='147' height='133'/>",
                "<img src='./images/pancreas edited.png' width='148' height='136'/>",
                "<img src='./images/small-intestine.png' width='138' height='131'/>",
                "<img src='./images/large intestines edited.png'  width='184' height='136'/>"
                ]
            ]
        ],
        'audio':'./liver2.mp3',
        'quizaudio': './liverquiz.mp3'
    },
    'Stomach': {
        'image': './stomach.png',
        'heading': 'The Stomach',
        'text':['Food enters the digestive  system through the esophagus and then enters the stomach.',
            `The stomach's involuntarily  muscles help contract and break down the food while mixing it with water and  juice.`,
            `Once the food is broken down  into liquid form, it moves into the small intestine.`],
        'quiz':[
            ['What function is performed by the stomach?',
                ["Helps break down the food and mixes it with juices.",
                "Creates bile and helps digestion.",
                "Helps digest proteins and starches.",
                "Creates nutrients that can enter the blood."]
            ],
            [`After passing through the stomach, which organ does the food pass through NEXT?`,
                ["small intestine",
                "large intestine",
                "artery",
                "liver"]
            ], 
            [`The stomach contains what kind of muscle tissue?`,
                ["smooth involuntary muscles",
                "smooth voluntary muscles",
                "voluntary cardiac muscles",
                "involuntary cardiac muscles"]
            ],
            [`What organ does food pass through BEFORE it moves into the stomach?`,
                ["esophagus",
                "liver",
                "pancreas",
                "large intestine"]
            ],
            [`Which of these organs is the stomach?`,
                ["<img src='./images/stomach.png' width='148' height='136'/>",
                "<img src='./images/Liver transparent.png' width='147' height='133'/>",
                "<img src='./images/small-intestine.png' width='138' height='131'/>",
                "<img src='./images/pancreas edited.png' width='184' height='136'/>"]
            ]
        ],
        'audio':'./stomach info.mp3',
        'quizaudio':'stomach-quiz.mp3'
    },
    'Pancreas': {
        'image': './pancreas.png',
        'heading':'The Pancreas',
        'text':['Juices that are made in the pancreas help digest proteins and starches.',
            'The pancreas makes sure that you have the right amount of sugar in your blood.',
            'Juices from the pancreas are transferred to the small intestine to continue digestion.',
            'The pancreas helps with digestion but does not allow food to pass through it.'],
        'quiz':[
            ['What function is performed by the pancreas?',
                ["It keeps the right amount of sugar in your blood.",  
                "It allows food to pass through it to the small intestine.", 
                "It absorbs water from food and creates bile.", 
                "It pumps blood throughout the body."]
            ],
            ["Which organ does NOT allow food to pass through it?",
                ["pancreas", 
                "esophagus", 
                "large intestine", 
                "stomach"]
            ],
            ["What are two functions of the pancreas?",
                ["It helps digest proteins and starches; it keeps the right  amount of sugar in your blood.",  
                "It makes juices that are moved to the small intestine; it produces bile.", 
                "It keeps the right amount of sugar in your blood; it produces bile.", 
                "It helps digest proteins and starches; it produces bile."]
            ],
            ["The juices from the pancreas move to which organ NEXT?",
                ["small intestine", 
                "large intestine",  
                "pancreas", 
                "liver"]
            ],
            ["Which of these organs is the pancreas?",
                ["<img src='./images/pancreas edited.png' width='148' height='136'/>",
                "<img src='./images/Liver transparent.png' width='147' height='133'/>",
                "<img src='./images/small-intestine.png' width='138' height='131'/>",
                "<img src='./images/stomach.png' width='184' height='136'/>"]
            ]
        ],
        'audio':'./pancreas2.mp3',
        'quizaudio':'./pancreasquiz.mp3'
    },
    'Large Intestines': {
        'image': './LGintestines.png',
        'heading':'The Large Intestines',
        'text':['Remaining food from the small intestine moves into the large intestine.',
            'Waste materials stay in the large intestine until they exit the body.',
            'The large intestine allows for water to be absorbed into the blood.',
            'Any remaining wastes are exited from the body.'],
        'quiz':[
            ["What function is performed by the large intestine?",
                ["Water is absorbed into the blood.", 
                "Creates urine by removing wastes.", 
                "Nutrients are absorbed for the body.", 
                "Helps break down the food and mixes it with juices."]
            ], 
            ["Which organ does food pass through BEFORE it enters the large intestine?",
                ["small intestine", 
                "esophagus", "pancreas", 
                "liver"]
            ], 
            ["Which statement is TRUE about the functions of the large intestine?",
                ["Wastes remain in the large intestine until it exits the body.", 
                "Wastes are removed from the blood and form urine.", 
                "Water is mixed with juices to produce bile.", 
                "Water is absorbed into the bladder."]
            ],
            ["Which organ does food pass through AFTER the large intestine?",
                ["none", 
                "small intestine", 
                "pancreas", 
                "liver"]
            ],
            [ "Which of these organs is the large intestine?",
                ["<img src='./images/large intestines edited.png' width='184' height='136'/>",
                "<img src='./images/Liver transparent.png' width='147' height='133'/>",
                "<img src='./images/pancreas edited.png' width='148' height='136'/>",
                "<img src='./images/small-intestine.png' width='138' height='131'>"]
            ]
        ],
        'audio':'./largeintestine.mp3',
        'quizaudio':'./large-intestinequiz.mp3'
    },
    'Small Intestines': {
        'image': './S-intestine.png',
        'heading':'The Small Intestines',
        'text':['The small intestines is a very long winding tube like organ.',
            'Once food enters the small intestines, nutrients are absorbed into the body.',
            'Food from the stomach, juices from the pancreas and liver are moved into the small intestines to continue digestion.',
            'Any remaining parts of the food in the small intestines are moved into the large intestines.',
            'Inside the small intestines is where most of the digestion takes place.'],
        'quiz':[
            ["What function is performed by the small intestine?",
                ["Creates nutrients by mixing bile and juices.", 
                "Creates urine by taking wastes from your blood.", 
                "Creates the right amount of sugar for your blood.", 
                "Creates bile and helps digestion."]
            ], 
            ["Which organ does food pass through BEFORE it enters the small intestine?",
                ["stomach", 
                "pancreas", 
                "large intestine",  
                "liver"]
            ], 
            ["Which organ does food pass through AFTER the small intestine?",
                ["large intestine", 
                "pancreas", 
                "stomach", 
                " liver"]
            ], 
            ["Which statement is TRUE about the functions of the small intestine?",
                ["Nutrients are absorbed for the body.",  
                "Wastes are removed from the blood and form urine.", 
                "Wastes remain in the small intestine until it exits the body.", 
                "Water is absorbed into the blood."]
            ], 
            ["Which of these organs is the small intestine?",
                ["<img src='./images/small-intestine.png' width='138' height='131'/>",
                "<img src='./images/pancreas edited.png' width='148' height='136'/>",
                "<img src='./images/Liver transparent.png' width='147' height='133'>",
                "<img src='./images/stomach.png' width='184' height='136'/>"]
            ]
        ],
        'audio':'./smallintestine.mp3',
        'quizaudio':'./small-intestinequiz.mp3'
    }
}
 
export const infoInfo ={
    CreditsNote:'In my Problems In Instructional Design class,  my group made this project in Spring 2012.  I have updated the code to react and changed images to be sure they are part of creative commons or the public domain.',
    Images:  {
        publicDomain: [
            {link:'https://publicdomainvectors.org/en/free-clipart/Sterile-bandage/55042.html',
            picName:`"Sterile-bandage"`},
            {link:'https://publicdomainvectors.org/en/free-clipart/Young-female-doctor/52241.html',     
            picName:'"Young-female-doctor"'},
            {link:'https://publicdomainvectors.org/en/free-clipart/Human-body-color-silhouette/83431.html',
            picName:'"Human body color silhouette"(logo)'}
            ],
        creativeCommons: [
            {link:'https://smart.servier.com/smart_image/complete-digestive-apparatus/',
            picName: `"Complete digestive apparatus"`
            },
            {link:'https://smart.servier.com/smart_image/liver/',
            picName: `"Liver"`
            },
            {link:'https://smart.servier.com/smart_image/stomach-3/',
            picName: `"Stomach"`
            },
            {link:'https://smart.servier.com/smart_image/pancreas-2/',
            picName: `"Pancreas"`
            },
            {link:'https://smart.servier.com/smart_image/colon/',
            picName: `"Colon" (Large Intestines)`
            },
            {link:'https://smart.servier.com/smart_image/intestine-3/',
            picName: `"Intestine" (Small Intestines)`
            }
        ]
    },
    IDTteam : [ `Sarah Hauhe: Subject Matter Expert, Assessment Designer`,
            `Lorraine Jaques: Web Page and Content Designer (Dreamweaver/HTML)`,
            `Raquel Merced: Project Manager, Editor, Content Designer`,
            `Charlotte Newcomer: Web Page and Content Designer(FLASH & javascript)`,
            `Christine Sharrio: Sound Editor and Voice`
            ]
        
}
