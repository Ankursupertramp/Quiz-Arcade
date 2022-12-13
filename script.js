
    const quizData =[
   {
      question: "Popular GTA games like GTA5 and GTA SA contain a parody version of which fashion magazine?",
      a: "Cosmopolitan",
      b : "Vogue",
      c : "ELLE",
      d: "W",
      correct : "b",
      },
   
      {
      question : "Which video game antagonist became a meme on Tiktok in 2021 due to its resemblance with a girl's face?",
      
      a : "Lance Vance",
      b : "Kefka",
      c : "Bloody Mary",
      d : "Thwomp",
      correct : "d"
      
      },
      {
      question : "This rumored character in Minecraft looks like Steve and is known for spooking players out. Who is this spooky guy?",
      
      a : "Herobrine",
      b : "Barbarian King",
      c : "EnderWorm",
      d : "Shulker",
      correct : "a"
      },
      {
       question : "Name the special spell in Clash of Clans released in Christmas of 2012.",
         
         a : "Santa Spell",
         b : "X-Mas Spell",
         c : "Ultra-freeze Spell",
         d : "Snow Spell",
         correct : "a"
         },
     {
      question : "Name the main character in Human Fall Flat.",
            
            a : "Rob",
            b : "Bro",
            c : "Bob",
            d : "Ally",
            correct : "c"
      },
      {
         question : "Which roblox game makes the most money as of 2022?",
               
               a : "Livetopia",
               b : "Work at a Pizza Place",
               c : "Adopt Me",
               d : "Paintball",
               correct : "c"
         },
         {
            question : "Alien Party is only unlocked at Level __ of Science Career in SIMS 4.",
                  
                  a : "7",
                  b : "10",
                  c : "15",
                  d : "25",
                  correct : "b"
            },
         {
             question : "Which A-List celebrity voiced for Call of Duty:Ghosts?",
                     
                     a : "Mariah Carey",
                     b : "Brandon Routh",
                     c : "Robert Pattinson",
                     d : "Ariana Grande",
                     correct : "b"
          },
          {
            question : "How many awards did Candy Crush Saga get till date?",
                    
                    a : "4",
                    b : "7",
                    c : "2",
                    d : "5",
                    correct : "c"
         },
         {
            question : "Name the first limited character ever created in Subway Surfers?",
                    
                    a : "Zombie Jake",
                    b : "Santa Jake",
                    c : "Rockstar Jake",
                    d : "Yeti Jake",
                    correct : "a"
         }
   
      ] ;
   
   const quiz = document.getElementById('quiz')
   const answerEls = document.querySelectorAll('.answer')
   const questionE1 = document.getElementById('question')
   const a_text= document.getElementById('a_text')
   
   const b_text = document.getElementById('b_text')
   const c_text = document.getElementById('c_text')
   const d_text = document.getElementById('d_text')
   
   const submitBtn = document.getElementById('submit')
   const nextBtn = document.getElementById('next')

   
   let currentQuiz = 0
   let score = 0
   let core =0
     
   
   loadQuiz()
   
   function loadQuiz() {
   
      deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   
   questionE1.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
   
   
   }
   
   function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false)
   }
   function getSelected() {
     let answer
     answerEls.forEach(answerEl => {
      if( answerEl.checked) {
                answer = answerEl.id
             }
     })
     return answer
   
   }
   submitBtn.addEventListener('click', () => {
      corr = document.querySelector('.corr');
      inco = document.querySelector('.inco');
     
      
       const answer = getSelected()
       if(answer) {
          if(answer === quizData[currentQuiz].correct) {
            
             score+=1;
            updateScore(score);
            
          }
        
          
          
          else{

             core+=1
             updateCore(core);

          }
   
         
       }
   })

   nextBtn.addEventListener('click', () => {
  

         currentQuiz++
       if(currentQuiz < quizData.length) {
         loadQuiz()
     }
        
   })
   function updateScore(score){
      scoreCount.innerHTML = "Right: "+ score
    
    }
    function updateCore(core){
      scoreCCount.innerHTML = "Wrong: "+ core
    
    }
