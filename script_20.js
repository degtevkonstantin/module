// https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:

// {
//  protocol: 'http', 
//  hostname: 'www.google.com',
//  child: {
//   path: "doodles"
//   child: {
//     "rubiks-cube"
//   }
//  }
// }


const href = 'https://www.google.com/doodles/rubiks-cube/'

const urlInfoByObject = (url) => {
  url = new URL(url);
  const arrayChilds = url.pathname.split('/');
  const resultArrayChilds = [];

  for (element of arrayChilds) {
    if (element !== '') {
      resultArrayChilds.push(element)
    }
  }

  let child = {};
  let counter = 0;
  const counter1 = resultArrayChilds.length;

  const recurs = (obj, array) => {
    if (obj.path === undefined && counter < counter1) {
      obj.path = array[counter++];
      recurs(obj, resultArrayChilds);
    } else if (obj.child === undefined && counter < counter1) {
      obj.child = {};
      recurs(obj.child, resultArrayChilds);
    }
    return obj;
  }

  child = recurs(child, resultArrayChilds);

  return {
    protocol: url.protocol,
    hostname: url.hostname,
    child,
  };
};

console.log(urlInfoByObject(href));