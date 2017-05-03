import "es6-promise"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   DEMO:  Calling Asynchronous functions using Promises and Async/Await 
//
function asynch1() : Promise<string> 
    {
    let p: Promise<string> = new Promise((resolve, reject) => {
            setTimeout(() => {
                let data: string = "1";
                if (data.length > 0)
                    {
                    console.log(data); 
                    resolve (data);
                    }
                else 
                    {
                    reject("error getting '1'");
                    }
            }, 4000);
    });
    return p;
    }

function asynch2() : Promise<string> 
    {
    let p: Promise<string> = new Promise((resolve, reject) => {
            setTimeout(() => {
                let data: string = "2";
                if (data.length > 0)
                {
                console.log(data);
                resolve (data);
                }
            else 
                {
                reject("error getting '2'");
                }
            }, 1000);
    });
    return p;
}

async function getAsyncDataSequentially() 
    {
    console.log("0");
    try
        {
        let data1 = await asynch1();   // data1 = "1"
        let data2 = await asynch2();   // data2 = "2"
        }
    catch(err)
        {
        console.log(err);
        }
    console.log("3");
    }

    async function getAsyncDataInParallel() 
        {
        console.log("0");
        try
            {
            let promise1 = asynch1();    // "1"
            let promise2 = asynch2();    // "2"
            let [data1, data2] = await Promise.all([promise1, promise2]);  

            //  do something with data1 & data2
            let s = data1 + data2;
            }
        catch(err)
            {
            console.log(err);
            }
        console.log("3");
        }

console.log('Before calling getAsyncDataSequentially...');
getAsyncDataSequentially();
console.log('After calling getAsyncDataSequentially...');

//console.log('Before calling getAsyncDataInParallel...');
//getAsyncDataInParallel();
//console.log('After calling getAsyncDataInParallel...');

