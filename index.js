

const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["ok","Great!", "Alright!", "Okay.", "Sure!"],
    ["thank you","bye"],
    ["what is SciAstra", "tell me about SciAstra", "what do you offer"],
    ["fees", "admissions", "how much does it cost", "enrollment process"],
    ["support", "how can I get more information", "connect with a counselor"],
    ["success stories", "tell me about SciAstra students who succeeded", "journey to success"],
    ["preparation methods", "how to prepare for exams", "study resources"],
    ["subjects", "what subjects are covered", "syllabus details"],
    ["exams", "which exams are the toughest", "tips for cracking exams"],
    ["top institutes", "can I get into top institutes with SciAstra", "success stories"],
    ["free trials", "demo classes", "experience before committing"],
    ["important dates", "exam deadlines", "announcements"],
    ["notifications", "subscribe to SciAstra notifications", "stay updated"],
    ["counselor session", "schedule a session with a counselor", "expert advice"],
    ["future prospects", "career opportunities", "life after exams"],
    ["study groups", "join SciAstra study groups", "collaborative learning"],
    ["feedback", "share feedback about SciAstra", "customer reviews"],
    ["technological support", "online learning tools", "platform features"],
    ["recommendations", "course suggestions", "personalized guidance"],
    ["community", "SciAstra student community", "network with peers"],
    ["scholarship options", "financial assistance", "scholarship programs"],
    ["online enrollment", "offline enrollment", "enrollment options"],
    ["benefits", "advantages of SciAstra", "why choose SciAstra"],
    ["competitions", "participate in SciAstra competitions", "test your knowledge"],
    ["webinars", "attend SciAstra webinars", "knowledge-sharing sessions"],
    ["innovations", "SciAstra teaching methods", "innovative approaches"],
    ["fun facts", "interesting trivia", "did you know"],
    ["science jokes", "tell me a science joke", "humor in learning"],
  ];
  
  const responses = {
    "hi": ["Hello! Welcome to SciAstra", "Hi! Welcome to SciAstra", "Hey! Welcome to SciAstra", "Hi there! Welcome to SciAstra"],
    "what is sciastra": [
        "SciAstra is a leading platform for exam preparation, specializing in courses for IAT, NEST, JEE, NEET, ISI/CMI, and more.",
        "SciAstra is your gateway to success in entrance exams. We offer courses and resources to help you achieve your goals."
    ],
    "ok": ["Great!", "Alright!", "Okay.", "Sure!"],
    "thank you": ["You're welcome! Feel free to come back anytime.", "Glad I could help! If you have more questions, just ask."],
    "sciastra": [
        "SciAstra is a leading platform for exam preparation, specializing in courses for IAT, NEST, JEE, NEET, ISI/CMI, and more.",
        "SciAstra is your gateway to success in entrance exams. We offer courses and resources to help you achieve your goals."
    ],
    "fees": [
        "Find out about the investment in your future. Check current course fees and scholarship options on the SciAstra website.",
        "Enroll in a SciAstra course online or by calling our customer care number."
    ],
    "support": [
        "Need more information? Ask us anything related to exams, courses, or your academic journey.",
        "Connect with a counselor for personalized guidance and support.",
        "Stay updated with SciAstra news! Get notified about important announcements, events, and exam deadlines."
    ],
    "success stories": [
        "Read inspiring stories of SciAstra students who overcame challenges and cracked tough exams.",
        "Discover the journey to success with SciAstra through real-life stories of dedicated students."
    ],
    "preparation methods": [
        "Learn about SciAstra's unique teaching methods and effective study resources.",
        "Explore proven strategies to enhance your exam preparation with SciAstra."
    ],
    "subjects": [
        "Get detailed information about the subjects covered in SciAstra courses.",
        "Explore the syllabus and learning materials for each course offered by SciAstra."
    ],
    "exams": [
        "Find insights into which exams are considered the toughest and how to tackle them.",
        "Get valuable tips for cracking exams and excelling in your academic journey."
    ],
    "top institutes": [
        "Discover success stories of SciAstra students who secured admissions in top institutes.",
        "Understand how SciAstra's guidance can lead you to top research institutes and universities."
    ],
    "free trials": [
        "Experience the quality of SciAstra's teaching with free trials and demo classes.",
        "Get a glimpse of SciAstra's teaching style before committing to a full course."
    ],
    "important dates": [
        "Stay informed about important exam deadlines, announcements, and other crucial dates.",
        "Subscribe to SciAstra notifications to receive timely updates about exams and events."
    ],
    "notifications": [
        "Subscribe to SciAstra notifications to receive important announcements, event details, and exam deadlines.",
        "Stay connected with SciAstra through notifications and never miss out on key information."
    ],
    "counselor session": [
        "Schedule a personalized session with a SciAstra counselor to discuss your goals and get expert advice.",
        "Connect with our counselors for individualized guidance and support in your exam preparation journey."
    ],
    "future prospects": [
        "Explore the potential career opportunities and life after completing your exams with SciAstra.",
        "Understand how SciAstra can shape your future and open doors to exciting possibilities."
    ],
    "study groups": [
        "Join SciAstra study groups for collaborative learning and peer support.",
        "Connect with like-minded peers in SciAstra study groups to enhance your exam preparation."
    ],
    "feedback": [
        "Share your feedback about SciAstra's courses, teaching methods, and overall experience.",
        "Read customer reviews and testimonials to understand the impact of SciAstra on students."
    ],
    "technological support": [
        "Explore the online learning tools and features provided by SciAstra for a seamless educational experience.",
        "Learn about the technological support available on the SciAstra platform for effective online learning."
    ],
    "recommendations": [
        "Get personalized course suggestions and recommendations based on your goals and preferences.",
        "Receive expert guidance and personalized recommendations for SciAstra courses tailored to your needs."
    ],
    "community": [
        "Join the SciAstra student community to network with peers, share experiences, and support each other.",
        "Connect with fellow SciAstra students in a supportive community for shared learning and collaboration."
    ],
    "scholarship options": [
        "Explore scholarship options and financial assistance programs available for SciAstra courses.",
        "Learn about the various scholarship programs designed to support students in their educational journey."
    ],
    "online enrollment": [
        "Enroll in SciAstra courses conveniently through the online enrollment process.",
        "Follow the step-by-step instructions for online enrollment in SciAstra courses."
    ],
    "benefits": [
        "Discover the advantages of choosing SciAstra for your exam preparation journey.",
        "Learn about the benefits of SciAstra, including personalized guidance, innovative methods, and comprehensive courses."
    ],
    "competitions": [
        "Participate in SciAstra competitions to test your knowledge and challenge yourself.",
        "Explore exciting competitions organized by SciAstra to assess your skills and knowledge."
    ],
    "webinars": [
        "Attend SciAstra webinars for knowledge-sharing sessions and valuable insights.",
        "Stay informed and engaged by attending webinars organized by SciAstra on various educational topics."
    ],
    "innovations": [
        "Learn about SciAstra's innovative teaching methods and approaches to enhance your learning experience.",
        "Explore the technological innovations integrated into SciAstra's platform for effective and engaging learning."
    ],
    "fun facts": [
        "Discover interesting and fun facts related to the subjects covered in SciAstra courses.",
        "Enjoy learning with quirky and entertaining facts that make your educational journey enjoyable."
    ],
    "science jokes": [
        "Lighten up your study sessions with science jokes that add humor to your learning experience.",
        "Explore a collection of science jokes that bring a smile to your face while studying with SciAstra."
    ],
  };
  
  
  
  const stopwords = ["a", "an", "the", "is", "are", /* Add more stopwords as needed */];
  let knowledge_base = {
    "what is sciastra": "SciAstra is an online learning platform offering courses in various fields of science.",
    "how do i enroll in a course": "You can enroll in a course by visiting the SciAstra website and following the enrollment process.",
    "how are you": "Thank you for asking! I'm just a computer program, but I'm here and ready to assist you.",
    "courses": {
        "HOMI_BATCH_2025": {
            "duration": "2 years",
            "start_date": "1st August 2023",
            "end_date": "1st August 2025",
            "components": [
                "Live Classes",
                "Study Materials + Notes (High research level)",
                "Level 1 + Level 2 Exercises (Each Chapter)",
                "Regular Mock Test + Doubt Clearing Classes",
                "Monthly, Quarterly test",
                "Private groups for discussion",
                "Full recordings"
            ],
            "mentors": {
                "Physics": "Siddharth Bhatt",
                "Chemistry": "Shruti Gupta",
                "Maths": "Veena",
                "Biology": "Seshasree"
            }
        },
        "VIKRAM_2.0_BATCH_2024": {
            "duration": "1 year",
            "start_date": "11th August 2023",
            "components": [
                "Best course for IISc, IISERS, NISER, etc",
                "Complete Syllabus of 12th",
                "Complete Revision of 11th",
                "Live classes 6 pm to 10 pm (Mon-Friday)",
                "Top mentors from IISc, IISERS, NISER, etc",
                "Best research-level study material",
                "Latest pattern mock Tests",
                "Weekly doubt clearing classes & Interaction",
                "Free Crash Courses at the end for IAT & NEST 2024 worth Rs 5000"
            ],
            "mentors": {
                "Physics": "Abhay Bhaiya",
                "Chemistry": "Parth Joshi Bhaiya",
                "Maths": "Saumya Shisodiya Bhaiya",
                "Biology": "Soubantik Sengupta"
            }
        }
        // Add more courses as needed
    },
    "workshops": {
        "SCIENTIFIC_WRITING": {
            "duration": "4 weeks",
            "start_date": "1st August",
            "topics_covered": [
                "Introduction to scientific writing",
                "Searching & evaluating the topic of research",
                "Grammar & Vocabulary mistakes to avoid",
                "Literature Review for Scientific Papers",
                "How to write introduction of a paper",
                "How to write materials methods & Analyse them",
                "How to write results & discussion",
                "How to write abstract & conclusion",
                "Tools & software"
            ],
            "additional_benefits": [
                "Certificate from SciAstra",
                "How to write emails for internships",
                "How to make an impressive CV",
                "List of scholarships for fully funded internships"
            ],
            "price": "₹1499"
        }
        // Add more workshops as needed
    }
  };
  
  
  // Extended Knowledge Base
  knowledge_base["SCIENTIFIC WRITING"] = "Workshop: SCIENTIFIC_WRITING\nDuration: 4 weeks\nStart Date: 1st August\nTopics Covered: Introduction to scientific writing, Searching & evaluating the topic of research, Grammar & Vocabulary mistakes to avoid, Literature Review for Scientific Papers, How to write introduction of a paper, How to write materials methods & Analyse them, How to write results & discussion, How to write abstract & conclusion, Tools & software\nAdditional Benefits: Certificate from SciAstra, How to write emails for internships, How to make an impressive CV, List of scholarships for fully funded internships\nPrice: ₹1499";
  knowledge_base["workshop"] = "Workshop: SCIENTIFIC_WRITING\nDuration: 4 weeks\nStart Date: 1st August\nTopics Covered: Introduction to scientific writing, Searching & evaluating the topic of research, Grammar & Vocabulary mistakes to avoid, Literature Review for Scientific Papers, How to write introduction of a paper, How to write materials methods & Analyse them, How to write results & discussion, How to write abstract & conclusion, Tools & software\nAdditional Benefits: Certificate from SciAstra, How to write emails for internships, How to make an impressive CV, List of scholarships for fully funded internships\nPrice: ₹1499";
  
  knowledge_base["HOMI"] = "Course: HOMI_BATCH_2025\nDuration: 2 years\nStart Date: 1st August 2023\nEnd Date: 1st August 2025\nComponents: Live Classes, Study Materials + Notes (High research level), Level 1 + Level 2 Exercises (Each Chapter), Regular Mock Test + Doubt Clearing Classes, Monthly, Quarterly test, Private groups for discussion, Full recordings\nMentors: Physics: Siddharth Bhatt, Chemistry: Shruti Gupta, Maths: Veena, Biology: Seshasree";
  
  knowledge_base["VIKRAM 2.0"] = "Course: VIKRAM_2.0_BATCH_2024\nDuration: 1 year\nStart Date: 11th August 2023\nComponents: Best course for IISc, IISERS, NISER, etc, Complete Syllabus of 12th, Complete Revision of 11th, Live classes 6 pm to 10 pm (Mon-Friday), Top mentors from IISc, IISERS, NISER, etc, Best research-level study material, Latest pattern mock Tests, Weekly doubt clearing classes & Interaction, Free Crash Courses at the end for IAT & NEST 2024 worth Rs 5000\nMentors: Physics: Abhay Bhaiya, Chemistry: Parth Joshi Bhaiya, Maths: Saumya Shisodiya Bhaiya, Biology: Soubantik Sengupta";
  
  knowledge_base["iiser"] = "Indian Institutes of Science Education and Research (IISERs) are premier science education and research institutions in India. There are a total of 7 IISERs across the country.";
  knowledge_base["iiser pune"] = "IISER Pune offers BS-MS, MSc, and PhD programs in Biology, Chemistry, Earth & Climate Science, HSS, Mathematics, and Physics.";
  knowledge_base["iiser mohali"] = "IISER Mohali provides BS-MS and Integrated PhD programs in Physical Sciences, Biological Sciences, Earth & Environmental Sciences, Humanities & Social Sciences, Chemical Sciences, and Mathematical Sciences.";
  knowledge_base["iiser kolkata"] = "IISER Kolkata offers BS-MS, MS in Space Physics, and PhD programs in various departments like Biological Sciences, Chemical Sciences, Earth Sciences, Mathematics and Statistics, and Physical Sciences.";
  knowledge_base["iiser tvm"] = "IISER Thiruvananthapuram provides BS-MS, MS, and PhD programs in Biology, Chemistry, Physics, Mathematics, and Data Sciences.";
  knowledge_base["iiser bhopal"] = "IISER Bhopal offers BS-MS, MSc, and Integrated PhD programs in Biological Sciences, Chemistry, Earth & Environmental Sciences, Mathematics, Physics, Chemical Engineering, Data Science & Engineering, Electrical Engineering & Computer Science, Economic Sciences, and Humanities & Social Sciences.";
  knowledge_base["iiser tirupati"] = "IISER Tirupati provides BS-MS and PhD programs in Biology, Chemistry, Earth and Climate Science, Mathematics, Physics, and Humanities and Social Science.";
  knowledge_base["iiser berhampur"] = "IISER Berhampur offers BS-MS programs in Biological Sciences, Mathematical Sciences, Physical Sciences, and Chemical Sciences. It also provides PhD programs in these disciplines.";
  knowledge_base["iiser seats"] = "The total number of seats across all IISERs is 1718. Each IISER has its specific number of seats, ranging from 170 to 320.";
  knowledge_base["iiser fees"] = "For the fees structure of IISERs, you can visit [SciAstra Fees Structure in IISERs](https://www.sciastra.com/blog/fees-structure-in-iisers/).";
  knowledge_base["iiser scholarships"] = "IISERs provide scholarships, including the Inspire scholarship of ₹5000 for students ranking in the top 1% in their Intermediate board exams.";
  knowledge_base["iiser placements"] = "IISER graduates have excellent placement opportunities in academia and industry. They receive Ph.D. offers from renowned global universities and research institutes. Industrial placements are also available, with companies like TCS recruiting for data science roles.";
  knowledge_base["iiser future scope"] = "IISER alumni have diverse career paths, including pursuing Ph.D., working in top-rated companies post-MBA, and entering government services like IAS, IPS, and IFoS. They excel in science-related fields such as research, teaching, science policy, data analysis, and more.";
  
  // Placements and Future Scope for IISERs
  knowledge_base["iiser placements and future scope"] = "IISERs and NISER attract top minds of the country. Many students who also switch their field clear the CAT examination post their BS-MS and go to IIMs like IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, etc., to pursue their MBA. Coming from a basic science background, they bring diversity, so they get calls from all these IIMs at a lower score as compared to Engineering graduates. The Alumni of IISERs and NISER are also at the top-rated companies post MBA and with starting packages from 20-30 Lakhs per annum. Students also have the option to go for preparing for government exams, and the Alumni of IISERs and NISER have also become IAS, IPS, IFoS, and are at various prestigious positions. Science-related fields include Research and development in academia or industry, Teaching and education, Science policy and administration, Science journalism and communication, Data analysis and data science, Environmental science and conservation, Biotechnology and pharmaceuticals.";
  
  // Admission Process for NISER
  knowledge_base["niser admission process"] = "Admissions to NISER for the Integrated 5-year M.Sc. Programmes are conducted via the National Entrance Screening Test (NEST), a pan-India test jointly conducted by NISER and CEBS, Mumbai. More details can be found on the NEST website: [NEST Exam](https://www.nestexam.in/).";
  
  // Additional Information for ISI
  knowledge_base["isi eligibility criteria"] = "To be eligible for ISI, an applicant must have successfully completed 10+2 years of Higher Secondary Education (or its equivalent) with Mathematics and English as subjects.";
  knowledge_base["isi admission process"] = "Admission to ISI is through the ISI exam conducted by the institute.";
  
  // Scholarships for CMI
  knowledge_base["cmi scholarships"] = "CMI provides merit-based scholarships with a full tuition fees waiver plus ₹5000 per month. Financial-condition-based scholarships offer a 50% or 100% waiver on tuition fees. The eligibility of a student to receive scholarships and fellowships will be reviewed every semester and will depend on satisfactory academic performance.";
  
  // Function to process user input and generate response
  // Function to process user input and generate response
  
  function chatbotResponse(userInput) {
      // Tokenize user input using compromise.js
      const tokens = nlp(userInput.toLowerCase()).terms().out('array');
  
      // Remove stopwords
      const filteredTokens = tokens.filter(token => !stopwords.includes(token));
  
      // Check if the user input matches any of the prompts
      for (const promptSet of prompts) {
          for (const prompt of promptSet) {
              if (userInput.toLowerCase().includes(prompt)) {
                  // If a match is found, return a random response from the corresponding set of responses
                  const responsesForPrompt = responses[prompt];
                  return responsesForPrompt[Math.floor(Math.random() * responsesForPrompt.length)];
              }
          }
      }
  
      // If no match is found with the prompts, proceed to check the knowledge base
      // Check if any knowledge base entry matches user input
      let bestMatchKey = '';
      let maxOverlap = 0;
  
      for (const key in knowledge_base) {
          const keyTokens = nlp(key.toLowerCase()).terms().out('array');
          const overlap = filteredTokens.filter(token => keyTokens.includes(token)).length;
          if (overlap > maxOverlap) {
              maxOverlap = overlap;
              bestMatchKey = key;
          }
      }
  
      // If a match is found, return the corresponding response; otherwise, check for courses or workshops
      if (maxOverlap > 0) {
          return knowledge_base[bestMatchKey];
      }
  
      // If no courses or workshops were found, return a default response
  }
  
  // Function to append a message to the chat interface
  function appendMessage(message, sender) {
    const messagesContainer = document.getElementById("messages");
  
    // Create message container
    const messageContainer = document.createElement("div");
   
    messageContainer.className = "message-container";
    messageContainer.id = sender === "user" ? "user" : "bot";
  
    // Create message element
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.innerHTML = `<span>${message}</span>`;
  
    // Append message element to message container
    messageContainer.appendChild(messageElement);
  
    // Append message container to messages container
    messagesContainer.appendChild(messageContainer);
  
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  

  let conversationInitiated = false;
 // Declare variables outside the function
let name1 = "";
let email = "";
let phone = "";
let course = "";

function initiateConversation() {
    const greeting = "Hello! Welcome to SciAstra! To personalize your experience, could you please share your name with us?";
    appendMessage(greeting, "bot");

    let askingFor = "name1"; 
    const inputField = document.getElementById("input");

    const inputEventListener = function(event) {
        if (event.key === "Enter") {
            const userInput = inputField.value.trim();
            appendMessage(userInput, "userDiv");

            switch (askingFor) {
                case "name1":
                    name1= userInput;
                    appendMessage(`Thank you, ${userInput}! To ensure seamless communication, may we kindly request your mobile number?`, "bot");
                    askingFor = "mobile";
                    break;
                case "mobile":
                    phone = userInput;
                    appendMessage(`In order to keep you informed about the latest updates and offerings, could you please share your email address with us?`, "bot");
                    askingFor = "email";
                    break;
                case "email":
                    email = userInput;
                    appendMessage(`Before we proceed, let me know which exams you are preparing for`, "bot");
                    createExamOptions();
                    askingFor = "exam";
                    break;
                case "exam":
                    course = userInput; 
                    recommendCourses();
                    askingFor = "done";
                    break;
                case "done":
                    appendMessage(`Do you have any specific queries?`, "bot");
                    conversationInitiated = true;
                    inputField.removeEventListener("keydown", inputEventListener);
                    break;
            }

            inputField.value = "";
        }
    };

    inputField.addEventListener("keydown", inputEventListener);

    // Form submission outside the keydown event listener
    if (askingFor === "done") {
        const formData = new FormData();
        formData.append('name1', name1);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('course', course);

        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Define what happens on successful data submission
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Form submitted successfully!');
                // Optionally, do something here after successful submission
            } else {
                console.error('Request failed:', xhr.statusText);
            }
        };

        // Define what happens in case of an error
        xhr.onerror = function() {
            console.error('Request failed');
        };

        // Open a connection to the server
        xhr.open('POST', 'processform.php');

        // Send the request
        xhr.send(formData);
    }
}


