/**
 * 
 * 
 * Created by Denis Power.
 * 
 * Mit lincensed by Interjs org.
 * https://github.com/interjs
 * 
 * v1.0.0
 * 2022
 * Support for Inter v1.2+ and Interfy v2+.
 * 
 */


 interface ThisInInterFor extends Array<unknown>{

    /**
     * 
     * Add a set of values to data array.
     * 
     * 
     */
    addValues(arr:Array<unknown>, index?:number):void;
    /**
     * 
     * Redefines the data array.
     * 
     * 
     */
    otherArray:Array<unknown>
      

 }

 type thisInAjaxRequestHandler={

    /**
     * 
     * Read only property, return the statusCode sent by the server.
     * 
     */
    readonly status:number;
    /**
     * 
     * Read only property, return the statusText(the meaning of the statusCode) sent by the server.
     * 
     */
    readonly statusText:string;
    /**
     * 
     * Read only property, return the header sent by the server.
     * 
     * 
     */
    readonly headers:string;
    /**
     * 
     * Used to check if the response sent by the server is an object(JSON), if it is, this
     * method will return true otherwise false will be returned.. 
     * 
     */
    isObj():boolean;

 }


 export declare var simulate:{
   /**
    * This method is used to simulate type writter.
    * 
    */
    typing:(obj:{
        /**
         * The value of the id attribute  of the target.
         * 
         */
        in:string,
        setting:[{
            /**
             * The text that will be written.
             * 
             */
            text:string,
            /**
             * 
             * The speed that the text will be written.
             * 
             */
            speed:number
        }]
        /**
         * The code inside this function will run as soon as the type writter simulation ends.
         * 
         */
        done?():any,

    })=>void,

    /**
     * 
     * This method is used to delete some informations in the interface like if someone is
     * doing clicking on backspace.
     * 
     */
    cleaning:(obj:{
        /**
         * The value of the id attribute  of the target.
         * 
         */
        in:string,
        /**
         * 
         *  This property indicates the speed that the text will be written.
         * 
         */
        speed:number,
        /**
         * The code inside this function will run as soon as the type writter simulation ends.
         * 
         */
        done?():any

    })=>void

 }

 export declare var data:{

    /**
     * Fussy search.
     * 
     */

    query:(obj:{
        /**
         * An array where the search will be based on.
         * 
         */
        in:Array<unknown>
        setting:{
           /**
         * An empty array that will be filled by the result of
         * the fussy search.
         * 
         */ 
            applyTo:[],
            /**
             * The value of this property must be the name of the property that the search will be based on.
             * 
             */
            query:string,
            /**
             * The search value.
             * 
             */
            value:string
        }
    })=>void

 }

 /**
  * 
  * Inter is an object that help us creating interfaces.
  * 
  */

 export declare var Inter:{

    

/**
 *
 * This method is used for reactive listing.
 *  
*/
    for(obj:{
/**
         * The value of the id attribute  of the target.
         * 
         */
        in:string,
        /**
         * The array where the listing will be based on.
         * 
         */
        data:Array<any>,
        /**
         * The global reactor of the list.
         * 
         * @deprecated
         * 
         */
        react?:string,
        /**
         * The function that will be executed for the number of the itens in the array.
         * 
         */
        do(this:ThisInInterFor,listItem:unknown, index:number):HTMLElement,
    }):void,

    /**
     * Used for conditional rendering.
     * 
     */

   renderIf(obj:{
       /**
         * The value of the id attribute  of the target.
         * 
         */
        in:string;
        /**
         * An object wich the condition will be based on.
         * 
         */
      watch:Object;
        /**
         * An array of objects.
         * 
         */
        conditions:Array<{
            /**
             * The index where the element will be rendered.
             * 
             */
            index?:number,
            /**
             * When setted to true, the current element at the index will be replaced with 
             * the element rendered conditionally.
             * 
             */
            replace?:boolean,
            render(this:{
                /**
             * The index where the element will be rendered.
             * 
             */
                index:number,
                /**
             * When setted to true, the current element at the index will be replaced with 
             * the element rendered conditionally.
             * 
             */
                replace:boolean
            }):void, 
        }>

    }):void

 }


 type inputType={
  text,
  password,
  number,
  datetime,
  checkbox,
  button,
  submit,
  color,
  month,
  url,
  tel,
  radio,
  range,
  search,
  image,
  file,
  hidden;
  resel,
  week,
  "datetime-local"

 }

 type commonHTMLAttrs={

    type?:keyof inputType;
    for?:string | void;
    id?:string | void;
    class?:string | void;
    disabled:"true" | void;
    download:"true" | void;
    alt?:string | void,
    start?:number | void;
    style?:string;
    placeholder?:string | void;
    maxLength?:number | void;
    minLength?:number | void;
     title?:string | void;
     src?:string |void;
     rel?:string | void;
     slot?:string | void,
     max?:number | void,
     min?:number | void;
     spellcheck?:"true" | "false" | void;
     "aria-selected"?;
     "aria-setSize"?;
     "aria-sort"?;
     tabindex?:number | void;
     translate?:string | void;
     role?;
     required?;
     contenteditable?:boolean;
     align?:"left" | "justify" | "right" | "char";
     poster?:string | void;
     autoplay?:boolean | void;
     controls?:boolean | void;
     lang?:string | void;
     dir?:"rtl" | "ltr" | "auto";
     sizes?:string | void;
     srcset?:string | void;
     preload?:string | void;
     contextmenu?:string | void;
     step?;
     pattern?:string | void;
     href?:string | void;
     form:string | void;




 };

 interface els<T,E,S>{
     /**
      * The tag's name.
      * 
      */
    tag:T, 
    /**
     * The tag's text, if it has children the text will be ignored.
     * 
     */
    text?:string | number,
    events?:E,
    /**
     * The attributes for the element.
     * 
     */
    attrs?:commonHTMLAttrs,
    /**
     * The styles that will applied to the element.
     */
    styles?:S,
    /**
     * The element's children.
     * 
     */
    children?:Array<els<T,E,S>>
    /**
     * 
     * The methods of this object will be invoked
     * as soon as the element is created.
     * 
     */
    handlers?:Object

}

