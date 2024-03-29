import Experience from "../Models/Experience";
import PortfolioItem from "../Models/PortfolioItem";
import Project from "../Models/Project";
import IPublication from "../Models/Publication";
import IService from "../Models/Service";

export const publications: IPublication[] = [
    {
        authors: ['Matthew K. Miller'],
        year: 2022,
        title: 'Supporting Relationships with Video Chat',
        venue: 'Doctoral thesis. University of Saskatchewan',
        link: {href: 'https://harvest.usask.ca/handle/10388/14074', text: 'U of S Harvest'},
        type: 'thesis'
    },{
        authors: ['Matthew K. Miller', 'Regan L. Mandryk'],
        year: 2021,
        title: 'Meeting with Media: Comparing Synchronous Media Sharing and Icebreaker Questions in Initial Interactions via Video Chat',
        venue: 'Proceedings of the ACM on Human-Computer Interaction 5, CSCW2, Article 374 (October 2021), 26 pages',
        doi: '10.1145/3479518',
        type: 'journal'
    },
    {
        authors: ['Matthew K. Miller', 'Martin Dechant', 'Regan L. Mandryk'],
        year: 2021,
        title: 'Meeting You, Seeing Me: The Role of Social Anxiety, Visual Feedback, and Interface Layout in a Get-to-Know-You Task via Video Chat',
        venue: 'Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, Article 339, 1–14',
        doi: '10.1145/3411764.3445664',
        type: 'conf-full'
    },
    {
        authors: ['Cale J. Passmore', 'Matthew K. Miller', 'Jun Liu', 'Cody J. Phillips', 'Regan L. Mandryk'],
        year: 2020,
        title: 'A Cheating Mood: The Emotional and Psychological Benefits of Cheating in Single-Player Games',
        venue: 'Proceedings of the Annual Symposium on Computer-Human Interaction in Play. Association for Computing Machinery, New York, NY, USA, 58–70',
        doi: '10.1145/3410404.3414252',
        type: 'conf-full'
    },
    {
        authors: ['Julian Frommel', 'Valentin Sagl', 'Ansgar E. Depping', 'Colby Johanson', 'Matthew K. Miller', 'Regan L. Mandryk'],
        year: 2020,
        title: 'Recognizing Affiliation: Using Behavioural Traces to Predict the Quality of Social Interactions in Online Games',
        venue: 'Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 1–16',
        doi: '10.1145/3313831.3376446',
        type: 'conf-full'
    },
    {
        authors: ['John C. Tang', 'Gina Venolia', 'Kori Inkpen', 'Matthew K. Miller', 'Gerard Wilkinson'],
        year: 2019,
        title: 'Presenting messages to participants based on neighborhoods',
        venue: 'US Patent US20180152397A1',
        type: 'patent'
    },
    {
        authors: ['Baris Unver', 'Sarah D\'Angelo', 'Matthew K. Miller', 'John C. Tang', 'Gina Venolia', 'Kori Inkpen'],
        year: 2018,
        title: 'Hands-Free Remote Collaboration Over Video: Exploring Viewer and Streamer Reactions',
        venue: 'Proceedings of the 2018 ACM International Conference on Interactive Surfaces and Spaces (ISS \'18). Association for Computing Machinery, New York, NY, USA, 85–95',
        doi: '10.1145/3279778.3279803',
        type: 'conf-full'
    },
    {
        authors: ['Matthew K. Miller', 'John C. Tang', 'Gina Venolia', 'Gerard Wilkinson', 'Kori Inkpen'],
        year: 2017,
        title: 'Conversational Chat Circles: Being All Here Without Having to Hear It All',
        venue: 'Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 2394–2404',
        doi: '10.1145/3025453.3025621',
        type: 'conf-full'
    },
    {
        authors: ['Matthew K. Miller', 'Regan L. Mandryk', 'Max V. Birk', 'Ansgar E. Depping', 'Tushita Patel'],
        year: 2017,
        title: 'Through the Looking Glass: The Effects of Feedback on Self-Awareness and Conversational Behaviour during Video Chat',
        venue: 'Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 5271–5283',
        doi: '10.1145/3025453.3025548',
        type: 'conf-full'
    },
    {
        authors: ['Matthew K. Miller', 'Regan Mandryk'],
        year: 2016,
        title: 'Differentiating In-Game Frustration from at-Game Frustration Using Touch Pressure',
        venue: 'Proceedings of the 2016 ACM International Conference on Interactive Surfaces and Spaces (ISS \'16). Association for Computing Machinery, New York, NY, USA, 225–234',
        doi: '10.1145/2992154.2992185',
        type: 'conf-full'
    },
    {
        authors: ['Thomas Muender', 'Matthew K. Miller', 'Max V. Birk', 'Regan L. Mandryk'],
        year: 2016,
        title: 'Extracting Heart Rate from Videos of Online Participants',
        venue: 'Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 4562–4567',
        doi: '10.1145/2858036.2858064',
        type: 'conf-short'
    },
    {
        authors: ['Max V. Birk', 'Regan L. Mandryk', 'Matthew K. Miller', 'Kathrin M. Gerling'],
        year: 2015,
        title: 'How Self-Esteem Shapes our Interactions with Play Technologies',
        venue: 'Proceedings of the 2015 Annual Symposium on Computer-Human Interaction in Play (CHI PLAY \'15). Association for Computing Machinery, New York, NY, USA, 35–45',
        doi: '10.1145/2793107.2793111',
        type: 'conf-full'
    },
    {
        authors: ['Kathrin M. Gerling', 'Regan L. Mandryk', 'Matthew K. Miller', 'Max V. Birk', 'Jan D. Smeddinck'], 
        year: 2015,
        title: 'Designing wheelchair-based movement games',
        venue: ' ACM Transactions on Accessible Computing (TACCESS), 6(2), 6',
        doi: '10.1145/2724729',
        type: "journal"
    },
    {
        authors: ['Kathrin M. Gerling', 'Regan L. Mandryk', 'Max V. Birk', 'Matthew K. Miller', 'Rita Orji'],
        year: 2014,
        title: 'The effects of embodied persuasive games on player attitudes toward people using wheelchairs',
        venue: 'Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI \'14). Association for Computing Machinery, New York, NY, USA, 3413–3422',
        doi: '10.1145/2556288.2556962',
        type: 'conf-full'
    },
    {
        authors: ['Kathrin M. Gerling', 'Regan L. Mandryk', 'Matthew K. Miller', 'Max V. Birk', 'Jan D. Smeddinck'], 
        year: 2014,
        title: 'Effects of balancing for physical abilities on player performance, experience and self-esteem in exergames',
        venue: ' In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 2201-2210). ACM',
        doi: '10.1145/2556288.2556963',
        type: "conf-full"
    }
]

