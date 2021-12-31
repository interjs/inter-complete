/**
 * 
 * 
 * Created by Denis Power.
 * Support for Inter v1.2+ and Interfy v2.1+ 
 * 
 */


 interface ThisInInterFor extends ArrayConstructor{


    addValues(arr:Array<any>, index?:number):void;
    otherArray:Array<any>
      

 }

 type thisInAjaxRequestHandler={

    readonly status:number;
    readonly statusText:string;
    readonly headers:string;
    isObj():unknown;

 }


 declare var simulate:{

    typing:(obj:{
        // The target's id value.
        in:string,
        setting:[{
            text:string | number,
            speed:number
        }]
        // This function will be executed as soon as the sumalation ends.
        done?():any,

    })=>void,

    cleaning:(obj:{
        in:string,
        speed:number,
        done?():any

    })=>void

 }

 declare var data:{

    query:(obj:{
        in:Array<any>
        setting:{
            applyTo:[],
            query:string,
            value:string
        }
    })=>void

 }

 declare var Inter:{

    for(obj:{
        in:string,
        data:Array<any>,
        react?:string,
        do(this:ThisInInterFor,listItem, index):HTMLElement,
    }),

    renderIf(obj:{
        in:string;
        watch:Object;
        conditions:Array<{
            index?:number,
            replace?:boolean,
            render(this:{
                index:number,
                replace:boolean
            }), 
        }>

    })

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
    for?:string;
    id?:string;
    class?:string;
    disabled?;
    download?;
    alt?:string,
    start?:number;
    style?:string;
    placeholder?:string;
    maxLength?:number;
    minLength?:number;
     title?:string;
     src?:string;
     rel?:string;
     slot?:string,
     max?:number,
     min?:number;
     spellcheck:boolean;
     "aria-selected"?;
     "aria-setSize"?;
     "aria-sort"?;
     tabindex:number;
     translate?:string;
     role;
     required;
     contenteditable:true | false



 };

 interface els<T,E,S>{

    tag:T, 
    text?:string | number
    events?:E,
    attrs?:commonHTMLAttrs,
    styles?:S,
    renderList?:{
        each:Array<any>,
        do(this:ThisInInterFor, listItem?, itemIndex?):unknown,
    },
    children?:Array<els<T,E,S>>

}

type events={

    [ev in keyof GlobalEventHandlers]?:GlobalEventHandlers[ev];

}

type tags=keyof HTMLElementTagNameMap

type css={

    [stl in keyof CSSStyleDeclaration]?:CSSStyleDeclaration[stl];

}

type htmlEls={

elements: Array<els<tags,events,css>>

}

type AR_props={
    in:string,
    data:Object,
    react?:string,
    private?:boolean

};

 declare function template(obj:htmlEls)

 declare function  toHTML(obj:{
    in:string,
    data:Object,
    react?:unknown,
    handleValue?:Object,
    private?:boolean

})

declare function toATTR(obj:AR_props)

declare function renderContainer(obj:AR_props);

declare function ROUTER(obj:{

    routes:Object;

}); 
 
declare var url:{

    setPath(pathName:string),
    useHash(pathName:string)

};

declare var backend:{

    request(obj:{
        type:string;
        path:string;
        timeout?:number;
        body?:unknown;
        withCridentials?:boolean;
        events?:{

            onprogress(percentage):unknown,
            ontimeout():unknown;
            onabort():unknown;

        },

        headers?:Object;

    }):{

        okay(okayHandler:(this:thisInAjaxRequestHandler, result)=>unknown):unknown;
        error(errorHandler:(this:thisInAjaxRequestHandler, result)=>unknown):unknown;
        response(
            okayHandler:(this:thisInAjaxRequestHandler, result)=>unknown,
            errorHandler:(this:thisInAjaxRequestHandler, result)=>unknown,
        )


    }

}


