var recipes=new Object();

function updateObjectWithKeyAndValue(recipes,key,value){
 return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return object['key'].value;
}