export const services: IService[] = [
    {
        startYear: 2020,
        org: 'CS-Can|Info-Can',
        title: 'EDI Task Force Member',
        description: 'Assist with data collection to drive increased diversity in Canadian computing and provide consulting about increasing diversity in CS-CAN efforts.'
    },
    {
        startYear: 2021,
        endYear: 2021,
        org: 'ACM CSCW',
        title: 'Student Volunteer',
        description: 'Served as a day captain and worked with a remote team of SVs to facilitate virtual workshops.'
    },
    {
        startYear: 2021,
        endYear: 2021,
        org: 'ACM CHIPLAY',
        title: 'Student Volunteer',
        description: 'Served as a technical moderator, hosting and monitoring Zoom webinars for several conference blocks.'
    },
    {
        startYear: 2021,
        endYear: 2021,
        org: 'ACM SIGCHI',
        title: 'Student Volunteer',
        description: 'Worked with a remote team of SVs to facilitate virtual workshops, demos, and LBW sessions.'
    },
    {
        startYear: 2018,
        endYear: 2020,
        org: 'Computer Science Graduate Council',
        title: 'President',
        description: 'As president of our graduate student committee, organized events including a research poster festival for CS students.'
    },
    {
        startYear: 2019,
        endYear: 2019,
        org: 'CSCW',
        title: 'Student Volunteer',
        description: 'Served as a day captain, assisted with registration, and performed other tasks to contribute to a successful conference.'
    },
    {
        startYear: 2019,
        endYear: 2019,
        org: 'ACM SIGCHI',
        title: 'Live Streaming Co-Chair',
        description: 'As a member of the organizing committee, implemented live streaming for 16 parallel tracks at the CHI conference.'
    },
    {
        startYear: 2018,
        endYear: 2018,
        org: 'ACM SIGCHI',
        title: 'Live Streaming Chair',
        description: 'As a member of the organizing committee, implemented live streaming for 16 parallel tracks at the CHI conference.'
    },
    {
        startYear: 2013,
        endYear: 2018,
        org: 'Digitized',
        title: 'Host & Activity Leader',
        description: 'Hosted university tours and led programming activities for high school students attending \'Digitized\', our annual department outreach day.'
    },
    {
        startYear: 2017,
        endYear: 2018,
        org: 'Industry-Academic Partnerships Working Committee',
        title: 'Member',
        description: 'As a member of the Industry-Academic Partnerships Working Committee, represented the interests of students and the Computer Science department in developing guidelines for ethical and effective industry partnerships at the University of Saskatchewan.'
    },
    {
        startYear: 2016,
        endYear: 2016,
        org: 'ACM IMX',
        title: 'Student Volunteer',
        description: 'Worked with a small team of SVs to facilitate the IMX conference.'
    },
    {
        startYear: 2013,
        endYear: 2014,
        org: 'Sci-Fi Kids Summer Camps',
        title: 'Lab Host',
        description: 'Hosted tours of the HCI lab for children attending science summer camps. Explained and demonstrated research games and software.'
    }
]

