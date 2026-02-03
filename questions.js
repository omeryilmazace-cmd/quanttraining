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
    },
    {
        id: "lilypad",
        category: { en: "Exponential Growth", tr: "Üssel Büyüme" },
        title: { en: "The Growing Lily Pad", tr: "Büyüyen Nilüfer" },
        question: {
            en: "A lily pad doubles in size every day. It takes 48 days to cover the entire pond. On which day did it cover exactly HALF of the pond?",
            tr: "Bir nilüfer her gün iki katına çıkıyor. Tüm gölü kaplaması 48 gün sürüyor. Gölün tam yarısını kaçıncı günde kaplamıştır?"
        },
        options: {
            en: ["24", "47", "12", "40", "46", "30"],
            tr: ["24", "47", "12", "40", "46", "30"]
        },
        correct: 1,
        logic: {
            en: "If it doubles every day, then the day before it covered the whole pond (Day 48), it must have covered half of it. So, 48 - 1 = 47.",
            tr: "Her gün iki katına çıkıyorsa, gölün tamamının kaplandığı günden (48. gün) bir önceki gün yarısı kaplanmış olmalıdır. Yani 48 - 1 = 47."
        }
    },
    {
        id: "airplane",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "The Last Passenger", tr: "Son Yolcu" },
        question: {
            en: "100 people are boarding a 100-seat plane. The first person lost their ticket and picks a random seat. Everyone else takes their assigned seat or a random one if theirs is taken. What is the probability that the 100th person gets their assigned seat?",
            tr: "100 kişi 100 koltuklu uçağa biniyor. İlk kişi biletini kaybetmiş ve rastgele bir yere oturuyor. Diğer herkes kendi koltuğu boşsa oraya, değilse rastgele bir yere oturuyor. 100. kişinin kendi koltuğuna oturma olasılığı nedir?"
        },
        options: {
            en: ["1/100", "1/2", "1/50", "99/100", "1/3", "0"],
            tr: ["1/100", "1/2", "1/50", "99/100", "1/3", "0"]
        },
        correct: 1,
        logic: {
            en: "When the 100th passenger boards, only two seats are left: their own or the first person's. By symmetry, they have 1/2 chance for either.",
            tr: "100. yolcu bindiğinde geriye sadece iki koltuk kalmıştır: ya kendi koltuğu ya da ilk kişinin koltuğu. Simetriden dolayı her ikisinin de şansı %50'dir."
        }
    },
    {
        id: "zeros",
        category: { en: "Number Theory", tr: "Sayılar Teorisi" },
        title: { en: "Trailing Zeros", tr: "Sondaki Sıfırlar" },
        question: {
            en: "How many trailing zeros are in 100! (100 factorial)?",
            tr: "100! (100 faktöriyel) sayısının sonunda kaç tane sıfır vardır?"
        },
        options: {
            en: ["10", "20", "24", "25", "11", "21"],
            tr: ["10", "20", "24", "25", "11", "21"]
        },
        correct: 2,
        logic: {
            en: "Zeros are created by 2*5 pairs. There are more 2s than 5s. Count powers of 5: 100/5 = 20, 100/25 = 4. 20 + 4 = 24 zeros.",
            tr: "Sıfırlar 2*5 çiftlerinden oluşur. 2 sayısı 5'ten fazladır. 5'in kuvvetlerini sayarız: 100/5 = 20, 100/25 = 4. Toplam 20 + 4 = 24 sıfır."
        }
    },
    {
        id: "bulbs",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "100 Light Bulbs", tr: "100 Ampul" },
        question: {
            en: "100 bulbs are OFF. 1st person toggles all. 2nd toggles every 2nd. 3rd toggles every 3rd... after 100 people, how many bulbs are ON?",
            tr: "100 ampul kapalı. 1. kişi hepsini, 2. kişi her 2 ampulden birini, 3. kişi her 3 ampulden birini (açıksa kapatır, kapalıysa açar) değiştiriyor. 100 kişiden sonra kaç ampul AÇIK kalır?"
        },
        options: {
            en: ["1", "10", "50", "100", "0", "25"],
            tr: ["1", "10", "50", "100", "0", "25"]
        },
        correct: 1,
        logic: {
            en: "A bulb is toggled for each of its divisors. Only square numbers have an odd number of divisors. Square numbers up to 100 are (1, 4, 9... 100) — there are 10.",
            tr: "Bir ampul, bölen sayısı kadar değiştirilir. Sadece tam kare sayıların bölen sayısı tektir. 100'e kadar 10 tane tam kare sayı vardır."
        }
    },
    {
        id: "birthday",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "Birthday Paradox", tr: "Doğum Günü Paradoksu" },
        question: {
            en: "How many people are needed in a room to have a >50% chance that two share the same birthday?",
            tr: "Bir odada kaç kişi olursa, en az iki kişinin aynı gün doğmuş olma olasılığı %50'den yüksek olur?"
        },
        options: {
            en: ["23", "183", "366", "50", "75", "10"],
            tr: ["23", "183", "366", "50", "75", "10"]
        },
        correct: 0,
        logic: {
            en: "With 23 people, the number of pairs is 23*22/2 = 253. The cumulative probability of uniqueness drops below 50% quickly.",
            tr: "23 kişi varken 253 farklı çift oluşur. Her çiftin farklı günde doğma şansının birleşimi toplam olasılığı hızla %50'nin altına düşürür."
        }
    },
    {
        id: "meeting",
        category: { en: "Geometry Prob", tr: "Geometrik Olasılık" },
        title: { en: "The Park Meeting", tr: "Park Buluşması" },
        question: {
            en: "Two people agree to meet at a park between 12:00 and 1:00. Each will wait exactly 15 minutes. What is the probability they meet?",
            tr: "İki kişi 12:00 ile 13:00 arasında parkta buluşmaya karar verir. Her biri tam 15 dakika bekleyecektir. Buluşma olasılıkları nedir?"
        },
        options: {
            en: ["1/4", "1/2", "7/16", "9/16", "1/3", "3/8"],
            tr: ["1/4", "1/2", "7/16", "9/16", "1/3", "3/8"]
        },
        correct: 2,
        logic: {
            en: "Model it on a 60x60 square. The area where |x-y| <= 15 is 1 - (45/60)^2 = 1 - (3/4)^2 = 1 - 9/16 = 7/16.",
            tr: "60x60'lık bir karede düşünürsek, buluşmama alanı (45/60)'lık iki üçgendir. 1 - (45/60)^2 = 7/16 sonucuna ulaşılır."
        }
    },
    {
        id: "ninecount",
        category: { en: "Counting", tr: "Sayma" },
        title: { en: "How Many 9s?", tr: "Kaç Tane 9?" },
        question: {
            en: "How many times does the digit 9 appear in the integers from 1 to 100?",
            tr: "1'den 100'e kadar olan tam sayılarda 9 rakamı kaç kez kullanılır?"
        },
        options: {
            en: ["10", "11", "19", "20", "9", "21"],
            tr: ["10", "11", "19", "20", "9", "21"]
        },
        correct: 3,
        logic: {
            en: "In each decade (0-9, 10-19...) 9 appears once as units digit (10 times). In the 90s, it also appears as tens digit (10 times). Total: 20.",
            tr: "Birler basamağında 10 kez (9, 19... 99), onlar basamağında 10 kez (90, 91... 99) görülür. Toplam 20 kez kullanılır."
        }
    },
    {
        id: "stick",
        category: { en: "Geometry Prob", tr: "Geometrik Olasılık" },
        title: { en: "Breaking a Stick", tr: "Çubuk Kırma" },
        question: {
            en: "A stick is broken at two random points. What is the probability that the three pieces can form a triangle?",
            tr: "Bir çubuk rastgele iki noktadan kırılıyor. Oluşan üç parçanın bir üçgen oluşturma olasılığı nedir?"
        },
        options: {
            en: ["1/2", "1/3", "1/4", "1/8", "2/3", "1/6"],
            tr: ["1/2", "1/3", "1/4", "1/8", "2/3", "1/6"]
        },
        correct: 2,
        logic: {
            en: "Triangle inequality requires that each piece is shorter than the sum of others (less than half the stick). In a 2D plane of cut points, this represents 1/4 of total area.",
            tr: "Üçgen eşitsizliği gereği her parça yarım çubuktan kısa olmalıdır. Kesim noktaları kümesinde bu alan toplamın 1/4'üne denk gelir."
        }
    },
    {
        id: "biasedcoin",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "The Biased Coin", tr: "Yanlı Para" },
        question: {
            en: "You have a biased coin that lands on heads with 60% probability. How can you simulate a fair 50/50 flip?",
            tr: "Tura gelme şansı %60 olan hileli bir paranız var. Bununla %50/%50 adil bir yazı-tura simülasyonunu nasıl yaparsınız?"
        },
        options: {
            en: ["Flip twice: HT vs TH", "Flip once", "Flip four times", "Impossible", "Flip until T is twice", "Subtract 10% from H"],
            tr: ["İki kez at: YT vs TY", "Bir kez at", "Dört kez at", "İmkansız", "2 kez Y gelene kadar at", "H'den %10 çıkar"]
        },
        correct: 0,
        logic: {
            en: "Flip twice. HT and TH both have the same probability p*(1-p). If you get HH or TT, discard and repeat. HT=Heads, TH=Tails.",
            tr: "İki kez atın. YT ve TY gelme olasılıkları eşittir (p*(1-p)). YY veya TT gelirse geçersiz sayıp tekrar atın. YT=Tura, TY=Yazı."
        }
    },
    {
        id: "jellybean",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "The Jar Logic", tr: "Kavanoz Mantığı" },
        question: {
            en: "Three jars contain (Red, Blue, Mixed). All are MISLABELED. You pick one bean from one jar. Which jar do you pick to label all correctly?",
            tr: "Üç kavanozda (Kırmızı, Mavi, Karışık) şekerler var. Hepsi YANLIŞ etiketlenmiş. Tüm etiketleri düzeltmek için hangi kavanozdan şeker çekmelisiniz?"
        },
        options: {
            en: ["Red", "Blue", "Mixed", "Any jar", "Impossible", "Pick from two"],
            tr: ["Kırmızı", "Mavi", "Karışık", "Herhangi biri", "İmkansız", "İkisinden de çek"]
        },
        correct: 2,
        logic: {
            en: "Pick from Mixed. Since it's mislabeled, it's either all Red or all Blue. If you get Red, then the Blue labeled jar must be Mixed (as it can't be Blue), and the Red labeled must be Blue.",
            tr: "Karışık (Mixed) etiketli olandan çekin. Yanlış etiketlendiği için ya hepsi kırmızı ya da hepsidir mavidir. Birini bulunca diğerleri zincirleme çözülür."
        }
    },
    {
        id: "speedboat",
        category: { en: "Physics/Math", tr: "Fizik/Mat" },
        title: { en: "The Speedboat", tr: "Sürat Teknesi" },
        question: {
            en: "A boat goes 10 mph in still water. If the current is 2 mph, does a round trip (10 miles each way) take longer or shorter than in still water?",
            tr: "Durgun suda 10 mil/sa hız yapan bir tekne, 2 mil/sa akıntısı olan bir nehirde gidiş-dönüş (toplam 20 mil) yaparsa mı daha uzun sürer, yoksa durgun suda mı?"
        },
        options: {
            en: ["Longer in current", "Shorter in current", "Same time", "Depends on depth", "Longer in still water", "Twice as long"],
            tr: ["Akıntıda daha uzun", "Akıntıda daha kısa", "Aynı süre", "Derinliğe bağlı", "Durgun suda uzun", "İki kat sürer"]
        },
        correct: 0,
        logic: {
            en: "In current: Time = 10/12 + 10/8 = 0.833 + 1.25 = 2.083 hrs. Still water: 10/10 + 10/10 = 2 hrs. Current always slows down the total trip.",
            tr: "Akıntıda: 10/12 + 10/8 = 2.083 saat. Durgun suda: 20/10 = 2 saat. Akıntı her zaman toplam süreyi geciktirir."
        }
    },
    {
        id: "marbles",
        category: { en: "Probability", tr: "Olasılık" },
        title: { en: "Basket of Marbles", tr: "Bilye Sepeti" },
        question: {
            en: "A box has 100 marbles (some Red, some Blue). You draw two. The probability they are both Red is 1/2. What is the minimum number of marbles?",
            tr: "Bir kutuda 100 bilye var. Rastgele iki tane çekiyorsun. İkisinin de kırmızı olma olasılığı 1/2. Kutuda en az kaç bilye vardır?"
        },
        options: {
            en: ["3", "4", "21", "25", "50", "100"],
            tr: ["3", "4", "21", "25", "50", "100"]
        },
        correct: 0,
        logic: {
            en: "Solve r/n * (r-1)/(n-1) = 1/2. Smallest integer solution is n=4, r=3 (3/4 * 2/3 = 1/2). n=21, r=15 also works, but 4 is the minimum.",
            tr: "r/n * (r-1)/(n-1) = 1/2 denklemini çözersek, en küçük tamsayı çözümü n=4, r=3'tür. En az 4 bilye (3'ü kırmızı) gerekir."
        }
    },
    {
        id: "rope15",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "Rope 15", tr: "İp 15" },
        question: {
            en: "One rope takes 1 hour to burn. How do you measure exactly 15 minutes using only one rope?",
            tr: "Bir ipin yanması 1 saat sürüyor. Sadece bir ip kullanarak tam 15 dakikayı nasıl ölçersiniz?"
        },
        options: {
            en: ["Impossible", "Fold in half and light both ends", "Fold in 4", "Rope must be even", "Light one side", "Cut the rope"],
            tr: ["İmkansız", "İkiye katlayıp her iki ucu da yak", "Dörde katla", "İp düzenli olmalı", "Tek tarafı yak", "İpi kes"]
        },
        correct: 1,
        logic: {
            en: "If you light both ends, it burns in 30 mins. If you fold it and light both ends of the double-rope, it burns in 15 mins. (Assuming layers catch each other).",
            tr: "İpi ikiye katlayıp her iki ucunu da (dört katman gibi) yakarsanız, süre dörde bölünür ve 15 dakika elde edilir."
        }
    },
    {
        id: "striving",
        category: { en: "Math", tr: "Matematik" },
        title: { en: "The 100th Digit", tr: "100. Basamak" },
        question: {
            en: "What is the 100th digit of 1/7?",
            tr: "1/7 sayısının virgülden sonraki 100. basamağı nedir?"
        },
        options: {
            en: ["1", "4", "2", "8", "5", "7"],
            tr: ["1", "4", "2", "8", "5", "7"]
        },
        correct: 3,
        logic: {
            en: "1/7 = 0.142857 repeated. The cycle is 6 digits. 100 mod 6 = 4. The 4th digit in 142857 is 8.",
            tr: "1/7 = 0.142857 devrederek gider. Periyot 6 basamaktır. 100 mod 6 = 4 eder. 142857 dizisinin 4. rakamı 8'dir."
        }
    },
    {
        id: "cards2",
        category: { en: "Logic", tr: "Mantık" },
        title: { en: "Red vs Black Cards", tr: "Kırmızı vs Siyah" },
        question: {
            en: "A 52-card deck is split into two equal piles. Is the number of red cards in pile 1 always equal to the number of black cards in pile 2?",
            tr: "52 kartlık bir deste iki eşit parçaya ayrılıyor. 1. destedeki kırmızı kart sayısı her zaman 2. destedeki siyah kart sayısına eşit midir?"
        },
        options: {
            en: ["Yes, Always", "No, never", "Only if shuffled", "Only if sorted", "Depends on luck", "50% chance"],
            tr: ["Evet, Herzaman", "Hayır, asla", "Sadece karıştırılırsa", "Sadece sıralıysa", "Şansa bağlı", "%50 şans"]
        },
        correct: 0,
        logic: {
            en: "Let r1, b1 be red/black in pile 1. r1+b1=26 and r1+r2=26 (total reds). Therefore b1 = 26-r1 and r2 = 26-r1. b1 = r2 always.",
            tr: "1. destedeki kırmızı (r1) ve siyah (b1) toplamı 26'dır. Tüm destedeki toplam kırmızı da 26'dır. Bu denklem her zaman r1+b1 = r1+siyah2 sonucunu verir."
        }
    }
];
