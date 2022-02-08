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

function getFileName(file){

    return path.basename(file);


}

function getExt(file){

    return path.extname(file);

}

 function hasConfig(){

    const bool=fs.existsSync("./config.json");
      
      
    return bool;

 }


 function isAValidFile(file){

    const pattern=/\.js/;

    return pattern.test(getExt(file));

 }

 function getConfig(){

     if(hasConfig()){

        const configContent=fs.readFileSync("./config.json");
        

        try {
        config=JSON.parse(configContent);

        }catch(e){

            

            throw new Error(`"${configContent}" is not a valid json format.
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
        subExt,
        inputDir


    }=config;
	
	if((outPutDir==void 0 || typeof outPutDir!=="string") || (inputDir==void 0 || typeof inputDir!=="string" )){
		
		
		throw new SyntaxError(`
		
		outPutDir and inputDir must not be undefined and must be of type string.
		
		`)
		
    }
    
    if(!(path.isAbsolute(outPutDir) && path.isAbsolute(inputDir))){

        throw new Error(`
        
        The path of outPutDir and inputDir must be only absolute.

        
        `)

    }

    const setting={
        comment:(comment!=void 0 && !comment) ? false : true,
        subExt:(typeof subExt=="string" && subExt.trim().length>0) ? subExt : null,
        outPutDir:inputDir,
        inputDir:inputDir,
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


    }else{

        throw new Error(`
        
        "target" must be an array like:

        {

            "target":["file1.js", "file2.js",...]

        }
        
        `)

    }


 }

 function compile(file,sett){


      file=`${sett.inputDir}${sett.inputDir.endsWith("/") ? "" : "/"}${file}`;
      const fileDir=path.dirname(file).replace(/\./,"")

      

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
   
            
            

            if(sett.comment){
                
            
                const loc=(`${fileDir.trim().length>0 ?  fileDir : __dirname }/${getFileName(file)}`)
          content=content.addToStart(`/**
 * 
 * You must use this code in the browser.
 * 
 * The original code is in : ${loc}
 *   
 * To remove this, set comment to false in config.json.
 *
 */

          
          `.trim())

            }

            file=getFileName(file);
            file=file.replace(/.js/,"");
            
            fs.writeFileSync(`${sett.outPutDir ? dir : "."}/${file}.${sett.subExt ? sett.subExt : "browser"}.js`, content);
            
            

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

 
 