export const projects: Project[] = [
    {
        name: "Social Anxiety & Video Chat",
        description: "I'm currently working to understand how Social Anxiety affects people's experiences and conversations in video chat. Our first study in this area revealed that common advice to disable the preview of your own video to reduce anxiety is not actually helpful. In a follow-up, I plan to explore how other interface changes such as screen-sharing or presentation mode interact with social anxiety in video chats.",
        youtubeVideo: {videoID: "tlABcwgMrPo", title: 'Youtube Video Seeing You, Meeting Me: Video Preview'}
    },
    {
        name: "Video Chat with Media Sharing",
        description: "I worked to develop a novel system for synchronously sharing multiple types of online media while video chatting. The system allows people to create groups of friends or family members, asynchronously add media from arbitrary URLs in a group's queue, then view the media synchronously during a video call (see screenshot below). I'm working to understand how this kind of system can support new and existing relationships. In the presentation below, I share findings that show this system is an effective way for new people to get to know each other.",
        youtubeVideo: {videoID: "PNzP-kf-EBw", title: 'Youtube Video Meeting with Media: Comparing Synchronous Media Sharing and Icebreaker Questions in Initial Interactions via Video Chat'},
        image: {src: 'media-sharing.jpg', alt: 'A screenshot of a video chat system. On the left side of the interface, three people\'s video feeds are displayed in a grid. On the right side, a YouTube video is playing.'}
    },
    {
        name: "Feedback in Video Chat",
        description: "In the project, we studied how seeing oneself during video chats can affect their conversations. Observed effects included changes in individual experience (e.g., increased self-awareness) and conversations (e.g., use of task-focused words). We developed guidance for use of video feedback in multiple contexts.",
        youtubeVideo: {videoID: "DDtGuSJV0Vo", title: 'Youtube Video Through the Looking Glass: Video Figure'}
    },
]

export const experiences: Experience[] = [
    {
        startYear: 2022,
        endYear: 2022,
        org: 'Microsoft Research',
        title: 'Research Intern',
        description: 'More to share soon!'
    },
    {
        startYear: 2016,
        endYear: 2022,
        org: 'University of Saskatchewan',
        title: 'Instructor',
        description: 'Instructor for five courses: Human-Computer Interaction (design, implementation, and evaluation of interfaces; 2x), Implementation of Graphical User Interfaces (theory of interfaces, Android and JavaFS interface programming), and Intro to Computer Organization and Architecture (hardware components, assembly and machine language; 2x).'
    },
    {
        startYear: 2021,
        endYear: 2021,
        org: 'Autodesk Research',
        title: 'Research Intern',
        description: 'Led a multi-stage design process for a video-chat collaboration system. Implemented a user study showing the novel system supports awareness of colleagues\' actions.'
    },
    {
        startYear: 2014,
        endYear: 2021,
        org: 'University of Saskatchewan',
        title: 'Teaching Assistant',
        description: 'Taught labs and provided student support for a variety of courses, including human-computer interaction, data structures, web development, and assembly language programming. In 2021, I received a TA of excellence award as a result of student nominations.'
    },
    {
        startYear: 2017,
        endYear: 2017,
        org: 'Microsoft Research',
        title: 'Research Intern',
        description: 'Created software for collecting audio comments on public videos, developed a processing pipeline for audio comments, and conducted a user study of the system.'
    },
    {
        startYear: 2016,
        endYear: 2016,
        org: 'Microsoft Research',
        title: 'Research Intern',
        description: 'Designed and implemented software for scalable text chats in live streams, resulting in a US patent. Conducted a user study and published results at the SIGCHI 2017 conference.'
    },
    {
        startYear: 2015,
        endYear: 2015,
        org: 'University of Saskatchewan',
        title: 'Research Assistant',
        description: 'Developed web-based video chat system and conducted multiple online crowdsourced experiments using the custom chat system. Contributed to development of a synchronous game played over a video chat system.'
    },
    {
        startYear: 2014,
        endYear: 2014,
        org: 'University of Saskatchewan',
        title: 'Research Assistant',
        description: 'Developed physical exertion games for research studies. Contributed to conference papers.'
    },
    {
        startYear: 2013,
        endYear: 2013,
        org: 'University of Saskatchewan',
        title: 'Research Assistant',
        description: 'Developed Kinect games for wheelchair-based interaction. Contributed to development of a synchronous game played over a video chat system.'
    }
]

