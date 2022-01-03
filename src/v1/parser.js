/**
 * 
 * Parser
 * 
 * MIT LICENSED BY DENIS POWER.
 * 
 * 2022
 * 
 * 
 */


 const fs=require("fs");
 const path=require("path");

 let config;
 let dir;

 /**
  * 
  * config.json
  * 
  * {
  * 
  * "target":["file1.js", "file2.js"],
  * "outputDir":"./browser",
  *  "comment":false,
  *  "ext":""
  * 
  * 
  * }
  * 
  * 
  */
 


String.prototype.addToStart=function(content){

    let comm=content+`

`;
    
  return comm=comm+this;


}

String.prototype.removeSpaces=function(){


    return this.replace(/\s/g,"") ;


}


 function hasConfig(){

    const bool=fs.existsSync("./config.json");
      
      
    return bool;

 }


 function isAValidFile(file){

    const pattern=/\.js/;

    return pattern.test(path.extname(file));

 }

 function getConfig(){

     if(hasConfig()){

        const configContent=fs.readFileSync("./config.json");
        

        try {
        config=JSON.parse(configContent);

        }catch(e){

            

            throw new Error(`"${configContent}" is not a json format.
            The content of config.json must be something like:

            {

               "target":["file1.js","file2.js"......],
               outPutDir:"/folder"

            }
            
            `)

        }

     }else{

        throw new Error(`
        
        The config.json file was not found, create one.
        
        `)

     }

 }


 function parseConfig(){

    getConfig();
    


    const{
        target,
        outPutDir,
        comment,
        ext,


    }=config;

    const setting={
        comment:(comment!=void 0 && !comment) ? false : true,
        ext:(typeof ext=="string") ? ext : null,
        outPutDir:(typeof outPutDir=="string") ? outPutDir :"./",
    }



    if(Array.isArray(target)){

        /**
         * 
         * ["./file1.js", "./file2.js","./file3.js",...]
         * 
         */

   if(typeof outPutDir=="string"){

     dir=outPutDir;


   }else{

    dir=__dirname;

   }
    
    
    

    function files(){

        for(let file of target){

            if(typeof file=="string" && isAValidFile(file)){
            
                compile(file,setting);
            
            }else{

                throw new Error(`
                
                Ops, "${file}" is not a valid javascript file.

                It must be a string and must have the ".js" extension.
                
                `)

            }

        }


    }

    files();


    }


 }

 function compile(file,sett){

      const fileDir=path.dirname(file)
      

        const exist=fs.existsSync(file);

        if(exist){

            if(dir){


                try{

                    fs.readdirSync(sett.outPutDir);

                }catch(e){

                    throw new Error(`
                    
                    The outPutDir: "${sett.outPutDir}" does not exist.
                    
                    `)

                }

            }

             let content="";
            const importStatement=/import(:?\s*){.*}(:?\s*)from(:?\s*)(:? ".*"|'.*'|`.*`)(:?\s*);*/g;

            content+=fs.readFileSync(file);

            if(!importStatement.test(content)){

                throw new Error(`
                
       The parser could not find an import statement in ${file} file.
                
                `)

            }

            
            content=content.replace(importStatement,"");
   
            
            console.log(content);

            if(sett.comment){
          content=content.addToStart(`/**
 * 
 * The original file is in:${fileDir.removeSpaces().trim().length==0 ?  __dirname : fileDir }/${file}
 *   
 */

          
          `.trim())

            }

            file=file.replace(".js","");
            file=path.basename(file);
            fs.writeFileSync(`${sett.outPutDir ? dir : "."}/${file}.${sett.ext ? sett.ext : "browser"}.js`, content);
            
            

        }else{

            throw new Error(`
            
            The Parser could not find the "${file}" file.
            
            `)

        }

      

 }

 parseConfig();

 console.log(`
 
 Done, check the files in: ${dir} directory.
 
 `)

 
 