function createExamOptions() {
    const examOptionsDiv = document.createElement("div");
    examOptionsDiv.id = "exam-options";
    
    const exams = ["IAT", "NEST", "ISI_CMI", "UPST"];
    exams.forEach(exam => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = exam;
        checkbox.name = "exam";
        checkbox.value = exam;
        
        const label = document.createElement("label");
        label.htmlFor = exam;
        label.textContent = exam;

        examOptionsDiv.appendChild(checkbox);
        examOptionsDiv.appendChild(label);
        examOptionsDiv.appendChild(document.createElement("br"));
    });

    const messagesDiv = document.getElementById("messages");
    messagesDiv.appendChild(examOptionsDiv);
    
}

function recommendCourses() {
    const exams = document.querySelectorAll('input[name="exam"]:checked');
    let selectedExams = new Set(); // Using a Set to store unique exam names
    exams.forEach(exam => {
        if (!selectedExams.has(exam.value)) { // Check if the set does not already contain the exam name
            selectedExams.add(exam.value);
        }
    });

    let recommendationsMessage = "";
    selectedExams.forEach(exam => {
        let recommendations = []; // Move the declaration inside the loop
        switch (exam) {
            case "IAT":
                recommendations = recommendations.concat(["VIKRAM 2.0", "VIKRAM", "HOMI"]);
                break;
            case "NEST":
                recommendations = recommendations.concat(["VIKRAM 2.0", "VIKRAM", "HOMI"]);
                break;
            case "ISI_CMI":
                recommendations.push("ISI & CMI 2024");
                break;
            case "UPST":
                recommendations = recommendations.concat(["VIKRAM 2.0", "VIKRAM", "HOMI"]);
                break;
        }

        if (recommendations.length > 0) {
            recommendationsMessage += `Being the premier platform in India for preparing for esteemed research entrance exams such as IAT, NEST, ISI, CMI, and more, we understand the significance of your preparation journey. Considering your focus on ${exam}, we highly recommend exploring our curated courses, including ${recommendations.join(", ")}. These courses are meticulously designed to provide you with the necessary tools and knowledge to excel in your chosen field.`;
        }
    });

    if (recommendationsMessage) {
        appendMessage(recommendationsMessage, "bot");
        askingFor = "done"; // Update askingFor to "done" after recommendations are provided
    } else {
        appendMessage("No recommendations available for the selected exams.", "bot");
    }
}

window.onload = initiateConversation;

function processInput() {
    const inputField = document.getElementById("input");
    const userInput = inputField.value.trim();
    if (!conversationInitiated) {
        return; // Exit if conversation is not initiated
    }
    if (userInput === "") {
      return;
    }
  
    // Append user message to the chat interface
    appendMessage(userInput, "userDiv");
  
    const response = chatbotResponse(userInput);
  
    // Append bot response to the chat interface
    appendMessage(response, "bot");
  
    inputField.value = "";
  
    // Optionally, you might want to scroll after appending the bot message as well
    // This ensures that the latest message (bot's response) is always visible
    const messagesContainer = document.getElementById("messages");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  

  
 
  document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      processInput();
    }
  });