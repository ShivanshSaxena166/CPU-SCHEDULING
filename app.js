const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const ldh =require("lodash");

const app = express();
app.use(express.static("public"));
app.set("view engine",'ejs');
var algo=["FCFS","Shortest Job First","Round Robin","Highest Response Ratio Next"];
var profc=[];
var starfc=[];
var burfc=[];
var wtfc=[];
var tatfc=[];
var srvfc=[];
var po=[];
var stari=[];
var del=[];
var n;
var ed;
var pro=[];
var sttt=[];
var bur=[];
var wt=[];
var tat=[];
var disp=[];
var prorb=[];
var burrb=[];
var quanta=2;
var rembt=[];
var tatrb=[];
var wtrb=[];
var prohrn=[];
var starhrn=[];
var burhrn=[];
var tathrn=[];
var wthrn=[];
var sumhrn=[];
var comhrn=[];
var seq=[];
var select=[];
var tb=[];
var s1=[];
var s2=[];
var s3=[];
var ex;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("hp");
});

app.post("/",function(res,req){
n=res.body.nop;
req.render("input",{n:n})
});

app.post("/slit",function(req,res){


    po.push(req.body.bn);
    stari.push(req.body.st);
    del.push(req.body.ct);

        res.redirect("/result");



});
app.get("/result",function(req,res){
 let tt=0;
 let to=0;
 let temp=0;
 let val=0;
 let pws=0;
 let ttfc=0;
 let tofc=0;
 let ttrb=0;
 let torb=0;
 let loc=0;
 let tthrn=0;
 let tohrn=0;
 let suhrn=0;



for(let i=0;i<n;i++)
{
  for(let j=i+1;j<n;j++)
  {
    if(parseInt(stari[0][i])>parseInt(stari[0][j]))
    { ex=po[0][i];
      po[0][i]=po[0][j];
      po[0][j]=ex;
      ex=stari[0][i];
        stari[0][i]=stari[0][j];
        stari[0][j]=ex;

        ex=del[0][i];
        del[0][i]=del[0][j];
          del[0][j]=ex;
    }
  }
}
console.log("originals");
console.log(po[0]);
console.log(stari[0]);
console.log(del[0]);



for(let i=0;i<n;i++)
{
pro[i]=parseInt(po[0][i]);
sttt[i]=parseInt(stari[0][i]);
bur[i]=parseInt(del[0][i]);
profc[i]=parseInt(po[0][i]);
starfc[i]=parseInt(stari[0][i]);
burfc[i]=parseInt(del[0][i]);
prorb[i]=parseInt(po[0][i]);
burrb[i]=parseInt(del[0][i]);
prohrn[i]=parseInt(po[0][i]);
starhrn[i]=parseInt(stari[0][i]);
burhrn[i]=parseInt(del[0][i]);
disp.push(0);
tat.push(0);
wt.push(0);
wtfc.push(0);
tatfc.push(0);
srvfc.push(0);
rembt.push(0);
tatrb.push(0);
wtrb.push(0);
tathrn.push(0);
wthrn.push(0);
comhrn.push(0);
sumhrn.push(0);

tb.push(0);
}
console.log(pro);
console.log(sttt);
console.log(bur);
console.log("round robin input");
console.log(prorb);
console.log("Highest Response Ratio ");
console.log(prohrn);
console.log(starhrn);
console.log(burhrn);



disp[0]=sttt[0]+bur[0];
tat[0]=disp[0]-sttt[0];
wt[0]=tat[0]-bur[0];
for(let i =1;i<n;i++)
{
  temp=disp[i-1];
  let low =bur[i];
  for(let j=i;j<n;j++)
  {
if(temp>=sttt[j]&&low>=bur[j])
{
  low=bur[j];
  val=j;
}}
disp[val]=temp +bur[val];
tat[val]=disp[val]-sttt[val];
wt[val]=tat[val]-bur[val];

pws=pro[i];
  pro[i]=pro[val];
  pro[val]=pws;



pws=sttt[i];
  sttt[i]=sttt[val];
  sttt[val]=pws;

  pws=bur[i];
  bur[i]=bur[val];
    bur[val]=pws;

    pws=disp[i];
      disp[i]=disp[val];
      disp[val]=pws;
    pws=tat[i];
        tat[i]=tat[val];
        tat[val]=pws;
      pws=wt[i];
          wt[i]=wt[val];
          wt[val]=pws;




}
tt=0;
to=0;
for(let i=0;i<n;i++)
{tt=tt+wt[i];
  to=to+tat[i];

}

//fcfs begins
for(let i=1;i<n;i++)
{
  srvfc[i]=srvfc[i-1]+burfc[i-1];
  wtfc[i]=srvfc[i]-starfc[i];
  if(wtfc[i]<0)
  wtfc[i]=0;
}
for(let i=0;i<n;i++)
{
  tatfc[i]=burfc[i]+wtfc[i]
}
for(let i=0;i<n;i++)
{
  ttfc=ttfc+wtfc[i];
  tofc=tofc+tatfc[i];
}
// here begins round Robin

for(let i=0;i<n;i++)
{
  rembt[i]=burrb[i];
}

let t=0;
var done=1;
while(1)
{
done=1;
  for(let i=0;i<n;i++)
  {
    if(rembt[i]>0)
    {
      done=0;
      if(rembt[i]>quanta)
      {
        t=t+quanta;
        rembt[i]=rembt[i]-quanta;
      }
      else {
        t=t+rembt[i];
        wtrb[i]=t-burrb[i];
        rembt[i]=0;
      }
    }
  }
  console.log("done");
  console.log(done);
  if(done===1)
  break;
}
for(let i=0;i<n;i++)
{
  tatrb[i]=burrb[i]+wtrb[i];
}
for(let i=0;i<n;i++ )
{
  ttrb=ttrb+wtrb[i];
  torb=torb+tatrb[i];
}

for(let i=0;i<n;i++)
{
  for(let ij=i+1;ij<n;ij++)
  {
    if(burrb[i]>burrb[ij])
    {
      pws=burrb[i];
      burrb[i]=burrb[ij];
      burrb[ij]=pws;

      pws=prorb[i];
    prorb[i]=prorb[ij];
    prorb[ij]=pws;

    }
  }
}
//HRN begins
for(let i=0;i<n;i++)
{
  suhrn=suhrn+burhrn[i];
}

t=starhrn[0];
while(t<suhrn)
{
  let hrr= -9999;
  let temp=0;
  let loc=0;
  for(let i=0;i<n;i++)
  {
    if(starhrn[i]<t&&comhrn[i]===0)
    {
      temp=(burhrn[i]+(t-starhrn[i]))/burhrn[i];
      if(hrr<temp)
      {
        hrr=temp;
        loc=i;
      }
    }


  }
  t=t+burhrn[loc];
  wthrn[loc]=t-starhrn[loc]-burhrn[loc];
  tathrn[loc]=t-starhrn[loc];
tthrn=tthrn+wthrn[loc];
tohrn=tohrn+tathrn[loc];
comhrn[loc]=1;
seq.push(prohrn[loc]);
}


console.log(disp);
console.log(tat);
console.log(wt);
console.log("FCFS");
console.log(wtfc);
console.log(tatfc);
console.log("Round robin");
console.log(wtrb);
console.log(tatrb);
console.log("Highest Response ratio next");
console.log(wthrn);
console.log(tathrn);

select.push(tofc+ttfc);
select.push(tt+to);
select.push(ttrb+torb);
select.push(tthrn+tohrn);
let y=9999;
let cd=0;
for(let i=0;i<n;i++)

{if(y>select[i])
  {
    y=select[i];
    cd=i;
  }

}
let length=0;
let u=[];
for(let i=0;i<4;i++)
{
  if(y===select[i])
  {
    u.push(algo[i])
    length++;
  }
}


console.log(select);
 res.render("result",{tim:tt,wtff: to,ttfc:ttfc,tofc:tofc,n:n,pro:pro,torb:torb,ttrb:ttrb,prorb:prorb,tthrn:tthrn,tohrn:tohrn,seq:seq,profc:profc,final: u,length:length});

})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});