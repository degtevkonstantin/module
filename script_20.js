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

const urlInfoByObject = (url) => {
  url = new URL (url)
  arrayChilds = url.pathname.split('/');
  arrayChilds.shift()
  child = {
    child: {
      path: arrayChilds[0],
      child: arrayChilds[1]
      
    }
  }

  return{
    protocol: url.protocol,
    hostname: url.hostname,
    child
  }
}

console.log(urlInfoByObject(href))