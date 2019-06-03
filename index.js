var recipes= {};

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
=======
function updateObjectWithKeyAndValue(object,key,value){
 Object.assign({}, object,{key:[value]});
   return object;
}

>>>>>>> 6da29f8bbc5833b8957584bcd5110044caba143d
function destructivelyUpdateObjectWithKeyAndValue(object, key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key){
<<<<<<< HEAD
var obj={object: key};
var newObj=Object.assign({}, obj);
newObj;
delete newObj.key;
newObj;
return obj;
=======
>>>>>>> 6da29f8bbc5833b8957584bcd5110044caba143d

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}