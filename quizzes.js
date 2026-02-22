const quizzes = {
  kids: [
    {
      question: 'What planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: '2 + 2 = ?',
      options: ['3','4','5','6'],
      answer: 1,
      badge: 'Math Master'
    },
    {
      question: 'Which animal is the fastest land animal?',
      options: ['Lion', 'Cheetah', 'Horse', 'Gazelle'],
      answer: 1,
      badge: 'Nature Nerd'
    },
    {
      question: 'How many continents are there?',
      options: ['5', '6', '7', '8'],
      answer: 2,
      badge: 'Geography Guru'
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      answer: 3,
      badge: 'Ocean Explorer'
    },
    {
      question: '10 - 3 = ?',
      options: ['6', '7', '8', '9'],
      answer: 1,
      badge: 'Math Master'
    },
    {
      question: 'What color is the sky on a clear day?',
      options: ['Red', 'Green', 'Blue', 'Yellow'],
      answer: 2,
      badge: 'Colors Expert'
    },
    {
      question: 'Which fruit is yellow and has a peel?',
      options: ['Apple', 'Banana', 'Orange', 'Grape'],
      answer: 1,
      badge: 'Food Master'
    },
    {
      question: 'How many legs does a spider have?',
      options: ['4', '6', '8', '10'],
      answer: 2,
      badge: 'Insect Expert'
    },
    {
      question: 'What do plants need to grow?',
      options: ['Water', 'Sunlight', 'Both', 'Air only'],
      answer: 2,
      badge: 'Plant Scientist'
    },
    {
      question: '5 + 5 = ?',
      options: ['8', '9', '10', '11'],
      answer: 2,
      badge: 'Math Master'
    },
    {
      question: 'Which gas do we breathe?',
      options: ['Hydrogen', 'Oxygen', 'Nitrogen', 'Carbon'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: 'How many sides does a triangle have?',
      options: ['2', '3', '4', '5'],
      answer: 1,
      badge: 'Geometry Guru'
    },
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
      answer: 1,
      badge: 'Geography Guru'
    },
    {
      question: 'Which is the smallest mammal?',
      options: ['Shrew', 'Bat', 'Mouse', 'Squirrel'],
      answer: 1,
      badge: 'Nature Nerd'
    },
    {
      question: '15 ÷ 3 = ?',
      options: ['3', '4', '5', '6'],
      answer: 2,
      badge: 'Math Master'
    },
    {
      question: 'What do bees produce?',
      options: ['Milk', 'Honey', 'Oil', 'Wax only'],
      answer: 1,
      badge: 'Insects Expert'
    },
    {
      question: 'How many days are in a week?',
      options: ['5', '6', '7', '8'],
      answer: 2,
      badge: 'Time Keeper'
    },
    {
      question: 'Which is the largest land animal?',
      options: ['Rhinoceros', 'Hippopotamus', 'Elephant', 'Giraffe'],
      answer: 2,
      badge: 'Animal Lover'
    },
    {
      question: 'What color represents peace?',
      options: ['Red', 'White', 'Green', 'Blue'],
      answer: 1,
      badge: 'Colors Expert'
    },
    {
      question: 'How many months are in a year?',
      options: ['10', '11', '12', '13'],
      answer: 2,
      badge: 'Time Keeper'
    }
  ],
  women: [
    {
      question: 'Who was Marie Curie?',
      options: ['Physicist', 'Painter', 'Singer', 'Explorer'],
      answer: 0,
      badge: 'Science Star'
    },
    {
      question: 'What is the importance of women education?',
      options: ['Entertainment', 'Empowerment', 'Decoration', 'Fashion'],
      answer: 1,
      badge: 'Education Champion'
    },
    {
      question: 'Which woman was the first to receive a Nobel Prize?',
      options: ['Jane Austen', 'Marie Curie', 'Florence Nightingale', 'Amelia Earhart'],
      answer: 1,
      badge: 'Women Achiever'
    },
    {
      question: 'What does financial independence mean for women?',
      options: ['Dependency', 'Self-reliance', 'Isolation', 'Competition'],
      answer: 1,
      badge: 'Finance Expert'
    },
    {
      question: 'Who was Florence Nightingale?',
      options: ['Teacher', 'Nurse', 'Chef', 'Architect'],
      answer: 1,
      badge: 'Health Hero'
    },
    {
      question: 'What is the right age for women to start learning skills?',
      options: ['25 years', 'Never too early or late', '40 years', 'Only childhood'],
      answer: 1,
      badge: 'Learning Advocate'
    },
    {
      question: 'Which country first gave women the right to vote?',
      options: ['USA', 'Britain', 'New Zealand', 'France'],
      answer: 2,
      badge: 'History Master'
    },
    {
      question: 'What is the key to women empowerment?',
      options: ['Wealth', 'Education', 'Beauty', 'Marriage'],
      answer: 1,
      badge: 'Empowerment Expert'
    },
    {
      question: 'Who was Indira Gandhi?',
      options: ['Artist', 'Prime Minister', 'Doctor', 'Athlete'],
      answer: 1,
      badge: 'Political Expert'
    },
    {
      question: 'What skill helps women in rural areas earn income?',
      options: ['Only farming', 'Multiple skills', 'Only housework', 'Only crafts'],
      answer: 1,
      badge: 'Skill Builder'
    },
    {
      question: 'What percentage of the world population are women?',
      options: ['40%', '45%', '50%', '55%'],
      answer: 2,
      badge: 'Statistics Master'
    },
    {
      question: 'Who was Helen Keller?',
      options: ['Deaf-blind author', 'Painter', 'Chef', 'Athlete'],
      answer: 0,
      badge: 'Inspiration Icon'
    },
    {
      question: 'What is digital literacy important for women?',
      options: ['Entertainment', 'Empowerment & opportunities', 'Decoration', 'Gaming'],
      answer: 1,
      badge: 'Tech Expert'
    },
    {
      question: 'Who was Malala Yousafzai?',
      options: ['Singer', 'Education activist', 'Chef', 'Dancer'],
      answer: 1,
      badge: 'Human Rights Champion'
    },
    {
      question: 'What is workplace equality about?',
      options: ['Same pay for same work', 'Special treatment', 'Different roles', 'Less responsibility'],
      answer: 0,
      badge: 'Equality Champion'
    },
    {
      question: 'What does reproductive health include?',
      options: ['Only pregnancy', 'Overall wellness', 'Only medicine', 'Only age'],
      answer: 1,
      badge: 'Health Expert'
    },
    {
      question: 'Who was Joan of Arc?',
      options: ['Baker', 'Military leader', 'Farmer', 'Teacher'],
      answer: 1,
      badge: 'History Master'
    },
    {
      question: 'What is self-confidence in women?',
      options: ['Arrogance', 'Belief in self-worth', 'Shyness', 'Loneliness'],
      answer: 1,
      badge: 'Confidence Builder'
    },
    {
      question: 'Why is mentoring important for women?',
      options: ['Waste of time', 'Guidance & growth', 'Only for men', 'Not necessary'],
      answer: 1,
      badge: 'Mentorship Master'
    },
    {
      question: 'What is the gender wage gap?',
      options: ['Equal pay', 'Women earning less', 'Only fiction', 'Not relevant'],
      answer: 1,
      badge: 'Social Expert'
    },
    {
      question: 'Who was Rosa Parks?',
      options: ['Singer', 'Civil rights activist', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Civil Rights Champion'
    }
  ],
  men: [
    {
      question: 'Who discovered gravity?',
      options: ['Galileo', 'Newton', 'Edison', 'Tesla'],
      answer: 1,
      badge: 'GK Guru'
    },
    {
      question: 'What is important for men health?',
      options: ['Only exercise', 'Balanced lifestyle', 'Only diet', 'Only rest'],
      answer: 1,
      badge: 'Health Hero'
    },
    {
      question: 'Who was Thomas Edison?',
      options: ['Scientist', 'Inventor', 'Painter', 'Chef'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: 'What is proactive fatherhood?',
      options: ['Passive role', 'Active participation', 'Earning only', 'Authority only'],
      answer: 1,
      badge: 'Family Champion'
    },
    {
      question: 'Who invented the telephone?',
      options: ['Edison', 'Graham Bell', 'Tesla', 'Newton'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: 'What percentage of Indian farmers are men?',
      options: ['40%', '60%', '80%', '95%'],
      answer: 2,
      badge: 'Agriculture Expert'
    },
    {
      question: 'Who was Nikola Tesla?',
      options: ['Painter', 'Engineer', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Innovation Expert'
    },
    {
      question: 'What is mental health awareness?',
      options: ['Weakness', 'Self-care practice', 'Only for women', 'Not needed'],
      answer: 1,
      badge: 'Mental Health Champion'
    },
    {
      question: 'Who was Ramakrishna Paramahamsa?',
      options: ['Scientist', 'Spiritual leader', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Philosophy Master'
    },
    {
      question: 'What is financial responsibility?',
      options: ['Wealth accumulation', 'Smart planning & support', 'Only earning', 'Only spending'],
      answer: 1,
      badge: 'Finance Expert'
    },
    {
      question: 'Who was Albert Einstein?',
      options: ['Painter', 'Physicist', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: 'What is gender equality at home?',
      options: ['Unusual', 'Shared responsibilities', 'Only men\'s work', 'Only women\'s work'],
      answer: 1,
      badge: 'Equality Champion'
    },
    {
      question: 'Who discovered penicillin?',
      options: ['Pasteur', 'Fleming', 'Koch', 'Lister'],
      answer: 1,
      badge: 'Medical Expert'
    },
    {
      question: 'What is work-life balance?',
      options: ['Only work', 'Harmony between both', 'Only family', 'Impossible'],
      answer: 1,
      badge: 'Balance Master'
    },
    {
      question: 'Who was Stephen Hawking?',
      options: ['Novelist', 'Physicist', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Science Star'
    },
    {
      question: 'What is modern agriculture?',
      options: ['Only traditional', 'Tech-enabled farming', 'Only manual', 'No science'],
      answer: 1,
      badge: 'Agri-Tech Expert'
    },
    {
      question: 'Who was Mahatma Gandhi?',
      options: ['Warrior', 'Non-violence leader', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'History Master'
    },
    {
      question: 'What is entrepreneurship?',
      options: ['Only for rich', 'Creating opportunities', 'Only investing', 'Risk-free'],
      answer: 1,
      badge: 'Entrepreneur Champion'
    },
    {
      question: 'Who was Pandit Jawaharlal Nehru?',
      options: ['Scientist', 'Prime Minister', 'Chef', 'Athlete'],
      answer: 1,
      badge: 'Political Expert'
    },
    {
      question: 'What is organic farming?',
      options: ['Expensive only', 'Chemical-free', 'Not productive', 'Only tradition'],
      answer: 1,
      badge: 'Farming Expert'
    },
    {
      question: 'What is digital skills for farmers?',
      options: ['Unnecessary', 'Essential for modern farming', 'Only for youth', 'Complicated'],
      answer: 1,
      badge: 'Tech-Farmer Expert'
    }
  ],
  health: [
    {
      question: 'What is a healthy heart rate range for adults?',
      options: ['40-60', '60-100', '100-140', '140+'],
      answer: 1,
      badge: 'Health Hero'
    },
    {
      question: 'How many hours of sleep should an adult get?',
      options: ['4-5', '6-7', '7-8', '9-10'],
      answer: 2,
      badge: 'Sleep Expert'
    },
    {
      question: 'What is the recommended daily water intake?',
      options: ['2 liters', '4 liters', '8 liters', '10 liters'],
      answer: 2,
      badge: 'Hydration Expert'
    },
    {
      question: 'Which vitamin is essential for bone health?',
      options: ['Vitamin A', 'Vitamin D', 'Vitamin C', 'Vitamin B'],
      answer: 1,
      badge: 'Nutrition Expert'
    },
    {
      question: 'What does BMI stand for?',
      options: ['Body Mass Index', 'Basic Medical Info', 'Biological Math Indicator', 'Body Motion Index'],
      answer: 0,
      badge: 'Health Scientist'
    },
    {
      question: 'How many minutes of exercise per week is recommended?',
      options: ['75 minutes', '150 minutes', '200 minutes', '300 minutes'],
      answer: 1,
      badge: 'Fitness Expert'
    },
    {
      question: 'What is the normal blood pressure range?',
      options: ['90/60', '120/80', '140/90', '160/100'],
      answer: 1,
      badge: 'Medical Expert'
    },
    {
      question: 'Which food is rich in protein?',
      options: ['Rice', 'Eggs', 'Bread', 'Sugar'],
      answer: 1,
      badge: 'Nutrition Expert'
    },
    {
      question: 'What is mental health?',
      options: ['No sadness', 'Overall well-being', 'Only happiness', 'Not important'],
      answer: 1,
      badge: 'Mental Health Champion'
    },
    {
      question: 'What causes diabetes?',
      options: ['Only sugar', 'Multiple factors', 'Only age', 'Only stress'],
      answer: 1,
      badge: 'Disease Expert'
    },
    {
      question: 'Which organ pumps blood?',
      options: ['Brain', 'Heart', 'Lungs', 'Liver'],
      answer: 1,
      badge: 'Anatomy Expert'
    },
    {
      question: 'What is vaccination?',
      options: ['Medication', 'Disease prevention', 'Only injection', 'Optional'],
      answer: 1,
      badge: 'Immunity Expert'
    },
    {
      question: 'How many bones does an adult have?',
      options: ['150', '186', '206', '250'],
      answer: 2,
      badge: 'Anatomy Expert'
    },
    {
      question: 'What is hygiene?',
      options: ['Cleanliness', 'Health practices', 'Both', 'Only bathing'],
      answer: 2,
      badge: 'Hygiene Expert'
    },
    {
      question: 'What causes obesity?',
      options: ['Only food', 'Lifestyle factors', 'Only genetics', 'Only age'],
      answer: 1,
      badge: 'Health Coach'
    },
    {
      question: 'What is cholesterol?',
      options: ['Always bad', 'Fat in blood', 'Good & bad types', 'Only from diet'],
      answer: 2,
      badge: 'Health Expert'
    },
    {
      question: 'What is the leading cause of death globally?',
      options: ['Cancer', 'Accidents', 'Heart disease', 'Infections'],
      answer: 2,
      badge: 'Public Health Expert'
    },
    {
      question: 'What is immunity?',
      options: ['No sickness', 'Body defense system', 'Only medicine', 'Only age'],
      answer: 1,
      badge: 'Immunity Expert'
    },
    {
      question: 'What is stress management?',
      options: ['Avoiding stress', 'Handling stress well', 'Only yoga', 'Only medicine'],
      answer: 1,
      badge: 'Wellness Expert'
    },
    {
      question: 'What is healthy diet?',
      options: ['No food', 'Balanced nutrition', 'Only vegetables', 'Only fruits'],
      answer: 1,
      badge: 'Nutrition Master'
    },
    {
      question: 'How does exercise benefit health?',
      options: ['Only strength', 'Multiple benefits', 'Only cardio', 'Only muscles'],
      answer: 1,
      badge: 'Fitness Master'
    }
  ],
  resources: [
    {
      question: 'Where can you find public domain educational videos?',
      options: ['YouTube Education', 'Random blogs', 'Unknown sites', 'Spam'],
      answer: 0,
      badge: 'GK Guru'
    },
    {
      question: 'What is open educational resources (OER)?',
      options: ['Paid content', 'Free & licensed content', 'Only videos', 'Only books'],
      answer: 1,
      badge: 'Learning Expert'
    },
    {
      question: 'Which platform offers free online courses?',
      options: ['Coursera', 'edX', 'Khan Academy', 'All of above'],
      answer: 3,
      badge: 'Course Master'
    },
    {
      question: 'What is digital literacy?',
      options: ['Only reading', 'Using digital tools', 'Only coding', 'Computer repair'],
      answer: 1,
      badge: 'Tech Expert'
    },
    {
      question: 'Where can you find research papers?',
      options: ['Google Scholar', 'Wikipedia', 'Facebook', 'News sites'],
      answer: 0,
      badge: 'Research Expert'
    },
    {
      question: 'What is Wikipedia?',
      options: ['Encyclopedia', 'Online community', 'Both', 'Social media'],
      answer: 2,
      badge: 'Knowledge Expert'
    },
    {
      question: 'What is a podcast?',
      options: ['Video only', 'Audio content', 'Text only', 'Music only'],
      answer: 1,
      badge: 'Media Expert'
    },
    {
      question: 'How can you access library resources online?',
      options: ['Only physical', 'Digital databases', 'Paid only', 'Not possible'],
      answer: 1,
      badge: 'Library Expert'
    },
    {
      question: 'What is an MOOCs?',
      options: ['Massive Open Online Courses', 'Monthly Online', 'Mobile Oriented', 'Modern Online'],
      answer: 0,
      badge: 'Education Expert'
    },
    {
      question: 'Where can you learn coding?',
      options: ['Only university', 'Multiple platforms', 'Only offline', 'Only books'],
      answer: 1,
      badge: 'Coding Expert'
    },
    {
      question: 'What is e-learning?',
      options: ['Learning online', 'Only video', 'Only text', 'Expensive'],
      answer: 0,
      badge: 'E-Learning Master'
    },
    {
      question: 'Which is a free learning platform?',
      options: ['Udemy paid', 'Khan Academy', 'LinkedIn paid', 'Masterclass paid'],
      answer: 1,
      badge: 'Learning Resource Master'
    },
    {
      question: 'What is YouTube Learning?',
      options: ['Entertainment', 'Educational content', 'Only music', 'Only gaming'],
      answer: 1,
      badge: 'Video Learning Expert'
    },
    {
      question: 'How can internet help in rural education?',
      options: ['Cannot help', 'Access to resources', 'Only distraction', 'Expensive'],
      answer: 1,
      badge: 'Rural Education Champion'
    },
    {
      question: 'What is digital divide?',
      options: ['Internet split', 'Access inequality', 'Only age gap', 'Gender gap'],
      answer: 1,
      badge: 'Digital Justice Expert'
    },
    {
      question: 'Where can you find government educational resources?',
      options: ['Random sites', 'Official gov portals', 'Social media', 'Private only'],
      answer: 1,
      badge: 'Government Resource Expert'
    },
    {
      question: 'What is online certification?',
      options: ['Fake', 'Recognized credential', 'No value', 'Only premium'],
      answer: 1,
      badge: 'Certification Expert'
    },
    {
      question: 'Which skill is important in digital age?',
      options: ['Only manual', 'Digital literacy', 'Only memory', 'Only reading'],
      answer: 1,
      badge: 'Skills Expert'
    },
    {
      question: 'How to verify reliable online sources?',
      options: ['Any website', 'Check credibility', 'Don\'t verify', 'Only Wikipedia'],
      answer: 1,
      badge: 'Information Literacy Expert'
    },
    {
      question: 'What is blended learning?',
      options: ['Only online', 'Online + offline mix', 'Only classroom', 'Only books'],
      answer: 1,
      badge: 'Learning Method Expert'
    },
    {
      question: 'What is the benefit of online learning?',
      options: ['No benefit', 'Flexibility & access', 'Only cheaper', 'Only fun'],
      answer: 1,
      badge: 'E-Education Master'
    }
  ]
}

export default quizzes