type events={

    [domevent in keyof GlobalEventHandlers]:(this:HTMLElement, event:MouseEvent)=>unknown;

}

type tags=keyof HTMLElementTagNameMap

type css={

    [stl in keyof CSSStyleDeclaration]?:CSSStyleDeclaration[stl];

}

type htmlEls={
/**
 * An array of objects.
 * 
 */
elements: Array<els<tags,events,css>>

}

type AR_props={
    /**
         * The value of the id attribute  of the target.
         * 
         */
    in:string,
    /**
     * The properties' names of this object will be the names of the references.
     * 
     */
    data:Object,
    /**
     * Global reactor.
     * 
     */
    react?:string,
    /**
     * When setted to true, the function will return the reactor.
     * 
     */
    private?:boolean

};

/**
 * 
 * Generates HTML elements.
 * 
 */
 export declare function template(obj:htmlEls):HTMLElement;

 /**
  * 
  * Used to parse references.
  * 
  */

 export declare function  toHTML(obj:{
    /**
         * The value of the id attribute  of the target.
         * 
         */
    in:string,
    /**
     * The properties names of this object will be the names of the references.
     * 
     */
    data:Object,
      /**
     * Global reactor.
     * 
     */
    react?:string,
    handleValue?:Object,
    /**
     * When setted to true, the function will return the reactor.
     * 
     */
    private?:boolean

}): void | Object;

/**
 * Attribute manager.
 * 
 */

export declare function toATTR(obj:AR_props): void | Object;


/**
 * 
 * Container rendering.
 * 
 */

export declare function renderContainer(obj:AR_props): void | Object;

/**
 * 
 * Used to create Inter's router.
 * 
 */

export declare function ROUTER(obj:{


    routes:Object;

}):void; 

/**
 * 
 * Used to display a loading screen.
 * 
 */

export declare function  whileLoading(obj:htmlEls):void;


/**
 * 
 * Used to check if the current browser supports Inter, if it supports true will
 * be returned otherwise false will be returned.
 * 
 */
export declare function supportInter():boolean;
 

export declare var app:{

    /**
     * Read only property, return the  Inter's version installed.
     * 
     */

    version:string;

    /**
     * Used to set the status of your app, is it in production or under development?
     * By default the value of this property is development.
     * 
     */

    status: "production" | "development";
    

}



export declare var url:{
    /**
     * Used to change the url.
     * 
     */
    setPath(pathName:string):void;

    /**
     *
     * Used to change the url, the url will use hash. 
     *
     */

    useHash(pathName:string):void;

};


type AjaxResult=string | Object | Blob;

/**
 * Used for ajax request.
 * 
 */

