//!git -->softeare, locally install huna parxa
// distributed version control system(vcs)--> version track ani control garna, team ma work garyo vani kun member le k kam garyo vanera track garna milca 
//version vanya file ma gareko changes haru (snapshot)

//?repository/repo-->folder
//config
/* Commit garda author ko naam ra email rakhna

Git le jaba commit hunxa, kasle gareko ho vanera save garxa.

Tyo info user.name ra user.email bata linxa. */


//git config --global --list  //?list git global config

//git config → Git ko settings manage garna use hunxa
//--global → Global level ko setting (timro computer ma sabai project ma apply hunxa)
//--list → Sabai settings ko list dekhaunxa



//git config --global user.name "user_name" //?set global user name   //j rakhda ne vayo
//git config --global user.email "user_email"//?set global user email   //yo chai github ko email rakhna parxa

//paxi gayera jastai name ani email change garna man lagyo vani feri same code lekhni name ra email matra change garni mathi ko step jasari


//code ko flow banya jaile pani wd ko change bata hunca vanya kun file ma change garyo vanni ho .kunai change vako xaina vani tyo wd ma xa vanni buje hunxa
//wd(working directory) =>staging area =>  local repo

//* initialize git repo-->yo vanya chai git sotware xa tara teslai track garyaxaina vani ava hamle initialize garxam ani track garxam,means yo sabai 1-17 wota class vako folder lai local repo banauna paryo
//git init      // yo lekhna vanda paila hamle root foler ma huna parxa tyo check garna pwd hanera here ne hunxa .//? initialize an empty local repo . ra tyo folder vitra jj change hunca tyo auto change track garna thalca git le.
                //suru ma default ma main rakhya vayera main branch start hunxa ani left ko down ma dekhauxa
                //yo code lekhisi file haru green color ko hunxa jasko side ma U auxa which is untrack changes 
                //yo code le empty local repo banauxa vanya xa tara tyo herna ko lagi yo code hanna parxa:
                            //?ls-a --->yo vs ko powershell ma nachalna sakxa chalena vani git ma try garna parxa ani tesma .git vanni local repo dekhinxa jun git init le banako hunxa . yo hidden folder ho so ls-a hanyo vani matra dekhinxa ls handa chai dekhinna
                //git le track garni vaneko tei .git folder ma ho jun hidden hunxa ani hamle tyo afai create pani garna sakdainau , yesle commit , history sab track garera rakhca , yedi kei vayera yo .git repo delete vayo vani teti bela backup chainxa tyo chai github ho           


//git status            ---> local repo ko jun branch ma xam tyo file ko status k xa ?untracked traked ? tyo dekhauxa

//git add<file_path>    //yo garesi wd bata staging area ma janxa balla ani jun file lai add garyo tyo ava staged changes vanni ma auxa aru sabai changes vanni part ma hunca , ani ava yo vaneko ava hami git ma push garna ready xam vanera bujey hunxa (github ma haina)
                        //add garesi status hery pani hunxa

//git add .  -->current folder ko sabai add garna paryo vani

//git commit -m "commit_message"     //Commit = Save point ho Git ma
        //to garesi changes bata add gareko file hatxa share wala option(source control) bata ani file haru ma gayera heryo vani hariyo bata normal ma change hunxa which means ava git le changes haru track garxa
        //tyo share wala ma heryo vani ava graph ma change gareko file ko commit name dinxa ani teslai kosle change gareko i.e user.name vanera suruma git config garda gareko name pani dekhauxa


//git log --->yesle kun kaile kole add garyo vanera detail dinxa


//yedi kunai file haruma kei code / any other thing change garyo vani teslai pani feri git add filename/. garni ani feri commit garni k chai change garyo vanera . 

//!branch
//git branch //?list all available branches
//git branch <branch _name>  //?create new local branch
//git switch <branch_name>
//git checkout <branch_name>    //switch ra checkout same kam ,mathilineko code ra yo same kam to swirch branch
//git checkout -b <branch_name>  //yesle naya branch pani banauni vayo ani tyo sangai tehi naya branch ma switch pani garni vayo . already exits branch lai chai garna mildaina yesto

//git branch -M main   ---->default branch main banaidinxa



//!github
//git ko history/version lai host garni web based platform ,backup rakhni thau 


//git remote -v    -->yesle check garxa ki yedi hamro repo kunai sanga connect(Add) vako xa ki xaina 


//git remote add origin <origin_repo_url>  ----->hamro .git locally banako repo(git init garda banako) lai ava original github ma add gardinxa anni teha safely store garna help garxa yedi .git file jhukera pani delete vayo vani . uel chai https kai ligda ramro

//git push origin <banch_name>    //aba push hunxa





