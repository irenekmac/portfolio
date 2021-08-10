export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
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
        // Add About Text Here
        abouttext: ["As a child I\’ve always had a passion for software & technology. After 7 years specialising in administration and project management, I decided to follow my dream of building a career in tech.",
        //Second Paragraph
        "I am excited to use my newly developed skills and join a passionate team. My strong interpersonal skills have been a defining feature in empowering others around me and accomplish team goals."],
        currentTechStack: ['JavaScript Rails, React, jQuery, HTML, CSS '],
        futureTechStack: ['Node, Python, TypeScript, AWS, C#, SASS'],
        aboutImage:'https://res.cloudinary.com/dlbfbi0rp/image/upload/c_crop,r_0,w_3665/v1583936135/SEi35_IreneM_HeadshotBW_037_jjlzvx.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS
            title:'Vitrectomy', //Project Title - Add Your Project Title Here
            service:'Website Development', // Add Your Service Type Here
            // General Info
            projectInfo: 'e-commerce website',
            // Tech Stack used
            techStack:'Ruby on Rails',
            //Project Image - Add Your Project Image Here
             imageSrc:"https://res.cloudinary.com/dlbfbi0rp/image/upload/c_limit,h_535,q_100,w_485/v1584265583/Screen_Shot_2020-03-15_at_8.45.36_pm_slyysd.png",
             //Project URL - Add Your Project Url Here
             url:'https://rails-heroku-vitrectomyhire.herokuapp.com/',
             code:'https://github.com/irenekmac/Vitrectomy-Hire-Project'
            },
            {
                id: 2,//DO NOT CHANGE THIS
                title: 'Tic-Tac-Toe',
                service: 'Web App',
                projectInfo: 'game app',
                techStack:'JavaScript, HTML, CSS, jQuery',
                imageSrc: "https://res.cloudinary.com/dlbfbi0rp/image/upload/v1584501813/Screen_Shot_2020-03-18_at_2.22.16_pm_jobxlv.png",
                url: 'https://irenekmac.github.io/tic-tac-toe/',
                code:'https://github.com/irenekmac/tic-tac-toe'
            },
            {
                id: 3,//DO NOT CHANGE THIS
                title: 'Hangry',
                service: 'Restaurant web app',
                projectInfo: 'rando resto',
                techStack:'Ruby on Rails & React',
                imageSrc: "https://res.cloudinary.com/dlbfbi0rp/image/upload/v1584711463/Screen_Shot_2020-03-21_at_12.35.07_am_poo9st.png",
                url: 'https://irenekmac.github.io/front-end-resto/',
                code:'https://github.com/irenekmac/hangry'
            }
           //  {
           //      id: 4,//DO NOT CHANGE THIS
           //      title:'Hangry', //Project Title - Add Your Project Title Here
           //      service:'Restaurant', // Add Your Service Type Here
           //      // General Info
           //      projectInfo: 'rando resto',
           //      // Tech Stack used
           //      techStack:'Ruby on Rails & React',
           //      //Project Image - Add Your Project Image Here
           //       imageSrc:"https://irenekmac.github.io/front-end-resto/",
           //       //Project URL - Add Your Project Url Here
           //       url:'https://github.com/irenekmac/front-end-resto',
           //       code:''
           // }

                    /*

                    If You Want To Add More Projects just Copy and Paste This At The End (Update the id Respectively)
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
                url:'https://github.com/irenekmac'
              },
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
