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
    // Declinatio prima
    ////////////////////////////////
    new Word("femina", "feminae", "feminam", "feminas", "feminae", "feminarum", "feminae", "feminis", "femina", "feminis", "femina f1 kvinde", 1),
    new Word("aqua", "aquae", "aquam", "aquas", "aquae", "aquarum", "aquae", "aquis", "aqua", "aquis", "aqua f1, vand", 1),
    new Word("amica", "amicae", "amicam", "amicas", "amicae", "amicarum", "amicae", "amicis", "amica", "amicis", "amica f1, veninde" ),
    new Word("porta", "portae", "portam", "portas", "portae", "portarum", "portae", "portis", "porta", "portis", "porta f1, port",1),
    new Word("fenestra", "fenestrae", "fenestram", "fenestras", "fenestrae", "fenestrarum", "fenestrae", "fenestris", "fenestra", "fenestris", "fenestra f1, vindue",1 ),
    new Word("umbra", "umbrae", "umbram", "umbras", "umbrae", "umbrarum", "umbrae", "umbris", "umbra", "umbris", "umbra f1, skygge", 1),
    new Word("terra", "terrae", "terram", "terras", "terrae", "terrarum", "terrae", "terris", "terra", "terris", "terra f1, land", 1),
    new Word("taberna", "tabernae", "tabernam", "tabernas",  "tabernae", "tabernarum", "tabernae", "tabernis","taberna", "tabernis", "taberna f1, butik", 1),
    new Word("charta", "chartae", "chartam", "chartas",  "chartae", "chartarum", "chartae", "chartis","charta", "chartis", "charta f1, kort", 1),
    new Word("lacrima", "lacrimae", "lacrimam", "lacrimas", "lacrimae", "lacrimarum", "lacrimae", "lacrimis","lacrima", "lacrimis", "lacrima f1, tåre", 1),
    new Word("domina", "dominae", "dominam", "dominas", "dominae", "dominarum", "dominae", "dominis", "domina", "dominis", "domina f1, frue",1),
    new Word("gemma", "gemmae", "gemmam", "gemmas", "gemmae", "gemmarum", "gemmae", "gemmis", "gemma", "gemmis", "gemma f1, ædelsten",1),
    new Word("filia", "filiae", "filiam", "filias", "filiae", "filiarum", "filiae", "filiis", "filia", "filiis", "filia f1, datter",1),
    new Word("incola", "incolae", "incolam", "incolas", "incolae", "incolarum", "incolae", "incolis", "incola", "incolis", "incola m1, indbygger",1),
    new Word("insula", "insulae", "insulam", "insulas", "insulae", "insularum", "insulae", "insulis", "insula", "insulis", "insula f1, ø",1),
    new Word("mensa", "mensae", "mensam", "mensas", "mensae", "mensarum", "mensae", "mensis", "mensa", "mensis", "mensa f1, bord",1),
    new Word("poeta", "poetae", "poetam", "poetas", "poetae", "poetarum", "poetae", "poetis", "poeta", "poetis", "poeta m1, digter",1),
    new Word("puella", "puellae", "puellam", "puellas", "puellae", "puellarum", "puellae", "puellis", "puella", "puellis", "pige f1",1),
    new Word("silva", "silvae", "silvam", "silvas", "silvae", "silvarum", "silvae", "silvis", "silva", "silvis", "skov f1",1),
    new Word("stella", "stellae", "stellam", "stellas", "stellae", "stellarum", "stellae", "stellis", "stella", "stellis", "stjerne f1",1),
    ////////////////////////////////
    // Declinatio secunda
    ////////////////////////////////
    new Word("ager", "agri", "agrum", "agros", "agri", "agrorum", "agro", "agris", "agro", "agris", "mark m2 (agr-)",2),
    new Word("nasus", "nasi", "nasum", "nasos", "nasi", "nasorum", "naso", "nasis", "naso", "nasis", "næse m2",2),
    new Word("servus", "servi", "servum", "servos", "servi", "servorum", "servo", "servis", "servo", "servis", "slave m2",2),
    new Word("vestigium", "vestigia", "vestigium", "vestigia", "vestigii", "vestigiorum", "vestigio", "vestigiis", "vestigio", "vestigiis", "fodspor n2",2),
    new Word("caelum", "caela", "caelum", "caela", "caeli", "caelorum", "caelo", "caelis", "caelo", "caelis", "himmel n2",2),
    new Word("campus", "campi", "campum", "campos", "campi", "camporum", "campo", "campis", "campo", "campis", "mark m2",2),
    new Word("nummus", "nummi", "nummum", "nummos", "nummi", "nummorum", "nummo", "nummis", "nummo", "nummis", "mønt m2",2),
    new Word("deus", "dei", "deum", "deos", "dei", "deorum", "deo", "deis", "deo", "deis", "gud m2",2),
    new Word("dominus", "domini", "dominum", "dominos", "domini", "dominorum", "domino", "dominis", "domino", "dominis", "herre m2",2),
    new Word("baculum", "bacula", "baculum", "bacula", "baculi", "baculorum", "baculo", "baculis", "baculo", "baculis", "stav n2",2),
    new Word("equus", "equi", "equum", "equos", "equi", "equorum", "equo", "equis", "equo", "equis", "hest m2",2),
    new Word("murus", "muri", "murum", "muros", "muri", "murorum", "muro", "muris", "muro", "muris", "væg m2",2),
    new Word("hortus", "horti", "hortum", "hortos", "horti", "hortorum", "horto", "hortis", "horto", "hortis", "have m2",2),
    new Word("liber", "libri", "librum", "libros", "libri", "librorum", "libro", "libris", "libro", "libris", "bog m2 (libr-)",2),
    new Word("oculus", "oculi", "oculum", "oculos", "oculi", "oculorum", "oculo", "oculis", "oculo", "oculis", "øje m2",2),
    new Word("puer", "pueri", "puerum", "pueros", "pueri", "puerorum", "puero", "pueris", "puero", "pueris", "dreng m2 (puer-)",2),
    new Word("osculum", "oscula", "osculum", "oscula", "osculi", "osculorum", "osculo", "osculis", "osculo", "osculis", "kys n2",2),
    new Word("templum", "templa", "templum", "templa", "templi", "templorum", "templo", "templis", "templo", "templis", "tempel n2",2),
    new Word("vesper", "vesperi", "vesperum", "vesperos", "vesperi", "vesperorum", "vespero", "vesperis", "vespere", "vesperis", "aften m2 (vesper-)",2),
    new Word("vir", "viri", "virum", "viros", "viri", "virorum", "viro", "viris", "viro", "viris", "mand m2 (vir-)",2),
    ////////////////////////////////
    // Declinatio tertia
    ////////////////////////////////
    new Word("ovis", "oves", "ovem", "oves", "ovis", "ovium", "ovi", "ovibus", "ove", "ovibus", "får (ovi-) f3",3),
    new Word("animal", "animalia", "animal", "animalia", "animalis", "animalium", "animali", "animalibus", "animali", "animalibus", "dyr (animali-) n3",3),
    new Word("pastor", "pastores", "pastorem", "pastores", "pastoris", "pastorum", "pastori", "pastoribus", "pastore", "pastoribus", "hyrde (pastor-) m3",3),
    new Word("ars", "artes", "artem", "artes", "artis", "artium", "arti", "artibus", "arte", "artibus", "kunst, håndværk (art-) f3",3),
    new Word("arbor", "arbores", "arborem", "arbores", "arboris", "arborum", "arbori", "arboribus", "arbore", "arboribus", "træ (arbor-) f3",3),
    new Word("clamor", "clamores", "clamorem", "clamores", "clamoris", "clamorum", "clamori", "clamoribus", "clamore", "clamoribus", "råb (clamor-) m3",3),
    new Word("dens", "dentes", "dentem", "dentes", "dentis", "dentium", "denti", "dentibus", "dente", "dentibus", "tand (denti-) m3",3),
    new Word("mons", "montes", "montem", "montes", "montis", "montium", "monti", "montibus", "monte", "montibus", "bjerg (monti-) f3",3),
    new Word("dux", "duces", "ducem", "duces", "ducis", "ducum", "duci", "ducibus", "duce", "ducibus", "fører (duc-) m3",3),
    new Word("leo", "leones", "leonem", "leones", "leonis", "leonum", "leoni", "leonibus", "leone", "leonibus", "løve (leon-) m3",3),
    new Word("mare", "maria", "mare", "maria", "maris", "marium", "mari", "maribus", "mari", "maribus", "hav (mari-) n3",3),
    new Word("vallis", "valles", "vallem", "valles", "vallis", "vallium", "valli", "vallibus", "valle", "vallibus", "dal (valli-) f3",3),
    new Word("mors", "mortes", "mortem", "mortes", "mortis", "mortium", "morti", "mortibus", "morte", "mortibus", "død (morti-) f3",3),
    new Word("navis", "naves", "navem", "naves", "navis", "navium", "navi", "navibus", "nave", "navibus", "båd (navi-) f3",3),
    new Word("nomen", "nomina", "nomen", "nomina", "nominis", "nominum", "nomini", "nominibus", "nomine", "nominibus", "navn (nomen-) n3",3),
    new Word("nox", "noctes", "noctem", "noctes", "noctis", "noctium", "nocti", "noctibus", "nocte", "noctibus", "nat (nocti-) f3",3),
    new Word("pater", "patres", "patrem", "patres", "patris", "patrum", "patri", "patribus", "patre", "patribus", "far (patr-) m3",3),
    new Word("mater", "matres", "matrem", "matres", "matris", "matrum", "matri", "matribus", "matre", "matribus", "mor (matr-) f3",3),
    new Word("flumen", "flumina", "flumen", "flumina", "fluminis", "fluminum", "flumini", "fluminibus", "flumine", "fluminibus", "flod (flumin-) n3",3),
    new Word("vox", "voces", "vocem", "voces", "vocis", "vocum", "voci", "vocibus", "voce", "vocibus", "stemme (voc-) f3",3),
    ////////////////////////////////
    // Declinatio quarta
    ////////////////////////////////
    new Word("cantus", "cantus", "cantum", "cantus", "cantus", "cantuum", "cantui", "cantibus", "cantu", "cantibus", "sang m4",4),
    new Word("casus", "casus", "casum", "casus", "casus", "casuum", "casui", "casibus", "casu", "casibus", "tilfælde m4",4),
    new Word("cornu", "cornua", "cornu", "cornua", "cornus", "cornuum", "cornu", "cornibus", "cornu", "cornibus", "horn n4",4),
    new Word("domus", "domus", "domum", "domus", "domus", "domuum", "domui", "domibus", "domu", "domibus", "hus f4",4),
    new Word("exercitus", "exercitus", "exercitum", "exercitus", "exercitus", "exercituum", "exercitui", "exercitibus", "exercitu", "exercitibus", "hær m4",4),
    new Word("fructus", "fructus", "fructum", "fructus",  "fructus", "fructuum", "fructui", "fructibus","fructu", "fructibus", "afgrøde, frugt m4",4),
    new Word("genu", "genua", "genu", "genua", "genus", "genuum", "genu", "genibus", "genu", "genibus", "knæ n4",4),
    new Word("ictus", "ictus", "ictum", "ictus", "ictus", "ictuum", "ictui", "ictibus", "ictu", "ictibus", "slag m4",4),
    new Word("consulatus", "consulatus", "consulatum", "consulatus", "consulatus", "consulatuum", "consulatui", "consulatibus", "consulatu", "consulatibus", "konsulat m4",4),
    new Word("magistratus", "magistratus", "magistratum", "magistratus", "magistratus", "magistratuum", "magistratui", "magistratibus", "magistratu", "magistratibus", "magistrat m5",4),
    new Word("manus", "manus", "manum", "manus", "manus", "manuum", "manui", "manibus", "manu", "manibus", "hånd f4",4),
    new Word("nurus", "nurus", "nurum", "nurus", "nurus", "nuruum", "nurui", "nuribus", "nuru", "nuribus", "svigerdatter f4",4),
    new Word("porticus", "porticus", "porticum", "porticus", "porticus", "porticuum", "porticui", "porticibus", "porticu", "porticibus", "søjlegang m4",4),
    new Word("portus", "portus", "portum", "portus", "portus", "portuum", "portui", "portibus", "portu", "portibus", "havn m4",4),
    new Word("senatus", "senatus", "senatum", "senatus", "senatus", "senatuum", "senatui", "senatibus", "senatu", "senatibus", "senat m4",4),
    new Word("manus", "manus", "manum", "manus", "manus", "manuum", "manui", "manibus", "manu", "manibus", "hånd f4",4),
    ////////////////////////////////
    // Declinatio quinta
    ////////////////////////////////
    new Word("acies", "acies", "aciem", "acies", "aciei", "acierum", "aciei", "aciebus", "acie", "aciebus", "slagorden f5",5),
    new Word("dies", "dies", "diem", "dies", "diei", "dierum", "diei", "diebus", "die", "diebus", "dag m/f5",5),
    new Word("effigies", "effigies", "effigiem", "effigies", "effigiei", "effigierum", "effigiei", "effigiebus", "effigie", "effigiebus", "afbildning f5",5),
    new Word("facies", "facies", "faciem", "facies", "faciei", "facierum", "faciei", "faciebus", "facie", "faciebus", "ansigt f5",5),
    new Word("fides", "fides", "fidem", "fides", "fidei", "fiderum", "fidei", "fidebus", "fide", "fidebus", "tillid, tro f5",5),
    new Word("glacies", "glacies", "glaciem", "glacies", "glaciei", "glacierum", "glaciei", "glaciebus", "glacie", "glaciebus", "is f5",5),
    new Word("meridies", "meridies", "meridiem", "meridies", "meridiei", "meridierum", "meridiei", "meridiebus", "meridie", "meridiebus", "middag (kl. 12) m5",5),
    new Word("rabies", "rabies", "rabiem", "rabies", "rabiei", "rabierum", "rabiei", "rabiebus", "rabie", "rabiebus", "raseri f5",5),
    new Word("res", "res", "rem", "res", "rei", "rerum", "rei", "rebus", "re", "rebus", "ting f5",5),
    new Word("series", "series", "seriem", "series", "seriei", "serierum", "seriei", "seriebus", "serie", "seriebus", "række f5",5),
    new Word("species", "species", "speciem", "species", "speciei", "specierum", "speciei", "speciebus", "specie", "speciebus", "udseende, skikkelse f5",5),
    new Word("spes", "spes", "spem", "spes", "spei", "sperum", "spei", "spebus", "spe", "spebus", "håb, forhåbning f5",5),
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
