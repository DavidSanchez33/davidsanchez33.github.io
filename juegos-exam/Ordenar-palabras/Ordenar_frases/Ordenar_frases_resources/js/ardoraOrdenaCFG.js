var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=25; scoreInc=5; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#1CE416"; colorText="#000000"; colorSele="#D92657";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste"; messageTime="Se te acabo el tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9mcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TGEgY2FyZ2EgZGUgdW4gcHJvdMOzbi4=","TGEgY2FyZ2EgZGUgdW4gbmV1dHLDs24=","TGEgY2FyZ2EgZGUgdW4gZWxlY3Ryb24u","RnVlIEpvc2hlcCBUaG9tc29uLg==","UGFydGljdWxhcyBxdWUgY29tcG9uZW4gbG9zIGhhcmRyb25lcy4="];imaW=["","","","",""];queW=["Su carga es positiva","Su carga es 0","Su carga es negativa","Descubre el electrón","Parte de los fermiones"];altW=["","","","",""];c=[22,22,24,19,38];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Ordenar_frases_resources/media/"; textBNext="Siguiente...";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
