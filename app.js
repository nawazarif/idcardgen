var stuID = document.getElementById('id')
var stuName = document.getElementById('naamdo')
var fatherName = document.getElementById('fatherName')
var Classs = document.getElementById('className')
var emergencyCall = document.getElementById('phone')


document.getElementById('idCard').style.display='none'

function schoolCard(){

// for Id Card Number

    var num = Math.random()*1000000
    var newNum = Math.round(num)
    stuID.innerHTML = newNum;


// for Student Name

    var divTar = document.getElementById('StuNaaaam')
    var enterPtag = document.createElement('p')
    divTar.appendChild(enterPtag)
    enterPtag.setAttribute('id', 'naamstu')
    enterPtag = document.getElementById('naamstu')
    enterPtag.innerHTML = document.createTextNode(stuName.value).nodeValue
    



    // for Father Name

    var divTarfname = document.getElementById('FName')
    var enterPtagfname = document.createElement('p')
    divTarfname.appendChild(enterPtagfname)
    enterPtagfname.setAttribute('id', 'fNaam')
    enterPtagfname = document.getElementById('fNaam')
    enterPtagfname.innerHTML = document.createTextNode(fatherName.value).nodeValue


    // For Class


    var divTarClass = document.getElementById('stuClass')
    var enterPtagClass = document.createElement('p')
    divTarClass.appendChild(enterPtagClass)
    enterPtagClass.setAttribute('id', 'StuClasss')
    enterPtagClass = document.getElementById('StuClasss')
    enterPtagClass.innerHTML = document.createTextNode(Classs.value).nodeValue


    // For Call


    var divTarEmcall = document.getElementById('emCall')
    var enterPtagCall = document.createElement('p')
    divTarEmcall.appendChild(enterPtagCall)
    enterPtagCall.setAttribute('id', 'EmCall')
    enterPtagCall = document.getElementById('EmCall')
    enterPtagCall.innerHTML = document.createTextNode(emergencyCall.value).nodeValue




    document.getElementById('inpdata').style.display='none'
    document.getElementById('idCard').style.display='inline-block'














    console.log(enterPtagfname)
}