export declare var backend:{
    request(obj:{
        /**
         * The request method.
         * 
         */
        type: "connect" |"delete" | "get" | "head" | "options" |"post" | "put"  | "push" | "patch" | "trace";
        /**
         * The request link.
         */
        path:string;
        timeout?:number;
        /**
         * The request body.
         * 
         */
        body?:JSON | string | Blob;
        withCridentials?:boolean;
        events?:{


            /**
             * Fired while the request is being made.
             * 
             */
            onprogress(this:void, percentage:number):void,
            /**
             * 
             * Fired when the request timeout
             * 
             */
            ontimeout(this:void):void;
            /**
             * 
             * Fired when the request is aborted.
             * 
             */
            onabort(this:void):void;

        },

        /**
         * 
         * The request headers.
         * 
         */
        headers?:Object;

    }):{

        /**
         * The argument of this function will be fired if the connection succeeds.
         * 
         */
        okay(okayHandler:(this:thisInAjaxRequestHandler, result:AjaxResult)=>unknown):void;
        /**
         * 
         * The argument of this function will be fired if the connection fails.
         * 
         */
        error(errorHandler:(this:thisInAjaxRequestHandler, result: AjaxResult)=>unknown):void;
        /**
         * 
         * The first argument of this function is the okay handler and the second is the error handler.
         * 
         */
        response(
            okayHandler:(this:thisInAjaxRequestHandler, result:AjaxResult)=>unknown,
            errorHandler:(this:thisInAjaxRequestHandler, result:AjaxResult)=>unknown,
        ):void;


    }

}




// Overwritting the build-in Event interface.

interface Event{


    /**
     * 
     * Used to listen to a costum event.
     * 
     */
    listen(eventName:string, eventHandler:(eventInfo?:unknown)=>unknown):boolean;

    /**
     * 
     * Used to fire a costum event.
     * 
     */
    fire(eventName:string, eventInfo?:unknown):boolean;
    /**
     * 
     * Used to protect a costum event.
     * 
     */
    protectListener(eventName:unknown):boolean;
    /**
     * 
     * Used to remove a costum event(if it was not protected.)
     * 
     */
    removeListener(eventName:unknown):boolean;
    /**
     * Used to check if a costum event has listener, if it has return true otherwise false
     * is returned.
     * 
     */
    hasListener(eventName:unknown):boolean


}

/**
 * 
 * Costum event
 * 
 */
export declare var event:Event;

export declare var form:{

    each(obj:{
        in:string,
        do(actualInputEl:HTMLInputElement | HTMLTextAreaElement, index:number):unknown
    }):void;

}

export declare  var storage:{

    set(infoName:string, info:unknown):void;
    get(infoName:string, handler:(info?)=>unknown):void;
    has(infoName:string):boolean
    delete(infoName:string):void;
    protect(infoName:string):void;

}


export declare var input:{

    
    setState(state:unknown, IN:string):void;
    resetState(state:unknown, IN:string):void;
    original():void;
    constroyState(state:unknown):void;
    deleteState(state:unknown):boolean;
    destroyAll():boolean;
    send(callBack:(virtualInput:HTMLInputElement | HTMLTextAreaElement)=>unknown):unknown;

}

export declare var interface:{

    previous(el:HTMLElement, callBack:(els:Array<HTMLElement>)=>unknown):void;
    next(el:HTMLElement, callBack:(els:Array<HTMLElement>)=>unknown):void

}

export declare var validate:{

    /**
     * Used to check if @arg 
     * is an email, if it's true is returned otherwise
     * false is returned.
     * 
     */
    email(arg:string):boolean,

   /**
    * USed to check if @arg
    * is an url, if it's true is returned otherwise
    * false is returned.
    */
    url(arg:string):boolean

}


// Interfy Api.


interface instanceMethods{

    /**
     * Used to register routes.
     * 
     */
    route(routeName:string, routeHandler:(o:{
        /**
         * An object whose the properties are the names of the query string parameters.
         * 
         */
      readonly param:Object;
        /**
         * An object whose the properties are the names of the variables.
         * 
         */
        readonly var:Object

    })=>unknown):void;
    /**
     * 
     * Used to start(initialize) the router.
     * 
     */
    start(handler?:(url?:string)=>unknown):void;
    /**
     * Used to change the url.
     * 
     */
    setPath(pathName:string):void;
    /**
     * Used to change the url, the url will use hash.
     * 
     */
    useHash(pathName:string):void;
    /**
     * Read only property, return the Interfy's version installed.
     * 
     */

 /**
   * Used to create the router.
   * 
   * This autocomplete only supports Interfy v2.1+ and
   * the createRouter() instance method was removed in v2.0.0
   * 
   * @deprecated
   * 
   */
  createRouter(call:(req:{
    readonly url:string,
    is(path:string):boolean,
    getVar(path:string):Object,
})=>void):void;


    readonly version:string;


}

interface INTERFY extends Function{
 new():instanceMethods;
 

 /**
  * WARNING: Call Interfy with the new keyword
  * 
  */ 
 ():void;
 /**
  * WARNING: Do not change Interfy prototype.
  * 
  */
 readonly prototype:instanceMethods;
 /**
  * 
  * 
  * 
  */

 

}

/**
 * 
 * Interfy constructor.
 * 
 */

export declare var Interfy:INTERFY;

 