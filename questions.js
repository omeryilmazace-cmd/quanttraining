const questions = [
    {
        id: "cards",
        title: "The Card Draw",
        category: "Probability",
        question: "A deck has 100 cards numbered 1 to 100. You draw two cards randomly. What is the probability that the SECOND card is larger than the FIRST?",
        options: ["1/4", "1/2", "1/3", "49/100"],
        correct: 1,
        logic: "Since the cards are unique, there are only İki possibility: A > B or B > A. Because the process is random and symmetric, both have the same 50% chance."
    },
    {
        id: "ants",
        title: "Ants on a Triangle",
        category: "Probability",
        question: "Three ants are at the corners of an equilateral triangle. Each starts moving along an edge at the same speed. What is the probability that no two ants collide?",
        options: ["1/4", "1/8", "1/2", "1/16"],
        correct: 0,
        logic: "Each ant can choose two directions independently (Clockwise or Counter-clockwise). In total there are 2x2x2 = 8 possible movement combinations. The ants only avoid collision if they ALL go CW or ALL go CCW. That's 2 paths out of 8, so 2/8 = 1/4."
    },
    {
        id: "coins",
        title: "Coin Separation",
        category: "Logic",
        question: "You have 100 coins, 10 are heads and 90 are tails. Blindfolded, you must divide them into İki groups such that BOTH have the same number of heads. What do you do?",
        options: [
            "Divide 50-50",
            "Take 10 coins and flip them all",
            "Take 10 coins and leave as is",
            "Take 90 coins and flip them"
        ],
        correct: 1,
        logic: "If you take 10 coins (x heads) and flip them, they become 10-x heads. This exactly matches the remaining 10-x heads in the group of 90."
    },
    {
        id: "ropes",
        title: "Burning Ropes",
        category: "Brain Teaser",
        question: "You have İki ropes that take exactly 1 hour to burn, but they burn unevenly. How do you measure exactly 45 minutes?",
        options: [
            "Burn one and guess the middle",
            "Burn both from both ends",
            "Light one from both ends + one from one end",
            "Ropes cannot measure 45 mins"
        ],
        correct: 2,
        logic: "Light Rope 1 from both ends and Rope 2 from one end. When Rope 1 finishes (30 mins), light the other end of Rope 2. Rope 2 will have 30 mins left, lighting the other end makes it 15 mins. Total: 30+15=45."
    },
    {
        id: "clock",
        title: "Clock Angle",
        category: "Geometry",
        question: "The time is exactly 3:15. What is the angle (in degrees) between the hour and minute hands?",
        options: ["0°", "15°", "7.5°", "5°"],
        correct: 2,
        logic: "At 15 minutes, the minute hand is at 90°. The hour hand moves 0.5° per minute. In 15 minutes, it moves 7.5° away from the 3:00 marker."
    },
    {
        id: "socks",
        title: "The Blind Sock Draw",
        category: "Probability",
        question: "You have 10 black socks and 10 white socks in a drawer. How many must you draw to ensure you have a matching pair?",
        options: ["2", "3", "11", "21"],
        correct: 1,
        logic: "By the Pigeonhole Principle, if you have 2 categories (socks) and draw 3 items, at least 2 must belong to the same category."
    },
    {
        id: "children",
        title: "Boy or Girl?",
        category: "Expected Value",
        question: "A country wants more girls. Every family has babies until a girl is born, then they stop. What is the expected ratio of girls to boys?",
        options: ["1:1", "2:1", "1:2", "Logarithmic"],
        correct: 0,
        logic: "Each birth is an independent 50/50 event. Even with the stopping rule, every single baby born in the country has a 50% chance of being a boy or a girl. The ratio remains 1:1."
    },
    {
        id: "dollar",
        title: "Missing Dollar",
        category: "Math/Logic",
        question: "3 guests pay $27 total (after $3 refund). Hotel has $25. Boy has $2. Guests think they lost $1 because 27+2=29. Where is it?",
        options: [
            "Calculation Error",
            "Accounting Illusion",
            "The Boy's pocket",
            "Inflation"
        ],
        correct: 1,
        logic: "The $27 paid already includes the $2 tip. 27 (total paid) = 25 (hotel) + 2 (boy). Adding 27 and 2 is mathematically meaningless."
    },
    {
        id: "rabbit",
        title: "Rabbit on a Path",
        category: "Probability",
        question: "A rabbit is at step 0. It can jump 1 step or 2 steps forward. To reach step 10, how many different paths are there?",
        options: ["10", "55", "89", "128"],
        correct: 2,
        logic: "This is a Fibonacci sequence problem (n) = f(n-1) + f(n-2). For step 10, it is the 11th Fibonacci number, which is 89."
    },
    {
        id: "elevator",
        title: "Elevator Scale",
        category: "Physics/Logic",
        question: "You stand on a scale in an elevator. When the elevator starts going UP, what happens to the weight shown?",
        options: ["Increases", "Decreases", "Stays same", "Goes to zero"],
        correct: 0,
        logic: "Acceleration upward (a) adds to gravity (g). The normal force N = m(g+a), so the scale shows a higher weight."
    }
];
