



******************************************

Question 1

Math.__proto__.log100 = (number) => {
	return Math.log(number) / Math.log(100);
}
Math.log100(10);


******************************************

Question 2

var hobbies = {
  "John" : ["Piano", "Puzzles", "Yoga"],
  "Adam" : ["Drama", "Fashion", "Pets"],
  "Mary" : ["Magic", "Pets", "Reading"]
}

const findHobbyists = (obj, hobby) => {
  const keys = Object.keys(obj);
  const output = {}
  for (let i = 0; i < keys.length; i++){
    obj[`${keys[i]}`].map(items =>{
      if(items === hobby){
        output[`${keys[i]}`] = obj[`${keys[i]}`];
      }
    });
  }
  return output;
}

findHobbyists(hobbies,"Yoga");


******************************************

Question 3

const vectors = [[1,1,1],[2,2,2],[3,3,3]];
function findShortest(vector){
  let low = 0;
  let index = []
  for(let i = 0; i < vector.length; i++){
    vector[i].map(items => {low = low + Math.pow(items, 2)});
    index.push(low);
    low = 0;
  }
  let i = index.indexOf(Math.min(...index));
  return vector[i];
}
findShortest(vectors);

******************************************

Question 4

const validate = (username) => {
  if((username.length >= 6 && username.length <= 16) && ((/^[^a-zA-Z]*[a-zA-Z0-9]*/.test(username)) && (!/\s/.test(username)) && (username[username.length -1] !== "-" && username[0] !== "-"))){
    return true;
  }
  return false;
}
validate("Mike Standish")

