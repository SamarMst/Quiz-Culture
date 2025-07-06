import React, { useState } from 'react';
import { toast } from 'react-toastify';

const questions = [
  {
    key: 'age',
    question: 'What is your age?',
    type: 'number',
    placeholder: 'Enter your age',
  },
  {
    key: 'country',
    question: 'Which country are you from?',
    type: 'select',
    options: [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ],
  },
  {
    key: 'interests',
    question: 'What are your interests?',
    type: 'select',
    options: [
    /*  Core Academic Fields */
    "Mathematics",
    "Science",
    "Literature",
    "History",
    "Geography",
    "Philosophy",
    "Art",
    "Music",

    /*  Socio-Cultural Topics */
    "Religion and Beliefs",
    "Languages and Scripts",
    "Fashion and Dress",
    "Cuisine",
    "Festivals and Holidays",
    "Architecture",
    "Customs and Etiquette",

    /* Modern Culture and Society */
    "Media and Entertainment",
    "Sports and Games",
    "Technology and Innovation",
    "Education Systems",
    "Cultural Symbols"
]

  },
];

export default function ConversationCards() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ age: '', country: '', interests: '' });
   
  const handleNext = () => {
    const currentValue = answers[current.key];
  // Check if current answer is empty
  if (!answers[current.key]) {
    toast.error(`Please answer the question: "${current.question}"`);
    return; // stop going to next step
  }

  if (current.key === 'age') {
    const age = parseInt(currentValue, 10);
    if (isNaN(age) || age < 8 || age > 100) {
      toast.error('Please enter a valid age');
      return;
    }
  }

  if (step < questions.length - 1) {
    setStep(step + 1);
  } else {
    console.log('All answers:', answers);
  }
};


  const handleChange = (e) => {
    setAnswers({ ...answers, [questions[step].key]: e.target.value });
  };

  const current = questions[step];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-300 to-blue-400">
      <div className="w-[90%] max-w-xl bg-white rounded-3xl shadow-xl border-4 border-sky-200 p-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">{current.question}</h2>

        {current.type === 'select' ? (
          <select
            onChange={handleChange}
            value={answers[current.key]}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose one</option>
            {current.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={current.type}
            placeholder={current.placeholder}
            value={answers[current.key]}
            onChange={handleChange}
            min={current.key === 'age' ? 8 : undefined}
            max={current.key === 'age' ? 100 : undefined}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        )}

        <button
          onClick={handleNext}
          className="mt-6 bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition"
        >
          {step === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
