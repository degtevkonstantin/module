// https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:

// {
//  protocol: “http”, 
//  hostname: “www.google.com”,
//  child: {
//   path: “doodles”
//   child: {
//     rubiks-cube
//   }
//  }
// }


const href = 'https://www.google.com/doodles/rubiks-cube/'

const urlInfoByObject = (url) => {
  url = new URL(url);
  arrayChilds = url.pathname.split('/');
  arrayChilds.shift()
  const child = {};
  for (element of arrayChilds) {
    if (child.path == undefined) {
      child.path = element
    } else if (child.child == undefined) {
      child.child = {
        child: element
      };
    }; 
  };

  return {
    protocol: url.protocol,
    hostname: url.hostname,
    child
  };
}
console.log(urlInfoByObject(href));