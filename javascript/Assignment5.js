
function getOrdersForCustomer()
{
    var objRequest = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
        
        objRequest.open("GET",url,true);
        objRequest.send();
        
}
    
function GenerateOutput(result)
{
        var count = 0;
        var displaytext = "<table><tr><th>Order Date </th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Post Code</th><th>Shipped Date</th></tr>";
        
        
        for (count= 0; count < result.GetOrdersForCustomerResult.length; count++)
        {
            displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostCode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
            
        }
        displaytext += "</table>"
        document.getElementById("orderdisplay").innerHTML = displaytext;
}

function getCustomerOrderHistory()
{
    var objRequest2 = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/customerID/";
    url += document.getElementById("custid").value;
    
    
    objRequest2.onreadystatechange = function()
    {
        if (objRequest2.readyState == 4 && objRequest2.status == 200)
        {
            var output = JSON.parse(objRequest2.responseText);
            GenerateOutput2(output);
        }
    }
        
        objRequest2.open("GET",url,true);
        objRequest2.send();
        
}

function GenerateOutput2(result)
{
    var count = 0;
    var displaytext1 = "<table><tr><th> Product Name </th><th> Quantities </th></tr>";

    for (count = 0; count < result.length; count ++)
    {
        displaytext1 += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
    }
    displaytext1 += "</table>"
    document.getElementById("orderhistory").innerHTML = displaytext1;
}


function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    
    {
       document.getElementById("section1").style.visibility = "visible";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 2")
    {
       document.getElementById("section2").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 3") 
    {
       document.getElementById("section3").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section2").style.visibility = "hidden";
    }
    
    else
    {
         document.getElementById("section1").style.visibility = "hidden";
         document.getElementById("section2").style.visibility = "hidden";
         document.getElementById("section3").style.visibility = "hidden";
    }
    
}  