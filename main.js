function calculateTotalWHours() {
    // for monday
    var searchElement=document.getElementById("std1").value;
    var stm1=parseInt(document.getElementById("stm1").value);
    if(searchElement=='am')
    {
        var sth1=parseInt(document.getElementById("sth1").value);
    }
    else 
    {
        var sth1=parseInt(document.getElementById("sth1").value)+12;
    }
    var stm=sth1*60+stm1;
    var searchElement2=document.getElementById("etd1").value;
    var etm1=parseInt(document.getElementById("etm1").value);
    if(searchElement2=='am')
    {
        var eth1=parseInt(document.getElementById("eth1").value);
    }
    else 
    {
        var eth1=parseInt(document.getElementById("eth1").value)+12;
    }
    var etm=eth1*60+etm1;
    var total=etm-stm;
    var bdh1=parseInt(document.getElementById("bdh1").value);
    var bdm1=parseInt(document.getElementById("bdm1").value);
    var bdm=bdh1*60+bdm1;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("mth").innerHTML=parseInt(total/60);
    document.getElementById("mtm").innerHTML=total%60;
    var total1=total;

    // for tuesday 
    var searchElement=document.getElementById("std2").value;
    var stm2=parseInt(document.getElementById("stm2").value);
    if(searchElement=='am')
    {
        var sth2=parseInt(document.getElementById("sth2").value);
    }
    else 
    {
        var sth2=parseInt(document.getElementById("sth2").value)+12;
    }
    var stm=sth2*60+stm2;
    var searchElement2=document.getElementById("etd2").value;
    var etm2=parseInt(document.getElementById("etm2").value);
    if(searchElement2=='am')
    {
        var eth2=parseInt(document.getElementById("eth2").value);
    }
    else 
    {
        var eth2=parseInt(document.getElementById("eth2").value)+12;
    }
    var etm=eth2*60+etm2;
    var total=etm-stm;
    var bdh2=parseInt(document.getElementById("bdh2").value);
    var bdm2=parseInt(document.getElementById("bdm2").value);
    var bdm=bdh2*60+bdm2;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("tth").innerHTML=parseInt(total/60);
    document.getElementById("ttm").innerHTML=total%60;
    var total2=total;

    // for wednesday
    var searchElement=document.getElementById("std3").value;
    var stm3=parseInt(document.getElementById("stm3").value);
    if(searchElement=='am')
    {
        var sth3=parseInt(document.getElementById("sth3").value);
    }
    else 
    {
        var sth3=parseInt(document.getElementById("sth3").value)+12;
    }
    var stm=sth3*60+stm3;
    var searchElement3=document.getElementById("etd3").value;
    var etm3=parseInt(document.getElementById("etm3").value);
    if(searchElement3=='am')
    {
        var eth3=parseInt(document.getElementById("eth3").value);
    }
    else 
    {
        var eth3=parseInt(document.getElementById("eth3").value)+12;
    }
    var etm=eth3*60+etm3;
    var total=etm-stm;
    var bdh3=parseInt(document.getElementById("bdh3").value);
    var bdm3=parseInt(document.getElementById("bdm3").value);
    var bdm=bdh3*60+bdm3;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("wth").innerHTML=parseInt(total/60);
    document.getElementById("wtm").innerHTML=total%60;
    var total3=total;

    // for thursday 
    var searchElement=document.getElementById("std4").value;
    var stm4=parseInt(document.getElementById("stm4").value);
    if(searchElement=='am')
    {
        var sth4=parseInt(document.getElementById("sth4").value);
    }
    else 
    {
        var sth4=parseInt(document.getElementById("sth4").value)+12;
    }
    var stm=sth4*60+stm4;
    var searchElement4=document.getElementById("etd4").value;
    var etm4=parseInt(document.getElementById("etm4").value);
    if(searchElement4=='am')
    {
        var eth4=parseInt(document.getElementById("eth4").value);
    }
    else 
    {
        var eth4=parseInt(document.getElementById("eth4").value)+12;
    }
    var etm=eth4*60+etm4;
    var total=etm-stm;
    var bdh4=parseInt(document.getElementById("bdh4").value);
    var bdm4=parseInt(document.getElementById("bdm4").value);
    var bdm=bdh4*60+bdm4;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("thth").innerHTML=parseInt(total/60);
    document.getElementById("thtm").innerHTML=total%60;
    var total4=total;

    // for friday
    var searchElement=document.getElementById("std5").value;
    var stm5=parseInt(document.getElementById("stm5").value);
    if(searchElement=='am')
    {
        var sth5=parseInt(document.getElementById("sth5").value);
    }
    else 
    {
        var sth5=parseInt(document.getElementById("sth5").value)+12;
    }
    var stm=sth5*60+stm5;
    var searchElement5=document.getElementById("etd5").value;
    var etm5=parseInt(document.getElementById("etm5").value);
    if(searchElement5=='am')
    {
        var eth5=parseInt(document.getElementById("eth5").value);
    }
    else 
    {
        var eth5=parseInt(document.getElementById("eth5").value)+12;
    }
    var etm=eth5*60+etm5;
    var total=etm-stm;
    var bdh5=parseInt(document.getElementById("bdh5").value);
    var bdm5=parseInt(document.getElementById("bdm5").value);
    var bdm=bdh5*60+bdm5;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("fth").innerHTML=parseInt(total/60);
    document.getElementById("ftm").innerHTML=total%60;
    var total5=total;

    // for saturday
    var searchElement=document.getElementById("std6").value;
    var stm6=parseInt(document.getElementById("stm6").value);
    if(searchElement=='am')
    {
        var sth6=parseInt(document.getElementById("sth6").value);
    }
    else 
    {
        var sth6=parseInt(document.getElementById("sth6").value)+12;
    }
    var stm=sth6*60+stm6;
    var searchElement6=document.getElementById("etd6").value;
    var etm6=parseInt(document.getElementById("etm6").value);
    if(searchElement6=='am')
    {
        var eth6=parseInt(document.getElementById("eth6").value);
    }
    else 
    {
        var eth6=parseInt(document.getElementById("eth6").value)+12;
    }
    var etm=eth6*60+etm6;
    var total=etm-stm;
    var bdh6=parseInt(document.getElementById("bdh6").value);
    var bdm6=parseInt(document.getElementById("bdm6").value);
    var bdm=bdh6*60+bdm6;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("sath").innerHTML=parseInt(total/60);
    document.getElementById("satm").innerHTML=total%60;
    var total6=total;
    
    //for sunday 
    var searchElement=document.getElementById("std7").value;
    var stm7=parseInt(document.getElementById("stm7").value);
    if(searchElement=='am')
    {
        var sth7=parseInt(document.getElementById("sth7").value);
    }
    else 
    {
        var sth7=parseInt(document.getElementById("sth7").value)+12;
    }
    var stm=sth7*60+stm7;
    var searchElement7=document.getElementById("etd7").value;
    var etm7=parseInt(document.getElementById("etm7").value);
    if(searchElement7=='am')
    {
        var eth7=parseInt(document.getElementById("eth7").value);
    }
    else 
    {
        var eth7=parseInt(document.getElementById("eth7").value)+12;
    }
    var etm=eth7*60+etm7;
    var total=etm-stm;
    var bdh7=parseInt(document.getElementById("bdh7").value);
    var bdm7=parseInt(document.getElementById("bdm7").value);
    var bdm=bdh7*60+bdm7;
    total=total-bdm;
    if(total<=0)
    {
        total=0-total;
        total=24*60-total;
    }
    document.getElementById("suth").innerHTML=parseInt(total/60);
    document.getElementById("sutm").innerHTML=total%60;
    var total7=total;

    var total=total1+total2+total3+total4+total5+total6+total7;
    document.getElementById("finalth").innerHTML=parseInt(total/60);
    document.getElementById("finaltm").innerHTML=total%60;
}

function clearAll() {
    document.getElementById("myform").reset();
}