export const portfolioItems: PortfolioItem[] = [
    {
        name: 'Talk About',
        extendedName: 'A Video Chat Platform with Media Sharing',
        description: 'My experiences hanging out with friends in video calls provided the initial inspiration for this project. This custom video chat platform allows people to collect different kinds of online media (e.g., images, videos, or articles) and view them together while in a video call.',
        images: [
            {
                src: 'media-sharing-queue.jpg',
                alt: 'A screenshot of a media queue. Each media item has a thumbnail. The users\'s own items have bump, preview, and delete buttons while their friends\' items have their thumbnails blurred. A text box at the bottom allows new URLs to be pasted.',
                description: [
                    'People can make different groups on the site and switch between them',
                    'Group video calls can be tough to arrange, so we considered the whole lifecycle of a video call',
                    'Each group has a media queue, even when a call is not active people can add items to the queue by dragging and dropping images, pasting images, or uploading files',
                    'Companion mobile apps allow the user to share items from other apps into their queues'
                ]
            },
            {
                src: 'media-sharing-call.jpg',
                alt: 'A screenshot of a video chat system. On the left side of the interface, three people\'s video feeds are displayed in a grid. On the right side, a YouTube video is playing.',
                description: [
                    'During the call, people can view items from the queue one at a time',
                    'Everything stays synchronized: pressing the up arrow below the current media item switches everyone to the next item and switching images in a gallery or scrubbing in a video bring everyone to the same spot',
                    'People can continue adding items during the call'
                ]
            }
        ]
    },
    {
        name: 'MIPS Reference',
        extendedName: 'An Assembly Language Programming Resource',
        description: 'While teaching, I noticed that students learning MIPS assembly language face challenges including unfamiliar terminology, not knowing what features the language includes, and a lack of comprehensive information sources. Students often struggled to find the right website, textbook chapter, or page of notes to check while working on assignments, so this website is designed to provide a complete and convenient source.',
        images: [
            {
                src: 'mips-home.png',
                alt: 'Screenshot of a webpage with links to the following six topics: instruction types, instructions, syscalls, registers, and guides',
                description: 'The homepage has six categories of information. These are organized by how frequently they are needed while working on assignments.'
            },
            {
                src: 'mips-search.png',
                alt: "Screenshot of a webpage showing a search for the term 'mult' and several results including one labeled exact match.",
                description: [
                    'On other sites, students often use ctrl-f to find the right part of a reference.',
                    "Using ctrl-f can be ineffective (e.g., because the 'copy' instruction is actually called 'move') so MIPS Reference includes a built-in search that uses hand-tuned tags and plain-text descriptions for better results",
                    "An Exact Match feature promotes the correct result when the search term is a valid instruction name"
                ]
            },
            {
                src: 'mips-instruction.png',
                alt: 'Screenshot of a webpage showing how the MIPS Add instruction works. The page uses a table format to number the bits of the instruction from 0 to 31 and give the binary value of each.',
                description: 'The instruction detail page shows how to use an instruction and what to expect. At the bottom of the page, the binary encoding of the instruction is shown in a large layout featuring different type sizes—this is much more readable than a typical pdf or paper reference format.'},
            {
                src: 'mips-syscalls.png',
                alt: 'Screenshot showing a list of possible syscalls such as printing and reading integers or floats on the console. The code for each syscall is highlighted in blue while the input or output registers are shown in pink.',
                description: "The syscalls page includes information on special functionality provided by the operating system. Like the instructions page, each item has a 'See more' link for details. However, the large number shown in blue and the input and output specifications shown in pink surface all the commonly needed information without requiring an additional navigation."
            }
        ],
        link: 'https://millermk.com/mips-reference/'
    }
]