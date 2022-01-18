// create array of json object edit,delete
let text=[
    {"firstName":"John", "lastName":"due"},
    {"firstName":"Anna", "lastName":"basent"},
    {"firstName":"Peter", "lastName":"son"}
  ]
  text.splice(text[1],1);//remove first object
  text.splice(text[1],1,{"first":"shubha","last":"lokesh"});//update first object
  console.log(text);

















