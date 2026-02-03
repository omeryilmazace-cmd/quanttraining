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
            en: ["1/4", "1/2", "1/3", "49/100", "50/99", "51/100"],
            tr: ["1/4", "1/2", "1/3", "49/100", "50/99", "51/100"]
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
            en: ["1/4", "1/8", "1/2", "1/16", "3/4", "7/8"],
            tr: ["1/4", "1/8", "1/2", "1/16", "3/4", "7/8"]
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
            en: ["Divide 50-50", "Take 10 coins and flip them all", "Take 10 coins and leave as is", "Take 90 coins and flip them", "Flip all 100 coins", "Divide 10-90 without flipping"],
            tr: ["50-50 ayır", "10 tanesini al ve hepsini ters çevir", "10 tanesini al ve olduğu gibi bırak", "90 tanesini al ve çevir", "Tüm 100 parayı çevir", "Çevirmeden 10-90 ayır"]
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
            en: ["Burn one and guess the middle", "Burn both from both ends", "Light one from both ends + one from one end", "Wait for 15 mins then light", "Burn one for 30 mins then stop", "Ropes cannot measure 45 mins"],
            tr: ["Birini yakıp ortasını göz kararı seç", "Her ikisini de her iki uçtan yak", "Birini iki uçtan diğeri tek uçtan, ilk bitince diğer ucu yak", "15 dk bekle sonra yak", "Birini 30 dk yakıp durdur", "İplerle 45 dakika ölçülemez"]
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
            en: ["0°", "15°", "7.5°", "5°", "2.5°", "10°"],
            tr: ["0°", "15°", "7.5°", "5°", "2.5°", "10°"]
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
            en: ["2", "3", "11", "21", "10", "4"],
            tr: ["2", "3", "11", "21", "10", "4"]
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
            en: ["1:1", "2:1", "1:2", "Logarithmic", "3:1", "Depends on population size"],
            tr: ["1:1", "2:1", "1:2", "Logaritmik", "3:1", "Nüfus sayısına bağlı"]
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
            en: ["Calculation Error", "Accounting Illusion", "The Boy's pocket", "Inflation", "Tax deduction", "Missing in original $30"],
            tr: ["Hesap Hatası", "Muhasebe İllüzyonu", "Çırağın Cebinde", "Enflasyon", "Vergi kesintisi", "Kayıp 30 doların içinde"]
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
            en: ["10", "55", "89", "128", "144", "233"],
            tr: ["10", "55", "89", "128", "144", "233"]
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
            en: ["Increases", "Decreases", "Stays same", "Goes to zero", "Increases then decreases", "Stays higher forever"],
            tr: ["Artar", "Azalır", "Aynı kalır", "Sıfırlanır", "Artar sonra azalır", "Sürekli yüksek kalır"]
        },
        correct: 0,
        logic: {
            en: "Acceleration upward (a) adds to gravity (g). The normal force N = m(g+a), so the scale shows a higher weight.",
            tr: "Yukarı doğru ivmelenme yerçekimine eklenir. N = m(g+a) olduğu için tartı daha yüksek bir değer gösterir."
        }
    },
    {
        id: "switches",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "The 3 Switches", tr: "3 Anahtar" },
        question: {
            en: "There are 3 light switches outside a room and 3 bulbs inside. You can only enter the room once. How do you determine which switch controls which bulb?",
            tr: "Bir odanın dışında 3 anahtar, içinde 3 ampul var. Odaya sadece bir kez girme hakkınız var. Hangi anahtarın hangi ampulü yaktığını nasıl anlarsınız?"
        },
        options: {
            en: ["Use Heat", "Random Guess", "Listen to noise", "Measure with thermometer", "Switch 1 ON, Switch 2 ON", "Impossible"],
            tr: ["Isıyı Kullan", "Rastgele Tahmin", "Sesi Dinle", "Termometreyle ölç", "Anahtar 1 açık, 2 açık", "İmkansız"]
        },
        correct: 0,
        logic: {
            en: "Turn Switch 1 ON for 10 mins, then OFF. Turn Switch 2 ON and enter. The ON bulb is Switch 2, the HOT/OFF bulb is Switch 1, the COLD/OFF is Switch 3.",
            tr: "1. anahtarı 10 dakika açık tutup kapatın. 2. anahtarı açıp odaya girin. Yanan ampul 2. anahtarın, sönük ama sıcak olan 1. anahtarın, sönük ve soğuk olan 3. anahtarındır."
        }
    },
    {
        id: "monty",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "Monty Hall", tr: "Monty Hall" },
        question: {
            en: "You pick one of 3 doors. The host opens another door to reveal a goat. Should you switch to the remaining door to find the car?",
            tr: "3 kapıdan birini seçiyorsun. Sunucu diğer kapılardan birini açıp arkasındaki keçiyi gösteriyor. Arabayı bulmak için kapını değiştirmeli misin?"
        },
        options: {
            en: ["Doesn't matter", "Yes, Always", "No, Stay", "Depends on luck", "Switching decreases odds", "Probability becomes 1/2"],
            tr: ["Fark etmez", "Evet, Herzaman", "Hayır, Kal", "Şansa bağlı", "Değiştirmek şansı azaltır", "Olasılık 1/2 olur"]
        },
        correct: 1,
        logic: {
            en: "Initially, your door has 1/3 chance. The other two have 2/3 cumulative. When host reveals a goat, that 2/3 chance concentrates on the remaining unselected door.",
            tr: "Başlangıçta seçtiğin kapının şansı 1/3'tür. Diğer iki kapının toplam şansı 2/3'tür. Sunucu bir keçiyi elediğinde, o 2/3'lük şans kalan diğer kapıda toplanır."
        }
    },
    {
        id: "eggs",
        category: { en: "Optimization", tr: "Optimizasyon" },
        title: { en: "Two Eggs", tr: "İki Yumurta" },
        question: {
            en: "With 2 eggs and a 100-story building, find the highest floor an egg can drop from without breaking in MINIMUM drops.",
            tr: "2 yumurta ve 100 katlı bir bina ile, bir yumurtanın kırılmadan atılabileceği en yüksek katı EN AZ denemeyle nasıl bulursunuz?"
        },
        options: {
            en: ["10", "14", "50", "25", "9", "20"],
            tr: ["10", "14", "50", "25", "9", "20"]
        },
        correct: 1,
        logic: {
            en: "Using the formula x+(x-1)+(x-2)...+1 >= 100, we find x=14. You drop from floors 14, 27, 39, etc. to minimize the worst-case scenario.",
            tr: "x+(x-1)+(x-2)...+1 >= 100 formülünden x=14 bulunur. En kötü durumu minimize etmek için 14, 27, 39. katlar şeklinde ilerlenir."
        }
    },
    {
        id: "poison",
        category: { en: "Binary Logic", tr: "İkili Mantık" },
        title: { en: "Poisoned Wine", tr: "Zehirli Şarap" },
        question: {
            en: "1000 bottles of wine, 1 is poisoned. Poison kills in 24 hours. What is the minimum number of prisoners needed to find the poisoned bottle in exactly 24 hours?",
            tr: "1000 şişe şarap var, 1'i zehirli. Zehir 24 saatte öldürüyor. Zehirli şişeyi tam 24 saatte bulmak için en az kaç mahkum gerekir?"
        },
        options: {
            en: ["10", "100", "500", "9", "7", "1024"],
            tr: ["10", "100", "500", "9", "7", "1024"]
        },
        correct: 0,
        logic: {
            en: "Each prisoner represents a binary bit. 2^10 = 1024, which is enough to cover 1000 bottles. Each bottle is numbered in binary and fed to prisoners corresponding to its '1' bits.",
            tr: "Her mahkum bir binary biti temsil eder. 2^10 = 1024 olduğu için 1000 şişeyi kapsar. Her şişe ikilik sistemde numaralandırılır ve '1' olan basamağa denk gelen mahkumlara tattırılır."
        }
    },
    {
        id: "gold",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "The Gold Bar", tr: "Altın Çubuk" },
        question: {
            en: "A worker works for 7 days. You have a 7-unit gold bar. You can only make 2 cuts. How do you pay him 1 unit every day?",
            tr: "Bir işçi 7 gün çalışıyor. 7 birimlik bir altın çubuğunuz var. Sadece 2 kesim hakkınız var. İşçiye her gün 1 birim ödemeyi nasıl yaparsınız?"
        },
        options: {
            en: ["1, 2, 4 units", "1, 1, 5 units", "2, 2, 3 units", "3, 4 units", "7 individual units", "Impossible"],
            tr: ["1, 2, 4 birim", "1, 1, 5 birim", "2, 2, 3 birim", "3, 4 birim", "7 tekil birim", "İmkansız"]
        },
        correct: 0,
        logic: {
            en: "Cut into 1, 2, and 4 units. Day 1: Give 1. Day 2: Give 2, take back 1. Day 3: Give 1. Day 4: Give 4, take 1 and 2. This continues like binary counting.",
            tr: "Çubuğu 1, 2 ve 4 birimlik parçalara bölün. 1. Gün: 1'i ver. 2. Gün: 2'yi ver, 1'i geri al. 3. Gün: 1'i ver. 4. Gün: 4'ü ver, 1 ve 2'yi geri al. İkili sayma mantığıyla devam eder."
        }
    }
];
