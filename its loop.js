let boy = [
    {
        name : "reza",
        family : "boshghabi",
        age : "22",
        country : "majarestan",
        phoneNumber : "09121614654"

    },
    {
        name : "cheraghali",
        family : "shaliani",
        age : "42",
        country : "afghanisan",
        phoneNumber : "09123213213"
    }
]
for(let  i  =  0 ; i<boy.length ; i++)
{
    if (boy[i].age>25){
        boy[i].type= "he is old"
    }
    else
    boy[i].type= "he is young"
}
console.log(boy)