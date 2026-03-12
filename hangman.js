function dict() {
    let arr = [
        "about","above","abide","abuse","actor","acute","admit","adopt","adore","adorn",
        "again","agile","agree","ahead","aisle","alarm","alert","alien","alive","allow",
        "alone","along","alter","amaze","among","angle","angry","anime","ankle","apply",
        "arena","argue","arise","array","arrow","arson","aside","asset","audio","avoid",
        "award","aware","awful","beach","beard","beast","begin","being","below","bench",
        "birth","black","blade","blend","bless","blind","block","board","boost","brave",
        "bread","break","breed","brick","bring","broad","brown","brush","build","buyer",
        "cable","carry","catch","cause","chair","chart","cheat","check","chess","cyber",
        "chief","child","choir","claim","clean","clear","clerk","click","clock","close",
        "coach","coast","cover","crane","crash","cream","crime","cross","crowd","crown",
        "curve","daily","dance","dated","delve","depth","devil","diary","diner","doubt",
        "draft","drama","dream","dress","drive","drove","drink","earth","elder","elect",
        "elite","entry","equal","evals","event","every","exams","exist","extra","faith",
        "false","fatal","favor","feast","fence","field","fight","final","first","flash",
        "fleet","float","focus","force","frame","frank","fresh","front","fruit","funny",
        "giant","glass","globe","grace","grade","grand","graph","grasp","grass","great",
        "green","greet","grind","group","guard","guest","guide","habit","happy","harsh",
        "heart","heavy","honey","horse","hotel","house","human","ideal","image","inner",
        "input","issue","jelly","joint","judge","juice","knock","known","label","large",
        "laser","later","laugh","layer","learn","lease","leave","legal","level","light",
        "limit","local","logic","loose","lower","lucky","lunch","magic","major","maker",
        "march","match","maybe","maybe","medal","metal","might","model","money","month",
        "moral","mouse","movie","music","needs","never","night","noise","north","notch",
        "novel","nurse","offer","often","order","other","ought","paint","prank","panel",
        "pants","party","peace","penny","place","plain","plane","plant","plate","point",
        "pound","power","press","price","prime","print","prior","prize","proof","proud",
        "queen","quick","quiet","raise","rally","range","rapid","reach","react","ready",
        "realm","refer","relax","reply","right","river","round","route","royal","scale",
        "scene","score","serve","seven","shall","shape","share","sharp","sheep","shell",
        "shift","shine","shout","short","sight","since","skill","sleep","slide","small",
        "smart","smile","smoke","sound","south","space","speak","speed","spend","split",
        "spoke","sport","staff","stage","stand","start","state","steam","steel","stick",
        "still","stock","store","storm","story","strip","study","style","sugar","sweet",
        "table","taste","teach","thank","their","there","thick","thing","think","third",
        "those","three","throw","tight","title","today","topic","total","touch","tough",
        "trade","train","treat","trend","trial","trick","tried","truck","trust","truth",
        "under","union","unity","upper","usage","usual","value","video","visit","vital",
        "voice","watch","water","wheel","where","which","while","white","whole","whose",
        "woman","world","worry","worse","worth","would","write","wrong","yield","youth",
        "zebra","zesty","zones","zonal"
    ];
    let num = arr.length - 1;
    let random = Math.floor(Math.random() * num);
    let word = arr[random];
    
    return word;
}

let letter, word = dict(), result = 0;
word = word.toUpperCase();
let a, b, c, d, e, found;
a = document.getElementById("a");
b = document.getElementById("b");
c = document.getElementById("c");
d = document.getElementById("d");
e = document.getElementById("e");
let live = 10;

function button(btn) {
    found = false;
    if(live > 0 && result != 5) {
        btn.disabled = true;
        letter = btn.value;
    for(let j=0; j<word.length; j++) {
        if(word[j] == letter) {
            found = true;
                if(j === 0) {
                    a.value = letter;
                    result++;
                }
                else if(j === 1) {
                    b.value = letter;
                    result++;
                }
                else if(j === 2) {
                    c.value = letter;
                    result++;
                }
                else if(j === 3) {
                    d.value = letter;
                    result++;
                }
                else if(j === 4) {
                    e.value = letter;
                    result++;
                }
            }
        }
    if(found === false) {
        live--;
        }
        if(live != 0) {
            
            if(result == 5) {
                document.getElementById("lives").innerHTML = "Congrats! You Won.";
                document.getElementById("answer").innerHTML = "The word was '" + word + "'";
            }
            else {
                document.getElementById("lives").innerHTML = live + " \u2764\uFE0F remaining!";
            }
        }
        else {
            document.getElementById("lives").innerHTML = "Sorry! You Lost.";
            document.getElementById("answer").innerHTML = "The word was '" + word + "'";
        }
    }
}
