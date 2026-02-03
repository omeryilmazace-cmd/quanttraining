const questions = [
    {
        id: "cards",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "The Card Draw", tr: "Kart Çekme" },
        question: {
            en: "A deck has 100 cards numbered 1 to 100. You draw two cards randomly. What is the probability that the SECOND card is larger than the FIRST?",
            tr: "1'den 100'e kadar numaralandırılmış 100 kartlık bir desteden rastgele iki kart çekiyorsun. İkinci kartın birinciden daha büyük olma olasılığı nedir?"
        },
        options: {
            en: ["1/4", "1/2", "1/3", "49/100"],
            tr: ["1/4", "1/2", "1/3", "49/100"]
        },
        correct: 1,
        logic: {
            en: "Since the cards are unique, there are only two possibilities: A > B or B > A. Because the process is random and symmetric, both have the same 50% chance.",
            tr: "Numaralar farklı olduğu için sadece iki ihtimal var: A > B veya B > A. Süreç rastgele ve simetrik olduğu için her iki durumun da şansı %50'dir."
        }
    },
    {
        id: "ants",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "Ants on a Triangle", tr: "Üçgendeki Karıncalar" },
        question: {
            en: "Three ants are at the corners of an equilateral triangle. Each starts moving along an edge at the same speed. What is the probability that no two ants collide?",
            tr: "Eşkenar bir üçgenin köşelerinde üç karınca var. Her biri aynı hızla bir kenar boyunca hareket etmeye başlıyor. Herhangi iki karıncanın çarpışmama olasılığı nedir?"
        },
        options: {
            en: ["1/4", "1/8", "1/2", "1/16"],
            tr: ["1/4", "1/8", "1/2", "1/16"]
        },
        correct: 0,
        logic: {
            en: "Each ant can choose two directions independently (Clockwise or Counter-clockwise). In total there are 2x2x2 = 8 possible movement combinations. The ants only avoid collision if they ALL go CW or ALL go CCW. That's 2 paths out of 8, so 2/8 = 1/4.",
            tr: "Her karınca bağımsız olarak iki yön seçebilir (Saat yönü veya tersi). Toplamda 2x2x2 = 8 farklı hareket kombinasyonu vardır. Karıncalar sadece HEPSİ aynı yöne giderse çarpışmazlar. Bu 8'de 2 ihtimaldir, yani 1/4."
        }
    },
    {
        id: "coins",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "Coin Separation", tr: "Bozuk Para Ayırma" },
        question: {
            en: "You have 100 coins, 10 are heads and 90 are tails. Blindfolded, you must divide them into two groups such that BOTH have the same number of heads. What do you do?",
            tr: "100 bozuk paranız var, 10 tanesi tura ve 90 tanesi yazı. Gözleriniz bağlıyken, bunları her iki grupta da aynı sayıda tura olacak şekilde ikiye nasıl ayırırsınız?"
        },
        options: {
            en: ["Divide 50-50", "Take 10 coins and flip them all", "Take 10 coins and leave as is", "Take 90 coins and flip them"],
            tr: ["50-50 ayır", "10 tanesini al ve hepsini ters çevir", "10 tanesini al ve olduğu gibi bırak", "90 tanesini al ve çevir"]
        },
        correct: 1,
        logic: {
            en: "If you take 10 coins (x heads) and flip them, they become 10-x heads. This exactly matches the remaining 10-x heads in the group of 90.",
            tr: "Eğer 10 parayı (x tanesi tura olan) alıp ters çevirirseniz, o turalar yazıya dönüşür ve sonuçta 10-x tane tura elde edersiniz. Bu sayı, diğer 90'lık grupta kalan tura sayısıyla tam olarak eşleşir."
        }
    },
    {
        id: "ropes",
        category: { en: "Brain Teaser", tr: "Zihin Egzersizi" },
        title: { en: "Burning Ropes", tr: "Yanan İpler" },
        question: {
            en: "You have two ropes that take exactly 1 hour to burn, but they burn unevenly. How do you measure exactly 45 minutes?",
            tr: "Yanması tam 1 saat süren ancak düzensiz yanan iki ipiniz var. Tam olarak 45 dakikayı nasıl ölçersiniz?"
        },
        options: {
            en: ["Burn one and guess the middle", "Burn both from both ends", "Light one from both ends + one from one end", "Ropes cannot measure 45 mins"],
            tr: ["Birini yakıp ortasını göz kararı seç", "Her ikisini de her iki uçtan yak", "Birini iki uçtan, diğerini tek uçtan yak", "İplerle 45 dakika ölçülemez"]
        },
        correct: 2,
        logic: {
            en: "Light Rope 1 from both ends and Rope 2 from one end. When Rope 1 finishes (30 mins), light the other end of Rope 2. Rope 2 will have 30 mins left, lighting the other end makes it 15 mins. Total: 30+15=45.",
            tr: "1. ipi iki ucundan, 2. ipi tek ucundan yakın. 1. ip bittiğinde (30 dk), 2. ipin diğer ucunu da yakın. 2. ipin kalan 30 dakikası 15 dakikaya iner. Toplam: 30+15=45."
        }
    },
    {
        id: "clock",
        category: { en: "Geometry", tr: "Geometri" },
        title: { en: "Clock Angle", tr: "Saat Açısı" },
        question: {
            en: "The time is exactly 3:15. What is the angle (in degrees) between the hour and minute hands?",
            tr: "Saat tam 3:15. Akrep ve yelkovan arasındaki açı kaç derecedir?"
        },
        options: {
            en: ["0°", "15°", "7.5°", "5°"],
            tr: ["0°", "15°", "7.5°", "5°"]
        },
        correct: 2,
        logic: {
            en: "At 15 minutes, the minute hand is at 90°. The hour hand moves 0.5° per minute. In 15 minutes, it moves 7.5° away from the 3:00 marker.",
            tr: "Yelkovan 15. dakikada (90 derecede) durur. Akrep ise dakikada 0.5 derece ilerler. 15 dakikada 3.00 noktasından 7.5 derece uzaklaşmış olur."
        }
    },
    {
        id: "socks",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "The Blind Sock Draw", tr: "Kör Çorap Çekme" },
        question: {
            en: "You have 10 black socks and 10 white socks in a drawer. How many must you draw to ensure you have a matching pair?",
            tr: "Bir çekmecede 10 siyah ve 10 beyaz çorabınız var. Bir çift eşleşme garanti etmek için en az kaç çorap çekmelisiniz?"
        },
        options: {
            en: ["2", "3", "11", "21"],
            tr: ["2", "3", "11", "21"]
        },
        correct: 1,
        logic: {
            en: "By the Pigeonhole Principle, if you have 2 categories (socks) and draw 3 items, at least 2 must belong to the same category.",
            tr: "Güvercin Yuvası İlkesi'ne göre, 2 kategoriniz (siyah ve beyaz) varsa ve 3 nesne çekerseniz, en az 2 tanesi aynı kategoriye ait olmak zorundadır."
        }
    },
    {
        id: "children",
        category: { en: "Expected Value", tr: "Beklenen Değer" },
        title: { en: "Boy or Girl?", tr: "Erkek mi Kız mı?" },
        question: {
            en: "A country wants more girls. Every family has babies until a girl is born, then they stop. What is the expected ratio of girls to boys?",
            tr: "Bir ülke daha fazla kız çocuk istiyor. Her aile kız doğana kadar çocuk yapar ve kız doğunca durur. Kızların erkeklere beklenen oranı nedir?"
        },
        options: {
            en: ["1:1", "2:1", "1:2", "Logarithmic"],
            tr: ["1:1", "2:1", "1:2", "Logaritmik"]
        },
        correct: 0,
        logic: {
            en: "Each birth is an independent 50/50 event. Even with the stopping rule, every single baby born in the country has a 50% chance of being a boy or a girl. The ratio remains 1:1.",
            tr: "Her doğum bağımsız bir %50/%50 olayıdır. Durma kuralı olsa bile, doğan her bebeğin kız veya erkek olma şansı %50'dir. Toplam oran 1:1 kalır."
        }
    },
    {
        id: "dollar",
        category: { en: "Math/Logic", tr: "Matematik/Mantık" },
        title: { en: "Missing Dollar", tr: "Kayıp Dolar" },
        question: {
            en: "3 guests pay $27 total (after $3 refund). Hotel has $25. Boy has $2. Guests think they lost $1 because 27+2=29. Where is it?",
            tr: "3 misafir toplam 27 dolar öder. Otelin kasasında 25 dolar, çırağın cebinde 2 dolar vardır. 27+2=29 eder, kayıp 1 dolar nerededir?"
        },
        options: {
            en: ["Calculation Error", "Accounting Illusion", "The Boy's pocket", "Inflation"],
            tr: ["Hesap Hatası", "Muhasebe İllüzyonu", "Çırağın Cebinde", "Enflasyon"]
        },
        correct: 1,
        logic: {
            en: "The $27 paid already includes the $2 tip. 27 (total paid) = 25 (hotel) + 2 (boy). Adding 27 and 2 is mathematically meaningless.",
            tr: "Ödenen 27 dolar zaten çırağın 2 dolarlık bahşişini içerir. 27 (ödenen) = 25 (otel) + 2 (çırak). 27 ile 2'yi toplamak matematiksel olarak anlamsızdır."
        }
    },
    {
        id: "rabbit",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "Rabbit on a Path", tr: "Tavşan Yolu" },
        question: {
            en: "A rabbit is at step 0. It can jump 1 step or 2 steps forward. To reach step 10, how many different paths are there?",
            tr: "Bir tavşan 0. basamakta. Her seferinde 1 veya 2 basamak zıplayabiliyor. 10. basamağa ulaşmak için kaç farklı yol vardır?"
        },
        options: {
            en: ["10", "55", "89", "128"],
            tr: ["10", "55", "89", "128"]
        },
        correct: 2,
        logic: {
            en: "This is a Fibonacci sequence problem f(n) = f(n-1) + f(n-2). For step 10, it is the 11th Fibonacci number, which is 89.",
            tr: "Bu bir Fibonacci dizisi problemidir. 10. basamak için sonuç 11. Fibonacci sayısı olan 89'dur."
        }
    },
    {
        id: "elevator",
        category: { en: "Physics/Logic", tr: "Fizik/Mantık" },
        title: { en: "Elevator Scale", tr: "Asansör Baskülü" },
        question: {
            en: "You stand on a scale in an elevator. When the elevator starts going UP, what happens to the weight shown?",
            tr: "Asansörde tartının üzerindesiniz. Asansör YUKARI doğru hızlanmaya başladığında tartı ne gösterir?"
        },
        options: {
            en: ["Increases", "Decreases", "Stays same", "Goes to zero"],
            tr: ["Artar", "Azalır", "Aynı kalır", "Sıfırlanır"]
        },
        correct: 0,
        logic: {
            en: "Acceleration upward (a) adds to gravity (g). The normal force N = m(g+a), so the scale shows a higher weight.",
            tr: "Yukarı doğru ivmelenme yerçekimine eklenir. N = m(g+a) olduğu için tartı daha yüksek bir değer gösterir."
        }
    }
];
