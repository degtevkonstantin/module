// https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:

// {
//  protocol: “http”, 
//  hostname: “www.google.com”,
//  child: {
//   path: “doodles”
//   child: {
//    child: {
//   }
//  }
// }


const href = 'https://www.google.com/doodles/rubiks-cube'

const urlInfo = (url) =>{
  url = new URL (url)
  arrayChilds = url.pathname.split('/');
  arrayChilds.shift()
  childObject = {
    child: {
      path: arrayChilds[0],
      child: {
        path: arrayChilds[1]
      }
    }
  }

  return{
    protocol: url.protocol,
    hostname: url.hostname,
    childObject
  }
}

console.log(urlInfo(href))