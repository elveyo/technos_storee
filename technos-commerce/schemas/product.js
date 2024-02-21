export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "prize",
      type: "number",
      title: "Prize",
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name:"category",
      title:"category",
      type:"string",
      value:"Pc",
      options:{
        list:[
          {title:"Pc", value:"pc"},
          {title:"Headphones", value:"headphones"},
         {title:"Mouse", value:"mouse"},
          {title:"Keyboard", value:"keyboard"},
          {title:"Monitor", value:"monitor"},



        ]
      }
    }
  ],
};
