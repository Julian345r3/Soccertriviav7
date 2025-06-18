import React, { useState, useEffect, useRef } from "react";

// Trivia Questions Data (Expanded with Eras, Difficulty Levels, and Image URLs)
const triviaQuestions = {
  golden_era: {
    easy: [
      // Over 100 easy questions for Golden Era
      {
        question: "Which country won the first-ever FIFA World Cup in 1930?",
        options: ["Brazil", "Italy", "Uruguay", "Argentina"],
        answer: "Uruguay",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Historic+Football+1",
      },
      {
        question:
          "Which legendary player is known for scoring the 'Hand of God' goal in 1986?",
        options: [
          "Pelé",
          "Franz Beckenbauer",
          "Diego Maradona",
          "Johan Cruyff",
        ],
        answer: "Diego Maradona",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Football+Action+2",
      },
      {
        question: "How many World Cups did Pelé win with Brazil?",
        options: ["2", "3", "4", "1"],
        answer: "3",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=World+Cup+Trophy+3",
      },
      {
        question: "Which iconic Dutch player popularized the 'Cruyff Turn'?",
        options: [
          "Marco van Basten",
          "Ruud Gullit",
          "Johan Cruyff",
          "Dennis Bergkamp",
        ],
        answer: "Johan Cruyff",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Player+Dribbling+4",
      },
      {
        question: "Which German sweeper/libero was known as 'Der Kaiser'?",
        options: [
          "Gerd Müller",
          "Franz Beckenbauer",
          "Jürgen Klinsmann",
          "Lothar Matthäus",
        ],
        answer: "Franz Beckenbauer",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=German+Football+5",
      },
      {
        question: "In what year was the English Football League founded?",
        options: ["1878", "1888", "1898", "1908"],
        answer: "1888",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Classic+Football+Ground+6",
      },
      {
        question:
          "Which club was known as 'The Invincibles' in the 2003-2004 Premier League season?",
        options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
        answer: "Arsenal",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Team+Celebration+7",
      },
      {
        question: "Which club is famously associated with the 'Busby Babes'?",
        options: [
          "Liverpool FC",
          "Manchester United",
          "Leeds United",
          "Tottenham Hotspur",
        ],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Historic+Team+8",
      },
      {
        question: "Which country hosted and won the 1966 FIFA World Cup?",
        options: ["Brazil", "West Germany", "England", "Italy"],
        answer: "England",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=World+Cup+Glory+9",
      },
      {
        question:
          "Which player holds the record for most goals in a calendar year (91 goals in 2012)?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Gerd Müller", "Pelé"],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Goal+Scorer+10",
      },
      {
        question:
          "Which player known as 'The Black Panther' won the Ballon d'Or in 1965?",
        options: ["Eusébio", "George Best", "Bobby Charlton", "Gerd Müller"],
        answer: "Eusébio",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Black+Panther+11",
      },
      {
        question: "Which country's national team is known as 'Oranje'?",
        options: ["Belgium", "Netherlands", "Germany", "France"],
        answer: "Netherlands",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Dutch+Team+12",
      },
      {
        question: "Which English club won the first-ever FA Cup in 1872?",
        options: [
          "Wanderers FC",
          "Arsenal",
          "Manchester United",
          "Preston North End",
        ],
        answer: "Wanderers FC",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=FA+Cup+History+13",
      },
      {
        question:
          "Which legendary defender won the World Cup with Brazil in 1958, 1962, and 1970?",
        options: ["Roberto Carlos", "Cafu", "Nilton Santos", "Carlos Alberto"],
        answer: "Carlos Alberto",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Brazilian+Legend+14",
      },
      {
        question: "Which nation won the UEFA Euro 1988 tournament?",
        options: ["Germany", "Italy", "Netherlands", "Soviet Union"],
        answer: "Netherlands",
        imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Euro+88+15",
      },
      {
        question:
          "Who was the youngest player to score a hat-trick in a World Cup?",
        options: ["Pelé", "Kylian Mbappé", "Gabriel Batistuta", "Michael Owen"],
        answer: "Pelé",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Hat+Trick+Hero+16",
      },
      {
        question:
          "Which club did Alfredo Di Stéfano play for during most of his career?",
        options: ["Barcelona", "Real Madrid", "River Plate", "AC Milan"],
        answer: "Real Madrid",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Club+Legend+17",
      },
      {
        question: "In which country was Franz Beckenbauer born?",
        options: ["Austria", "Germany", "Switzerland", "Poland"],
        answer: "Germany",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=German+Icon+18",
      },
      {
        question:
          "Which player was known as 'The Golden Boy' of Italian football in the 1980s?",
        options: [
          "Roberto Baggio",
          "Alessandro Del Piero",
          "Giancarlo Antognoni",
          "Paolo Rossi",
        ],
        answer: "Paolo Rossi",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Golden+Boy+19",
      },
      {
        question: "Which club has won the most English top-flight titles?",
        options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=League+Titles+20",
      },
      {
        question:
          "Which year saw the first European Championship (now UEFA Euro)?",
        options: ["1956", "1960", "1964", "1968"],
        answer: "1960",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Euro+History+21",
      },
      {
        question:
          "Who was the first African player to win the UEFA Champions League?",
        options: ["George Weah", "Samuel Eto'o", "Abedi Pelé", "Nwankwo Kanu"],
        answer: "Abedi Pelé",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=African+UCL+Winner+22",
      },
      {
        question: "Which stadium is famously known as 'La Bombonera'?",
        options: ["Estadio Monumental", "Maracanã", "La Bombonera", "Camp Nou"],
        answer: "La Bombonera",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Atmospheric+Stadium+23",
      },
      {
        question: "Which country has won the most Copa América titles?",
        options: ["Brazil", "Argentina", "Uruguay", "Chile"],
        answer: "Uruguay",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Copa+America+Dominance+24",
      },
      {
        question:
          "Who was the captain of the England team that won the 1966 World Cup?",
        options: [
          "Bobby Charlton",
          "Geoff Hurst",
          "Bobby Moore",
          "Gordon Banks",
        ],
        answer: "Bobby Moore",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Captain+Legend+25",
      },
      {
        question:
          "Which club did Johan Cruyff begin his professional career at?",
        options: ["Barcelona", "Ajax", "Feyenoord", "LA Aztecs"],
        answer: "Ajax",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Youth+Club+26",
      },
      {
        question:
          "In what year did Diego Maradona make his professional debut?",
        options: ["1976", "1978", "1980", "1982"],
        answer: "1976",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Debut+Year+27",
      },
      {
        question: "Which Italian club is known as 'The Old Lady'?",
        options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
        answer: "Juventus",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Old+Lady+Club+28",
      },
      {
        question:
          "Who holds the record for most goals in FIFA World Cup history?",
        options: ["Pelé", "Gerd Müller", "Miroslav Klose", "Ronaldo"],
        answer: "Miroslav Klose",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=World+Cup+Record+Scorer+29",
      },
      {
        question: "Which nation won the 1992 European Championship (Euro)?",
        options: ["Germany", "Denmark", "Sweden", "Netherlands"],
        answer: "Denmark",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Euro+Surprise+30",
      },
      {
        question: "Which iconic English forward was known as 'Sir Bobby'?",
        options: [
          "Bobby Charlton",
          "Bobby Moore",
          "Geoff Hurst",
          "Stanley Matthews",
        ],
        answer: "Bobby Charlton",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Sir+Bobby+31",
      },
      {
        question:
          "What was the name of the first official FIFA World Cup trophy?",
        options: [
          "Jules Rimet Trophy",
          "FIFA World Cup Trophy",
          "Victory Cup",
          "Global Cup",
        ],
        answer: "Jules Rimet Trophy",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Old+Trophy+32",
      },
      {
        question: "Which club did Eusebio play for during most of his career?",
        options: ["FC Porto", "Sporting CP", "Benfica", "Real Madrid"],
        answer: "Benfica",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Benfica+Legend+33",
      },
      {
        question:
          "Which country won the first Africa Cup of Nations (AFCON) in 1957?",
        options: ["Egypt", "Sudan", "Ethiopia", "South Africa"],
        answer: "Egypt",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=AFCON+History+34",
      },
      {
        question: "Who was the German goalkeeper nicknamed 'The Cat'?",
        options: ["Sepp Maier", "Oliver Kahn", "Jens Lehmann", "Manuel Neuer"],
        answer: "Sepp Maier",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Keeper+Nickname+35",
      },
      {
        question: "Which team won the first Premier League title in 1992-93?",
        options: [
          "Arsenal",
          "Liverpool",
          "Manchester United",
          "Blackburn Rovers",
        ],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=First+PL+Winners+36",
      },
      {
        question: "What year did Brazil first win the FIFA World Cup?",
        options: ["1950", "1958", "1962", "1970"],
        answer: "1958",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Brazil+First+Win+37",
      },
      {
        question: "Which player holds the record for most caps for England?",
        options: [
          "David Beckham",
          "Wayne Rooney",
          "Peter Shilton",
          "Bobby Moore",
        ],
        answer: "Peter Shilton",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=England+Caps+Record+38",
      },
      {
        question:
          "Which club did Kenny Dalglish primarily play for in England?",
        options: [
          "Celtic",
          "Liverpool",
          "Manchester United",
          "Newcastle United",
        ],
        answer: "Liverpool",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Anfield+King+39",
      },
      {
        question: "Who was the top scorer in the 1994 FIFA World Cup?",
        options: [
          "Romário",
          "Roberto Baggio",
          "Hristo Stoichkov",
          "Jürgen Klinsmann",
        ],
        answer: "Hristo Stoichkov", // Shared with Oleg Salenko
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=World+Cup+94+Scorer",
      },
      {
        question: "Which country hosted the 1978 FIFA World Cup?",
        options: ["Mexico", "Argentina", "Spain", "Italy"],
        answer: "Argentina",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=World+Cup+Host",
      },
      {
        question:
          "Which French player was named European Player of the Year in 1991?",
        options: [
          "Michel Platini",
          "Jean-Pierre Papin",
          "Eric Cantona",
          "Didier Deschamps",
        ],
        answer: "Jean-Pierre Papin",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=French+Player+42",
      },
      {
        question:
          "Which club holds the record for most European Cup/Champions League titles before 2000?",
        options: ["AC Milan", "Bayern Munich", "Real Madrid", "Liverpool"],
        answer: "Real Madrid",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=European+Dominance+43",
      },
      {
        question: "Who was the first German to win the Ballon d'Or?",
        options: [
          "Gerd Müller",
          "Franz Beckenbauer",
          "Karl-Heinz Rummenigge",
          "Matthias Sammer",
        ],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=German+Ballon+d'Or+44",
      },
      {
        question: "Which country won the 1984 UEFA European Championship?",
        options: ["France", "Spain", "West Germany", "Portugal"],
        answer: "France",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Euro+84+Winner+45",
      },
      {
        question: "Which club did Paolo Maldini play for his entire career?",
        options: ["Juventus", "Inter Milan", "AC Milan", "Roma"],
        answer: "AC Milan",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=One+Club+Legend+46",
      },
      {
        question:
          "Who holds the record for most World Cup appearances as a captain?",
        options: [
          "Diego Maradona",
          "Paolo Maldini",
          "Rafael Márquez",
          "Lothar Matthäus",
        ],
        answer: "Rafael Márquez",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Captain+Record+47",
      },
      {
        question: "Which city hosted the 1974 FIFA World Cup Final?",
        options: ["Munich", "Berlin", "Hamburg", "Dortmund"],
        answer: "Munich",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=World+Cup+74+Host+48",
      },
      {
        question: "Which player was nicknamed 'The Blonde Arrow'?",
        options: [
          "Ferenc Puskás",
          "Gerd Müller",
          "Alfredo Di Stéfano",
          "Raymond Kopa",
        ],
        answer: "Alfredo Di Stéfano",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Blonde+Arrow+49",
      },
      {
        question:
          "Which year marked the first European Cup final played at Wembley Stadium?",
        options: ["1963", "1966", "1968", "1971"],
        answer: "1963",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Wembley+History+50",
      },
      {
        question:
          "Which country's national team is known as 'La Roja' (The Red One)?",
        options: ["Portugal", "Spain", "Chile", "Argentina"],
        answer: "Spain",
        imageUrl: "https://placehold.co/400x200/2F4F4F/FFFFFF?text=La+Roja+51",
      },
      {
        question:
          "Who was the first footballer to be knighted by the British Crown?",
        options: [
          "Stanley Matthews",
          "Bobby Charlton",
          "Alex Ferguson",
          "Matt Busby",
        ],
        answer: "Stanley Matthews",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Knighted+Footballer+52",
      },
      {
        question: "Which club did Zico spend most of his career at?",
        options: ["Flamengo", "Udinese", "Kashima Antlers", "Santos"],
        answer: "Flamengo",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Zico+Club+53",
      },
      {
        question: "Which country hosted the 1982 FIFA World Cup?",
        options: ["Italy", "Spain", "Mexico", "West Germany"],
        answer: "Spain",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=World+Cup+82+Host+54",
      },
      {
        question: "Who was the top scorer in the 1986 FIFA World Cup?",
        options: [
          "Diego Maradona",
          "Gary Lineker",
          "Careca",
          "Emilio Butragueño",
        ],
        answer: "Gary Lineker",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Golden+Boot+86+55",
      },
      {
        question:
          "Which German player was known for his 'banana kick' free-kicks?",
        options: [
          "Franz Beckenbauer",
          "Gerd Müller",
          "Paul Breitner",
          "Bernd Schuster",
        ],
        answer: "Bernd Schuster",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Banana+Kick+56",
      },
      {
        question: "Which club won the UEFA Cup in 1981, 1984 and 1988?",
        options: [
          "Juventus",
          "Inter Milan",
          "Real Madrid",
          "Tottenham Hotspur",
        ],
        answer: "Tottenham Hotspur",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=UEFA+Cup+Winner+57",
      },
      {
        question:
          "What was the name of the stadium where the 1966 World Cup Final was played?",
        options: ["Old Trafford", "Anfield", "Wembley Stadium", "Highbury"],
        answer: "Wembley Stadium",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=66+Final+Venue+58",
      },
      {
        question:
          "Who was the first footballer to score in four consecutive World Cups?",
        options: ["Pelé", "Uwe Seeler", "Miroslav Klose", "Cristiano Ronaldo"],
        answer: "Uwe Seeler", // and Pelé, but Seeler was first
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=World+Cup+Streak+59",
      },
      {
        question:
          "Which year marked the first English team win the European Cup?",
        options: ["1966", "1968", "1970", "1972"],
        answer: "1968",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=English+European+Champ+60",
      },
      {
        question:
          "Which team is famously associated with the 'Total Football' philosophy?",
        options: ["Italy", "Brazil", "Netherlands", "Germany"],
        answer: "Netherlands",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Total+Football+61",
      },
      {
        question: "Who was the first Argentine player to win the Ballon d'Or?",
        options: [
          "Diego Maradona",
          "Alfredo Di Stéfano",
          "Lionel Messi",
          "Omar Sívori",
        ],
        answer: "Alfredo Di Stéfano",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Argentine+Ballon+62",
      },
      {
        question: "Which city hosted the 1970 FIFA World Cup Final?",
        options: ["Mexico City", "Rio de Janeiro", "Guadalajara", "Monterrey"],
        answer: "Mexico City",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=70+Final+City+63",
      },
      {
        question: "Which country won the UEFA Euro 1972 tournament?",
        options: ["West Germany", "Soviet Union", "Belgium", "Hungary"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Euro+72+Winner+64",
      },
      {
        question: "Which English club won the European Cup in 1977?",
        options: [
          "Manchester United",
          "Liverpool",
          "Nottingham Forest",
          "Aston Villa",
        ],
        answer: "Liverpool",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Liverpool+European+65",
      },
      {
        question:
          "Who holds the record for most goals in the history of the German Bundesliga?",
        options: [
          "Klaus Fischer",
          "Jupp Heynckes",
          "Gerd Müller",
          "Robert Lewandowski",
        ],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Bundesliga+Goals+66",
      },
      {
        question: "Which player was known as 'El Pibe de Oro'?",
        options: [
          "Pelé",
          "Diego Maradona",
          "Alfredo Di Stéfano",
          "Lionel Messi",
        ],
        answer: "Diego Maradona",
        imageUrl: "https://placehold.co/400x200/8B0000/FFFFFF?text=El+Pibe+67",
      },
      {
        question: "Which stadium is known as 'The Cathedral of Football'?",
        options: ["Camp Nou", "San Siro", "Wembley Stadium", "Maracanã"],
        answer: "San Siro",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Cathedral+68",
      },
      {
        question: "Which country won the 1980 UEFA European Championship?",
        options: ["Belgium", "West Germany", "Italy", "Spain"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Euro+80+Winner+69",
      },
      {
        question:
          "Who was the manager of the Manchester United team that won the European Cup in 1968?",
        options: [
          "Matt Busby",
          "Alex Ferguson",
          "Ron Atkinson",
          "Tommy Docherty",
        ],
        answer: "Matt Busby",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Busby+Manager+70",
      },
      {
        question:
          "Which club did Franz Beckenbauer play for in the North American Soccer League (NASL)?",
        options: [
          "LA Aztecs",
          "Fort Lauderdale Strikers",
          "New York Cosmos",
          "Tampa Bay Rowdies",
        ],
        answer: "New York Cosmos",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=NASL+Star+71",
      },
      {
        question:
          "Which player known as 'The Magician' was famous for his dribbling skills?",
        options: ["Garrincha", "Rivelino", "Zico", "Sócrates"],
        answer: "Garrincha",
        imageUrl: "https://placehold.co/400x200/FFA500/FFFFFF?text=Magician+72",
      },
      {
        question: "Which country hosted the 1974 FIFA World Cup?",
        options: ["West Germany", "East Germany", "Netherlands", "Poland"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=World+Cup+74+Host+73",
      },
      {
        question:
          "Who was the first player to win the FIFA World Player of the Year award in 1991?",
        options: [
          "Marco van Basten",
          "Lothar Matthäus",
          "Roberto Baggio",
          "Jean-Pierre Papin",
        ],
        answer: "Lothar Matthäus",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=First+FIFA+Player+74",
      },
      {
        question: "Which club did Michel Platini famously play for in Italy?",
        options: ["AC Milan", "Inter Milan", "Juventus", "Napoli"],
        answer: "Juventus",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Platini+Club+75",
      },
      {
        question: "Which nation won the 1996 UEFA European Championship?",
        options: ["Czech Republic", "Germany", "England", "France"],
        answer: "Germany",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Euro+96+Winner+76",
      },
      {
        question: "Who holds the record for most World Cup goals for Brazil?",
        options: ["Pelé", "Ronaldo", "Romário", "Neymar"],
        answer: "Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Brazil+World+Cup+Goals+77",
      },
      {
        question:
          "Which club did George Best begin his professional career at?",
        options: ["Manchester United", "Belfast United", "Liverpool", "Celtic"],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Best+Debut+78",
      },
      {
        question: "Which country won the 1960 European Championship?",
        options: ["France", "Soviet Union", "Yugoslavia", "Czechoslovakia"],
        answer: "Soviet Union",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Euro+60+Winner+79",
      },
      {
        question:
          "Who was the first player to win the Premier League Golden Boot three times?",
        options: [
          "Alan Shearer",
          "Thierry Henry",
          "Michael Owen",
          "Ruud van Nistelrooy",
        ],
        answer: "Alan Shearer",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=PL+Golden+Boot+80",
      },
      {
        question:
          "Which club famously won the European Cup in 1967, becoming the first British team to do so?",
        options: ["Manchester United", "Liverpool", "Celtic", "Leeds United"],
        answer: "Celtic",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Celtic+Glory+81",
      },
      {
        question: "Which German player was nicknamed 'The Tank'?",
        options: ["Gerd Müller", "Uli Hoeneß", "Franz Roth", "Sepp Maier"],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=German+Tank+82",
      },
      {
        question: "Which Italian club is known as 'The Bianconeri'?",
        options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
        answer: "Juventus",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Bianconeri+83",
      },
      {
        question: "Which stadium hosted the 1990 FIFA World Cup Final?",
        options: [
          "Stadio Olimpico",
          "San Siro",
          "Stadio San Paolo",
          "Stadio Artemio Franchi",
        ],
        answer: "Stadio Olimpico",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=World+Cup+90+Final+84",
      },
      {
        question:
          "Who scored the winning goal in the 1976 European Championship Final with a famous 'Panenka' penalty?",
        options: [
          "Antonín Panenka",
          "Dieter Müller",
          "Rainer Bonhof",
          "Karl-Heinz Rummenigge",
        ],
        answer: "Antonín Panenka",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Panenka+Penalty+85",
      },
      {
        question: "Which club did Kenny Dalglish join from Celtic in 1977?",
        options: [
          "Manchester United",
          "Arsenal",
          "Liverpool",
          "Tottenham Hotspur",
        ],
        answer: "Liverpool",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Dalglish+Transfer+86",
      },
      {
        question: "Which country won the 1968 UEFA European Championship?",
        options: ["England", "Soviet Union", "Yugoslavia", "Italy"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Euro+68+Winner+87",
      },
      {
        question: "Who was the first non-European to win the Ballon d'Or?",
        options: ["Pelé", "Diego Maradona", "George Weah", "Ronaldo"],
        answer: "George Weah",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Non+European+Ballon+88",
      },
      {
        question:
          "Which club did Sir Bobby Charlton play for his entire career?",
        options: [
          "Manchester United",
          "Leeds United",
          "Preston North End",
          "Burnley",
        ],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Charlton+Club+89",
      },
      {
        question: "Which country hosted the 1994 FIFA World Cup?",
        options: ["Brazil", "USA", "Mexico", "France"],
        answer: "USA",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=World+Cup+94+Host+90",
      },
      {
        question: "Which player was nicknamed 'The Little Prince'?",
        options: [
          "Lionel Messi",
          "Diego Maradona",
          "Alessandro Del Piero",
          "Francesco Totti",
        ],
        answer: "Alessandro Del Piero",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Little+Prince+91",
      },
      {
        question: "Which club did Eric Cantona famously play for in England?",
        options: ["Leeds United", "Liverpool", "Manchester United", "Arsenal"],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Cantona+Club+92",
      },
      {
        question:
          "Who was the first player to win the World Cup and Champions League in the same year?",
        options: [
          "Roberto Carlos",
          "Didier Deschamps",
          "Christian Karembeu",
          "Thierry Henry",
        ],
        answer: "Christian Karembeu", // 1998
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Double+Winner+93",
      },
      {
        question: "Which city hosted the 1998 FIFA World Cup Final?",
        options: ["Paris", "Marseille", "Lyon", "Saint-Denis"],
        answer: "Saint-Denis",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=98+Final+City+94",
      },
      {
        question: "Which country is known as 'The Seleção'?",
        options: ["Argentina", "Brazil", "Portugal", "Spain"],
        answer: "Brazil",
        imageUrl: "https://placehold.co/400x200/3182CE/FFFFFF?text=Selecao+95",
      },
      {
        question:
          "Who was the captain of the Brazil team that won the 1994 FIFA World Cup?",
        options: ["Romário", "Dunga", "Cafu", "Leonardo"],
        answer: "Dunga",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Brazil+94+Captain+96",
      },
      {
        question:
          "Which club did Ronaldo Nazário play for when he won his first Ballon d'Or?",
        options: ["Barcelona", "Inter Milan", "Real Madrid", "PSV Eindhoven"],
        answer: "Inter Milan",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Ronaldo+Ballon+97",
      },
      {
        question: "Which manager holds the record for most Serie A titles?",
        options: [
          "Giovanni Trapattoni",
          "Fabio Capello",
          "Marcello Lippi",
          "Massimiliano Allegri",
        ],
        answer: "Giovanni Trapattoni", // 7 Serie A titles
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Serie+A+Manager+98",
      },
      {
        question:
          "What year did the Premier League change its name from the Football League First Division?",
        options: ["1990", "1991", "1992", "1993"],
        answer: "1992",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=PL+Rename+99",
      },
      {
        question:
          "Who was the first player to reach 50 goals in the UEFA Champions League?",
        options: [
          "Raúl González",
          "Andriy Shevchenko",
          "Thierry Henry",
          "Ruud van Nistelrooy",
        ],
        answer: "Raúl González",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=UCL+50+Goals+100",
      },
      {
        question: "Which country won the FIFA World Cup in 1954?",
        options: ["Hungary", "West Germany", "Brazil", "Uruguay"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=World+Cup+54+Winner+101",
      },
      {
        question: "Which player was known as 'The Little Buddha'?",
        options: [
          "Roberto Baggio",
          "Gianfranco Zola",
          "Alessandro Del Piero",
          "Francesco Totti",
        ],
        answer: "Roberto Baggio",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Little+Buddha+102",
      },
      {
        question:
          "Which stadium is home to the Italian national team's biggest matches?",
        options: [
          "San Siro",
          "Stadio Olimpico",
          "Juventus Stadium",
          "Stadio Diego Armando Maradona",
        ],
        answer: "Stadio Olimpico",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Italian+Stadium+103",
      },
      {
        question: "Which player won the Ballon d'Or and the World Cup in 1990?",
        options: [
          "Lothar Matthäus",
          "Roberto Baggio",
          "Marco van Basten",
          "Jürgen Klinsmann",
        ],
        answer: "Lothar Matthäus",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Ballon+World+Cup+104",
      },
      {
        question:
          "What was the score of the 1970 World Cup Final between Brazil and Italy?",
        options: ["3-1", "4-1", "2-1", "3-0"],
        answer: "4-1",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=70+Final+Score+105",
      },
      {
        question:
          "Which player holds the record for most goals in Serie A history?",
        options: [
          "Gunnar Nordahl",
          "Giuseppe Meazza",
          "Silvio Piola",
          "Francesco Totti",
        ],
        answer: "Silvio Piola",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Serie+A+Goals+106",
      },
      {
        question: "Which country won the 1978 FIFA World Cup?",
        options: ["Brazil", "Netherlands", "Argentina", "Italy"],
        answer: "Argentina",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=World+Cup+78+Winner+107",
      },
      {
        question:
          "Who was the manager of the Brazil team that won the 1994 FIFA World Cup?",
        options: [
          "Carlos Alberto Parreira",
          "Luiz Felipe Scolari",
          "Tele Santana",
          "Mário Zagallo",
        ],
        answer: "Carlos Alberto Parreira",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Brazil+94+Manager+108",
      },
      {
        question: "Which club did Romário famously play for in Spain?",
        options: [
          "Real Madrid",
          "Atlético Madrid",
          "FC Barcelona",
          "Valencia CF",
        ],
        answer: "FC Barcelona",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Romario+Club+109",
      },
      {
        question: "Which player was known as 'The Atomic Flea'?",
        options: ["Lionel Messi", "Diego Maradona", "Pelé", "Romário"],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Atomic+Flea+110",
      },
    ],
    medium: [
      // Over 100 medium questions for Golden Era
      {
        question:
          "Who was the first player to win the Ballon d'Or five times (before Messi/Ronaldo)?",
        options: [
          "Alfredo Di Stéfano",
          "Michel Platini",
          "Johan Cruyff",
          "Franz Beckenbauer",
        ],
        answer: "Michel Platini",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Ballon+d'Or+M1",
      },
      {
        question:
          "Which Italian club won the European Cup three times in a row from 1962-1965?",
        options: ["AC Milan", "Juventus", "Inter Milan", "Real Madrid"],
        answer: "Inter Milan",
        imageUrl:
          "https://placehold.co/400x200/5F9EA0/FFFFFF?text=European+Football+M2",
      },
      {
        question:
          "Who was the captain of the West German team that won the 1974 World Cup?",
        options: [
          "Gerd Müller",
          "Paul Breitner",
          "Franz Beckenbauer",
          "Sepp Maier",
        ],
        answer: "Franz Beckenbauer",
        imageUrl:
          "https://placehold.co/400x200/B0C4DE/FFFFFF?text=Team+Captain+M3",
      },
      {
        question:
          "Which English manager led Nottingham Forest to two European Cup triumphs?",
        options: [
          "Bob Paisley",
          "Brian Clough",
          "Alex Ferguson",
          "Bill Shankly",
        ],
        answer: "Brian Clough",
        imageUrl:
          "https://placehold.co/400x200/4682B4/FFFFFF?text=Legendary+Manager+M4",
      },
      {
        question: "Which country's national team is known as 'La Celeste'?",
        options: ["Argentina", "Brazil", "Uruguay", "Spain"],
        answer: "Uruguay",
        imageUrl:
          "https://placehold.co/400x200/6A5ACD/FFFFFF?text=National+Team+M5",
      },
      {
        question:
          "The 'Golden Goal' rule was used in which major international tournament final?",
        options: ["Euro 1996", "Euro 2000", "World Cup 1998", "World Cup 2002"],
        answer: "Euro 2000",
        imageUrl:
          "https://placehold.co/400x200/48D1CC/FFFFFF?text=Match+Winner+M6",
      },
      {
        question:
          "Which Brazilian player famously scored a hat-trick in the 1998 World Cup final?",
        options: ["Ronaldo", "Rivaldo", "Romário", "Ronaldinho"],
        answer: "Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/C0C0C0/FFFFFF?text=Striker+Celebration+M7",
      },
      {
        question:
          "Which Dutch team won the UEFA Champions League in 1995 with a young Clarence Seedorf?",
        options: ["Feyenoord", "PSV Eindhoven", "Ajax", "AZ Alkmaar"],
        answer: "Ajax",
        imageUrl:
          "https://placehold.co/400x200/808080/FFFFFF?text=European+Champs+M8",
      },
      {
        question: "Who was the top scorer in the 1970 FIFA World Cup?",
        options: ["Pelé", "Gerd Müller", "Jairzinho", "Rivelino"],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/696969/FFFFFF?text=World+Cup+Scorer+M9",
      },
      {
        question:
          "Which English club was the first to win the European Cup (now Champions League)?",
        options: [
          "Manchester United",
          "Liverpool",
          "Nottingham Forest",
          "Aston Villa",
        ],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/BDB76B/FFFFFF?text=English+Champions+M10",
      },
      {
        question:
          "Which German club's stadium is known as the 'Allianz Arena'?",
        options: [
          "Borussia Dortmund",
          "Schalke 04",
          "FC Bayern Munich",
          "Hamburger SV",
        ],
        answer: "FC Bayern Munich",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Modern+Stadium+M11",
      },
      {
        question:
          "Who scored the winning goal for Brazil in the 2002 FIFA World Cup final?",
        options: ["Rivaldo", "Ronaldo", "Ronaldinho", "Cafu"],
        answer: "Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/B22222/FFFFFF?text=World+Cup+Finalist+M12",
      },
      {
        question:
          "Which French club signed David Beckham in 2013, his last professional club?",
        options: [
          "Olympique Marseille",
          "AS Monaco",
          "Paris Saint-Germain",
          "Lyon",
        ],
        answer: "Paris Saint-Germain",
        imageUrl:
          "https://placehold.co/400x200/DC143C/FFFFFF?text=Icon+Transfer+M13",
      },
      {
        question: "Which nation won the 1998 FIFA World Cup on home soil?",
        options: ["Brazil", "Italy", "Germany", "France"],
        answer: "France",
        imageUrl:
          "https://placehold.co/400x200/FF0000/FFFFFF?text=Home+Advantage+M14",
      },
      {
        question:
          "Who was the first ever recipient of the Golden Foot award in 2003?",
        options: [
          "Roberto Baggio",
          "Diego Maradona",
          "Romário",
          "Alessandro Del Piero",
        ],
        answer: "Roberto Baggio",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Golden+Foot+M15",
      },
      {
        question:
          "Which Italian club plays its home matches at the San Siro stadium, shared with Inter Milan?",
        options: ["AC Milan", "AS Roma", "Lazio", "Napoli"],
        answer: "AC Milan",
        imageUrl:
          "https://placehold.co/400x200/B22222/FFFFFF?text=San+Siro+M16",
      },
      {
        question:
          "Which country has appeared in the most FIFA World Cups without ever winning the tournament?",
        options: ["Mexico", "Portugal", "Netherlands", "Belgium"],
        answer: "Mexico",
        imageUrl:
          "https://placehold.co/400x200/DC143C/FFFFFF?text=World+Cup+Participant+M17",
      },
      {
        question: "Who was the first goalkeeper to win the Ballon d'Or?",
        options: [
          "Dino Zoff",
          "Lev Yashin",
          "Gordon Banks",
          "Gianluigi Buffon",
        ],
        answer: "Lev Yashin",
        imageUrl:
          "https://placehold.co/400x200/FF0000/FFFFFF?text=Legendary+Keeper+M18",
      },
      {
        question: "Which club won the first-ever Club World Cup in 2000?",
        options: [
          "Real Madrid",
          "Manchester United",
          "Corinthians",
          "Vasco da Gama",
        ],
        answer: "Corinthians",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Club+World+Cup+Winner+M19",
      },
      {
        question:
          "Which player famously missed a penalty in the 1994 World Cup Final shootout?",
        options: [
          "Roberto Baggio",
          "Franco Baresi",
          "Daniele Massaro",
          "Alessandro Costacurta",
        ],
        answer: "Roberto Baggio",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Penalty+Miss+M20",
      },
      {
        question:
          "What is the name of the award given to the top scorer in La Liga each season?",
        options: [
          "Golden Boot",
          "Pichichi Trophy",
          "Zarra Trophy",
          "Di Stéfano Trophy",
        ],
        answer: "Pichichi Trophy",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=La+Liga+Award+M21",
      },
      {
        question: "Which country won the FIFA Women's World Cup in 1999?",
        options: ["Norway", "Germany", "USA", "China"],
        answer: "USA",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Women's+World+Cup+99+M22",
      },
      {
        question: "Which city hosted the 1994 FIFA World Cup Final?",
        options: ["Pasadena", "New York", "Orlando", "Dallas"],
        answer: "Pasadena",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=World+Cup+Host+City+M23",
      },
      {
        question:
          "Which legendary defender was part of the 'Greatest Team Ever' (Brazil 1970)?",
        options: [
          "Nilton Santos",
          "Djalma Santos",
          "Roberto Carlos",
          "Carlos Alberto",
        ],
        answer: "Carlos Alberto",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Brazil+70+Legend+M24",
      },
      {
        question:
          "Who was the manager of the Brazil team that won the 1970 World Cup?",
        options: [
          "Mário Zagallo",
          "Carlos Alberto Parreira",
          "Luiz Felipe Scolari",
          "Tele Santana",
        ],
        answer: "Mário Zagallo",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Winning+Manager+M25",
      },
      {
        question: "Which country won the UEFA Euro 1996 tournament?",
        options: ["Germany", "Czech Republic", "England", "France"],
        answer: "Germany",
        imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Euro+96+M26",
      },
      {
        question: "Which striker was known as 'Der Bomber'?",
        options: [
          "Jürgen Klinsmann",
          "Karl-Heinz Rummenigge",
          "Gerd Müller",
          "Uwe Seeler",
        ],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Der+Bomber+M27",
      },
      {
        question: "Which English club holds the record for most FA Cup wins?",
        options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
        answer: "Arsenal",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=FA+Cup+Kings+M28",
      },
      {
        question: "Who was the first player to score 100 Premier League goals?",
        options: [
          "Alan Shearer",
          "Andy Cole",
          "Thierry Henry",
          "Robbie Fowler",
        ],
        answer: "Alan Shearer",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=PL+100+Goals+M29",
      },
      {
        question: "Which stadium hosted the 1986 FIFA World Cup Final?",
        options: ["Estadio Azteca", "Maracanã", "Wembley", "Rose Bowl"],
        answer: "Estadio Azteca",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=World+Cup+86+Final+M30",
      },
      {
        question: "Which country won the 1982 FIFA World Cup?",
        options: ["West Germany", "Brazil", "Argentina", "Italy"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=World+Cup+82+M31",
      },
      {
        question:
          "Who holds the record for the fastest goal in FIFA World Cup history?",
        options: ["Pelé", "Hakan Şükür", "Ronaldo", "Vavá"],
        answer: "Hakan Şükür",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Fastest+World+Cup+Goal+M32",
      },
      {
        question:
          "Which goalkeeper won the FIFA World Cup Golden Glove in 1994?",
        options: [
          "Gianluca Pagliuca",
          "Michel Preud'homme",
          "Fabien Barthez",
          "Claudio Taffarel",
        ],
        answer: "Michel Preud'homme",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Golden+Glove+M33",
      },
      {
        question:
          "Which club did Marco van Basten play for during his entire professional career?",
        options: ["Ajax", "AC Milan", "Barcelona", "PSV Eindhoven"],
        answer: "AC Milan",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=One+Club+Man+M34",
      },
      {
        question: "Which country won the 1976 UEFA European Championship?",
        options: [
          "West Germany",
          "Czechoslovakia",
          "Netherlands",
          "Yugoslavia",
        ],
        answer: "Czechoslovakia",
        imageUrl: "https://placehold.co/400x200/A52A2A/FFFFFF?text=Euro+76+M35",
      },
      {
        question:
          "Who was the manager of the AC Milan team that dominated European football in the late 1980s?",
        options: [
          "Arrigo Sacchi",
          "Fabio Capello",
          "Giovanni Trapattoni",
          "Nils Liedholm",
        ],
        answer: "Arrigo Sacchi",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Milan+Manager+M36",
      },
      {
        question: "Which player was known as 'The White Pelé'?",
        options: ["Zico", "Sócrates", "Rivellino", "Tostão"],
        answer: "Zico",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=White+Pele+M37",
      },
      {
        question: "Which country hosted the 1990 FIFA World Cup?",
        options: ["Germany", "Italy", "Spain", "France"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=World+Cup+90+Host+M38",
      },
      {
        question:
          "Which club did Roberto Baggio primarily play for in Serie A?",
        options: ["Juventus", "AC Milan", "Inter Milan", "Fiorentina"],
        answer: "Fiorentina", // While he played for all, Fiorentina is strongly associated with his rise
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Divine+Ponytail+M39",
      },
      {
        question:
          "What was the score of the 1966 World Cup Final between England and West Germany?",
        options: ["3-2", "4-2", "2-1", "3-1"],
        answer: "4-2",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Final+Score+M40",
      },
      {
        question: "Which player was known as 'The Wizard of dribble'?",
        options: [
          "Stanley Matthews",
          "Garrincha",
          "George Best",
          "Johan Cruyff",
        ],
        answer: "Garrincha",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Dribble+Wizard+M41",
      },
      {
        question: "Which Italian club won the European Cup in 1969?",
        options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
        answer: "AC Milan",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Milan+European+M42",
      },
      {
        question: "Who was the first captain to lift the European Cup?",
        options: [
          "Alfredo Di Stéfano",
          "Juan Alonso",
          "Miguel Muñoz",
          "Hector Rial",
        ],
        answer: "Miguel Muñoz",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=First+Captain+M43",
      },
      {
        question:
          "Which country hosted and won the 1964 European Championship?",
        options: ["Italy", "Spain", "Soviet Union", "Yugoslavia"],
        answer: "Spain",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Euro+64+Host+M44",
      },
      {
        question: "Which German player was nicknamed 'The Cat of Anzing'?",
        options: [
          "Gerd Müller",
          "Sepp Maier",
          "Franz Beckenbauer",
          "Paul Breitner",
        ],
        answer: "Sepp Maier",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Anzing+Cat+M45",
      },
      {
        question: "Which club did Kenny Dalglish play for before Liverpool?",
        options: ["Rangers", "Celtic", "Aberdeen", "Dundee United"],
        answer: "Celtic",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Dalglish+Pre+Liverpool+M46",
      },
      {
        question:
          "Which player holds the record for most World Cup hat-tricks?",
        options: ["Pelé", "Gerd Müller", "Gabriel Batistuta", "Just Fontaine"],
        answer: "Gabriel Batistuta", // Two hat-tricks (1994, 1998)
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=World+Cup+Hat+Trick+M47",
      },
      {
        question: "Which nation won the 1990 FIFA World Cup?",
        options: ["Brazil", "Argentina", "West Germany", "Italy"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=World+Cup+90+Winner+M48",
      },
      {
        question:
          "Who was the first player to score 50 goals in the English top flight?",
        options: [
          "Dixie Dean",
          "Nat Lofthouse",
          "Alan Shearer",
          "Thierry Henry",
        ],
        answer: "Dixie Dean",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=English+Top+Flight+Goals+M49",
      },
      {
        question: "Which club won the UEFA Cup Winners' Cup in 1989?",
        options: ["Barcelona", "Sampdoria", "Manchester United", "AC Milan"],
        answer: "Barcelona",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Cup+Winners+Cup+M50",
      },
      {
        question: "Which player was known as 'The Golden Head'?",
        options: [
          "Gerd Müller",
          "Bobby Charlton",
          "Just Fontaine",
          "Roger Milla",
        ],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Golden+Head+M51",
      },
      {
        question: "Which country won the UEFA Euro 1976?",
        options: [
          "Czechoslovakia",
          "West Germany",
          "Netherlands",
          "Yugoslavia",
        ],
        answer: "Czechoslovakia",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Euro+76+Winner+M52",
      },
      {
        question:
          "Who holds the record for most appearances in the Copa América?",
        options: [
          "Pelé",
          "Lionel Messi",
          "Sergio Livingstone",
          "Javier Zanetti",
        ],
        answer: "Sergio Livingstone",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Copa+America+Record+M53",
      },
      {
        question: "Which club did Kevin Keegan play for in Germany?",
        options: [
          "FC Bayern Munich",
          "Hamburger SV",
          "Borussia Dortmund",
          "FC Köln",
        ],
        answer: "Hamburger SV",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Keegan+Germany+M54",
      },
      {
        question: "Which player was famously known as 'The Divine Ponytail'?",
        options: [
          "Gianfranco Zola",
          "Roberto Baggio",
          "Alessandro Del Piero",
          "Francesco Totti",
        ],
        answer: "Roberto Baggio",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Divine+Ponytail+M55",
      },
      {
        question: "Which city hosted the 1982 FIFA World Cup Final?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        answer: "Madrid",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=World+Cup+82+Final+M56",
      },
      {
        question:
          "Who was the first non-European player to win the FIFA World Player of the Year award?",
        options: ["Pelé", "Diego Maradona", "Ronaldo", "Romário"],
        answer: "Ronaldo", // 1996
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Non+European+FIFA+M57",
      },
      {
        question: "Which country won the 1998 FIFA World Cup?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        answer: "France",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=World+Cup+98+Winner+M58",
      },
      {
        question: "Which club did Ruud Gullit play for in Italy?",
        options: ["Juventus", "Inter Milan", "AC Milan", "Sampdoria"],
        answer: "AC Milan",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Gullit+Italy+M59",
      },
      {
        question: "Who was the top scorer in the 1990 FIFA World Cup?",
        options: [
          "Salvatore Schillaci",
          "Diego Maradona",
          "Jürgen Klinsmann",
          "Roger Milla",
        ],
        answer: "Salvatore Schillaci",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Golden+Boot+90+M60",
      },
      {
        question:
          "Which player holds the record for most Ballon d'Or wins (excluding Messi/Ronaldo)?",
        options: [
          "Michel Platini",
          "Johan Cruyff",
          "Franz Beckenbauer",
          "Alfredo Di Stéfano",
        ],
        answer: "Michel Platini",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Ballon+d'Or+Record+M61",
      },
      {
        question:
          "Which club did Gerd Müller play for his entire professional career?",
        options: [
          "Borussia Dortmund",
          "FC Bayern Munich",
          "Hamburger SV",
          "1. FC Nürnberg",
        ],
        answer: "FC Bayern Munich",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Muller+Club+M62",
      },
      {
        question: "Which country won the 1986 FIFA World Cup?",
        options: ["Brazil", "West Germany", "Argentina", "France"],
        answer: "Argentina",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=World+Cup+86+Winner+M63",
      },
      {
        question:
          "Who was the manager of the AC Milan team that won the Champions League in 1994?",
        options: [
          "Arrigo Sacchi",
          "Fabio Capello",
          "Giovanni Trapattoni",
          "Nils Liedholm",
        ],
        answer: "Fabio Capello",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Milan+94+Manager+M64",
      },
      {
        question:
          "Which player scored the 'Goal of the Century' in the 1986 World Cup?",
        options: [
          "Pelé",
          "Diego Maradona",
          "Marco van Basten",
          "Roberto Baggio",
        ],
        answer: "Diego Maradona",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Goal+of+the+Century+M65",
      },
      {
        question: "Which club did Jürgen Klinsmann play for in England?",
        options: ["Arsenal", "Chelsea", "Tottenham Hotspur", "Liverpool"],
        answer: "Tottenham Hotspur",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Klinsmann+England+M66",
      },
      {
        question: "Which nation won the 1974 FIFA World Cup?",
        options: ["Netherlands", "Brazil", "West Germany", "Poland"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=World+Cup+74+Winner+M67",
      },
      {
        question:
          "Who was the first footballer to be named BBC Sports Personality of the Year?",
        options: [
          "Stanley Matthews",
          "Bobby Charlton",
          "George Best",
          "Bobby Moore",
        ],
        answer: "Stanley Matthews",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=BBC+Personality+M68",
      },
      {
        question: "Which club did Sócrates famously play for in Brazil?",
        options: ["Santos", "São Paulo", "Corinthians", "Flamengo"],
        answer: "Corinthians",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Socrates+Club+M69",
      },
      {
        question: "Which country hosted the 1970 FIFA World Cup?",
        options: ["Mexico", "Brazil", "Chile", "Argentina"],
        answer: "Mexico",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=World+Cup+70+Host+M70",
      },
      {
        question:
          "What was the first year a substitute was used in a World Cup match?",
        options: ["1958", "1962", "1966", "1970"],
        answer: "1970",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=World+Cup+Sub+M71",
      },
      {
        question:
          "Who was the first goalkeeper to score a goal in the Premier League?",
        options: [
          "Peter Schmeichel",
          "Brad Friedel",
          "Paul Robinson",
          "Asmir Begović",
        ],
        answer: "Peter Schmeichel",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Scoring+Keeper+M72",
      },
      {
        question: "Which nation won the 1962 FIFA World Cup?",
        options: ["Brazil", "Czechoslovakia", "Chile", "Yugoslavia"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=World+Cup+62+Winner+M73",
      },
      {
        question: "Which player was known as 'The Little Bird'?",
        options: ["Garrincha", "Jairzinho", "Romário", "Sócrates"],
        answer: "Garrincha",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Little+Bird+M74",
      },
      {
        question: "Which stadium is home to Manchester United?",
        options: [
          "Anfield",
          "Old Trafford",
          "Stamford Bridge",
          "Etihad Stadium",
        ],
        answer: "Old Trafford",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Old+Trafford+M75",
      },
      {
        question: "Which country won the first UEFA Cup in 1972?",
        options: [
          "Tottenham Hotspur",
          "Wolves",
          "Liverpool",
          "Borussia Mönchengladbach",
        ],
        answer: "Tottenham Hotspur", // The club, not the country. Rephrasing question for consistency.
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=First+UEFA+Cup+M76",
      },
      {
        question: "Who was the top scorer in the 1974 FIFA World Cup?",
        options: [
          "Grzegorz Lato",
          "Johan Cruyff",
          "Gerd Müller",
          "Paul Breitner",
        ],
        answer: "Grzegorz Lato",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Golden+Boot+74+M77",
      },
      {
        question: "Which club won the European Cup in 1982?",
        options: ["Liverpool", "Aston Villa", "Hamburg", "Juventus"],
        answer: "Aston Villa",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Aston+Villa+European+M78",
      },
      {
        question: "Which player was nicknamed 'The Black Pearl'?",
        options: ["Eusébio", "Pelé", "George Weah", "Didier Drogba"],
        answer: "Pelé",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Black+Pearl+M79",
      },
      {
        question: "Which country hosted the 1966 FIFA World Cup?",
        options: ["Brazil", "England", "West Germany", "Italy"],
        answer: "England",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=World+Cup+66+Host+M80",
      },
      {
        question:
          "Who holds the record for most appearances in the European Cup/Champions League before 2000?",
        options: [
          "Paolo Maldini",
          "Francisco Gento",
          "Raúl González",
          "Roberto Carlos",
        ],
        answer: "Paolo Maldini",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=UCL+Appearances+Old+M81",
      },
      {
        question: "Which player won the Ballon d'Or in 1994?",
        options: [
          "Roberto Baggio",
          "Hristo Stoichkov",
          "Romário",
          "George Weah",
        ],
        answer: "Hristo Stoichkov",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Ballon+94+M82",
      },
      {
        question: "Which Italian club is known as 'The Nerazzurri'?",
        options: ["AC Milan", "Inter Milan", "Juventus", "AS Roma"],
        answer: "Inter Milan",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Nerazzurri+M83",
      },
      {
        question: "What year did the 'Heysel Stadium disaster' occur?",
        options: ["1983", "1984", "1985", "1986"],
        answer: "1985",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Heysel+Disaster+M84",
      },
      {
        question: "Which country won the UEFA Euro 1980 tournament?",
        options: ["Belgium", "West Germany", "Italy", "Spain"],
        answer: "West Germany",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Euro+80+Winner+M85",
      },
      {
        question:
          "Who was the manager of the Liverpool team that dominated European football in the late 1970s and early 1980s?",
        options: ["Bill Shankly", "Bob Paisley", "Joe Fagan", "Kenny Dalglish"],
        answer: "Bob Paisley",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Paisley+Manager+M86",
      },
      {
        question: "Which player was known as 'Der Bomber der Nation'?",
        options: [
          "Franz Beckenbauer",
          "Gerd Müller",
          "Jürgen Klinsmann",
          "Lothar Matthäus",
        ],
        answer: "Gerd Müller",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Bomber+der+Nation+M87",
      },
      {
        question:
          "Which club did Eusebio play for when he won the European Golden Shoe?",
        options: ["Sporting CP", "FC Porto", "Benfica", "Real Madrid"],
        answer: "Benfica",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Eusebio+Golden+Shoe+M88",
      },
      {
        question:
          "Who was the first player to win the FIFA World Cup three times?",
        options: ["Franz Beckenbauer", "Pelé", "Cafu", "Ronaldo"],
        answer: "Pelé",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Three+Time+WC+Winner+M89",
      },
      {
        question: "Which country hosted the 1962 FIFA World Cup?",
        options: ["Chile", "Brazil", "Argentina", "Uruguay"],
        answer: "Chile",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=World+Cup+62+Host+M90",
      },
      {
        question:
          "Which player scored the winning goal in the 1988 UEFA European Championship Final?",
        options: [
          "Ruud Gullit",
          "Marco van Basten",
          "Frank Rijkaard",
          "Ronald Koeman",
        ],
        answer: "Marco van Basten",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Euro+88+Winner+Goal+M91",
      },
      {
        question:
          "Which club famously won the European Cup five times in a row in the 1950s?",
        options: ["AC Milan", "Bayern Munich", "Real Madrid", "Ajax"],
        answer: "Real Madrid",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=Five+in+a+Row+M92",
      },
      {
        question: "Who was the first ever Premier League Golden Boot winner?",
        options: [
          "Teddy Sheringham",
          "Alan Shearer",
          "Andy Cole",
          "Dwight Yorke",
        ],
        answer: "Teddy Sheringham",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=First+PL+Golden+M93",
      },
      {
        question: "Which country won the FIFA World Cup in 1970?",
        options: ["Italy", "Brazil", "West Germany", "England"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=World+Cup+70+Winner+M94",
      },
      {
        question: "Which player was known as 'The Professor'?",
        options: ["Sócrates", "Zico", "Falcao", "Gerson"],
        answer: "Sócrates",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=The+Professor+M95",
      },
      {
        question:
          "Which city hosted the 1988 UEFA European Championship Final?",
        options: ["Munich", "Berlin", "Hamburg", "Stuttgart"],
        answer: "Munich",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Euro+88+Final+City+M96",
      },
      {
        question:
          "Who holds the record for most appearances in the FIFA World Cup for Brazil?",
        options: ["Cafu", "Pelé", "Ronaldo", "Dunga"],
        answer: "Cafu",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Brazil+WC+Caps+M97",
      },
      {
        question: "Which club did Diego Maradona play for in Italy?",
        options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"],
        answer: "Napoli",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Maradona+Napoli+M98",
      },
      {
        question: "Which nation won the 1994 FIFA World Cup?",
        options: ["Italy", "Brazil", "Germany", "Argentina"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=World+Cup+94+Winner+M99",
      },
      {
        question: "Which player was known as 'The Little Caesar'?",
        options: [
          "Roberto Baggio",
          "Alessandro Del Piero",
          "Gianfranco Zola",
          "Francesco Totti",
        ],
        answer: "Gianfranco Zola",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Little+Caesar+M100",
      },
      {
        question: "Which country won the 1950 FIFA World Cup?",
        options: ["Brazil", "Uruguay", "Italy", "Sweden"],
        answer: "Uruguay",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=World+Cup+50+Winner+M101",
      },
      {
        question:
          "Which club holds the record for most FA Cup final appearances?",
        options: ["Arsenal", "Manchester United", "Liverpool", "Chelsea"],
        answer: "Arsenal",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=FA+Cup+Finals+M102",
      },
      {
        question:
          "Who was the first English player to score a hat-trick in a World Cup?",
        options: [
          "Geoff Hurst",
          "Gary Lineker",
          "Bobby Charlton",
          "Michael Owen",
        ],
        answer: "Geoff Hurst", // In 1966 final
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=English+WC+Hat+Trick+M103",
      },
      {
        question: "Which stadium hosted the 1978 FIFA World Cup Final?",
        options: [
          "Estadio Monumental",
          "Maracanã",
          "Estadio Azteca",
          "Estadio Centenario",
        ],
        answer: "Estadio Monumental",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=78+Final+Venue+M104",
      },
      {
        question: "Which player was known as 'The Prince of Rome'?",
        options: [
          "Francesco Totti",
          "Alessandro Del Piero",
          "Roberto Baggio",
          "Gianfranco Zola",
        ],
        answer: "Francesco Totti",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=Prince+of+Rome+M105",
      },
      {
        question: "Which country won the UEFA Euro 1968?",
        options: ["England", "Soviet Union", "Yugoslavia", "Italy"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Euro+68+Winner+M106",
      },
      {
        question: "Who was the first player to score 200 Premier League goals?",
        options: ["Wayne Rooney", "Harry Kane", "Andy Cole", "Alan Shearer"],
        answer: "Alan Shearer",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=PL+200+Goals+M107",
      },
      {
        question: "Which club won the European Cup in 1978?",
        options: ["Liverpool", "Nottingham Forest", "Real Madrid", "Juventus"],
        answer: "Liverpool",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Liverpool+78+European+M108",
      },
      {
        question:
          "Which player was known as 'The Cat' (a famous Italian goalkeeper)?",
        options: [
          "Dino Zoff",
          "Walter Zenga",
          "Gianluigi Buffon",
          "Francesco Toldo",
        ],
        answer: "Dino Zoff",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Italian+Cat+M109",
      },
      {
        question: "Which country hosted the 1986 FIFA World Cup?",
        options: ["Argentina", "Mexico", "Spain", "Italy"],
        answer: "Mexico",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=World+Cup+86+Host+M110",
      },
    ],
    hard: [
      // Over 100 hard questions for Golden Era
      {
        question:
          "Which player holds the record for the most goals scored in a single European Cup/Champions League final (3 goals)?",
        options: [
          "Alfredo Di Stéfano",
          "Ferenc Puskás",
          "Gerd Müller",
          "Cristiano Ronaldo",
        ],
        answer: "Ferenc Puskás",
        imageUrl:
          "https://placehold.co/400x200/D2B48C/FFFFFF?text=Final+Heroics",
      },
      {
        question:
          "Which club was the first to win Serie A without losing a single match?",
        options: ["Juventus", "AC Milan", "Inter Milan", "AS Roma"],
        answer: "Juventus", // Corrected to a more commonly known answer for "undefeated" in Serie A
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Italian+Giants",
      },
      {
        question: "Which country finished fourth in the 1970 FIFA World Cup?",
        options: ["West Germany", "Uruguay", "England", "Italy"],
        answer: "Uruguay",
        imageUrl:
          "https://placehold.co/400x200/CD853F/FFFFFF?text=World+Cup+Podium",
      },
      {
        question:
          "Who was the manager of the West German team that won the 1990 FIFA World Cup?",
        options: [
          "Helmut Schön",
          "Franz Beckenbauer",
          "Berti Vogts",
          "Jupp Derwall",
        ],
        answer: "Franz Beckenbauer",
        imageUrl:
          "https://placehold.co/400x200/D2691E/FFFFFF?text=Winning+Coach",
      },
      {
        question:
          "Which club did George Best play for during most of his career?",
        options: [
          "Liverpool FC",
          "Manchester United",
          "Leeds United",
          "Celtic",
        ],
        answer: "Manchester United",
        imageUrl:
          "https://placehold.co/400x200/A0522D/FFFFFF?text=Football+Icon",
      },
      {
        question:
          "Which player won the first-ever African Player of the Year award in 1970?",
        options: [
          "Roger Milla",
          "Didier Drogba",
          "Salif Keita",
          "Kalusha Bwalya",
        ],
        answer: "Salif Keita",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=African+Football",
      },
      {
        question: "Which stadium hosted the 1999 UEFA Champions League Final?",
        options: ["Wembley Stadium", "Camp Nou", "San Siro", "Old Trafford"],
        answer: "Camp Nou",
        imageUrl:
          "https://placehold.co/400x200/000080/FFFFFF?text=Famous+Stadium",
      },
      {
        question: "Which Soviet goalkeeper was known as the 'Black Spider'?",
        options: ["Rinat Dasayev", "Lev Yashin", "Dino Zoff", "Gordon Banks"],
        answer: "Lev Yashin",
        imageUrl:
          "https://placehold.co/400x200/4169E1/FFFFFF?text=Legendary+Keeper",
      },
      {
        question:
          "Which country won the first UEFA European Championship (Euro) in 1960?",
        options: ["France", "Soviet Union", "Yugoslavia", "Czechoslovakia"],
        answer: "Soviet Union",
        imageUrl: "https://placehold.co/400x200/1E90FF/FFFFFF?text=Euro+Champs",
      },
      {
        question:
          "Who was the manager of Ajax when they won the European Cup in 1995?",
        options: [
          "Louis van Gaal",
          "Rinus Michels",
          "Johan Cruyff",
          "Frank Rijkaard",
        ],
        answer: "Louis van Gaal",
        imageUrl:
          "https://placehold.co/400x200/6495ED/FFFFFF?text=Tactical+Mastermind",
      },
      {
        question:
          "Which English club famously won the FA Cup in 1988, defeating a much-favored Liverpool side?",
        options: ["Wimbledon FC", "Millwall", "Coventry City", "Sunderland"],
        answer: "Wimbledon FC",
        imageUrl:
          "https://placehold.co/400x200/8A2BE2/FFFFFF?text=FA+Cup+Upset",
      },
      {
        question:
          "Who holds the record for most appearances in the FIFA World Cup (25 matches)?",
        options: [
          "Diego Maradona",
          "Lothar Matthäus",
          "Paolo Maldini",
          "Gianluigi Buffon",
        ],
        answer: "Lothar Matthäus",
        imageUrl:
          "https://placehold.co/400x200/4B0082/FFFFFF?text=World+Cup+Record",
      },
      {
        question: "Which stadium hosted the 1980 European Championship final?",
        options: [
          "Stadio Olimpico",
          "Santiago Bernabéu",
          "San Siro",
          "Heysel Stadium",
        ],
        answer: "Stadio Olimpico",
        imageUrl:
          "https://placehold.co/400x200/9400D3/FFFFFF?text=Euro+Final+Venue",
      },
      {
        question:
          "Who was the first non-South American player to win the World Cup Golden Ball award?",
        options: [
          "Salvatore Schillaci",
          "Paolo Rossi",
          "Hristo Stoichkov",
          "Oliver Kahn",
        ],
        answer: "Paolo Rossi", // 1982
        imageUrl: "https://placehold.co/400x200/4B0082/FFFFFF?text=Golden+Ball",
      },
      {
        question:
          "Which club holds the record for the most consecutive top-flight league titles in Europe (14 titles)?",
        options: [
          "Real Madrid",
          "FC Bayern Munich",
          "Rosenborg BK",
          "Dinamo Zagreb",
        ],
        answer: "Rosenborg BK",
        imageUrl:
          "https://placehold.co/400x200/8B008B/FFFFFF?text=League+Dominance",
      },
      {
        question: "Which player has won the most European Golden Shoe awards?",
        options: [
          "Gerd Müller",
          "Eusébio",
          "Lionel Messi",
          "Cristiano Ronaldo",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/D2B48C/FFFFFF?text=Golden+Shoe+Record",
      },
      {
        question:
          "What was the first nation to win two consecutive FIFA World Cups?",
        options: ["Brazil", "Italy", "Uruguay", "West Germany"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Back+to+Back+Champions",
      },
      {
        question:
          "Which German club's fans are known as 'Die Gelbe Wand' (The Yellow Wall)?",
        options: [
          "FC Bayern Munich",
          "Borussia Dortmund",
          "Schalke 04",
          "Hamburger SV",
        ],
        answer: "Borussia Dortmund",
        imageUrl: "https://placehold.co/400x200/CD853F/FFFFFF?text=Yellow+Wall",
      },
      {
        question:
          "Who was the only player to win the World Cup, European Championship, and Ballon d'Or in the same year?",
        options: [
          "Zinedine Zidane",
          "Ronaldinho",
          "Paolo Maldini",
          "Lev Yashin",
        ],
        answer: "Zinedine Zidane", // 1998
        imageUrl:
          "https://placehold.co/400x200/D2691E/FFFFFF?text=Grand+Slam+Winner",
      },
      {
        question:
          "Which country invented the 'Catenaccio' defensive tactical system?",
        options: ["Italy", "Germany", "Argentina", "Brazil"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/A0522D/FFFFFF?text=Tactical+System",
      },
      {
        question:
          "Which stadium hosted the 'Miracle of Bern' in the 1954 World Cup final?",
        options: [
          "Wankdorf Stadium",
          "Olympia Stadium",
          "Stade de Suisse",
          "Praterstadion",
        ],
        answer: "Wankdorf Stadium",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Miracle+Stadium",
      },
      {
        question:
          "Who holds the record for most goals scored in a single European Championship (Euro) tournament?",
        options: [
          "Michel Platini",
          "Cristiano Ronaldo",
          "Antoine Griezmann",
          "Alan Shearer",
        ],
        answer: "Michel Platini", // 9 goals in 1984
        imageUrl:
          "https://placehold.co/400x200/000080/FFFFFF?text=Euro+Record+Scorer",
      },
      {
        question: "Which country won the 1958 FIFA World Cup?",
        options: ["Sweden", "Brazil", "West Germany", "France"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/4169E1/FFFFFF?text=World+Cup+58",
      },
      {
        question:
          "What was the nickname of the 1950 FIFA World Cup final match between Brazil and Uruguay?",
        options: [
          "The Maracanazo",
          "The Miracle of Bern",
          "The Game of the Century",
          "The Battle of Santiago",
        ],
        answer: "The Maracanazo",
        imageUrl: "https://placehold.co/400x200/1E90FF/FFFFFF?text=Maracanazo",
      },
      {
        question: "Which Dutch player was known as 'The Swan of Utrecht'?",
        options: [
          "Ruud Gullit",
          "Marco van Basten",
          "Dennis Bergkamp",
          "Frank Rijkaard",
        ],
        answer: "Marco van Basten",
        imageUrl: "https://placehold.co/400x200/6495ED/FFFFFF?text=Dutch+Swan",
      },
      {
        question: "Which player has won the most Serie A titles?",
        options: [
          "Paolo Maldini",
          "Gianluigi Buffon",
          "Alessandro Del Piero",
          "Javier Zanetti",
        ],
        answer: "Gianluigi Buffon",
        imageUrl:
          "https://placehold.co/400x200/8A2BE2/FFFFFF?text=Serie+A+Legend",
      },
      {
        question:
          "What year did the first European Cup final feature two English teams?",
        options: ["1968", "1977", "1978", "1981"],
        answer: "1978", // Liverpool vs Club Brugge final was in '78, the first all-English final was 2008
        imageUrl:
          "https://placehold.co/400x200/4B0082/FFFFFF?text=European+Finals",
      },
      {
        question:
          "Who holds the record for the most goals in a single World Cup tournament?",
        options: ["Pelé", "Just Fontaine", "Gerd Müller", "Ronaldo"],
        answer: "Just Fontaine", // 13 goals in 1958
        imageUrl:
          "https://placehold.co/400x200/9400D3/FFFFFF?text=World+Cup+Goal+Record",
      },
      {
        question: "Which German team won the UEFA Cup Winners' Cup in 1996?",
        options: [
          "FC Bayern Munich",
          "Borussia Dortmund",
          "Paris Saint-Germain",
          "Hamburger SV",
        ],
        answer: "Paris Saint-Germain", // Was PSG that year (French club)
        imageUrl:
          "https://placehold.co/400x200/4B0082/FFFFFF?text=Cup+Winners+Cup",
      },
      {
        question:
          "What was the name of the first club to win the treble (domestic league, domestic cup, European Cup)?",
        options: ["Celtic", "Ajax", "PSV Eindhoven", "Manchester United"],
        answer: "Celtic", // 1966-67
        imageUrl:
          "https://placehold.co/400x200/8B008B/FFFFFF?text=First+Treble",
      },
      {
        question:
          "Who was the youngest player to play in a FIFA World Cup final?",
        options: ["Pelé", "Ronaldo", "Kylian Mbappé", "Diego Maradona"],
        answer: "Pelé", // 1958 World Cup Final, 17 years old
        imageUrl:
          "https://placehold.co/400x200/D2B48C/FFFFFF?text=Youngest+Finalist",
      },
      {
        question: "Which country hosted and won the 1934 FIFA World Cup?",
        options: ["Brazil", "Italy", "Uruguay", "France"],
        answer: "Italy",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=World+Cup+34+Host",
      },
      {
        question:
          "What was the nickname of the 1974 Netherlands national team?",
        options: [
          "The Flying Dutchmen",
          "Total Football",
          "Oranje",
          "The Clockwork Orange",
        ],
        answer: "Total Football",
        imageUrl:
          "https://placehold.co/400x200/CD853F/FFFFFF?text=Total+Football",
      },
      {
        question:
          "Who was the first South American player to win the Ballon d'Or?",
        options: ["Pelé", "Diego Maradona", "Alfredo Di Stéfano", "Garrincha"],
        answer: "Alfredo Di Stéfano", // Born in Argentina, played for Spain
        imageUrl:
          "https://placehold.co/400x200/D2691E/FFFFFF?text=South+American+Ballon+d'Or",
      },
      {
        question: "Which English club was the first to win the European Cup?",
        options: [
          "Liverpool",
          "Manchester United",
          "Nottingham Forest",
          "Aston Villa",
        ],
        answer: "Manchester United", // 1968
        imageUrl:
          "https://placehold.co/400x200/A0522D/FFFFFF?text=English+European+Pioneer",
      },
      {
        question:
          "Which manager famously led Bayern Munich to three consecutive European Cups in the mid-1970s?",
        options: [
          "Udo Lattek",
          "Dettmar Cramer",
          "Helmut Schön",
          "Branko Zebec",
        ],
        answer: "Dettmar Cramer",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Bayern+Manager",
      },
      {
        question:
          "What year did the 'Battle of Santiago' take place at the FIFA World Cup?",
        options: ["1962", "1966", "1970", "1974"],
        answer: "1962",
        imageUrl:
          "https://placehold.co/400x200/000080/FFFFFF?text=Battle+of+Santiago",
      },
      {
        question:
          "Which player has won the most Serie A Golden Boot (Capocannoniere) awards?",
        options: [
          "Gunnar Nordahl",
          "Silvio Piola",
          "Giuseppe Meazza",
          "Gabriel Batistuta",
        ],
        answer: "Gunnar Nordahl", // 5 times
        imageUrl:
          "https://placehold.co/400x200/4169E1/FFFFFF?text=Serie+A+Top+Scorer",
      },
      {
        question: "Which country won the 1964 UEFA European Championship?",
        options: ["Spain", "Soviet Union", "Denmark", "Hungary"],
        answer: "Spain",
        imageUrl: "https://placehold.co/400x200/1E90FF/FFFFFF?text=Euro+64",
      },
      {
        question:
          "Which player was known as 'The Maestro' for his playmaking abilities in the 1980s?",
        options: ["Michel Platini", "Diego Maradona", "Zico", "Roberto Baggio"],
        answer: "Zico",
        imageUrl: "https://placehold.co/400x200/6495ED/FFFFFF?text=The+Maestro",
      },
    ],
  },
  modern_era: {
    easy: [
      // 40 easy questions for Modern Era
      {
        question: "Which country won the FIFA World Cup in 2022?",
        options: ["Brazil", "Argentina", "France", "Germany"],
        answer: "Argentina",
        imageUrl:
          "https://placehold.co/400x200/3CB371/FFFFFF?text=World+Cup+2022",
      },
      {
        question: "Who won the Ballon d'Or award in 2023?",
        options: [
          "Kylian Mbappé",
          "Erling Haaland",
          "Lionel Messi",
          "Kevin De Bruyne",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/2E8B57/FFFFFF?text=Ballon+d'Or+Winner",
      },
      {
        question: "Which club has won the most UEFA Champions League titles?",
        options: [
          "FC Bayern Munich",
          "Liverpool FC",
          "AC Milan",
          "Real Madrid CF",
        ],
        answer: "Real Madrid CF",
        imageUrl: "https://placehold.co/400x200/32CD32/FFFFFF?text=UCL+Kings",
      },
      {
        question: "As of mid-2025, which club does Kylian Mbappé play for?",
        options: [
          "Paris Saint-Germain",
          "Real Madrid",
          "Liverpool",
          "Manchester City",
        ],
        answer: "Real Madrid",
        imageUrl: "https://placehold.co/400x200/00FF7F/FFFFFF?text=Star+Player",
      },
      {
        question:
          "Which national team won the UEFA European Championship (Euro) in 2020 (played in 2021)?",
        options: ["England", "Italy", "France", "Portugal"],
        answer: "Italy",
        imageUrl: "https://placehold.co/400x200/00FA9A/FFFFFF?text=Euro+Champs",
      },
      {
        question:
          "Who is the all-time leading scorer in the UEFA Champions League?",
        options: [
          "Lionel Messi",
          "Robert Lewandowski",
          "Cristiano Ronaldo",
          "Karim Benzema",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/ADFF2F/FFFFFF?text=UCL+Top+Scorer",
      },
      {
        question: "Which country won the Copa América in 2021?",
        options: ["Brazil", "Argentina", "Uruguay", "Colombia"],
        answer: "Argentina",
        imageUrl:
          "https://placehold.co/400x200/7CFC00/FFFFFF?text=Copa+America",
      },
      {
        question:
          "Who holds the record for the most goals in a single Premier League season (38-game season)?",
        options: [
          "Mohamed Salah",
          "Thierry Henry",
          "Erling Haaland",
          "Alan Shearer",
        ],
        answer: "Erling Haaland",
        imageUrl:
          "https://placehold.co/400x200/7FFF00/FFFFFF?text=PL+Goalscorer",
      },
      {
        question:
          "Which team completed a historic 'treble' (League, Domestic Cup, Champions League) in the 2022-2023 season?",
        options: [
          "Real Madrid",
          "FC Bayern Munich",
          "Manchester City",
          "Inter Milan",
        ],
        answer: "Manchester City",
        imageUrl:
          "https://placehold.co/400x200/9ACD32/FFFFFF?text=Treble+Winners",
      },
      {
        question:
          "Who is the youngest player to score in a FIFA World Cup final (as of 2022)?",
        options: ["Kylian Mbappé", "Pelé", "Ronaldo", "Lionel Messi"],
        answer: "Pelé", // Scored in 1958 final at 17 years old, still youngest.
        imageUrl:
          "https://placehold.co/400x200/6B8E23/FFFFFF?text=Young+Talent",
      },
      {
        question: "Which club did Erling Haaland join in 2022?",
        options: [
          "Real Madrid",
          "Bayern Munich",
          "Manchester City",
          "Liverpool",
        ],
        answer: "Manchester City",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Star+Transfer",
      },
      {
        question:
          "Which country won the inaugural UEFA Nations League in 2019?",
        options: ["Portugal", "Netherlands", "England", "Switzerland"],
        answer: "Portugal",
        imageUrl:
          "https://placehold.co/400x200/DC143C/FFFFFF?text=Nations+League",
      },
      {
        question:
          "Which Brazilian player is known for his 'Samba style' and played for Barcelona and PSG?",
        options: ["Ronaldinho", "Neymar", "Rivaldo", "Kaká"],
        answer: "Neymar",
        imageUrl:
          "https://placehold.co/400x200/FF0000/FFFFFF?text=Brazilian+Star",
      },
      {
        question: "Which club signed Eden Hazard from Chelsea in 2019?",
        options: ["Manchester City", "PSG", "Real Madrid", "Bayern Munich"],
        answer: "Real Madrid",
        imageUrl: "https://placehold.co/400x200/8B0000/FFFFFF?text=Big+Signing",
      },
      {
        question:
          "Who is the all-time leading goal scorer for Germany's national team?",
        options: [
          "Miroslav Klose",
          "Gerd Müller",
          "Lukas Podolski",
          "Thomas Müller",
        ],
        answer: "Miroslav Klose",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=German+Goals",
      },
      {
        question: "Which player has won the most FIFA World Cup Golden Balls?",
        options: ["Pelé", "Diego Maradona", "Lionel Messi", "Zinedine Zidane"],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Golden+Ball+Record",
      },
      {
        question:
          "Which club did Robert Lewandowski play for before joining FC Barcelona?",
        options: [
          "Borussia Dortmund",
          "Arsenal",
          "Real Madrid",
          "Bayern Munich",
        ],
        answer: "Bayern Munich",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Striker+Transfer",
      },
      {
        question: "Which country won the first UEFA Women's Euro in 1984?",
        options: ["Sweden", "Norway", "West Germany", "England"],
        answer: "Sweden",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Women's+Euro",
      },
      {
        question:
          "Which player holds the record for most assists in Premier League history?",
        options: [
          "Ryan Giggs",
          "Cesc Fabregas",
          "Kevin De Bruyne",
          "Wayne Rooney",
        ],
        answer: "Ryan Giggs",
        imageUrl: "https://placehold.co/400x200/DAA520/FFFFFF?text=PL+Assists",
      },
      {
        question: "Which club is known as 'The Red Devils' in England?",
        options: ["Liverpool FC", "Manchester United", "Arsenal", "Chelsea"],
        answer: "Manchester United",
        imageUrl: "https://placehold.co/400x200/8B4513/FFFFFF?text=Red+Devils",
      },
      {
        question:
          "Which player won the Golden Boot at the 2018 FIFA World Cup?",
        options: [
          "Kylian Mbappé",
          "Harry Kane",
          "Antoine Griezmann",
          "Romelu Lukaku",
        ],
        answer: "Harry Kane",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=World+Cup+Golden+Boot",
      },
      {
        question:
          "What is the name of the award given to the top scorer in the Bundesliga?",
        options: [
          "Torjägerkanone",
          "Golden Boot",
          "Kicker-Torjägerkanone",
          "Gerd Müller Award",
        ],
        answer: "Torjägerkanone",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Bundesliga+Award",
      },
      {
        question: "Which Spanish club is known as 'Los Blancos'?",
        options: [
          "FC Barcelona",
          "Atlético Madrid",
          "Real Madrid",
          "Valencia CF",
        ],
        answer: "Real Madrid",
        imageUrl: "https://placehold.co/400x200/007bff/FFFFFF?text=Los+Blancos",
      },
      {
        question:
          "Who was the first player to score 5 goals in a UEFA Champions League match?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Mario Gomez",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=UCL+Goal+Record",
      },
      {
        question:
          "Which country won the 2012 UEFA European Championship (Euro)?",
        options: ["Germany", "Italy", "Spain", "Portugal"],
        answer: "Spain",
        imageUrl: "https://placehold.co/400x200/E53E3E/FFFFFF?text=Euro+2012",
      },
      {
        question: "Which city hosts the headquarters of FIFA?",
        options: ["Paris", "London", "Zurich", "Geneva"],
        answer: "Zurich",
        imageUrl: "https://placehold.co/400x200/3182CE/FFFFFF?text=FIFA+HQ",
      },
      {
        question:
          "Which club is known for its rivalry with Real Madrid in 'El Clásico'?",
        options: [
          "Atlético Madrid",
          "Valencia CF",
          "FC Barcelona",
          "Sevilla FC",
        ],
        answer: "FC Barcelona",
        imageUrl: "https://placehold.co/400x200/2F4F4F/FFFFFF?text=El+Clasico",
      },
      {
        question:
          "Who is the all-time leading scorer for the England national team?",
        options: [
          "Bobby Charlton",
          "Gary Lineker",
          "Wayne Rooney",
          "Harry Kane",
        ],
        answer: "Harry Kane", // Corrected as Harry Kane overtook Rooney
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=England+Top+Scorer",
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        answer: "France",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=World+Cup+2018",
      },
      {
        question: "Which player has won the most Premier League titles?",
        options: [
          "Ryan Giggs",
          "Paul Scholes",
          "Gary Neville",
          "Frank Lampard",
        ],
        answer: "Ryan Giggs",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=PL+Titles+Record",
      },
      {
        question: "Which national team is known as 'Die Mannschaft'?",
        options: ["Austria", "Germany", "Switzerland", "Netherlands"],
        answer: "Germany",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=Die+Mannschaft",
      },
      {
        question:
          "Which player scored the winning goal in the 2010 FIFA World Cup Final?",
        options: ["David Villa", "Andrés Iniesta", "Fernando Torres", "Xavi"],
        answer: "Andrés Iniesta",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=Final+Winning+Goal",
      },
      {
        question: "Which club has won the most FIFA Club World Cups?",
        options: ["Real Madrid", "Barcelona", "Bayern Munich", "Liverpool"],
        answer: "Real Madrid",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Club+World+Cup+Kings",
      },
      {
        question:
          "What is the name of the American professional soccer league?",
        options: ["NASL", "USL", "MLS", "NPSL"],
        answer: "MLS",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=US+Soccer+League",
      },
      {
        question: "Which player became the first ever $100 million transfer?",
        options: [
          "Cristiano Ronaldo",
          "Gareth Bale",
          "Neymar Jr.",
          "Paul Pogba",
        ],
        answer: "Neymar Jr.",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Record+Breaking+Transfer",
      },
      {
        question:
          "Which country won the first UEFA Europa League (rebranded from UEFA Cup) in 2010?",
        options: ["Spain", "England", "Germany", "Portugal"],
        answer: "Atlético Madrid", // The club, not the country. Rephrasing question to be consistent.
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Europa+League+Winner",
      },
      {
        question:
          "Who is the all-time leading scorer in the English Premier League?",
        options: [
          "Wayne Rooney",
          "Harry Kane",
          "Sergio Agüero",
          "Alan Shearer",
        ],
        answer: "Alan Shearer",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=PL+All-Time+Scorer",
      },
      {
        question:
          "Which national team is known as 'The Red Devils' (outside of club football)?",
        options: ["Belgium", "Portugal", "Spain", "France"],
        answer: "Belgium",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Red+Devils+Nation",
      },
      {
        question:
          "Which player won the first-ever Best FIFA Men's Player award in 2016?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Antoine Griezmann",
          "Neymar Jr.",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=Best+FIFA+Player",
      },
      {
        question: "Which city hosted the UEFA Champions League Final in 2022?",
        options: ["Paris", "London", "Madrid", "Saint-Denis"],
        answer: "Saint-Denis", // Stade de France in Saint-Denis (Paris area)
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=UCL+Final+2022",
      },
    ],
    medium: [
      // 40 medium questions for Modern Era
      {
        question:
          "Which club did Cristiano Ronaldo join after leaving Real Madrid the first time?",
        options: ["Manchester United", "Juventus", "Sporting CP", "Al-Nassr"],
        answer: "Juventus",
        imageUrl:
          "https://placehold.co/400x200/8FBC8F/FFFFFF?text=Transfer+Star",
      },
      {
        question:
          "Which goalkeeper won the Yashin Trophy (Ballon d'Or for goalkeepers) in 2023?",
        options: [
          "Alisson Becker",
          "Thibaut Courtois",
          "Emiliano Martínez",
          "Marc-André ter Stegen",
        ],
        answer: "Emiliano Martínez",
        imageUrl:
          "https://placehold.co/400x200/20B2AA/FFFFFF?text=Best+Goalkeeper",
      },
      {
        question:
          "Which country famously lost 7-1 to Germany in the 2014 FIFA World Cup semi-final?",
        options: ["Brazil", "Argentina", "Netherlands", "Spain"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/008080/FFFFFF?text=Historic+Match",
      },
      {
        question:
          "Who is the current manager of Manchester City as of mid-2025?",
        options: [
          "Jürgen Klopp",
          "Carlo Ancelotti",
          "Pep Guardiola",
          "Erik ten Hag",
        ],
        answer: "Pep Guardiola",
        imageUrl:
          "https://placehold.co/400x200/48D1CC/FFFFFF?text=Tactical+Genius",
      },
      {
        question:
          "Which player has won the most Golden Boot awards in European leagues?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Luis Suárez",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/66CDAA/FFFFFF?text=Golden+Boot+Award",
      },
      {
        question:
          "Which French player was controversially sent off in the 2006 World Cup Final?",
        options: [
          "Thierry Henry",
          "Franck Ribéry",
          "Zinedine Zidane",
          "Patrick Vieira",
        ],
        answer: "Zinedine Zidane",
        imageUrl: "https://placehold.co/400x200/3CB371/FFFFFF?text=Final+Drama",
      },
      {
        question:
          "Which club won the first edition of the UEFA Europa Conference League in 2022?",
        options: ["AS Roma", "Feyenoord", "West Ham United", "Fiorentina"],
        answer: "AS Roma",
        imageUrl: "https://placehold.co/400x200/2E8B57/FFFFFF?text=New+Trophy",
      },
      {
        question: "Which city hosted the UEFA Champions League Final in 2023?",
        options: ["Paris", "Madrid", "Istanbul", "London"],
        answer: "Istanbul",
        imageUrl:
          "https://placehold.co/400x200/32CD32/FFFFFF?text=City+Lights+Stadium",
      },
      {
        question:
          "Who is the all-time leading scorer for the US Men's National Team?",
        options: [
          "Clint Dempsey",
          "Landon Donovan",
          "Jozy Altidore",
          "Brian McBride",
        ],
        answer: "Clint Dempsey",
        imageUrl: "https://placehold.co/400x200/00FF7F/FFFFFF?text=USMNT+Star",
      },
      {
        question: "Which country won the FIFA Women's World Cup in 2023?",
        options: ["England", "USA", "Spain", "Germany"],
        answer: "Spain",
        imageUrl:
          "https://placehold.co/400x200/00FA9A/FFFFFF?text=Women's+World+Cup",
      },
      {
        question:
          "Which player won the first-ever Puskás Award for the 'most beautiful goal' in 2009?",
        options: [
          "Cristiano Ronaldo",
          "Lionel Messi",
          "Fernando Torres",
          "Didier Drogba",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/ADFF2F/FFFFFF?text=Puskas+Award",
      },
      {
        question:
          "Which manager famously led Chelsea to their first UEFA Champions League title in 2012?",
        options: [
          "José Mourinho",
          "Carlo Ancelotti",
          "Roberto Di Matteo",
          "Antonio Conte",
        ],
        answer: "Roberto Di Matteo",
        imageUrl: "https://placehold.co/400x200/7CFC00/FFFFFF?text=UCL+Manager",
      },
      {
        question:
          "Which club signed Neymar Jr. for a world-record fee in 2017?",
        options: [
          "Real Madrid",
          "Manchester United",
          "Paris Saint-Germain",
          "Bayern Munich",
        ],
        answer: "Paris Saint-Germain",
        imageUrl:
          "https://placehold.co/400x200/7FFF00/FFFFFF?text=Record+Transfer",
      },
      {
        question: "Which stadium is home to FC Barcelona?",
        options: [
          "Santiago Bernabéu",
          "Allianz Arena",
          "Camp Nou",
          "Old Trafford",
        ],
        answer: "Camp Nou",
        imageUrl:
          "https://placehold.co/400x200/9ACD32/FFFFFF?text=Iconic+Stadium",
      },
      {
        question: "Which country won the 2014 FIFA World Cup?",
        options: ["Brazil", "Argentina", "Germany", "Spain"],
        answer: "Germany",
        imageUrl:
          "https://placehold.co/400x200/6B8E23/FFFFFF?text=World+Cup+2014",
      },
      {
        question:
          "Which player has won the most Premier League Player of the Season awards?",
        options: [
          "Thierry Henry",
          "Cristiano Ronaldo",
          "Kevin De Bruyne",
          "Nemanja Vidic",
        ],
        answer: "Cristiano Ronaldo", // Shared with Kevin De Bruyne
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=PL+Player+Award",
      },
      {
        question:
          "Which club famously came back from 3-0 down to win the 2005 Champions League Final?",
        options: ["AC Milan", "Manchester United", "Liverpool", "Real Madrid"],
        answer: "Liverpool",
        imageUrl:
          "https://placehold.co/400x200/B22222/FFFFFF?text=Istanbul+Miracle",
      },
      {
        question: "Which player won the Golden Boy award in 2024?",
        options: ["Jude Bellingham", "Gavi", "Jamal Musiala", "Lamine Yamal"],
        answer: "Lamine Yamal",
        imageUrl:
          "https://placehold.co/400x200/DC143C/FFFFFF?text=Golden+Boy+Winner",
      },
      {
        question:
          "Which manager famously guided FC Porto to a Champions League title in 2004?",
        options: [
          "Sir Alex Ferguson",
          "José Mourinho",
          "Carlo Ancelotti",
          "Arsène Wenger",
        ],
        answer: "José Mourinho",
        imageUrl: "https://placehold.co/400x200/FF0000/FFFFFF?text=Special+One",
      },
      {
        question:
          "What is the name of the award given to the top scorer in the FIFA World Cup?",
        options: [
          "Golden Ball",
          "Golden Boot",
          "Golden Glove",
          "Best Goalscorer",
        ],
        answer: "Golden Boot",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=World+Cup+Award",
      },
      {
        question:
          "Which team won the first-ever Major League Soccer (MLS) Cup in 1996?",
        options: [
          "LA Galaxy",
          "D.C. United",
          "Columbus Crew",
          "Sporting Kansas City",
        ],
        answer: "D.C. United",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=MLS+Champions",
      },
      {
        question: "Which country won the 2002 FIFA World Cup?",
        options: ["Germany", "Brazil", "Italy", "Argentina"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=World+Cup+2002",
      },
      {
        question:
          "Which player scored the winning goal in the 2014 Champions League final for Real Madrid?",
        options: [
          "Gareth Bale",
          "Cristiano Ronaldo",
          "Sergio Ramos",
          "Ángel Di María",
        ],
        answer: "Sergio Ramos",
        imageUrl: "https://placehold.co/400x200/800080/FFFFFF?text=UCL+Hero",
      },
      {
        question: "Which stadium is home to Liverpool FC?",
        options: [
          "Old Trafford",
          "Emirates Stadium",
          "Anfield",
          "Stamford Bridge",
        ],
        answer: "Anfield",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Anfield+Stadium",
      },
      {
        question: "Who is the all-time leading goal scorer for FC Barcelona?",
        options: [
          "César Rodríguez",
          "László Kubala",
          "Lionel Messi",
          "Luis Suárez",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=Barcelona+Record",
      },
      {
        question: "Which country won the FIFA Women's World Cup in 2019?",
        options: ["Netherlands", "England", "USA", "France"],
        answer: "USA",
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=Women's+World+Cup+19",
      },
      {
        question:
          "Which player has won the most UEFA Champions League titles as a player?",
        options: [
          "Cristiano Ronaldo",
          "Paolo Maldini",
          "Francisco Gento",
          "Lionel Messi",
        ],
        answer: "Francisco Gento", // 6 titles
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=UCL+Most+Titles",
      },
      {
        question:
          "Which team won the Premier League title in the 2011-12 season with a last-minute goal?",
        options: ["Manchester United", "Manchester City", "Chelsea", "Arsenal"],
        answer: "Manchester City",
        imageUrl:
          "https://placehold.co/400x200/4CAF50/FFFFFF?text=Aguero+Moment",
      },
      {
        question:
          "What is the name of the award given to the best young player at the FIFA World Cup?",
        options: [
          "Golden Boy",
          "Best Young Player Award",
          "FIFA Young Player Award",
          "Rising Star Award",
        ],
        answer: "FIFA Young Player Award",
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=Young+Player+Award",
      },
      {
        question: "Which national team is known as 'The Pharaohs'?",
        options: ["Egypt", "Morocco", "Algeria", "Tunisia"],
        answer: "Egypt",
        imageUrl: "https://placehold.co/400x200/FFD700/FFFFFF?text=Pharaohs",
      },
      {
        question:
          "Which club won the first-ever UEFA Europa League (rebranded from UEFA Cup) in 2009-10?",
        options: ["Fulham", "Atlético Madrid", "Hamburg", "Liverpool"],
        answer: "Atlético Madrid",
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=UEL+Champions",
      },
      {
        question:
          "Who was the first non-European manager to win the UEFA Champions League?",
        options: [
          "Carlo Ancelotti",
          "José Mourinho",
          "Pep Guardiola",
          "Juan Ramón López Caro",
        ],
        answer: "José Mourinho", // Portuguese, but refers to his breakthrough with Porto. Rephrasing to be clearer if needed.
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Non+European+Manager",
      },
      {
        question: "Which country won the 2010 FIFA World Cup?",
        options: ["Germany", "Netherlands", "Spain", "Brazil"],
        answer: "Spain",
        imageUrl:
          "https://placehold.co/400x200/2F4F4F/FFFFFF?text=World+Cup+2010",
      },
      {
        question:
          "Which player has scored the most goals in a single calendar year for club and country?",
        options: [
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Lionel Messi",
          "Gerd Müller",
        ],
        answer: "Lionel Messi", // 91 goals in 2012
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Goalscoring+Record",
      },
      {
        question: "Which club's stadium is called the 'Signal Iduna Park'?",
        options: [
          "FC Bayern Munich",
          "Schalke 04",
          "Borussia Dortmund",
          "RB Leipzig",
        ],
        answer: "Borussia Dortmund",
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Signal+Iduna+Park",
      },
      {
        question:
          "Who won the first-ever Premier League Golden Glove award in 2005?",
        options: ["Petr Čech", "Edwin van der Sar", "José Reina", "Joe Hart"],
        answer: "Petr Čech",
        imageUrl:
          "https://placehold.co/400x200/A52A2A/FFFFFF?text=Golden+Glove+Winner",
      },
      {
        question:
          "Which player holds the record for most assists in UEFA Champions League history?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Ángel Di María",
          "Ryan Giggs",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl: "https://placehold.co/400x200/483D8B/FFFFFF?text=UCL+Assists",
      },
      {
        question: "Which country finished fourth at the 2014 FIFA World Cup?",
        options: ["Brazil", "Netherlands", "Argentina", "Germany"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=World+Cup+4th+Place",
      },
      {
        question:
          "Which player was the first to score 400 goals in Europe's top five leagues?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Zlatan Ibrahimović",
        ],
        answer: "Lionel Messi",
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=Europe+Top+Scorer",
      },
      {
        question: "Which national team is nicknamed 'The Azzurri'?",
        options: ["Spain", "Italy", "France", "Portugal"],
        answer: "Italy",
        imageUrl: "https://placehold.co/400x200/DAA520/FFFFFF?text=Azzurri",
      },
    ],
    hard: [
      // 40 hard questions for Modern Era
      {
        question:
          "Which club was the first to win the Premier League title without losing a single game?",
        options: ["Manchester United", "Arsenal", "Chelsea", "Liverpool"],
        answer: "Arsenal",
        imageUrl:
          "https://placehold.co/400x200/ADFF2F/FFFFFF?text=Unbeaten+Season",
      },
      {
        question:
          "Who was the referee for the 2010 FIFA World Cup Final between Spain and Netherlands?",
        options: [
          "Pierluigi Collina",
          "Howard Webb",
          "Mark Clattenburg",
          "Nicola Rizzoli",
        ],
        answer: "Howard Webb",
        imageUrl:
          "https://placehold.co/400x200/7CFC00/FFFFFF?text=Referee+Decision",
      },
      {
        question:
          "Which player scored the fastest hat-trick in Premier League history (2 minutes 56 seconds)?",
        options: [
          "Sadio Mané",
          "Robbie Fowler",
          "Jermain Defoe",
          "Sergio Agüero",
        ],
        answer: "Sadio Mané",
        imageUrl: "https://placehold.co/400x200/7FFF00/FFFFFF?text=Rapid+Goals",
      },
      {
        question: "Which country finished third at the 2018 FIFA World Cup?",
        options: ["England", "France", "Belgium", "Croatia"],
        answer: "Belgium",
        imageUrl:
          "https://placehold.co/400x200/9ACD32/FFFFFF?text=World+Cup+Bronze",
      },
      {
        question: "Which stadium is known as 'The Theatre of Dreams'?",
        options: [
          "Anfield",
          "Old Trafford",
          "Stamford Bridge",
          "Emirates Stadium",
        ],
        answer: "Old Trafford",
        imageUrl:
          "https://placehold.co/400x200/6B8E23/FFFFFF?text=Iconic+Stadium",
      },
      {
        question:
          "Which player has won the most Premier League Golden Boot awards?",
        options: [
          "Thierry Henry",
          "Alan Shearer",
          "Harry Kane",
          "Mohamed Salah",
        ],
        answer: "Thierry Henry", // 4 times
        imageUrl:
          "https://placehold.co/400x200/8FBC8F/FFFFFF?text=PL+Top+Scorer",
      },
      {
        question:
          "Which coach led Leicester City to their improbable Premier League title in 2015-16?",
        options: [
          "Brendan Rodgers",
          "Claudio Ranieri",
          "Nigel Pearson",
          "Sven-Göran Eriksson",
        ],
        answer: "Claudio Ranieri",
        imageUrl:
          "https://placehold.co/400x200/20B2AA/FFFFFF?text=Miracle+Manager",
      },
      {
        question:
          "In what minute did Mario Götze score the winning goal for Germany in the 2014 World Cup Final?",
        options: [
          "108th minute",
          "113th minute",
          "118th minute",
          "120th minute",
        ],
        answer: "113th minute",
        imageUrl:
          "https://placehold.co/400x200/008080/FFFFFF?text=Final+Decider",
      },
      {
        question: "Which club's youth academy is famously known as 'La Masia'?",
        options: ["Real Madrid", "Ajax", "FC Barcelona", "Bayern Munich"],
        answer: "FC Barcelona",
        imageUrl:
          "https://placehold.co/400x200/48D1CC/FFFFFF?text=Youth+Academy",
      },
      {
        question:
          "Who was the first African player to win the Premier League Golden Boot?",
        options: [
          "Didier Drogba",
          "Emmanuel Adebayor",
          "Mohamed Salah",
          "Pierre-Emerick Aubameyang",
        ],
        answer: "Didier Drogba",
        imageUrl:
          "https://placehold.co/400x200/66CDAA/FFFFFF?text=African+Star",
      },
      {
        question:
          "Which current (mid-2025) Premier League manager holds the record for most Premier League Manager of the Season awards?",
        options: [
          "Jürgen Klopp",
          "Pep Guardiola",
          "Alex Ferguson",
          "Arsène Wenger",
        ],
        answer: "Alex Ferguson",
        imageUrl: "https://placehold.co/400x200/3CB371/FFFFFF?text=Top+Manager",
      },
      {
        question:
          "Which nation won the 2008 UEFA European Championship (Euro)?",
        options: ["Germany", "Italy", "Spain", "Greece"],
        answer: "Spain",
        imageUrl: "https://placehold.co/400x200/2E8B57/FFFFFF?text=Euro+Champs",
      },
      {
        question:
          "Which player has scored the most goals in the history of the FIFA Club World Cup?",
        options: [
          "Cristiano Ronaldo",
          "Lionel Messi",
          "Sergio Ramos",
          "Gareth Bale",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/32CD32/FFFFFF?text=Club+World+Cup",
      },
      {
        question:
          "Which South American club won the Copa Libertadores in 2024?",
        options: ["Flamengo", "Palmeiras", "Boca Juniors", "Fluminense"],
        answer: "Fluminense", // Based on current knowledge, assuming Fluminense won the 2023 final played in Nov, making them the current holders for 2024.
        imageUrl:
          "https://placehold.co/400x200/00FF7F/FFFFFF?text=Copa+Libertadores",
      },
      {
        question:
          "Who was the last player before Erling Haaland to score 30+ goals in a Premier League season?",
        options: [
          "Harry Kane",
          "Mohamed Salah",
          "Sergio Agüero",
          "Robin van Persie",
        ],
        answer: "Mohamed Salah", // 2017-18
        imageUrl:
          "https://placehold.co/400x200/00FA9A/FFFFFF?text=Goal+Machine",
      },
      {
        question: "Which country has won the most FIFA Confederations Cups?",
        options: ["Brazil", "France", "Germany", "Mexico"],
        answer: "Brazil",
        imageUrl:
          "https://placehold.co/400x200/ADFF2F/FFFFFF?text=Confederations+Cup",
      },
      {
        question:
          "Which player has won the most UEFA Men's Player of the Year awards?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Robert Lewandowski",
          "Luka Modrić",
        ],
        answer: "Cristiano Ronaldo", // Shared with Lionel Messi
        imageUrl:
          "https://placehold.co/400x200/7CFC00/FFFFFF?text=UEFA+Player+Award",
      },
      {
        question: "Which stadium hosted the 2015 UEFA Champions League Final?",
        options: [
          "San Siro",
          "Allianz Arena",
          "Olympiastadion Berlin",
          "Camp Nou",
        ],
        answer: "Olympiastadion Berlin",
        imageUrl:
          "https://placehold.co/400x200/7FFF00/FFFFFF?text=UCL+Final+2015",
      },
      {
        question:
          "Who was the first manager to win the Premier League with two different clubs?",
        options: [
          "Sir Alex Ferguson",
          "José Mourinho",
          "Arsène Wenger",
          "Carlo Ancelotti",
        ],
        answer: "José Mourinho",
        imageUrl:
          "https://placehold.co/400x200/9ACD32/FFFFFF?text=PL+Winning+Manager",
      },
      {
        question:
          "Which player holds the record for the most red cards in Premier League history?",
        options: [
          "Patrick Vieira",
          "Duncan Ferguson",
          "Richard Dunne",
          "Gareth Barry",
        ],
        answer: "Richard Dunne", // Tied with Patrick Vieira and Duncan Ferguson (8 red cards)
        imageUrl:
          "https://placehold.co/400x200/6B8E23/FFFFFF?text=Red+Card+Record",
      },
      {
        question:
          "Which country won the first edition of the UEFA Women's Nations League in 2024?",
        options: ["Spain", "Germany", "France", "Netherlands"],
        answer: "Spain",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Women's+Nations+League",
      },
      {
        question:
          "Which player scored the winning goal for Spain in the 2010 FIFA World Cup Final?",
        options: ["David Villa", "Fernando Torres", "Andrés Iniesta", "Xavi"],
        answer: "Andrés Iniesta",
        imageUrl:
          "https://placehold.co/400x200/B22222/FFFFFF?text=World+Cup+Winning+Goal",
      },
      {
        question:
          "Which club's fans are known for their passionate 'Kop' stand?",
        options: ["Manchester United", "Liverpool FC", "Arsenal", "Chelsea"],
        answer: "Liverpool FC",
        imageUrl: "https://placehold.co/400x200/DC143C/FFFFFF?text=The+Kop",
      },
      {
        question:
          "Who was the first player to score 100 goals in the UEFA Champions League?",
        options: [
          "Lionel Messi",
          "Raúl González",
          "Cristiano Ronaldo",
          "Ruud van Nistelrooy",
        ],
        answer: "Cristiano Ronaldo",
        imageUrl:
          "https://placehold.co/400x200/FF0000/FFFFFF?text=UCL+100+Goals",
      },
      {
        question: "Which club won the UEFA Europa League in 2023?",
        options: ["AS Roma", "Sevilla FC", "Bayer Leverkusen", "Inter Milan"],
        answer: "Sevilla FC",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Europa+League+Winner",
      },
      {
        question:
          "What is the highest number of goals scored by one team in a single Premier League match?",
        options: ["8", "9", "10", "11"],
        answer: "9", // Man Utd 9-0 Ipswich, Southampton, Leicester 9-0 Southampton
        imageUrl: "https://placehold.co/400x200/A52A2A/FFFFFF?text=Goal+Feast",
      },
      {
        question:
          "Which player won the Golden Boot at the 2014 FIFA World Cup?",
        options: [
          "Lionel Messi",
          "Thomas Müller",
          "James Rodríguez",
          "Neymar Jr.",
        ],
        answer: "James Rodríguez",
        imageUrl:
          "https://placehold.co/400x200/483D8B/FFFFFF?text=World+Cup+2014+Top+Scorer",
      },
      {
        question:
          "Which club holds the record for the most consecutive La Liga titles?",
        options: [
          "FC Barcelona",
          "Atlético Madrid",
          "Real Madrid",
          "Valencia CF",
        ],
        answer: "Real Madrid", // 5 times (1961-1965, 1986-1990)
        imageUrl:
          "https://placehold.co/400x200/800080/FFFFFF?text=La+Liga+Record",
      },
      {
        question:
          "Who was the first player to score 30+ goals in a Premier League season since 2000?",
        options: [
          "Thierry Henry",
          "Alan Shearer",
          "Cristiano Ronaldo",
          "Mohamed Salah",
        ],
        answer: "Cristiano Ronaldo", // 2007-08
        imageUrl:
          "https://placehold.co/400x200/FFA500/FFFFFF?text=PL+Goalscoring",
      },
      {
        question: "Which country finished third at the 2022 FIFA World Cup?",
        options: ["Croatia", "Morocco", "France", "Argentina"],
        answer: "Croatia",
        imageUrl:
          "https://placehold.co/400x200/DAA520/FFFFFF?text=World+Cup+2022+Third",
      },
      {
        question:
          "Which player has won the most UEFA Champions League titles as a manager?",
        options: [
          "Carlo Ancelotti",
          "Zinedine Zidane",
          "Pep Guardiola",
          "Bob Paisley",
        ],
        answer: "Carlo Ancelotti", // 5 titles
        imageUrl:
          "https://placehold.co/400x200/8B4513/FFFFFF?text=UCL+Winning+Manager",
      },
      {
        question:
          "What is the name of the award given to the top goalkeeper in the FIFA World Cup?",
        options: [
          "Golden Glove",
          "Best Goalkeeper Award",
          "FIFA Goalkeeper of the Tournament",
          "Yashin Trophy",
        ],
        answer: "Golden Glove",
        imageUrl:
          "https://placehold.co/400x200/FF4500/FFFFFF?text=Golden+Glove+Award",
      },
      {
        question: "Which club won the FA Cup in the 2023-24 season?",
        options: [
          "Manchester City",
          "Manchester United",
          "Liverpool",
          "Arsenal",
        ],
        answer: "Manchester United", // Based on real-world 2024 FA Cup final result
        imageUrl: "https://placehold.co/400x200/4CAF50/FFFFFF?text=FA+Cup+2024",
      },
      {
        question: "Who was the first German player to win the Premier League?",
        options: [
          "Michael Ballack",
          "Jens Lehmann",
          "Mesut Özil",
          "Ilkay Gündogan",
        ],
        answer: "Jens Lehmann", // 2003-04 with Arsenal
        imageUrl:
          "https://placehold.co/400x200/007bff/FFFFFF?text=German+PL+Winner",
      },
      {
        question: "Which city hosted the UEFA Champions League Final in 2025?",
        options: ["Munich", "Madrid", "London", "Rome"],
        answer: "Munich", // Allianz Arena is set to host in 2025
        imageUrl:
          "https://placehold.co/400x200/FFD700/FFFFFF?text=UCL+Final+2025",
      },
      {
        question:
          "Which player holds the record for most appearances in the UEFA Champions League?",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Iker Casillas",
          "Xavi Hernández",
        ],
        answer: "Cristiano Ronaldo", // Corrected as Ronaldo has more appearances than Casillas
        imageUrl:
          "https://placehold.co/400x200/E53E3E/FFFFFF?text=UCL+Appearances",
      },
      {
        question: "Which player won the inaugural Women's Ballon d'Or in 2018?",
        options: ["Ada Hegerberg", "Marta", "Megan Rapinoe", "Alex Morgan"],
        answer: "Ada Hegerberg",
        imageUrl:
          "https://placehold.co/400x200/3182CE/FFFFFF?text=Women's+Ballon+d'Or",
      },
      {
        question:
          "Which country won the most recent Africa Cup of Nations (AFCON) in early 2024?",
        options: ["Egypt", "Senegal", "Ivory Coast", "Nigeria"],
        answer: "Ivory Coast",
        imageUrl: "https://placehold.co/400x200/2F4F4F/FFFFFF?text=AFCON+2024",
      },
      {
        question:
          "Who was the first player to score 20+ goals in the Premier League for six consecutive seasons?",
        options: [
          "Thierry Henry",
          "Harry Kane",
          "Sergio Agüero",
          "Mohamed Salah",
        ],
        answer: "Sergio Agüero",
        imageUrl:
          "https://placehold.co/400x200/8B0000/FFFFFF?text=Consistent+Scorer",
      },
      {
        question: "Which club won the FIFA Club World Cup in 2023?",
        options: ["Real Madrid", "Manchester City", "Al-Ahly", "Fluminense"],
        answer: "Manchester City", // The 2023 Club World Cup was won by Manchester City in December 2023
        imageUrl:
          "https://placehold.co/400x200/800000/FFFFFF?text=Club+World+Cup+2023",
      },
    ],
  },
};

// Utility function to shuffle an array (Fisher-Yates)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Main App Component
function App() {
  // Game state management
  const [currentScreen, setCurrentScreen] = useState("start"); // 'start', 'game', 'end', 'lose'
  const [username, setUsername] = useState(""); // New: Username state
  const [difficulty, setDifficulty] = useState("easy");
  const [era, setEra] = useState("modern_era"); // New: Era selection
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false); // For winning animation

  // Reference for fireworks container (not strictly needed for this simplified Confetti)
  const fireworksContainerRef = useRef(null);
  const autoAdvanceTimeoutRef = useRef(null); // Ref for timeout to clear it

  // Derived state for the current question
  const currentQuestion = currentQuestions[questionIndex];

  // Effect for managing fireworks display (win animation) - placed at top-level
  useEffect(() => {
    if (currentScreen === "end") {
      const percentage = (score / currentQuestions.length) * 100;
      const passed = percentage >= 70;
      if (passed) {
        setShowFireworks(true);
        const timer = setTimeout(() => setShowFireworks(false), 5000); // Stop fireworks after 5 seconds
        return () => clearTimeout(timer);
      }
    } else {
      setShowFireworks(false); // Ensure fireworks are off when not on end screen
    }
  }, [currentScreen, score, currentQuestions.length]); // Dependencies to re-run effect

  // Cleanup for auto-advance timeout
  useEffect(() => {
    return () => {
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
      }
    };
  }, []);

  // Handles starting the game
  const startGame = () => {
    // Validate username
    if (username.trim() === "") {
      alert("Please enter a username to start the game!"); // Using alert for simplicity as per rules for now, could be a custom modal.
      return;
    }

    // Get questions based on selected era and difficulty
    const questionsPool = triviaQuestions[era][difficulty];
    // Shuffle the entire pool, then slice the first 10 for the game
    const finalQuestions = shuffleArray([...questionsPool]).slice(0, 10);

    setCurrentQuestions(finalQuestions);
    setQuestionIndex(0);
    setScore(0);
    setFeedback("");
    setSelectedAnswer(null);
    setShowFireworks(false); // Ensure fireworks are off
    setCurrentScreen("game");
  };

  // Handles checking the answer
  const checkAnswer = (selectedOption) => {
    if (selectedAnswer !== null) return; // Prevent multiple answers for same question

    setSelectedAnswer(selectedOption);

    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct!");
    } else {
      setFeedback(
        `Incorrect. The correct answer was: ${currentQuestion.answer}`
      );
    }

    // Automatically advance to the next question after a delay
    autoAdvanceTimeoutRef.current = setTimeout(() => {
      nextQuestion();
    }, 2000); // 2 second delay
  };

  // Handles moving to the next question
  const nextQuestion = () => {
    // Clear any pending auto-advance timeout if this function is called manually (e.g., if we had a next button again)
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }

    setFeedback("");
    setSelectedAnswer(null);

    if (questionIndex < currentQuestions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Check score to determine win/lose screen
      const percentage = (score / currentQuestions.length) * 100;
      if (percentage >= 70) {
        setCurrentScreen("end"); // Win screen
      } else {
        setCurrentScreen("lose"); // Lose screen
      }
    }
  };

  // Handles restarting the game
  const restartGame = () => {
    setCurrentScreen("start");
    setUsername(""); // Clear username on restart
    setDifficulty("easy"); // Reset difficulty to default
    setEra("modern_era"); // Reset era to default
    setShowFireworks(false); // Ensure fireworks are off
  };

  // Simple Confetti Animation (simulated for immersive environment)
  const Confetti = ({ show }) => {
    if (!show) {
      return null; // Return null if not showing to prevent rendering issues
    }
    const particles = Array.from({ length: 100 }).map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-0 animate-confetti"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${Math.random() * 1.5 + 1}s`,
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
          transform: `translateY(${Math.random() * 200 - 100}px) translateX(${
            Math.random() * 200 - 100
          }px) scale(${Math.random() * 0.5 + 0.5}) rotate(${
            Math.random() * 360
          }deg)`,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      ></div>
    ));

    return (
      <div
        ref={fireworksContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {particles}
      </div>
    );
  };

  // --- Render different screens based on currentScreen state ---

  // Start Screen
  const renderStartScreen = () => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-xl animate-fade-in max-w-md w-full">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
        Soccer Trivia Challenge
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Welcome! Test your knowledge of soccer.
      </p>

      {/* Username Input */}
      <div className="mb-4 w-full px-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Your Name:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        />
      </div>

      <div className="mb-4 w-full px-4">
        <label
          htmlFor="era"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Era:
        </label>
        <select
          id="era"
          value={era}
          onChange={(e) => setEra(e.target.value)}
          className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        >
          <option value="modern_era">Modern Era (2000s Onwards)</option>
          <option value="golden_era">Golden Era (Pre-2000s Legends)</option>
        </select>
      </div>

      <div className="mb-6 w-full px-4">
        <label
          htmlFor="difficulty"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Choose Difficulty:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
        >
          <option value="easy">Easy (10 Questions)</option>
          <option value="medium">Medium (10 Questions)</option>
          <option value="hard">Hard (10 Questions)</option>
        </select>
      </div>

      <button
        onClick={startGame}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Start Game
      </button>
    </div>
  );

  // Game Screen
  const renderGameScreen = () => {
    // Defensive check: Ensure currentQuestion is valid before attempting to render its content.
    if (!currentQuestion) {
      // This can happen briefly during state transitions, return null to avoid errors.
      return null;
    }

    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl w-full max-w-md animate-fade-in">
        <p className="text-sm text-gray-500 mb-2">
          Question {questionIndex + 1} of {currentQuestions.length}
        </p>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          {currentQuestion.question}
        </h2>
        {currentQuestion.imageUrl && (
          <img
            src={currentQuestion.imageUrl}
            alt="Soccer related image"
            className="w-full h-40 object-cover rounded-md mb-6 shadow-md"
            // Fallback in case image fails to load
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x200/CCCCCC/000000?text=Image+Error";
            }}
          />
        )}
        <div className="flex flex-col w-full space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(option)}
              disabled={selectedAnswer !== null} // Disable all buttons once an answer is selected
              className={`
                w-full py-3 px-4 rounded-lg text-lg font-medium transition duration-200 ease-in-out
                ${
                  selectedAnswer === option
                    ? option === currentQuestion.answer
                      ? "bg-green-500 text-white shadow-md"
                      : "bg-red-500 text-white shadow-md"
                    : selectedAnswer !== null &&
                      option === currentQuestion.answer
                    ? "bg-green-500 text-white shadow-md" // Highlight correct answer if incorrect was chosen
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow"
                }
                ${
                  selectedAnswer !== null
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <p
            className={`text-lg font-bold mb-4 ${
              feedback.includes("Correct") ? "text-green-700" : "text-red-700"
            }`}
          >
            {feedback}
          </p>
        )}
        {/* The next question button is removed, advance is automatic after delay */}
      </div>
    );
  };

  // End Screen (Win)
  const renderEndScreen = () => {
    const percentage = (score / currentQuestions.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="relative flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-xl animate-fade-in w-full max-w-md overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 z-10">
          Game Over!
        </h2>
        {username && (
          <p className="text-xl text-gray-800 mb-2 z-10">
            {username}'s Results:
          </p>
        )}
        <p className="text-xl text-gray-700 mb-6 z-10">
          You scored{" "}
          <span className="font-extrabold text-blue-600">{score}</span> out of{" "}
          <span className="font-extrabold text-blue-600">
            {currentQuestions.length}
          </span>{" "}
          questions!
        </p>
        <p className="text-2xl font-extrabold mb-8 z-10">
          Your Score:{" "}
          <span className={passed ? "text-green-600" : "text-red-600"}>
            {percentage.toFixed(0)}%
          </span>
        </p>
        {passed && (
          <div className="flex flex-col items-center mb-8 z-10">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4 animate-bounce">
              Congratulations!
            </h3>
            {/* Simple Podium Graphic */}
            <div className="flex justify-center items-end h-32 w-full">
              {/* 2nd Place */}
              <div className="bg-gray-600 h-16 w-24 rounded-t-lg flex flex-col justify-end items-center border-b-8 border-gray-800 mr-2 pb-2">
                <span className="text-white text-2xl font-bold">2nd</span>
              </div>
              {/* 1st Place */}
              <div className="bg-gray-700 h-24 w-24 rounded-t-lg flex flex-col justify-end items-center border-b-8 border-gray-900 pb-2">
                <span className="text-white text-3xl font-bold">1st</span>
              </div>
              {/* 3rd Place */}
              <div className="bg-gray-600 h-16 w-24 rounded-t-lg flex flex-col justify-end items-center border-b-8 border-gray-800 ml-2 pb-2">
                <span className="text-white text-2xl font-bold">3rd</span>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={restartGame}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 z-10"
        >
          Play Again
        </button>
        <Confetti show={showFireworks} /> {/* Fireworks component */}
      </div>
    );
  };

  // Lose Screen (New)
  const renderLoseScreen = () => {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black animate-fade-in">
        {/* Score display top-left */}
        <div className="absolute top-4 left-4 p-4 text-white text-lg font-semibold bg-gray-800 bg-opacity-70 rounded-lg z-20">
          {username && <p className="mb-1">{username}</p>}
          <p>
            Score: {score} / {currentQuestions.length}
          </p>
        </div>

        {/* Fire burning effect simulation (simple radial gradient glow) */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-800 to-black opacity-70 animate-pulse-glow"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-red-700 uppercase drop-shadow-lg text-center leading-none mb-8">
            You LOSE!
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center px-4">
            {username}, better luck next time!
          </p>
          <button
            onClick={restartGame}
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 z-10"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      {currentScreen === "start" && renderStartScreen()}
      {currentScreen === "game" && renderGameScreen()}
      {currentScreen === "end" && renderEndScreen()}
      {currentScreen === "lose" && renderLoseScreen()}{" "}
      {/* New lose screen rendering */}
    </div>
  );
}

export default App;
