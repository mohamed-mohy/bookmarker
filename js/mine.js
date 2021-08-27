/******************global implementation***************** */
var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var allSites =[];

/***************************fun for check value self invoke****************** */
(function(){
    var siteName    =  siteNameInput.value;
    var siteURL     =  siteURLInput.value;
    var errorName   = document.getElementById("errorName")
    var errorURL    = document.getElementById("errorURL")


    if(siteName == "")
    {
        var errorName = document.getElementById("errorName")


        siteNameInput.addEventListener("focusout",function(){
            var siteName   = siteNameInput.value;

            if(siteName == "")
            {
                errorName.className="alert alert-danger w-50 text-center m-auto d-block"
                siteNameInput.className="form-control m-auto w-50 mb-3 is-invalid"

            }
        })

        siteNameInput.addEventListener("keyup",function(){
            var siteName   = siteNameInput.value;

                if(siteName != "")
                {
                    errorName.className="d-none"
                    siteNameInput.className="form-control m-auto w-50 is-valid"
                }
                else
                {
                    if(siteName == "")
                    {
                        errorName.className="alert alert-danger w-50 text-center m-auto d-block"
                        siteNameInput.className="form-control m-auto w-50 mb-3 is-invalid"
    
                    }
                }
                
        })
    }


    if(siteURL == "")
    {
        var errorURL = document.getElementById("errorURL")


        siteURLInput.addEventListener("focusout",function(){
            var siteURL   = siteURLInput.value;

            if(siteURL == "" && siteURL.includes(".") == false )
            {
                errorURL.className="alert alert-danger w-50 text-center m-auto d-block"
                siteURLInput.className="form-control m-auto w-50 mb-3 is-invalid"

            }
            else
            {

            }
        })

        siteURLInput.addEventListener("keyup",function(){
            var siteURL   = siteURLInput.value;
            var placeOfDot = siteURL.indexOf(".");
            var lengthOfDot =siteURL.substring(placeOfDot+1);
                
            if(siteURL != "" && siteURL.includes(".")  && lengthOfDot.length > 1)
            {
                errorURL.className="d-none"
                siteURLInput.className="form-control m-auto w-50 is-valid"
            }
        
                else
                {

                    if(siteURL == "" || siteURL.includes(".") == lengthOfDot.length <= 1 )
                    {
                        errorURL.className="alert alert-danger w-50 text-center m-auto d-block"
                        siteURLInput.className="form-control m-auto w-50 mb-3 is-invalid"
                    }

                    
                
                }
                
        })
    }

})()


displaySite()



/**************add site fun***************** */
function addSite()
{
    
    var siteURL     =  siteURLInput.value;
    var siteName    =  siteNameInput.value;
    if(siteURLInput.value.toLowerCase().includes("http://"))
    {
        var placeOfHttp = siteURL.indexOf("http://");
        var lengthOfDot =siteURL.substring(placeOfHttp+8);
        var siteURL     =  lengthOfDot;
        if(siteName != "" && siteURL !="")
        {
        var newSite     =  {
            sName : siteName ,
            sURL  : siteURL
        }
        allSites.push(newSite);
        localStorage.setItem("BookmarkerStorage" , JSON.stringify(allSites));
        displaySite()
        clearValue()
        normalInput()
        }
    }
    else if(siteURLInput.value.toLowerCase().includes("https://"))
    {

        var placeOfHttp = siteURL.indexOf("https://");
        var lengthOfDot =siteURL.substring(placeOfHttp+8);
        var siteURL     =  lengthOfDot;
        if(siteName != "" && siteURL !="")
        {
        var newSite     =  {
            sName : siteName ,
            sURL  : siteURL
        }
        allSites.push(newSite);
        localStorage.setItem("BookmarkerStorage" , JSON.stringify(allSites));
        displaySite()
        clearValue()
        normalInput()
        }
    }
    else
    {
        inputValidation()
    
        var siteURL     =  siteURLInput.value;
        if(siteName != "" && siteURL !="")
        {
        var newSite     =  {
            sName : siteName ,
            sURL  : siteURL
        }
        allSites.push(newSite);
        localStorage.setItem("BookmarkerStorage" , JSON.stringify(allSites));
        displaySite()
        clearValue()
        normalInput()
        }
    }

}
/*******************fun for display sites********************** */
function displaySite()
{
    var collector =``;
    console.log(collector)
    if(localStorage.getItem("BookmarkerStorage") != null)
    {
        allSites =  JSON.parse(localStorage.getItem("BookmarkerStorage"))
    }

    for(var i =0 ; i < allSites.length ; i++)
    {
        collector = collector + `
        <div class ="row my-3 shadow-sm py-3" >
        <div class="px-4 fs-5 fw-bold text-dark col-4">`+allSites[i].sName+`</div>
        <div class="col-4">
        <a href="http://`+allSites[i].sURL+`" target="_blank" class="text-white text-decoration-none" ><button class="btn btn-primary">Visit</button></a>
            <button class="btn btn-danger mx-3" onclick="deleteSite(`+i+`)">Delete</button>
        </div>
        </div>
        
        `
    }

    document.getElementById("tableSites").innerHTML = collector
}


/*************clear input ******************* */
function clearValue()
{
    siteURLInput.value  = ""
    siteNameInput.value = ""
}

/******************delete site fun************* */
function deleteSite(i)
{
    allSites.splice(i,1)
    localStorage.setItem("BookmarkerStorage" , JSON.stringify(allSites));
    displaySite()

}
/**********************validation method****************** */
function inputValidation()
{
    var siteName    =  siteNameInput.value;
    var siteURL     =  siteURLInput.value;
    var errorName   = document.getElementById("errorName")
    var errorURL    = document.getElementById("errorURL")
    if (siteName != "")
    {
        errorName.className="d-none"
        siteNameInput.className="form-control m-auto w-50 mb-3 is-valid"
    }
    else{
        if (siteName == "")
        {
            errorName.className="alert alert-danger w-50 text-center m-auto d-block"
            siteNameInput.className="form-control m-auto w-50 mb-3 is-invalid"
        }
    }


    if (siteURL != "")
    {
        errorURL.className="d-none"
        siteURLInput.className="form-control m-auto w-50 mb-3 is-valid"
    }
    else{
        if (siteName == "")
        {
            errorURL.className="alert alert-danger w-50 text-center m-auto d-block"
            siteURLInput.className="form-control m-auto w-50 mb-3 is-invalid"
        }
    }
}

/**********************reset input back to normal****************** */
function normalInput()
{
    if(siteNameInput.value == "" && siteURLInput.value == "")
    {
        siteNameInput.className="form-control m-auto w-50 "
        siteURLInput.className="form-control m-auto w-50 "
    }
}

