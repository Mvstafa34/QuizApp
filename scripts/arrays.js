let questionsCoding = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "Colorful Style Sheets",
        "answer_2": "Computer Style Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Creative Style Sheets",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wie schreibt man eine IF-Bedingung in JavaScript?",
        "answer_1": "if i == 5 then",
        "answer_2": "if (i == 5)",
        "answer_3": "if i = 5",
        "answer_4": "if i = 5 then",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie sieht die korrekte CSS-Syntax aus?",
        "answer_1": "body {color: black;}",
        "answer_2": "body: color = black;",
        "answer_3": "{body: color = black;}",
        "answer_4": "{body; color: black;}",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie schreibt man eine FOR-Schleife in JavaScript?",
        "answer_1": "for (i = 0; i &lt;= 5; i++)",
        "answer_2": "for (i &lt;= 5; i++)",
        "answer_3": "for i = 1 to 5",
        "answer_4": "for (i = 0; i &lt;= 5)",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Welches HTML-Tag stellt die größte Überschrift dar?",
        "answer_1": "&lt;heading&gt;",
        "answer_2": "&lt;h1&gt;",
        "answer_3": "&lt;head&gt;",
        "answer_4": "&lt;h6&gt;",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Welche CSS-Eigenschaft ändert die Textgröße?",
        "answer_1": "font-style",
        "answer_2": "text-style",
        "answer_3": "text-size",
        "answer_4": "font-size",
        "right_answer": 4,
        "chosen_answer": 0
    },
    {
        "question": 'Wie schreibt man "Hello World" in die Konsole?',
        "answer_1": "print('Hello World');",
        "answer_2": "console.log('Hello World');",
        "answer_3": "alert('Hello World');",
        "answer_4": "console.print('Hello World');",
        "right_answer": 2,
        "chosen_answer": 0
    }
];


let questionsFitness = [
    {
        "question": "Welche Sportart verbrennt die meisten Kalorien?",
        "answer_1": "Schwimmen",
        "answer_2": "Laufen",
        "answer_3": "Radfahren",
        "answer_4": "Boxen",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": 'Was versteht man unter "Bodybuilding"?',
        "answer_1": "Stärker werden",
        "answer_2": "Dünner werden",
        "answer_3": "Muskel aufbauen",
        "answer_4": "Fitter werden",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": 'Aminosäuren sind die "Bausteine" der...?',
        "answer_1": "Kohlenhydrate",
        "answer_2": "Eiweiße",
        "answer_3": "Fette",
        "answer_4": "Kalorien",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Welche Tätigkeit hilft NICHT gegen Seitenstechen?",
        "answer_1": "Viel trinken",
        "answer_2": "Bauchmuskel trainieren",
        "answer_3": "vor dem Sport nichts Essen",
        "answer_4": "Nasenatmung",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie viele Muskeln hat ein Mensch ungefähr?",
        "answer_1": "67",
        "answer_2": "9000",
        "answer_3": "650",
        "answer_4": "26",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wie entsteht Muskelkater?",
        "answer_1": "durch Risse in den Muskelfasern",
        "answer_2": "durch erhöhten Milchsäureanteil im Muskel",
        "answer_3": "durch Wachstum der Muskeln",
        "answer_4": "durch schlechte Ernährung",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Was ist KEINE Nahrungsergänzung?",
        "answer_1": "Kreatin",
        "answer_2": "Testosteron",
        "answer_3": "Glutamin",
        "answer_4": "Beta-Alanine",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Was ist der wichtigste Faktor beim Fettabbau?",
        "answer_1": "Häufigkeit der Mahlzeiten",
        "answer_2": "Essenszeitpunkt",
        "answer_3": "Anzahl der Kohlenhydrate",
        "answer_4": "Kaloriendefizit",
        "right_answer": 4,
        "chosen_answer": 0
    }
];


let questionsBitcoin = [
    {
        "question": "Wer hat Bitcoin erfunden?",
        "answer_1": "die CIA",
        "answer_2": "Elon Musk",
        "answer_3": "Satoshi Nakamoto (anonym)",
        "answer_4": "Forscher vom MIT",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Welches ist einer der Probleme die Bitcoin löst?",
        "answer_1": "Quantengravitation",
        "answer_2": "globale Erwärmung",
        "answer_3": "Bevölkerungswachstum",
        "answer_4": "Double Spending",
        "right_answer": 4,
        "chosen_answer": 0
    },
    {
        "question": "Wie viele Bitcoin werden maximal jemals existieren?",
        "answer_1": "21.000.000",
        "answer_2": "210.000.000",
        "answer_3": "1.000.000",
        "answer_4": "Unendlich",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie werden neue Bitcoins erzeugt?",
        "answer_1": "Durch Banken",
        "answer_2": "Durch Satoshi Nakamoto",
        "answer_3": "Durch Mining (Schürfprozess)",
        "answer_4": "Durch Tauschhandel",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Was ist die Blockchain?",
        "answer_1": "Aneinander gekettete Blöcke",
        "answer_2": "Zentrales Kassenbuch",
        "answer_3": "Verteiltes Kassenbuch aller Transaktionen",
        "answer_4": "Verkauf von Bitcoin",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Bitcoin ist ...?",
        "answer_1": "Pseudonym",
        "answer_2": "Dezentral",
        "answer_3": "Unveränderlich",
        "answer_4": "Alle oben genannten",
        "right_answer": 4,
        "chosen_answer": 0
    },
    {
        "question": "Wie heißt die kleinstmögliche Einheit an Bitcoins?",
        "answer_1": "Litecoin",
        "answer_2": "Bitcent",
        "answer_3": "Satoshi",
        "answer_4": "B-Cash",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wie viele Satoshi sind 1 Bitcoin",
        "answer_1": "500.000",
        "answer_2": "100.000.000",
        "answer_3": "100.000",
        "answer_4": "100.000.000.000",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Was ist das Bitcoin-Halving?",
        "answer_1": "Halbierung des Bitcoin-Preises",
        "answer_2": "Halbierung aller Gebühren",
        "answer_3": "Halbierung der Inflationsrate von Bitcoin",
        "answer_4": "Keins davon",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wann wurde Bitcoin erfunden?",
        "answer_1": "2001",
        "answer_2": "2009 (nach der Finanzkrise)",
        "answer_3": "2013",
        "answer_4": "Unbekannt",
        "right_answer": 2,
        "chosen_answer": 0
    },
];