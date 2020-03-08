export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Irene Macapinlac.',
        headerTagline: [//Line 1 For Header
                        'Hey 👋 You found me! I\'m Irene,',
                        //Line 2 For Header
                        'Junior Software Engineer ',
                        //Line 3 For Header
                        'from Sydney, Australia'
    ],
        //Contact Email
        contactEmail:'irenekaymac@gmail.com',
        // Add Your About Text Here
        abouttext: "As a child I’ve always had a passion for software & technology and I would spend hours reading about how everyday machines and software programs worked. After spending approximately 7 years specialising in administration and project management, I decided to follow my dream of building a career in tech and enrolled in the Software Engineering course at General Assembly Sydney.",
        aboutImage:'http://www.fillmurray.com/g/400/500',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Hangry', //Project Title - Add Your Project Title Here
             service:'Restaurant', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
             url:'https://github.com/irenekmac/front-end-resto'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Vitrectomy',
                service: 'Website Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://rails-heroku-vitrectomyhire.herokuapp.com/'
            },
            {
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Tic-Tac-Toe',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/irenekmac'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/irenekmac'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/irenekmac'
            }

        ]
    }
