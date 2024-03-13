function Word(nomS, nomP, accS, accP, genS, genP, datS, datP, ablS, ablP, def, decl) {
    this["singularis nominativus"] = nomS;
    this["pluralis nominativus"] = nomP;
    this["singularis accusativus"] = accS;
    this["pluralis accusativus"] = accP;
    this["singularis genetivus"] = genS;
    this["pluralis genetivus"] = genP;
    this["singularis dativus"] = datS;
    this["pluralis dativus"] = datP;
    this["singularis ablativus"] = ablS;
    this["pluralis ablativus"] = ablP;
    this.definition = def;
    this.declension = decl;
}

var words = [
    ////////////////////////////////
    // is ea id
    ////////////////////////////////
    new Word("is", "ii", "eum", "eos", "eius", "eorum", "ei", "ei", "eo", "eis", "is (mask), han, den", 1),
    new Word("ea", "eae", "eam", "eas", "eius", "earum", "eis", "eis", "ea", "eis", "ea (fem), hun, den", 1),
    new Word("id", "ea", "id", "ea", "eius", "eorum", "ei", "eis", "eo", "eis", "id (neut), den, det" ),
    new Word("idem", "iidem", "eundem", "eosdem", "eiusdem", "eorundem", "eidem", "eisdem", "eodem", "eisdem", "idem (mask) den samme",1),
    new Word("eadem", "eaedem", "eandem", "easdem", "eiusdem", "earundem", "eidem", "eisdem", "eadem", "eisdem", "eadem (fem) den samme",1 ),
    new Word("idem", "eadem", "idem", "eadem", "eiusdem", "eorundem", "eidem", "eisdem", "eodem", "eisdem", "idem (neut) den/det samme", 1),
    new Word("terra", "terrae", "terram", "terras", "terrae", "terrarum", "terrae", "terris", "terra", "terris", "terra f1, land", 1),
    ////////////////////////////////
    // hic haec hoc
    ////////////////////////////////
    new Word("hic", "hi", "hunc", "hos", "huius", "horum", "huic", "his", "hoc", "his", "hic (mask), denne",2),
    new Word("haec", "hae", "hanc", "has", "huius", "harum", "huic", "his", "hac", "his", "haec (fem), denne",2),
    new Word("hoc", "haec", "hoc", "haec", "huius", "horum", "huic", "his", "hoc", "his", "hoc (neut), dette",2),
    
    ////////////////////////////////
    // ille illa illud og iste ista istud
    ////////////////////////////////
    new Word("ille", "illi", "illum", "illos", "illius", "illorum", "illi", "illis", "illo", "illis", "ille (mask) den",3),
    new Word("illa", "illae", "illam", "illas", "illius", "illarum", "illi", "illis", "illa", "illis", "illa (fem) den",3),
    new Word("illud", "illa", "illud", "illa", "illius", "illorum", "illi", "illis", "illo", "illis", "illud (neut) den",3),
    new Word("iste", "isti", "istum", "istos", "istius", "istorum", "isti", "istis", "isto", "istis", "iste (mask) den der",3),
    new Word("ista", "istae", "istam", "istas", "istius", "istarum", "isti", "istis", "ista", "istis", "ista (fem) den der",3),
    new Word("istud", "ista", "istud", "ista", "istius", "istorum", "isti", "istis", "isto", "istis", "istud (neut) det der",3),

     ////////////////////////////////
    // Q-pronomen (relativ- og interrogativpronomen)
    ////////////////////////////////
    new Word("qui", "qui", "quem", "quos", "cuius", "quorum", "cui", "quibus", "quo", "quibus", "qui (mask) som, der, hvis (relativ)",4), 
    new Word("quae", "quae", "quam", "quas", "cuius", "quarum", "cui", "quibus", "qua", "quibus", "qui (mask) som, der, hvis (relativ)",4),
    new Word("quod", "quae", "quod", "quae", "cuius", "quorum", "cui", "quibus", "quo", "quibus", "qui (mask) som, der, hvis (relativ)",4),
    new Word("quis", "qui", "quem", "quos", "cuius", "quorum", "cui", "quibus", "quo", "quibus", "quis (mask) hvem? hvis? (interrogativ)",4),
    new Word("quae", "quae", "quam", "quas", "cuius", "quarum", "cui", "quibus", "qua", "quibus", "quae (fem) hvem? hvis? (interrogativ)",4),
    new Word("quid", "quae", "quid", "quae", "cuius", "quorum", "cui", "quibus", "quo", "quibus", "quis (neut) hvad? hvis? (interrogativ)",4),

    
    ////////////////////////////////
    // ipse
    ////////////////////////////////
    new Word("ipse", "ipsi", "ipsum", "ipsos", "ipsius", "ipsorum", "ipsi", "ipsis", "ipso", "ipsis", "ipse (mask) selv",5),
    new Word("ipsa", "ipsae", "ipsam", "ipsas", "ipsius", "ipsorum", "ipsi", "ipsis", "ipsa", "ipsis", "ipsa (fem) selv",5),
    new Word("ipsum", "ipsa", "ipsum", "ipsa", "ipsius", "ipsorum", "ipsi", "ipsis", "ipso", "ipsis", "ipsum (neut) selv",5),

];

function random(min, max) {
    return Math.round(Math.random() * (max-min)) + min;
}

function randomWord() {
    var decls = {
        1: $("#firstDeclension").is(':checked'),
        2: $("#secondDeclension").is(':checked'),
        3: $("#thirdDeclension").is(':checked'),
        4: $("#fourthDeclension").is(':checked'),
        5: $("#fifthDeclension").is(':checked')
    };
    var checkDeclension = function(word, i, arr) {
        return decls[word.declension];
    };
    var filtered = words.filter(checkDeclension);
    return filtered[random(0, filtered.length-1)];
}

function showWord(w) {
    $("input[type=text]").val("");
    $(".singularis.nominativus").val(w["singularis nominativus"]);
    $(".singularis.genetivus").focus();
    $("#wordDefinition").text(w.definition);
}

function newWord() {
    $(".answer").hide();
    word = randomWord();
    if (word) {
        showWord(word);
        $("input[type=text], small").removeClass('error');
        $(".answer").show().text("Forkert");
        $("#checkWord").show();
        $("#showAnswers").hide();
    }
}

function checkWord() {
    var n = ["singularis","pluralis"];
    var d = ["nominativus","accusativus","genetivus","dativus","ablativus"];
    for (var i in n) {
        for (var j in d) {
            if ( $("."+n[i]+"."+d[j]).val() == word[ n[i]+" "+d[j] ] ) {
                $("."+n[i]+"."+d[j]).removeClass('error');
                $("."+n[i]+"."+d[j]).parent().find('small').removeClass('error');
            }
            else {
                $("."+n[i]+"."+d[j]).addClass('error');
                $("."+n[i]+"."+d[j]).parent().find('small').addClass('error');
            }
        }
    }
    $("#showAnswers").show();
}

function showAnswers() {
    var n = ["singularis","pluralis"];
    var d = ["nominativus","accusativus","genetivus","dativus","ablativus"];
    for (var i in n) {
        for (var j in d) {
            $("."+n[i]+"."+d[j]).parent().find('.answer').text(word[ n[i]+" "+d[j] ]);
        }
    }
    $(".answer").show();
}

var word = randomWord();
if (word) showWord(word);

$("#showAnswers").click(showAnswers);
$("#newWord").click(newWord);
$("#checkWord").click(checkWord);
